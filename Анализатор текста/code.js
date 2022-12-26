let input = document.querySelector("#text");
let pWords = document.querySelector("#result");
let pSymbols = document.querySelector("#symbol");
let pSpace = document.querySelector("#withoutSpace");
let checkResult = document.querySelector("#checkResult");
let checkSymbol = document.querySelector("#checkSymbol");
let checkWithoutSpace = document.querySelector("#checkWithoutSpace");
let procent = document.querySelector("#procent");
let checkProcent = document.querySelector("#checkProcent");

this.addEventListener("click", function () {
  if (checkResult.checked == true) {
    pWords.classList.add("vision");
  } else if (checkResult.checked == false) {
    pWords.classList.remove("vision");
  }

  if (checkSymbol.checked == true) {
    pSymbols.classList.add("vision");
  } else if (checkSymbol.checked == false) {
    pSymbols.classList.remove("vision");
  }

  if (checkWithoutSpace.checked == true) {
    pSpace.classList.add("vision");
  } else if (checkWithoutSpace.checked == false) {
    pSpace.classList.remove("vision");
  }

  if (checkProcent.checked == true) {
    procent.classList.add("vision");
  } else if (checkProcent.checked == false) {
    procent.classList.remove("vision");
  }
});

function funcProcent(word, arr) {
  let sum = 0;
  for (let i of arr) {
    if (word == i) {
      sum += 1;
    }
  }
  let procentSum = (sum / arr.length) * 100;
  let ul = document.createElement("ul");
  procent.appendChild(ul);
  let li = document.createElement("li");
  li.textContent = word + " " + procentSum;
  ul.appendChild(li);
}

input.addEventListener("blur", function () {
  let num = input.value.split(" ");

  pWords.textContent = "Количество введенных слов: " + num.length;
  pSymbols.textContent = "Количество символов: " + input.value.length;
  pSpace.textContent =
    "Количество букв: " + (input.value.length - num.length + 1);

  for (let procentWord of input.value) {
    funcProcent(procentWord, input.value);
  }
});
