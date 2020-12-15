const burger = document.querySelector(".burger");
const sideDrawer = document.querySelector(".side-drawer");
const special = document.querySelectorAll(".special");

let count = 0;
burger.addEventListener("click", change);
function change() {
  let line1 = document.querySelector(".line_1");
  let line2 = document.querySelector(".line_2");
  let line3 = document.querySelector(".line_3");
  sideDrawer.classList.toggle("toggle");
  for (const specialItem of special) {
    specialItem.classList.toggle("hide");
  }
  if (count % 2 == 0) {
    line1.style.transform = "translate(6px,6px) rotateZ(45deg)";
    line3.style.transform = "translate(6px,-6px) rotateZ(-45deg)";
    line2.style.opacity = "0";
    count++;
  } else {
    line1.style.transform = "translate(0px,0px) rotateZ(0deg)";
    line3.style.transform = "translate(0px,0px) rotateZ(0deg)";
    line2.style.opacity = "1";
    count++;
  }
}
