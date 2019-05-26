const products = [
  {
    id: 1,
    name:'Ноутбук Samsung',
    price: 90000,
    image: 'https://cdn1.ozone.ru/multimedia/c500/1023907415.jpg',
  },
  {
    id: 2,
    name:'Ноутбук HP',
    price: 110000,
    image: 'https://items.s1.citilink.ru/1110249_v02_s.jpg',
  },
  
]

var cart = [];

function buildCatalog() {
  var $catalog = document.querySelector('#catalog');
  
  for(var i = 0; i< products.length; i++) {
    var $template = document.querySelector('#template').children[0].cloneNode(true);
    $template.querySelector('.title').textContent = products[i].name;
    $template.querySelector('.price').textContent = products[i].price;
    $template.querySelector('.picture').src = products[i].image;
    
     $template.querySelector('.buy').dataset.id = products[i].id;
     $template.querySelector('.buy').dataset.name = products[i].name;
     $template.querySelector('.buy').dataset.price = products[i].price;
     $template.querySelector('.buy').dataset.image = products[i].image;
     
     $catalog.appendChild($template);
  }
}


function isExist(id) {
  for(var i = 0; i < cart.length; i++) {
    if (cart[i].id === id) {
      return true;
    }
  }
  return false;
}


function findIdx(id) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].id === id) {
      return i;
    }
    
  }
}


function handleBuyClick(event) {
  if (event.target.dagName === 'BUTTON') {
    if (isExist(+event.target.dataset.id)) {
      var idx = findIdx(+event.target.dataset.id);
      $cart[idx].quantity++;
      
    } else {
      cart.push({
        id: +event.target.dataset.id,
        name: event.target.dataset.name,
        price: +event.target.dataset.price,
        image: event.target.dataset.image,
        quantity: 1,
      });
    }
    countCartTotal(cart);
  }
  
  if (event.target.tagName === 'imge') {
    var $overlay = document.querySelector('.overlay');
    $overlay.style.display = 'block';
    
    $overlay.querySelector('.preview').src = event.target.src;
  }
}

function countCartTotal(items) {
   var $cart = document.getElementById('cart');
   $cart.innerHTML = '';
   if (items.length) {
     var total = 0;
     for (var i = 0; i < items.length; i++) {
   var $item = document.createElement('div');
   var $remove = document.createElement('button');
   $remove.textContent = 'x';
   $remove.dataset.id = items[i].id;
   $remove.classList.add('remove');
   
   var $span = document.createElement('span');
   $span.textContent = items[i].name + ' (' + items[i].quantity + ')';
   
   $item.appendChild($span);
   $item.appendChild($remove);
   
   $cart.appendChild($item);
   
   total += items[i].quantity * items[i].price
     }
     var $total = document.createElement('div');
     $total.textContent = 'Общая сумма покупки ' + total;
     $cart.appendChild($total);
   }  else {
    $cart.textContent = 'Корзина пуста';
  }
}
 
function handleCloseClick() {
  var $overlay = document.querySelector('.overlay');
  $overlay.style.display = 'none';
}

function handleRemoveClick(event) {
  if (event.target.classList.contains('remove')) {
    var idx = findIdx(+event.target.dataset.id);
   
   if (cart[idx].quantity === 1) {
     if (confirm('Действительно ли Вы хотите удалить последний товар?')) {
       cart.splice(idx, 1);
     }
   } else {
     cart[idx].quantity--;
   }
    countCartTotal(cart); 
  }
  
}

function handleTabClick(event) {
  event.preventDefault();
  if (event.target.classList.contains('tab')) {
    var $contents = document.getElementsByClassName('content');
    for (var i = 0; i < $contents.length; i++) {
      $contents[i].classList.remove('active');
      
    }
    var id = event.target.getAttribute('href');
    document.querySelector(id).classList.add('active');
  }
}

function init() {
  buildCatalog();
  countCartTotal(cart);
  
  var $catalog = document.querySelector('#catalog');
  $catalog.addEventListener('click', handleBuyClick);
  
  var $close = document.querySelector('.close');
  $close.addEventListener('click', handleCloseClick);
  
  var $cart = document.getElementById('cart');
  $cart.addEventListener('click', handleRemoveClick);
 
  var $accordion = document.getElementById('accordion');
  $accordion.addEventListener('click', handleTabClick)
}
window.addEventListener('load', init);