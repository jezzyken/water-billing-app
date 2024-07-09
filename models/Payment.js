const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const paymentSchema = new Schema(
  {
    billId: {
      type: String,
      ref: "Bill",
    },
    customerId: {
      type: String,
      ref: "Consumer",
    },
    paymentDate: {
      type: Date,
    },
    amountPaid: {
      type: Number,
    },
    paymentMethod: {
      type: String,
    },
    referenceNo: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Payment", paymentSchema);
