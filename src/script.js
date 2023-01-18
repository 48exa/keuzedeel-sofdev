const buttons = document.querySelectorAll("button");
let notebox = document.querySelector('.notebox');

buttons.forEach(item => {
    item.addEventListener("click", changeNotebox)
})

function changeNotebox() {
    let octave = this.parentNode.parentNode.className.replace('octave-','');
    notebox.innerText = this.innerText + octave;
}
