let butt = document.querySelector('#btn');
let res = document.querySelector('#result');

let count = 0;
butt.addEventListener('click', function(){
    count +=1;
    res.innerHTML = 'Кол-во кликов:' + count;
})