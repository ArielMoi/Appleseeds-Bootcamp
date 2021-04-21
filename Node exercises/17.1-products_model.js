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

const tv = new Product({
  name: "tv",
  category: "tech",
  isActive: true,
  details: {
    description: "an object to watch little people inside a box",
    price: 100,
    imgs: [1, 1, 1],
    phoneNumber: "0525414499",
  },
});

const xbox = new Product({
  name: "xbox",
  category: "tech",
  isActive: true,
  details: {
    description: "an object to play video games",
    price: 50,
    imgs: [1, 2, 1],
    phoneNumber: "0525414499",
  },
});

const light = new Product({
  name: "light",
  category: "tech",
  isActive: true,
  details: {
    description: "make ligut",
    price: 20,
    imgs: [1],
    phoneNumber: "0525414499",
  },
});

// console.log(light);

tv.save().then(() => console.log('added')).catch(e => console.log(e))
xbox.save().then(() => console.log('added')).catch(e => console.log(e))
light.save().then(() => console.log('added')).catch(e => console.log(e))
