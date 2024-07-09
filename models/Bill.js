const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const billSchema = new Schema(
  {
    consumerId: {
      type: Schema.Types.ObjectId,
      ref: "Consumer",
    },
    billingDate: {
      type: Date,
    },
    dueDate: {
      type: Date,
    },
    previousDate: {
      type: Date,
    },
    previousRead: {
      type: Number,
    },
    presentDate: {
      type: Date,
    },
    presentRead: {
      type: Number,
    },
    cubicConsumption: {
      type: Number,
    },
    readType: {
      type: String,
    },
    meterDescription: {
      type: String,
    },
    presentBill: {
      type: Number,
    },
    previousBalance: {
      type: Number,
    },
    totalAmount: {
      type: Number,
    },
    status: {
      type: String,
      enum: ["Pending", "Paid", "Overdue"],
      default: "Pending",
    },
    isOverdue: {
      type: Boolean,
      default: false,
    },
    lateFee: {
      type: Number,
      default: 0,
    },
    disconnectionStatus: {
      type: String,
      required: true,
      enum: ["Active", "Disconnected"],
      default: "Active",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Bill", billSchema);
