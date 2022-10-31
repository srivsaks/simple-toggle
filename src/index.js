import "./styles.css";

const ball = document.querySelector(".ball");

const checkBox = document.querySelector(".toggle");

checkBox.addEventListener("click", (e) => {
  if (e.target.checked) {
    ball.style.transform = "translateX(2rem)";
  } else {
    ball.style.transform = "translateX(0rem)";
  }
});
