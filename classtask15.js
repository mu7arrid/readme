// task1 

// function Task6(num1,num2,num3){
//         sum1=num1*3600;
//         sum2=num2*60;
//         sum3=num3;
//         if(sum1>sum2 && sum1>sum3 ){
//             return num1
//         } if(sum2>sum3 && sum2>sum1 ){
//             return num2
//         }
//         if(sum3>sum2 && sum3>sum1 ){
//             return num3
//         }
//     }
//     console.log(Task6(1,59,3598))
//     console.log(Task6(2, 300, 15000))
//     console.log(Task6(15, 955, 59400))


// task 2
// function Task7(a){
//      let  b = a%10
//      let  c = Math.floor(a/100%10)
//      let  d = Math.floor(a/10%10)
//     if (b == c   d == c  d == b ){
//         return true
//     }
//     return false
// }
// console.log(Task7(212));
// console.log(Task7(897));
// console.log(Task7(811));

// task 3

// function Task8(a){
//     b = a/10;
//     c = a%10;
//     y = Math.floor(c*10+b);
//     if(a>y)
//     return true
//     else
//     return false
// }
// console.log(Task8(14));
// console.log(Task8(53));

// task 4

// function Task9(a){
//     let sum=0;
//     for(let i=1; i<=a; i++)
//     sum+=i;
//     console.log(sum);
// }
// Task9(4)
// Task9(13)
// Task9(600)

// task 5

// function TenTask(a,b,c){
//     if (a==b && b!=c && a!=c)
//     console.log("3");
//     else if (a!=b && b==c && a!=c)
//     console.log("1");
//     else if (a!=b && b!=c && a==c)
//     console.log("2");
// }
// TenTask(5,5,10)
// TenTask(897,1,1)
// TenTask(811,100,811)

// task 6
// function ElevenTask(a,b){
//     let cnt=0;
//     for (let i=a; i<=b; i++)
//       if(i % 2 ==0)
//       cnt+=i
//       console.log(cnt)
// }   
// ElevenTask(-5,-3)
// ElevenTask(-1,-1)
// ElevenTask(-18,-14)

  // task 7

// function TwelveTask(n,k){
//     let s=0;
//     for(i=1; i<=n; i++){
//         s=s+(i**k)
//     }
//     return s;
// }
// console.log(TwelveTask(5,3));
// console.log(TwelveTask(1,1));
// console.log(TwelveTask(4,3));

 //task 8

// function ThirteenTask(a){
//     max=-999999
//      for(i=a; i>0; i/=10)
//      if(i%10>max)
//      max = i%10
//      return Math.floor(max)
// }
// console.log(ThirteenTask(7132));
// console.log(ThirteenTask(897));
// console.log(ThirteenTask(811));


// task 9

// function fourteen(n){
//     let rev = ""
//     for(let i=n; i>0; i=Math.floor(i/10)){
//         rev += i%10
//     }
//     if(rev == n)return true
//     return false
// }
// console.log(palendrom(7227));
// console.log(palendrom(9939));
// console.log(palendrom(4444444444));



// -------------- task 11

// function prime(number) {
//   if (number <= 1) {
//     return false;
//   }
//   for (let i = 2; i <= Math.sqrt(number); i++) {
//     if (number % i === 0) {
//       return false;
//     }
//   }

//   return true;
// }
// console.log(prime(121));















// task 12
// function get(a){
//     let sum=1;
// for(let i=1; i<=a; i++){
//     sum*=i;
// }
// console.log(sum);
// }
// get(4);
// get(5);

   // task 13

//  function get(a){
//     let sum=0;
// for(let i=1; i<=a; i++){
//     sum+=i;
// }
// console.log(sum);
// }
// get(5);
// get(12);

// task 14

function get(a){
    
}