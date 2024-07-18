const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Counter = require("./Counter");

const customerSchema = new Schema(
  {
    accountNo: {
      type: String,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    middleName: {
      type: String,
    },
    address: {
      type: String,
    },
    purok: {
      type: String,
    },
    contactNo: {
      type: String,
    },
    registrationDate: {
      type: Date,
      default: Date.now,
    },
    isMember: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

customerSchema.pre("save", async function (next) {
  const customer = this;

  if (customer.isNew) {
    try {
      const counter = await Counter.findByIdAndUpdate(
        { _id: "customerAccountNo" },
        { $inc: { seq: 1 } },
        { new: true, upsert: true }
      );

      customer.accountNo = counter.seq.toString().padStart(6, "0");

      next();
    } catch (error) {
      next(error);
    }
  } else {
    next();
  }
});

module.exports = mongoose.model("Customer", customerSchema);
