var typed = new Typed("#pcodes", {
    strings: [
        "A YOUNG and TALANTED DEVELOPER",
        "Abraham Dominic Newton"
    ],
    typeSpeed: 80,
    backSpeed: 80,
    loop: false
})

const moveScreen = () => {
  document.getElementById('about').scrollIntoView({
    behavior: 'smooth'
  });
}

const ToHome = () => {
  document.getElementById('landing').scrollIntoView({
    behavior: 'smooth'
  });
}