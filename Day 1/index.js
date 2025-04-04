// console.log(1);

// setTimeout(() => {
//     console.log(2);
// });
// console.log(3);

// function main() {
//     console.log(1);
//     let resolved = false;
//     const p = new Promise(resolve => {
//         setTimeout(() => {
//             console.log(2);
//             resolved = true;
//             resolve();
//         }, 1000);
//     });
//     while (!resolved) {
//     }
//     console.log(3);
// }
// main();

// Concurrent programming
const sum = (a, b) => {
    console.log("a");
    
} 

setTimeout(() => {
    console.log("C");
       
});

const sub = (a, b) => {
    console.log("b");
}

// sum(1, 2);
// sub(1, 2);



