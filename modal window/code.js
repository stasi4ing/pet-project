let btnContact = document.querySelector('button');
let shadow = document.querySelector('#shadow');
let modalWindow = document.querySelector('.modalWindow');

btnContact.addEventListener('click', function(){
    shadow.classList.remove('active');
});

shadow.addEventListener('click', function(e){
    if (e.target == shadow){
        shadow.classList.add('active');
    }
});