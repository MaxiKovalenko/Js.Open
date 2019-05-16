// Задание 1
function numberToObject(num) {
    if(num < 0){
        throw new Error('Функция не работает с отрицательными числами');
        return;
    }
    var keys = ['units', 'tens', 'hundreds'];
    num = num + '';
    if(num.length > keys.length){
        throw new Error('Такие большие числа не поддерживаються');
        return;
    }
    var obj = {}
    for (var i = num.length - 1; i >= 0; i--){
        var key = keys[num.length - 1 - i];
        obj[key] = num[i];
    }
    return obj;
}
while(true) {
    var num = +prompt('Введите число');
    if(isNaN(num)){
        continue;
    }
    console.log(numberToObject(num));
    break;
}

// Задание 2
var basket = [{
    name: 'Ноутбук Samsung',
    price: 90000,
    quantity: 50,
  },
  {
    name: 'Ноутбук HP',
    price: 110000,
    quantity: 58,
  },
];

function countBasketPrice(basket) {
    var total = 0;
    for(var i = 0; i < basket.length; i++){
     total = total + basket[i].price * basket[i].quantity;
     }
return total;
}
