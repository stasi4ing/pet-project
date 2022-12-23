let input = document.querySelector("#city");
let city = document.querySelector("div");
let p = document.querySelector("p");
let arr = [];
let arrRobo = [];
let allCities = [
  "Спб",
  "Москва",
  "Анкара",
  "Рим",
  "Анапа",
  "Мехико",
  "Оттава",
  "Анбера",
  "Амстердам",
  "Мадрид",
  "Тверь",
  "Пермь",
];

function checkWord(word) {
  if (arr.length >= 1) {
    let firstLetter = word[0].toLowerCase();
    let lastWord = arr[arr.length - 1];
    let lastLetter = lastWord.slice(-1);

    if (lastLetter == "ь") {
      lastLetter = lastWord.slice(-2, -1);
    }

    if (firstLetter != lastLetter) {
      alert("Первая буква города не совпадает с последней предыдущего");
      input.value = "";
      return -1;
    }
  }

  if (!allCities.includes(word)) {
    alert("Компьютер такого города не знает");
    input.value = "";
    return -1;
  } else if (!arr.includes(word)) {
    arr.push(word);
    city.textContent = arr.join(", ");
    input.value = "";
    moveRobo();
  }
}

function moveRobo() {
  if (arr.some((r) => allCities.includes(r))) {
    let lastWord = arr[arr.length - 1];
    let lastLetter = lastWord.slice(-1);

    if (lastLetter == "ь") {
      lastLetter = lastWord.slice(-2, -1);
    }

    for (let i of allCities) {
      if (i.startsWith(lastLetter.toUpperCase())) {
        arrRobo.push(i);
      }
    }
  }
  let difference = arrRobo.filter((x) => !arr.includes(x));
  arr.push(difference[0]);
  arrRobo.length = 0;
  difference.length = 0;
  city.textContent = arr.join(", ");
  input.value = "";
}

input.addEventListener("keypress", function keyPress(event) {
  if (event.keyCode == 13) {
    checkWord(input.value);
  }
});
