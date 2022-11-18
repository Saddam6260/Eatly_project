// navbar function 
const navbtn = document.querySelector('#nav-btn');
const menuWrap = document.querySelector(".menu-wrap");


navbtn.onclick = function (e) {
  menuWrap.classList.toggle("active");
}