let state = {
    X: 0,
    Y: 0,
    target: null
}
document.getElementById("main").addEventListener("dblclick", event => {
    if (event.target && event.target.classList.contains("element")){
        if (event.target.getAttribute("value") == "on"){
            event.target.setAttribute("value", "off")
        }
        else{
            event.target.setAttribute("value", "on")
        }
    }
});
document.getElementById("main").addEventListener("mousedown", event => {
    if (event.target && event.target.classList.contains("element") && event.target.getAttribute("value") == "on") {
        state.target = event.target
        state.X = event.offsetX
        state.Y = event.offsetY
    }
});

document.getElementById("main").addEventListener("mouseup", e => { state.target = null });

document.getElementById("main").addEventListener("mousemove", e => {
    if (state.target) {
        state.target.style.left = (e.pageX - state.X) + "px";
        state.target.style.top = (e.pageY - state.Y) + "px";
    }
});