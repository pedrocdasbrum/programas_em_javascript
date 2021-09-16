// Método length

const arr = [1, 2, 3, 4, 5];

console.log(arr.length);

// Método push

arr.push(6);
arr.push("Qualquer coisa");

console.log(arr);

// Método pop

arr.pop();

console.log(arr);

// Método unshift

arr.unshift(0);
arr.unshift("Teste");

console.log(arr);

// Método shift

arr.shift();

console.log(arr);

// Acessar o último elemento do array pelo método length - 1

console.log(arr[arr.length - 1]);

// Método isArray

console.log(Array.isArray(5));

console.log(Array.isArray(arr));