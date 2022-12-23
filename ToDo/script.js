let add = document.querySelector('#add');
let input = document.querySelector('input');
let task = document.querySelector('#task');
let clock = document.querySelector('#clock');

setInterval(function(){ //clock
    let date = new Date();
    let h = aroundDate(date.getHours());
    let m = aroundDate(date.getMinutes());
    let s = aroundDate(date.getSeconds());
    clock.textContent = h + ' : ' + m + ' : ' + s;
}, 1000);

function aroundDate(value) {
    if (Number(value) <= 9) {
        return '0' + value;
    }
    else {
        return value;
    }
}

function elementsCreate (value) {
    if (value == '') {
        return;
    }
    else {
        let div = document.createElement('div');
        let text = document.createElement('div');
        let check = document.createElement('button');
        let del = document.createElement('button');
        let edit = document.createElement('button');
        div.classList.add('elementsCreate');
        check.classList.add('check');
        del.classList.add('delete');
        edit.classList.add('edit');
        text.classList.add('text');
        edit.innerHTML = 'Edit';
        check.innerHTML = 'DONE';
        del.innerHTML = 'delete';
        text.textContent = input.value + '  ' + clock.textContent;
        input.value = '';
        task.appendChild(div);
        div.appendChild(text);
        div.appendChild(check);
        div.appendChild(del);
        div.appendChild(edit);

        del.addEventListener('click', function (){
            task.removeChild(div);
        });

        check.addEventListener('click', function (){
            text.classList.add('done');
        });

        edit.addEventListener('click', function (){
            let inputEdit = document.createElement('input');
            inputEdit.classList.add('inputEdit');
            div.appendChild(inputEdit);
            inputEdit.value = text.textContent;
            text.textContent = '';

            inputEdit.addEventListener('blur', function(){
                text.textContent = inputEdit.value + '  ' + clock.textContent;
                inputEdit.remove();  
            });

            /*inputEdit.addEventListener('keyup', function(е){
                e.preventDefault();
                if (e.keyCode == 13) {
                    text.textContent = inputEdit.value + '  ' + clock.textContent;
                    inputEdit.remove();
                  }
            });*/
            
        });
    }
}

add.addEventListener('click', function(){
    elementsCreate(input.value);
});

