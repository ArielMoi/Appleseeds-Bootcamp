const express = require("express");
const Product = require("../models/product");
const router = new express.Router();


router.get("/products/", (req, res) => {
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

router.get("/products/range/", (req, res) => {
  Product.find({ "details.price": { $gt: req.query.min, $lt: req.query.max } })
    .then((products) => {
      res.status(200).send(products);
    })
    .catch((e) => {
      res.status(400).send(e.message);
    });
});

router.get("/products/:id", (req, res) => {
  Product.findById(req.params.id)
    .then((products) => {
      res.status(200).send(products);
    })
    .catch((e) => {
      res.status(400).send(e.message);
    });
});

router.get("/products/", (req, res) => {
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