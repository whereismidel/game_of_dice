/* Функція яка повертає дв випадкових числа в межах 1..6 */
function getDice(){
    let a = Math.floor(Math.random()*5+1);
    let b = Math.floor(Math.random()*5+1);
    return [a,b];
}
/* Функція яка заповнює кості необхідною кількістю крапок */
function set_points(border_dice, points) {
    for(var i =1; i<=points; i++){
        // Вставляє html як код розмітки, beforeend - в кінець елементу
        border_dice.insertAdjacentHTML('beforeend',`<li class="point"></li>`)
    }
}

// Виклик функції 
list = getDice();

/* Знаходження тегу гравця */
let player1 = document.getElementById("player1");
/* Створення нового блоку з каркасом кості */
let border_dice1 = document.createElement("ul");
/* Надання блокові класу відповідно до кількості крапок */
border_dice1.className = `border_dice p`+list[0];
/* Добавлення рамки в тіло сайту */
player1.append(border_dice1);
/* Встановлення на кості відповідної кількості крапок */
set_points(border_dice1,list[0]);

let player2 = document.getElementById("player2");
let border_dice2 = document.createElement("ul");
border_dice2.className = `border_dice p`+list[1];
player2.append(border_dice2);
set_points(border_dice2,list[1]);

/* Отримання заголовку з написом про переможця */
let winner = document.getElementById("winner-text");

/* Визначення який текст вивести відповідно до значень */
if (list[0]>list[1]){
    winner.innerText = "ПЕРЕМІГ ГРАВЕЦЬ №1";
} else if (list[0]<list[1]){
    winner.innerText = "ПЕРЕМІГ ГРАВЕЦЬ №2";
} else {
    winner.innerText = "НІЧИЯ";
}