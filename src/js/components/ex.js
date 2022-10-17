console.log('maxgraph');

// Реализуйте функцию getNumberExplanation(), которая принимает на вход число и возвращает объяснение этого числа. Если для числа нет объяснения, то возвращается null:

const getNumberExplanation = (num) => {
  if (num === 666) {
    return 'devil number';
  } else if (num === 42) {
    return 'answer for everything';
  } else if (num === 7) {
    return 'prime number';
  } else {
    return null;
  }
}

console.log(getNumberExplanation(8));

//  with switch operator

const getNumberExplanation2 = (number) => {
  switch (number) {
    case 666:
      return 'devil number'
    break;
    case 42:
      return 'answer for everything'
    break;
    case 7:
      return 'prime number'
    break;
    default: null
  }
}


// Модифицируйте функцию printNumbers() так, чтобы она выводила числа в обратном порядке. Для этого нужно идти от верхней границы к нижней. То есть счётчик должен быть инициализирован максимальным значением, а в теле цикла его нужно уменьшать до нижней границы.

const printNumbers = (lastNumber) => {
  let i = lastNumber;

  while (i >= 0) {
    console.log(i);
    i -= 1;
  }
  console.log('finished!');
}

printNumbers(4);

const normalizeUrl = (url) => {
  if (!url.startsWith('https://')) {
    return `https://${url}`;
  } else {
    return url;
  }
};

normalizeUrl('yandex.ru');

// BEGIN (write your solution here)
const convertText1 = (str) => {
  const firstCharUpperCase = str.charAt(0).toUpperCase();
  if (str === '') {
    return '';
  } else if (firstCharUpperCase !== str[0]) {
    return reverse(str);
  } else {
    return str;
  }
};

// with ternary operator
const convertText2 = (str) => {
  const firstCharUpperCase = str.charAt(0).toUpperCase();

  return firstCharUpperCase !== str[0] ? reverse(str) : str;
};

console.log(convertText2);
// END
convertText1();
console.log(convertText1());

// Модифицируйте функцию printNumbers() так, чтобы она выводила числа в обратном порядке. Для этого нужно идти от верхней границы к нижней. То есть счётчик должен быть инициализирован максимальным значением, а в теле цикла его нужно уменьшать до нижней границы.


const printNumbers = (/** @type {number} */ initialNumber) => {
  // BEGIN (write your solution here)
  let i = initialNumber;

  while (i >= 1) {
    console.log(i);
    i -= 1;
  }
  console.log('finished!');
};

printNumbers(6);
