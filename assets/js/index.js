document.querySelector(".menu-icon").addEventListener('click', () => {
    let menu = document.querySelector(".menu");
    menu.classList.toggle("menu-open");
})

window.addEventListener("scroll", (e) => {
    if (window.scrollY <5) {
        document.querySelector(".navbar-section").style.background= "none";
    } else {
        document.querySelector(".navbar-section").style.background= "#faf6f0";
    }
})

// active menu
document.querySelectorAll(".menu ul li a").forEach((item)=>{
    item.addEventListener("click",()=>{
        document.querySelectorAll(".menu ul li a").forEach((item)=>{
            item.classList.remove("active");
        })
        item.classList.add("active");
    })
});
