/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?




/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!





/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.






/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.




// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.





/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value


const costPerFullDay = 35; 
const costPerHalfDay = 20; 
let dayCounter = 0; 

const fullButton = document.getElementById("full");
const halfButton = document.getElementById("half");
const clearButton = document.getElementById("clear-button");
const calculatedCostElement = document.getElementById("calculated-cost");




const dayButtons = document.querySelectorAll(".day-selector li");

dayButtons.forEach(button => {
  button.addEventListener("click", function() {
   
    if (!button.classList.contains("clicked")) {
      button.classList.add("clicked"); 
      dayCounter++; 
    }
    calculateCost(); 
  });
});


clearButton.addEventListener("click", function() {
  dayButtons.forEach(button => button.classList.remove("clicked")); 
  dayCounter = 0; 
  calculatedCostElement.innerHTML = 0; 
});


fullButton.addEventListener("click", function() {
  costPerDay = costPerFullDay; 
  fullButton.classList.add("clicked"); 
  halfButton.classList.remove("clicked"); 
  calculateCost(); 
});

halfButton.addEventListener("click", function() {
  costPerDay = costPerHalfDay; 
  fullButton.classList.remove("clicked"); 
  halfButton.classList.add("clicked"); 
  calculateCost(); 
});


function calculateCost() {
  const totalCost = dayCounter * costPerDay;
  calculatedCostElement.innerHTML = `$${totalCost}`; 
}
