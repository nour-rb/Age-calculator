// select the count button 
const button = document.getElementById("btn")

button.addEventListener("click", () => {
    console.log("button was clicked");
})

button.addEventListener("mouseenter", () => {
    button.style.background ="rgb(80, 79, 65)"
})

button.addEventListener("mouseleave",() => {    
    button.style.background = "white"
})

