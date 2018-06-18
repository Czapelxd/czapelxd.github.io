

function onOffSwitch(){
    if(container.classList.contains("switchOn")){
        container.classList.remove("switchOn");
        container.classList += " switchOff";
    }
    else{
        container.classList.remove("switchOff");
        container.classList += " switchOn";
    }
}
container.addEventListener("click", onOffSwitch, false);

function killSwitch() {
    var element = document.getElementById("disappear1");
    element.classList.toggle("disappear");
    var element = document.getElementById("disappear2");
    element.classList.toggle("disappear");
    var element = document.getElementById("disappear3");
    element.classList.toggle("disappear");
    var element = document.getElementById("disappear4");
    element.classList.toggle("disappear");

    var element = document.getElementById("disappear5");
    element.classList.toggle("disappear_0");
    var element = document.getElementById("disappear6");
    element.classList.toggle("disappear_0");
    var element = document.getElementById("disappear7");
    element.classList.toggle("disappear_0");
    var element = document.getElementById("disappear8");
    element.classList.toggle("disappear_0");
}


