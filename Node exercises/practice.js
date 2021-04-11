process.env.PORT = 1234;
const port = process.env.PORT;
console.log(`Your port is ${port}`);

const command = process.argv[2];

// console.log(process.argv);

if (command === 'add'){
    console.log('aaaaaa');
}
