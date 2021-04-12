// const chalk = require('chalk');
const yargs = require('yargs');
const { loadUsers, addUser, removeUser, updateUser } = require("./users.js");

yargs.command({
    command: 'add',
    describe: 'adding a user',
    builder: {
        name: {
            describe: 'user name',
            demandOption: true,
            type: 'string'
        },
        email:{
            describe: 'email',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        addUser(argv);
    }
})

yargs.command({
    command: 'remove',
    describe: 'removing a user',
    builder: {
        name: {
            describe: 'user name',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv){
        removeUser(argv.name);
    }
})

yargs.command({
    command: 'update',
    describe: 'updating a user',
    builder: {
        oldName: {
            describe: 'user name',
            demandOption: true,
            type: 'string'
        },
        newName: {
            describe: 'user name',
            demandOption: true,
            type: 'string'
        },
        updatedEmail: {
            describe: 'email',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        updateUser(argv);
    }
})

yargs.command({
    command: 'delete',
    describe: 'deleting a user',
    builder: {
        name: {
            describe: 'user name',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv){
        console.log(argv);
    }
})

yargs.command({
    command: 'read',
    describe: 'list of users',
    handler(argv){
        console.log(loadUsers());
    }
})

yargs.parse();