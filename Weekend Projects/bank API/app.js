const express = require("express");
const app = express();

const {
  addUser,
  deposit,
  updateCredit,
  withdrawMoney,
  transferring,
  readUser,
  dataAllUsers,
  filteredUsers,
} = require("./utils.js");

app.use(express.json());

app.get("/bankData/", (req, res) => {
  try {
    if (req.query.sorted) {
      const data = filteredUsers();
      res.status(200).send(data);
    } else {
      const bankData = dataAllUsers();
      res.status(200).send(bankData);
    }
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

app.get("/bankData/:userId", (req, res) => {
  try {
    const user = readUser(req.params.userId);
    res.status(200).send(user);
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

app.post("/bankData/", (req, res) => {
  try {
    addUser(req.body);
    res.status(200).send(req.body);
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

app.post("/bankData/deposit/:id/:amount", (req, res) => {
    try {
      const updatedAccount = deposit(req.params.amount, req.params.id);
      res.status(200).send(updatedAccount);
    } catch (e) {
      res.status(400).send({ error: e.message });
    }
})

app.post("/bankData/updateCredit/:id/:amount", (req, res) => {
    try {
      const updatedAccount = updateCredit(req.params.amount, req.params.id);
      res.status(200).send(updatedAccount);
    } catch (e) {
      res.status(400).send({ error: e.message });
    }
})

app.post("/bankData/withdraw/:id/:amount", (req, res) => {
    try {
      const updatedAccount = withdrawMoney(req.params.amount, req.params.id);
      res.status(200).send(updatedAccount);
    } catch (e) {
      res.status(400).send({ error: e.message });
    }
})

app.post(
  "/bankData/transferring/:transferId/:receiverId/:amount",
  (req, res) => {
    try {
      const updatedAccounts = transferring(
        req.params.transferId,
        req.params.receiverId,
        req.params.amount
      );
      res.status(200).send(updatedAccounts);
    } catch (e) {
      res.status(400).send({ error: e.message });
    }
  }
);

const PORT = 3000;
app.listen(PORT, () => {
  console.log("listening..");
});
