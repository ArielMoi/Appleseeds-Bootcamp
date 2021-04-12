const yargs = require("yargs");

yargs.command({
  command: "calc",
  describe: "adding numbers",
  builder: {
    add: {
      describe: "blabla",
      type: "int", // forcing a type
    },
    sub: {
      describe: "sub",
      type: "int", // forcing a type
    },
    mult: {
      describe: "mult",
      type: "int", // forcing a type
    },
    pow: {
      describe: "power",
      type: "int", // forcing a type
    },
  },
  handler: (argv) => {
    argv.add &&
      console.log(
        Number(argv.add.split(" ")[0]) + Number(argv.add.split(" ")[1])
      );
    argv.sub &&
      console.log(
        Number(argv.sub.split(" ")[0]) - Number(argv.sub.split(" ")[1])
      );
    argv.mult &&
      console.log(
        Number(argv.mult.split(" ")[0]) * Number(argv.mult.split(" ")[1])
      );
    argv.pow && console.log(Number(argv.pow) * Number(argv.pow));
  },
});


yargs.parse();