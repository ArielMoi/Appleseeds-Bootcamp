const mongoose = require("mongoose");
const validator = require("validator");
mongoose.connect("mongodb://127.0.0.1:27017/product", {
  useNewUrlParser: true,
  useCreateIndex: true,
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
      discount: {
        type: Number,
        required: false,
        default: 0,
      },
      imgz: {
        type: Array,
        minlength: 2,
      },
      phoneNumber: {
        required: true,
        validate(value) {
          if (!validator.isMobileNumber(value, "he-IL")) {
            throw new Error("not valide number");
          }
        },
      },
      dateAdded: {
        default: new Date(),
      },
    },
  },
});
const xbox = new Product({
  name: "Xbox",
  catagory: "video-games",
  isActive: true,
  details: {
    description: "xbox X - best game console ever",
    price: 1000,
    imgz: [2, 2, 2],
    phoneNumber: "055-6661501",
  },
});
console.log(xbox);
