// Вам нужно написать реализацию функции padString.
// Функция принимает строку,
// число, которое является длинной строки, которую мы хотим получить в результате,
// символ, которым дополнится строка, 
//  если это будет необходимо и флаг, добавлять символы слева или справа(по-умолчанию)




function padString (inputValue, length, char, direction = 'right') {
  if (inputValue.length < length) {
    for (var i = inputValue.length; i < length; i++) {
      if (direction === 'left'){
        inputValue = char + inputValue;
    } else if (direction === 'right') {
        inputValue += char;
    }
    }
  }
  return inputValue;
}

console.log(padString('taras', 10, '@', 'left'));

