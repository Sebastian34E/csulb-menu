// Get current date
var today = new Date();
var day = today.getDate();
var month = today.getMonth() + 1; // Months are zero-based
var year = today.getFullYear();
var currentDate = month + '/' + day;

console.log(currentDate);
// Get cycle for the current date
var currentCycle = cycles[currentDate];


if (currentCycle) {
  // Get the menu for the current location and cycle
  var menu = eval('cyclemenu_' + currentCycle[currentLocation]);

  // Get the menu for the current day
  var currentMenu = menu[dayOfWeek];

  // Display the menu on the webpage
  document.getElementById('menu').textContent = currentMenu;
} else {
  // No menu available for the current date and location
  document.getElementById('menu').textContent = 'No menu available.';
}


// // Define the menu for each location
// var menu = {
//   Beachside: {
//     breakfast: "Pancakes and fresh fruits",
//     lunch: "Grilled fish with salad",
//     dinner: "BBQ chicken with roasted vegetables"
//   },
//   Parkside: {
//     breakfast: "Bagels with cream cheese",
//     lunch: "Sandwiches and chips",
//     dinner: "Pizza and garlic bread"
//   },
//   Hillside: {
//     breakfast: "Omelette with toast",
//     lunch: "Steak with mashed potatoes",
//     dinner: "Pasta with tomato sauce"
//   }
// };

// // Choose a location (you can change this)
// var locationChoice = "Beachside";

// Get the menu for the chosen location
var chosenMenu = menu[locationChoice];

// Create HTML elements to display the menu
var menuContainer = document.getElementById("menu-container");

var breakfastHeading = document.createElement("h2");
breakfastHeading.textContent = "Breakfast";
var breakfastItem = document.createElement("p");
breakfastItem.textContent = chosenMenu.breakfast;

var lunchHeading = document.createElement("h2");
lunchHeading.textContent = "Lunch";
var lunchItem = document.createElement("p");
lunchItem.textContent = chosenMenu.lunch;

var dinnerHeading = document.createElement("h2");
dinnerHeading.textContent = "Dinner";
var dinnerItem = document.createElement("p");
dinnerItem.textContent = chosenMenu.dinner;

// Append the elements to the menu container
menuContainer.appendChild(breakfastHeading);
menuContainer.appendChild(breakfastItem);
menuContainer.appendChild(lunchHeading);
menuContainer.appendChild(lunchItem);
menuContainer.appendChild(dinnerHeading);
menuContainer.appendChild(dinnerItem);

