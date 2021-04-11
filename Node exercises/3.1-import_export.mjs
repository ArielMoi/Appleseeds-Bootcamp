// const validator = require('validator');
// const chalk = require('chalk')

// console.log(validator.isEmail('aaa@gmail.com'));
// console.log(chalk.bgRed('hello'));

/* 
The major difference between require and import, is that require will automatically scan 
node_modules to find modules, but import, which comes from ES6, won't.
also, require will execute the file imported.

Give 2 node.js environment variables that are not available
when using the import syntax :
- process
- global 

*/

import fs from 'fs';
import {add} from './practice.mjs'

console.log(fs.readdirSync('./'));
console.log(add());
