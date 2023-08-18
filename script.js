function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString("<strong>I'M LOUAY HOUIMLI</strong>")
    .pauseFor(2500)
    .deleteAll()
    .typeString('A 17 YEARS OLD')
    .pauseFor(2500)
    .deleteAll()
    .typeString('<strong>Front End Developer</strong>')
    .pauseFor(2500)
    .start();