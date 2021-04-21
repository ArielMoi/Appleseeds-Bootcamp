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

router.patch("/products/:id", async (req, res) => {
  if (req.query.active) {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {
        isActive: req.query.active,
      });

      console.log(updatedProduct);
      res.status(200).send(updatedProduct);
    } catch (e) {
      console.log(e);
      res.status(400).send(e);
    }
  }
});

router.delete("/products/:id", async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    console.log(deletedProduct);
    res.status(200).send(deletedProduct);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.delete("/products/", async (req, res) => {
  try {
    const deletedProducts = await Product.deleteMany({});
    console.log(deletedProducts);
    res.status(200).send(deletedProducts);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
