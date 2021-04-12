const { demandOption } = require('yargs');
const yargs = require('yargs');

// console.log(process.argv);

// cosumize yargs
yargs.version('1.2')

// creates add commend
yargs.command({
    command: 'add',
    describe: 'description',
    builder:{
        title: {
            describe:'blabla',
            demandOption: true, /// forcing to use
            type: 'string', // forcing a type
        }
    },
    handler: (argv) => {
        console.log('Title: ', argv.title);
    }
})

// create remove command
yargs.command({
  command: "remove",
  describe: "description",
  handler: () => {
    console.log('this is a-');
  },
});

// console.log(yargs.argv);
yargs.parse() // parsing all and loging it.
