let search = document.querySelector("#search-btn"),
    searchForm = document.querySelector(".header .search-form");

search.onclick = () => {
    search.classList.toggle("fa-times");
    searchForm.classList.toggle("active");
    menuBtn.classList.remove("fa-times");
    navbar.classList.remove("active");
}

let menuBtn = document.querySelector("#menu-btn"),
    navbar = document.querySelector(".navbar");

menuBtn.onclick = () => {
    menuBtn.classList.toggle("fa-times");
    navbar.classList.toggle("active");
    search.classList.remove("fa-times");
    searchForm.classList.remove("active");
}

window.onscroll = () =>{
    search.classList.remove("fa-times");
    searchForm.classList.remove("active");
    menuBtn.classList.remove("fa-times");
    navbar.classList.remove("active");
}