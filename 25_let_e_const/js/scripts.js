let x = 5; // quase igual a declaração: var x = 5;

const y = 10;

x = 12;

console.log(x);

console.log("Const " + y);

if(true) {
    let x = 20;

    console.log(x);

    const y = 50;

    console.log("Const if " + y);
}

console.log(x);

if(20 > 10) {
    const y = 100;

    console.log("Const if2 " + y);
}

for(let x = 0; x < 10; x++) {
    console.log(x);
}