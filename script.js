

// --- Generation Ranndom Colors---

const startV = document.querySelector("#start");
const stopV = document.querySelector("#stop");
let intervalId;// We will use this variable multiple times in or outside scope isliye apko global scope m rakha hai..😀 Let and const have block scope so..


const randomColor = () => {
    const hex = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}
startV.addEventListener("click", () => {
    if (!intervalId){ //checking for intervalId is false (null or undefined)
        intervalId = setInterval(() => {
            console.log(randomColor())
            document.body.style.backgroundColor=randomColor();
            
        }, 1000)
        
    }

    // intervalId = setInterval(() => {
        //     console.log(randomColor())
        //     document.body.style.backgroundColor=randomColor();
        
        // }, 1000)
        
    })
    stopV.addEventListener("click", () => {
        clearTimeout(intervalId)
        intervalId=null// value of null is being removed for better code.
})
