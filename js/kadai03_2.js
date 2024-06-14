const naviWrap = document.querySelector("#navi-wrap");
const categoryNavi = document.querySelector("#category-navi");
const naviTop = naviWrap.offsetTop;

document.addEventListener("scroll", (event) =>{
    categoryNavi.style.top = document.documentElement.scrollTop + "px";
});