"use strict";

const btnContainer = document.querySelector(".btn-container");

const tabContainer = document.querySelectorAll(".tab");
btnContainer.addEventListener("click", (e) => {
  const click = e.target.dataset.tab;
  tabContainer.forEach((ele) => {
    ele.classList.add("hidden");
  });
  document.querySelector(`.content-${click}`).classList.remove("hidden");
});
