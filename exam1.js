// -------------- exam 1
// function matchHouses(n) {
//   return n * 5 + 1;
// }
// console.log(matchHouses(1));
// console.log(matchHouses(4));
// console.log(matchHouses(86));

// ----------------- exam 2
// function rev(n) {
//   let reversed = 0;
//   while (n > 0) {
//     reversed = reversed * 10 + (n % 10);
//     n = Math.floor(n / 10);
//   }
//   return reversed;
// }
// console.log(rev(5121));
// console.log(rev(1));
// console.log(rev(1020));

// ------------------ exam 3
// function equal(a, b, c) {
//   if (a === b && b === c) {
//     return 3;
//   } else if (a === b || b === c || a === c) {
//     return 2;
//   } else {
//     return 0;
//   }
// }
// console.log(equal(3, 4, 3));
// console.log(equal(1, 1, 1));
// console.log(equal(1, 4, 3));

// ----------------------- exam 4
// function findLargestDigit(n) {
//   let str = 0;
//   while (n > 0) {
//     const str1 = n % 10;
//     if (str1 > str) {
//       str = str1;
//     }
//     n = Math.floor(n / 10);
//   }
//   return str;
// }
// console.log(findLargestDigit(87651));
// console.log(findLargestDigit(123));
// console.log(findLargestDigit(1));

// --------------------- exam 5
// function mean(n) {
//   let cnt = 0;
//   let cnt1 = 0;
//   while (n > 0) {
//     const sum = n % 10;
//     cnt += sum;
//     cnt1++;
//     n = Math.floor(n / 10);
//   }
//   return cnt / cnt1;
// }
// console.log(mean(42));
// console.log(mean(12345));
// console.log(mean(6));

// exam 7 fibanachi
// function get(n) {
//   let a = 1;
//   let b = 1;
//   for (let i = 3; i <= n; i++) {
//     let c = a + b;
//     a = b;
//     b = c;
//   }
//   return b;
// }
// console.log(get(3));
// console.log(get(7));
// console.log(get(77));

// ---------------------- exam 8
// function DoubleFactorial(n) {
//   let cnt = 1;
//   if (n % 2 == 0) {
//     for (let i = 1; i <= n; i++) {
//       if (i % 2 == 0) {
//         cnt *= i;
//       }
//     }
//   }
//   else if(n%2!==0){
//     for (let i = 1; i <= n; i++) {
//         if (i % 2 != 0) {
//           cnt *= i;
//         }
//       }
//   }
//   return cnt
// }
// console.log(DoubleFactorial(9));
// console.log(DoubleFactorial(3));
// console.log(DoubleFactorial(6));

// ------------------------------ exam 9
function is_Natural(n) {
  if (n > 0 && n / 0) {
    return false;
  } else if (n > 0) {
    return true;
  } else if (n < 0) {
    return false;
  }
}
console.log(is_Natural(10 / 0));
console.log(is_Natural(5));

// ------------------- exam 10
function LeapYear(n) {
  if (n % 4 == 0) {
    return true;
  }
  else {
    return false
  }
}
console.log(LeapYear(2016));
console.log(LeapYear(2023));
console.log(LeapYear(2024));
