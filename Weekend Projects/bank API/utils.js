const fs = require("fs");
const bankData = JSON.parse(fs.readFileSync("./bankData.json").toString());

const checkIfUserExists = (userId) => {
  if (!bankData.find((account) => account.id == userId)) {
    throw new Error("account doesn't exists");
  }
};

const addUser = (user) => {
  if (bankData.find((account) => account.id === user.id)) {
    throw new Error("user id already exists");
  }
  bankData.push(user);
  fs.writeFileSync("./bankData.json", JSON.stringify(bankData));
  return bankData;
};

const deposit = (amount, userId) => {
  checkIfUserExists(userId);
  const updatedData = bankData.map(account => {
    if (account.id == userId) {
      return {
        id: account.id,
        cash: Number(account.cash) + Number(amount),
        credit: account.credit,
      };
    } else {
      return account;
    }
  });

  fs.writeFileSync("./bankData.json", JSON.stringify(updatedData));
  return updatedData.find((account) => account.id == userId);
};

const updateCredit = (amount, userId) => {
  if (amount < 0) {
    throw new Error("amount cant be negative");
  }
  checkIfUserExists(userId);
  const updatedData = bankData.map((account) => {
    if (account.id == userId) {
      return {
        id: account.id,
        cash: account.cash,
        credit: Number(account.credit) + Number(amount),
      };
    } else {
      return account;
    }
  });

  fs.writeFileSync("./bankData.json", JSON.stringify(updatedData));
  return updatedData.find(account => account.id == userId);
};

const withdrawMoney = (amount, userId) => {
  checkIfUserExists(userId);

  const updatedData = bankData.map((account) => {
    if (account.id == userId) {
      return {
        id: account.id,
        cash: Number(account.cash) - Number(amount),
        credit: account.credit,
      };
    } else {
      return account;
    }
  });

  fs.writeFileSync("./bankData.json", JSON.stringify(updatedData));
  return updatedData.find(account => account.id == userId);

};

const transferring = (transferId, receiverId, amount) => {
  checkIfUserExists(transferId);
  checkIfUserExists(receiverId);
  const updatedData = bankData.map((account) => {
    if (account.id == transferId) {
      if (
        account.cash > amount ||
        account.credit >= Math.abs(account.cash - amount)
      ) {
        return {
          id: account.id,
          cash: Number(account.cash) - Number(amount),
          credit: account.credit,
        };
      } else throw new Error("not enough money in the transferring account");
    }
    if (account.id == receiverId) {
      return {
        id: account.id,
        cash: Number(account.cash) + Number(amount),
        credit: account.credit,
      };
    } else {
      return account;
    }
  });

  fs.writeFileSync("./bankData.json", JSON.stringify(updatedData));
  return bankData;
};

const readUser = (userId) => {
  checkIfUserExists(userId);

  return bankData.find((account) => account.id == userId);
};

const dataAllUsers = () => bankData;

const filteredUsers = () => bankData.sort((a, b) => b.cash - a.cash);

module.exports = {
  addUser,
  deposit,
  updateCredit,
  withdrawMoney,
  transferring,
  readUser,
  dataAllUsers,
  filteredUsers,
};
