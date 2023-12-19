// -------------------- task  1

// function pallindrom(n){
//     let str = ""
//     for(let i = n; i > 0; i = Math.floor(i/10)){
//         str += i%10
//     }
//     if(str == n){
//         for (let i = 2; i <= Math.sqrt(str); i++) {
//             if (str % i === 0) {
//               return false;
//             }
//           }

//           return true;
//     }
//     else return "it is not pallindrom"
// }
// console.log(pallindrom(121));

//-------------------- task 2
// function isPow(n) {
//   return n && (n & (n - 1)) === 0;
// }
// console.log(isPow(16));

// function isPow(num) {
//   for (let i = 1; i <= num; i++) {
//     if (Math.pow(2, i) == num) {
//       return true;
//     }
//   }
//   return false;
// }
// console.log(isPow(16));

// --------------------- task 3
// function prime(a, b) {
//   let c = a + b;
//   for (let i = 2; i <= Math.sqrt(c); i++) {
//     if (c % i === 0) {
//       return false;
//     }
//   }

//   return true;
// }
// console.log(prime(2, 9));

// ------------------------------ task 4
// function get(num) {
//   let cnt = null;
//   let save = null
//   let str = ''
//   for (let i = num; i >= 0;i = i / 10) {
//     save = Math.floor(i)
//     cnt = i % 10;
//     str = cnt + save
//   }
//   return cnt > save
// }
// console.log(get(43));


// ------------------------------ task 5
// const fib = n => {
//   let prev = 0, next = 1;
//   for(let i = 0; i < n; i++){
//     next = prev + next;
//     prev = next - prev;
//   }
//   return prev;
// }
// console.log(fib(10))

// function fib(n){
//   let prev = 0, next = 1;
//   for(let i = 0; i<n; i++){
//     next = prev + next;
//     prev = next - prev
//   }
//   return prev
// }
// console.log(fib(10))





// ------------------------------ task 6
// function Discriminant(a, b, c) {
//   const discrim = b * b - 4 * a * c;
//   if (discrim < 0) {
//     return "решахо комплексниян";
//   } else {
//     const x1 = (-b + Math.sqrt(discrim)) / (2 * a);
//     const x2 = (-b - Math.sqrt(discrim)) / (2 * a);
//     return { x1, x2 };
//   }
// }
// console.log(Discriminant(1, -3, 2));






// ------------------------------ task 7
// function bolshemenshe(x){

//    if (x/10>x%10) return true
//    else return false
// }
// console.log(bolshemenshe(41))




// ------------------------------ task 8
// function isPrime(c){
//    for(let i=2; i<=Math.sqrt(c); i++){
//     if(c % i === 0) {
//       return false
//     }
//   }
//   return true
// }

// function isRange(a,b){
//   for(let i = a; i<=b; i++){
//     if(isPrime(i)){return true
//     }
//   }
//   return false
// }
// console.log(isRange(8,9))




// ------------------------------ task 9
// function numbersSquares(n) {
//   let total = 0;
//   for (let i = 1; i <= n; i++) {
//       total += i * i;
//   }
//   return total;
// }

// console.log(numbersSquares(2));
// console.log(numbersSquares(4));




// ------------------------------ task 10
// function get(a, b) {
//   let x = 1;
//   while (Math.pow(a, x) !== b) {
//       x++;
//   }
//   return x;
// }

// console.log(get(4, 1024));
// console.log(get(2, 1024));



// ------------------------------ task 11
// function gcd(a, b) {
//   if (b === 0) {
//     return a;
//   } else {
//     return gcd(b, a % b);
//   }
// }
// console.log(gcd(3, 5))



// ------------------------------ task 12
// function bolshemenshe(x){
//    if (x/10>x%10) return true
//    else return false
// }
// console.log(bolshemenshe(41))





// ------------------------------ task 13
// function factorial(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   }
//   return n * factorial(n - 1);
// }
// console.log(factorial(5));
// console.log(factorial(4));




// ------------------------------ task 14
// function sumOfNumbers(number) {
//   let sum = 0;
//   let numStr = number.toString();
//   for (let i = 0; i < numStr.length; i++) {
//     sum += parseInt(numStr[i]);
//   }
//   return sum;
// }

// console.log(sumOfNumbers(12345));
//

// ------------------------------ task 15
// function get(num) {
//   let cnt = (num ** 2).toString();
//   for (let i = 0; i < cnt.length - 1; i++) {
//     let sum = parseInt(cnt.snt(0, i + 1));
//     let sum1 = parseInt(cnt.snt(i + 1));
//     if (sum + sum1 === num && sum1 !== 0) {
//       return true;
//     }
//   }
//   return false;
// }
// console.log(get(297));
// console.log(get(4));
