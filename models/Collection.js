const mongoose = require("mongoose");

const collectionSchema = new mongoose.Schema(
  {
    consumerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Consumer",
    },
    billId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Bill",
      default: null,
    },
    paymentDate: {
      type: Date,
      default: Date.now(),
    },
    totalBill: {
      type: Number,
    },
    amountPaid: {
      type: Number,
    },
    change: {
      type: Number,
    },
    paymentMethod: {
      type: String,
      default: "Cash",
    },
    paymentDescription: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

collectionSchema.pre("save", function (next) {
  if (this.isModified("totalBill") || this.isModified("amountPaid")) {
    this.change = this.amountPaid - this.totalBill;
  }
  next();
});

module.exports = mongoose.model("Collection", collectionSchema);
