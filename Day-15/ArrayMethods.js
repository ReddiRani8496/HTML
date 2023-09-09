let colors = ['pink','red','green'];
console.log(colors.length);
console.log(colors.toString());
console.log(colors.join('@'));
colors.pop();
console.log(colors);
colors.push('purple');
console.log(colors);
colors.shift();
console.log(colors);
colors.unshift('blue');
console.log(colors);
colors[0] = 'skyblue';
console.log(colors);
// delete colors[0];

const girls = ['rani','aruna','rupa'];
const boys = ['rahul','sagar','kiran'];
console.log(girls.concat(boys));

let arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
console.log(arr[0][0]);
console.log(arr.flat());

colors.splice(1,0,'white','black');
console.log(colors);

console.log(colors.slice(1,2));
console.log(colors.sort());
