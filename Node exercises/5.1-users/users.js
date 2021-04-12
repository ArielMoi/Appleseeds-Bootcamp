const fs = require("fs");
const chalk = require("chalk");
var uniqid = require('uniqid');

const loadUsers = () => {
    try {
        const users = fs.readFileSync('users.json').toString();
        return JSON.parse(users)
    } catch (e){
        return [];
    }
}

const addUser = (user) => {
    const users = loadUsers();
    const duplicateUser = users.find(u => u.name === user.name);

    if(!duplicateUser){
        users.push({
          name: user.name,
          email: user.email,
          id: uniqid(),
        });
        saveUsers(users);
        console.log(chalk.green.inverse("New user added!"));
    } else {
        console.log(chalk.red('user is already in files'));
    }
}

const saveUsers = (users) => {
    fs.writeFileSync('users.json', JSON.stringify(users))
}

const removeUser = (user) => {
    const users = loadUsers();
    const usersWithoutRemoved = users.filter(u => u.name !== user);
    saveUsers(usersWithoutRemoved);
    console.log(chalk.green.inverse(`user -- ${user} -- was deleted`));
}

const updateUser = (details) => {
    removeUser(details.oldName);
    addUser({name: details.newName, email: details.updatedEmail});
}


module.exports = {
    loadUsers,
    addUser,
    removeUser,
    updateUser,
}