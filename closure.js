// function get(){
//     return () => {
//         return "hi"
//     }
// }
// console.log(get()());

// function get() {
//   let cnt = 0;
//   return () => {
//     return cnt++;
//   };
// }
// let str = get();
// console.log(str());
// console.log(str());
// console.log(str());
// console.log(str());
// console.log(str());
// console.log(str());
// console.log(str());
// console.log(str());
// console.log(str());
// console.log(str());
// console.log(str());

// function get(){
//     let cnt  = 0
//     return () => {
//         return cnt++
//     }
// }
// const str = get()
// console.log(str());
// console.log(str());
// console.log(str());

// ---------------- class task 1
// function get(n) {
//   if (n == 1) {
//     return 1
//   }

//   return n * get(n - 1);
// }
// console.log(get(5));
// console.log(get(4));
// console.log(get(2));

// -------------------- class task 2
// function get(n) {
//   if (n == 1) {
//     return 1;
//   }

//   return n + get(n - 1);
// }
// console.log(get(10));
// console.log(get(7));
// console.log(get(5));

// -------------------- class task 3
// function get(a, b) {
//   if (b == 0) {
//     return 1;
//   }
//   return a * get(a, b - 1);
// }
// console.log(get(2, 3));

// --------------------- class task 4
// function get(){
//     let cnt = 1;
//     return () => {
//         return cnt++
//     }
// }
// const str = get()
// console.log(str())
// console.log(str())
// console.log(str())

// --------------------------- class task 5
// function createAdder(n){
//     let cnt = 0;
//     return (b) =>{
//         return cnt=n+b
//     }
// }
// const adder = createAdder(5)
// console.log(adder(3));

function get(num) {
  return num * 2;
}
const result = get(3) + 4;
console.log(result);
