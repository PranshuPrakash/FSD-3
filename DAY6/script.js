let arr=[1,2,3,3,4,4,6,6,67,3212324];
// let new=arr.map((x)=>x*2);
// console.log(new);
let even=arr.filter(x=>x%2==0);
console.log(even);
let sum=arr.reduce((x,y)=>x+y,0);
console.log(sum);
let soe=arr.filter(x=>x%2==0).reduce((x,y)=>x+y,0);
console.log(soe);