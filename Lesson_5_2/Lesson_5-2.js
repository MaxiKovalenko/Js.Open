var basket = [{
    name: 'Ноутбук Samsung',
    price: 90000,
    quantity: 6, 
  },
  {
    name: 'Ноутбук HP',
    price: 110000,
    quantity: 5,
  },
];
var $basket = document.getElementById('basket');
function buildBasketPrice(basket) {
    var total = 0;
    var count = 0;
    for(var i = 0; i < basket.length; i++){
    total = total + basket[i].price * basket[i].quantity;
    count = count + basket[i].quantity;
    }
  var $read = document.createElement('read');
  if(total === 0) {
    $read.textContent = 'Корзина пуста';
  } else {
    $read.textContent = 'Общая сумма покупок: ' + total + 'рублей. Колличество единиц товара: ' + count + ' штук.';
  }
  $basket.appendChild($read);
}
buildBasketPrice(basket);
