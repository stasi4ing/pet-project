
let meetChickenCheck = document.querySelector('#meetChicken');
let meetPorkCheck = document.querySelector('#meetPork');
let cheeseCheck = document.querySelector('#cheese');
let tomatoCheck = document.querySelector('#tomato');
let cucumberCheck = document.querySelector('#cucumber');

let costMeetChicken = document.querySelector('#costMeetChicken');
let costMeetPork = document.querySelector('#costMeetPork');
let costCheese = document.querySelector('#costCheese');
let costTomato = document.querySelector('#costTomato');
let costCucumber = document.querySelector('#costCucumber');
let resultCost = document.querySelector('#resultCost');

tomatoCheck.addEventListener('input', function() {
    if (tomatoCheck.checked) {
        resultCost.textContent = Number(resultCost.textContent) + Number(costTomato.textContent);
    }
    else {
        resultCost.textContent = Number(resultCost.textContent) - Number(costTomato.textContent);
    }
});

cucumberCheck.addEventListener('input', function() {
    if (cucumberCheck.checked) {
        resultCost.textContent = Number(resultCost.textContent) + Number(costCucumber.textContent);
    }
    else {
        resultCost.textContent = Number(resultCost.textContent) - Number(costCucumber.textContent);
    }
});

cheeseCheck.addEventListener('input', function() {
    if (cheeseCheck.checked) {
        resultCost.textContent = Number(resultCost.textContent) + Number(costCheese.textContent);
    }
    else {
        resultCost.textContent = Number(resultCost.textContent) - Number(costCheese.textContent);
    }
});

meetPorkCheck.addEventListener('input', function() {
    if (meetPorkCheck.checked) {
        resultCost.textContent = Number(resultCost.textContent) + Number(costMeetPork.textContent);
    }
    else {
        resultCost.textContent = Number(resultCost.textContent) - Number(costMeetPork.textContent);
    }
});

meetChickenCheck.addEventListener('input', function() {
    if (meetChickenCheck.checked) {
        resultCost.textContent = Number(resultCost.textContent) + Number(costMeetChicken.textContent);
    }
    else {
        resultCost.textContent = Number(resultCost.textContent) - Number(costMeetChicken.textContent);
    }
});