const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://localhost:27017/practice", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const Product = mongoose.model("Product", {
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
  },
  details: {
    description: {
      type: String,
      required: true,
      minlength: 10,
    },
    price: {
      type: Number,
      required: true,
      validate(value) {
        if (value < 0) {
          throw new Error("number i smaller then zero");
        }
      },
    },
    discount: {
      type: Number,
      required: false,
      default: 0,
    },
    imgs: {
      type: Array,
      minlength: 2,
    },
    phoneNumber: {
      required: true,
      type: String,
      validate(value) {
        if (!validator.isMobilePhone(value, "he-IL")) {
          throw new Error("not a valid phone number");
        }
      },
    },
    dateAdded: {
      type: Date,
      default: Date.now,
    },
  },
});

const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.listen(port, () => {
  console.log("listening.. on " + port);
});

app.get("/products/", (req, res) => {
  if (req.query.active) {
    Product.find({ isActive: true })
      .then((products) => {
        res.status(200).send(products);
      })
      .catch((e) => {
        res.status(400).send(e.message);
      });
  } else {
    Product.find({})
      .then((products) => {
        res.status(200).send(products);
      })
      .catch((e) => {
        res.status(400).send(e.message);
      });
  }
});

app.get("/products/range/", (req, res) => {
  Product.find({ "details.price": { $gt: req.query.min, $lt: req.query.max } })
    .then((products) => {
      res.status(200).send(products);
    })
    .catch((e) => {
      res.status(400).send(e.message);
    });
});

app.get("/products/:id", (req, res) => {
  Product.findById(req.params.id)
    .then((products) => {
      res.status(200).send(products);
    })
    .catch((e) => {
      res.status(400).send(e.message);
    });
});

app.get("/products/", (req, res) => {
  if (req.query.active) {
    Product.find({ isActive: true })
      .then((products) => {
        res.status(200).send(products);
      })
      .catch((e) => {
        res.status(400).send(e.message);
      });
  }
});
