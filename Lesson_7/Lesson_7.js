const products = [
  {
    id: 1,
    name:'Ноутбук Samsung',
    price: 90000,
    image: 'https://img.mvideo.ru/Pdb/30014706b.jpg',
  },
  {
    id: 2,
    name:'Ноутбук HP',
    price: 110000,
    image: 'https://andpro.ru/upload/iblock/695/90f8b072_90df_11e8_80ea_001e67d1aaeb_90f8b073_90df_11e8_80ea_001e67d1aaeb.jpg',
  },
];

 var cart = [];

function buildCatalog() {
  var $catalog = document.querySelector('#catalog');
  
  for(var i = 0; i < products.length; i++) {
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
   if (event.target.tagName === 'BUTTON') {
    
     if (isExist(+event.target.dataset.id)) {
       var idx = findIdx(+event.target.dataset.id);
       cart[idx].quantity++;
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
     $total.textContent = 'Общая сумма покупки: ' + total;
     $cart.appendChild($total);
   }  else {
    $cart.textContent = 'Корзина пуста';
  }
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

function init() {
   buildCatalog();
   countCartTotal(cart);
  
   var $catalog = document.querySelector('#catalog');
   $catalog.addEventListener('click', handleBuyClick);
  
   var $cart = document.getElementById('cart');
   $cart.addEventListener('click', handleRemoveClick);
   }
window.addEventListener('load', init);
