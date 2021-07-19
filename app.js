
const board = document.getElementById('board');
const SQUARES_NUMBER = 902;
let blocks = '';

for (let i = 0; i < SQUARES_NUMBER; i++){
    blocks +=`<div class="square"></div>`;
}
board.insertAdjacentHTML('beforeend', blocks);

const hoverBlocks = board.querySelectorAll('div'); // получаем нужные нам дивы в блоке board

/**
 * Проходимся в цикле по каждому блоку в коллекции NodeList и назначаем события мыши при наведении mouseover, и, когда убираем мышку...
 */
hoverBlocks.forEach(block => {
    block.addEventListener('mouseover', function () {
        setColor(this);
    });
    block.addEventListener('mouseleave', function () {
        clearColor(this);
    });
});
/**
 * Функция добавляет нужный цвет 
 * @param {event} item 
 */
function setColor(item) {
    item.style.backgroundColor = getColor();
    item.style.boxShadow = `0 0 2px ${getColor()}, 0 0 10px ${getColor()}`;
}
/**
 * Функция возвращает прежний цвет, очищает предидущий
 * @param {event} item 
 */
function clearColor(item) {
    item.style.backgroundColor = '#1d1d1d';
     item.style.boxShadow =`0 0 2px #000`
}
/**
 * Функция возвращает случайный цвет
 * @returns  color
 */
 function getColor(){
    let red =(Math.random()*255).toFixed(0); // возвращает строку
    let green =(Math.random()*255).toFixed(0);
    let blue =(Math.random()*255).toFixed(0);
             
    return "rgb("+red+","+green+","+blue+")"; // здесь приводим к числу с помощью унарного оператора +
} 
