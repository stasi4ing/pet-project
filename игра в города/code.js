let input = document.querySelector('#city');
let city = document.querySelector('div');
let p = document.querySelector('p');
let count = 1;
let arr = [];
        
function checkMove() {
    if (count % 2 == 0) {
        p.textContent = "Ходит игрок 2";
    }
    else {
        p.textContent = "Ходит игрок 1";
    }
}

function checkWord(word) {
            
    if (arr.includes(word.toString())) {
        alert("Такой город уже есть");
        input.value = '';
    }
            
    if (arr.length >= 1) {
        let lastSymb = arr[arr.length - 1].slice(-1);
        let firstSymb = word[0].toLowerCase();

        if (lastSymb == 'ь') {
            lastSymb = arr[arr.length - 1].slice(-2, -1);
        }

        if (lastSymb != firstSymb) {
            alert('Первая буква не совпадает с последней предыдущего города или вы не учли ь');
            input.value = '';
        }

    }

    if (input.value != '') {
        arr.push(input.value);
        city.textContent = arr.join(', ');
        count++;
        input.value = '';
    }
    else {
        alert('Введите город');
    }
}

input.addEventListener('keypress', function keyPress(event){

    if (event.keyCode == 13) {         
        checkWord(input.value);
        checkMove();
    }
});