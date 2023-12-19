// ------------------ task 1
// function countFood(a, b, c, d) {
//     let cnt = a * 100 + b;
//     let cnt1 = c * 100 + d;

//     return Math.floor (cnt1 / cnt)

//   }
//   console.log(countFood(1, 70, 3, 80));

// ---------------------- task 2
// function triangle(a, b, c) {
//   if (a > 0 && b > 0 && c > 0) {
//     return a * a + " " + b * b + " " + c * c;
//   } else {
//     return a - a * 2 + " " + (b - b * 2) + " " + (c - c * 2);
//   }
// }
// console.log(triangle(3, 6, 9));
// console.log(triangle(3, -2, 8));
// console.log(triangle(-1, 2, 3));

// ------------------ task 3
// function nextEvenandPrev(n) {
//   let a = n + 2 - (n % 2);
//   let b = n - 2 + (n % 2);

//   return "next:" + a + " " + "prev:" + b;
// }
// console.log(nextEvenandPrev(3));

// ---------------------- task 4
// function subtractNum(n) {
//   if (n == 0) {
//     return 10;
//   }
//   else if (n % 2 != 0) {
//     return n + 1;
//   }
//   else if (n % 2 == 0) {
//     return n - 1;
//   }
// }
// console.log(subtractNum(3));
// console.log(subtractNum(0));
// console.log(subtractNum(10));

// ----------------------- task 5
// function leastCommonMultiple(x, y) {
//   let sum = 0;
//   for (let i = Math.max(x, y); i <= x * y; i++) {
//     if (i % x === 0 && i % y === 0) {
//       sum = i;
//       break;
//     }
//   }
//   return sum;
// }
// console.log(leastCommonMultiple(4, 6));
// console.log(leastCommonMultiple(3, 8));
// console.log(leastCommonMultiple(2, 6));

// ------------------- task 6
// function get(num) {
//   let sum = 0;
//   for (let i = 1; i <= num / 2; i++) {
//     if (num % i === 0) {
//       sum += i;
//     }
//   }
//   return sum === num;
// }
// console.log(get(28));

// -------------------- task 7
// function hasUniqueDigits(a) {
//   let str = 1;
//   for (let i = a; i > 0; Math.floor(i / 10)) {
//     str += i % 10;
//   }
//   return str
// }
// console.log(hasUniqueDigits(1234));

// ----------------- task 8
// function isPrime(adad) {
//   if (adad <= 1) {
//     return false;
//   }
//   for (let i = 2; i <= Math.sqrt(adad); i++) {
//     if (adad % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// function sumOfPrimesInRange(start, end) {
//   let cnt = 0;
//   for (let i = start; i <= end; i++) {
//     if (isPrime(i)) {
//       cnt += i;
//     }
//   }
//   return cnt;
// }
// console.log(sumOfPrimesInRange(10, 50));
// console.log(sumOfPrimesInRange(4, 20));
// console.log(sumOfPrimesInRange(52, 66));

// ---------------------------- task 9
// function collatzSequence(a) {
//   let cnt = 0;
//   while (a !== 1) {
//     if (a % 2 === 0) {
//       a = a / 2;
//     } else {
//       a = 3 * a + 1;
//     }
//     cnt++;
//   }
//   return cnt;
// }
// console.log(collatzSequence(13));
// console.log(collatzSequence(23));
// console.log(collatzSequence(5));

// --------------------------- task 10
// function reverseFactorialDigits(number) {
//   function factorial(n) {
//     if (n === 0 || n === 1) {
//       return 1;
//     } else {
//       return n * factorial(n - 1);
//     }
//   }

//   const fact = factorial(number);
//   const reversed = parseInt(fact.toString().split("").reverse().join(""));
//   return reversed;
// }

// console.log(reverseFactorialDigits(4));
// console.log(reverseFactorialDigits(5));
// console.log(reverseFactorialDigits(6));
