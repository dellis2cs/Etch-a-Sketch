let container = document.querySelector(".grids");
let sixteen = document.querySelector(".sixteen");
let confirmGrid = document.querySelector(".confirmGrid");
let gridInput = document.querySelector("#gridInput");
let info = document.querySelector(".info");
let greenColor = document.querySelector(".greenColor");
let redColor = document.querySelector(".redColor");
let blueColor = document.querySelector(".blueColor");
let blackColor = document.querySelector(".blackColor");
let color = "black";

greenColor.addEventListener("click", function () {
  color = "#6a9a1f";
});

redColor.addEventListener("click", function () {
  color = "#d43f3f";
});

blueColor.addEventListener("click", function () {
  color = "#00ace9";
});

blackColor.addEventListener("click", function () {
  color = "#000000";
});

function createGrid(grid_dim) {
  let cellSize = 800 / grid_dim;
  container.innerHTML = "";
  confirmGrid.textContent = "";
  for (let i = 0; i < grid_dim * grid_dim; i++) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("newDiv");
    newDiv.style.backgroundColor = "white";
    newDiv.style.width = `${cellSize}px`;
    newDiv.style.height = `${cellSize}px`;
    newDiv.style.textAlign = "center";

    newDiv.addEventListener("mouseover", function () {
      newDiv.style.backgroundColor = `${color}`;
    });

    container.appendChild(newDiv);
  }
}

sixteen.addEventListener("click", function () {
  let inputValue = gridInput.value;
  if (inputValue > 100 || inputValue == "") {
    info.textContent = "Number entered is greater than 100 or null";
    confirmGrid.textContent = "Please retry with a number less than 100";
  } else {
    createGrid(inputValue);
    confirmGrid.textContent = `Grid Of Size ${inputValue} Created Successfully`;
  }
});
