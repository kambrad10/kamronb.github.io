let personaLoad = document.querySelector('#assignment');

// if (personaLoad != null) {
//     alert('it exists')
// } else{
//     return;
// }



function style () {
    personaLoad.style.visibility = "visible";
    personaLoad.style.opacity = "1";
    personaLoad.style.transition = "opacity 1s ease-in"

}


window.onload = function(){
    style();
}
