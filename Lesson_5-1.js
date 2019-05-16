var mapping = {
  'A1': '♖',
  'A8': '♜',
  'B1': '♘',
  'B8': '♞',
  'C1': '♗',
  'C8': '♝',
  'D1': '♕',
  'D8': '♛',
  'E1': '♔',
  'E8': '♚',
  'F1': '♗',
  'F8': '♝',
  'G1': '♘',
  'G8': '♞',
  'H1': '♖',
  'H8': '♜',
  'A2': '♙',
  'B2': '♙',
  'C2': '♙',
  'D2': '♙',
  'E2': '♙',
  'F2': '♙',
  'G2': '♙',
  'H2': '♙',
  'A7': '♟',
  'B7': '♟',
  'C7': '♟',
  'D7': '♟',
  'E7': '♟',
  'F7': '♟',
  'G7': '♟',
  'H7': '♟',
}

var $wrap = document.createElement('div');
$wrap.classList.add('wrap');

var $chessBoard = document.createElement('div');
$chessBoard.id = 'chessBoard';
$chessBoard.classList.add('chess-wrap');

 var $digits = document.createElement('ul');
 $digits.classList.add('vertical-right', 'border');

 var $letters = document.createElement('ul');
 $letters.classList.add('horisontal-top', 'border')

for(var i = 0; i < 8; i++) {
  var $row = document.createElement('div');
  $row.classList.add('row');

    var $liDigit = document.createElement('li');
    $liDigit.textContent = i + 1;
    $digits.appendChild($liDigit);

   var $liLetter = document.createElement('li');
   $liLetter.textContent = String.fromCharCode(65 + i);
   $letters.appendChild($liLetter);

  for(var j = 0; j < 8; j++) {
    var $cell = document.createElement('div');
    $cell.classList.add('box');
     var coord = String.fromCharCode(65 + j) + (8 - i);

     $cell.textContent = mapping[coord];
     $row.appendChild($cell);
  }

  $chessBoard.appendChild($row);
}

 var $digitsLeft = $digits.cloneNode(true);
 $digitsLeft.classList.remove('vertical-right');
 $digitsLeft.classList.add('vertical-left');

 var $lettersBottom = $letters.cloneNode(true);
 $lettersBottom.classList.remove('horisontal-top');
 $lettersBottom.classList.add('horisontal-bottom');

 $wrap.appendChild($digits);
 $wrap.appendChild($digitsLeft);
 $wrap.appendChild($letters);
 $wrap.appendChild($lettersBottom);
$wrap.appendChild($chessBoard);
document.body.appendChild($wrap);