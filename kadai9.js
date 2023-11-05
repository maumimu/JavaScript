let array = [];

for (let a = 1; a<= 100 ;a++) {
    array.push(a);
}

let b3 = array.filter(a => a % 3 == 0);

let b5 = array.filter(a => a % 5 == 0);

console.log(b3);
console.log(b5);

