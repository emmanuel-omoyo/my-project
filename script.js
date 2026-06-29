const display = document.getElementById("display");
const increaseBtn = document.getElementById("increase-btn");
const decreaseBtn = document.getElementById("decrease-btn");

let count = 0;

const addCount = () => {
  display.innerText = count++;
};

const subtractCount = () => {
  display.innerText = count--;
};

increaseBtn.addEventListener("click", addCount);

decreaseBtn.addEventListener("click", subtractCount);
