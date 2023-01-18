const buttons = document.querySelectorAll("button");
let notebox = document.querySelector('.notebox');

buttons.forEach(item => {
    item.addEventListener("click", changeNotebox)
})

function changeNotebox() {
    let octave = this.parentNode.parentNode.className.replace('octave-','');
    notebox.innerText = this.innerText + octave;
    notebox.style.marginLeft = "25%"
        
    noteArray = Array.from(buttons)
    for (let i = 0; i < noteArray.length; i++) {
        if (noteArray[i].innerText + noteArray[i].parentNode.parentElement.className.replace('octave-','') == notebox.innerText) {
            noteArray[i].classList.add("red")
        } else {
            noteArray[i].classList.remove("red")
        }
    }
}
