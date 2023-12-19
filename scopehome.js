// fibonachi home task 3
// function fib(n) {
//     return n <= 1 ? n : fib(n - 1) + fib(n - 2);
//   }
// console.log(fib(5));

// fibonachi 2 variant
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
// console.log(get(7));

// home task 1 pallindrom
// function pallindrom(n) {
//   let str = "";
//   for (let i = n; i <= n.length; i++) {
//     str += n[i];
//   }
//   if(str==n){
//     return "true"
//   }
//   else{
//     return "false"
//   }
// }
// console.log(pallindrom(3424));

// home task 2
// function muodila(a,b){
//     return -b/a
// }
// console.log(muodila(4,5));

// isPow home task 3
// function isPow(n) {
//   return n && (n & (n - 1)) === 0;
// }
// console.log(isPow(16));

// home task 5
// function get(n) {
//     let str = [n];
//     while (n !== 1) {
//       if (n % 2 === 0) {
//         n = n / 2;
//       } else {
//         n = 3 * n + 1;
//       }
//       str.push(n);
//     }

//     return str.join(" ");
//   }
//   console.log(get(6));
