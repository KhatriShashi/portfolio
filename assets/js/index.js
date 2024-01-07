let menu = document.querySelector(".menu");
document.querySelector(".menu-icon").addEventListener('click', () => {
    menu.classList.toggle("menu-open");
})


window.addEventListener("scroll", (e) => {

    if (window.scrollY < 5) {
        document.querySelector(".navbar-section").style.background = "none";
    } else {
        document.querySelector(".navbar-section").style.background = "#faf6f0";
    }
})


let section = document.querySelectorAll('section')
let lists = document.querySelectorAll('.menu ul li a');
function activeLink() {
    lists.forEach((item) =>
        item.classList.remove('active'));
        this.classList.add('active');
        menu.classList.remove("menu-open");
}
lists.forEach((item) =>
    item.addEventListener('click', activeLink));