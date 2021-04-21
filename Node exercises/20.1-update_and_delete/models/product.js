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
