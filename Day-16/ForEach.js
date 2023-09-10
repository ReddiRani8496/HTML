const numbers = [1,2,3,4,5];
// numbers.forEach(print);
// function print(item,index,arr){
//     console.log(item);
// }
// numbers.forEach((item,index,arr) =>{
//     console.log(item);
//     console.log(arr);
// });

let sum = 0;
numbers.forEach(item => {
    sum += item;
});
console.log(sum);