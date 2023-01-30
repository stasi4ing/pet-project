const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'];
const arr1 = ['n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let word1 = [];
let j;
let button = document.querySelector('button');
let input = document.querySelector('input');
let text = document.querySelector('#text');

function translatePhrase(word) {
    for (let i of word) {
        if (arr.includes(i)) {
            j = arr.indexOf(i);
            word1.push(arr1[j]);
        }
        else if (arr1.includes(i)) {
            j = arr1.indexOf(i);
            word1.push(arr[j]);
        }
        else if (!arr.includes(i) & !arr1.includes(i)) {
            word1.push(i);
        }
    }
    text.textContent = word1.join('');
}

button.addEventListener('click', () => {
    translatePhrase(input.value);
    input.value = '';
});