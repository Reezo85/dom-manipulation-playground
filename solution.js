
// Task 1
const task1 = document.getElementById("task1");
task1.innerText = "Hello, DOM!";

// Task 2
const task2 = document.getElementById("task2");
task2.innerHTML = "<button>Submit</button>";

// Task 3
document.body.style.backgroundColor = "#232323";

// Task 4
const items = document.querySelectorAll(".item");
items.forEach(item => {
  item.style.border = "2px solid white";
});

// Task 5
const task5 = document.getElementById("task5");
task5.href = "https://www.springboard.com/";

// Task 6
document.getElementById("task6").value = ""; // Ensure input is empty on page load
document.getElementById("task6").value = "DOM Master";

// Task 7
const task7 = document.getElementById("task7");
task7.classList.add("new-class");

// Task 8
const task8 = document.getElementById("task8");
const newButton = document.createElement("button");
newButton.innerText = "Click Me";
task8.appendChild(newButton);

// Task 9
const task9 = document.getElementById("task9");
task9.remove();