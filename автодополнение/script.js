let arr  = ['Belarus', 'Bulgaria', 'Brazil', 'Benin'];
let elem = document.querySelector('#elem');
let list = document.querySelector('#list');
let li;

function enter(arr) {
    for (let counties of arr) {
        if (counties.startsWith(elem.value)) {
            li = document.createElement('li');
            li.textContent = counties;
            list.appendChild(li);
        }
    }
}

elem.addEventListener('input', function() {

    list.textContent = '';

    elem.addEventListener('keyup', function() {
        
        list.textContent = '';
        enter(arr);
        if (elem.value == '') {
            list.textContent = '';
        }
    });  
});

list.addEventListener('click', function(e) {
    elem.value = e.target.textContent;
    list.textContent = '';
});