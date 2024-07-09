const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const billingRateSchema = new Schema({
  ratePerCubicMeter: {
    type: Number,
  },
  minimumCharge: {
    type: Number,
  },
  minimumCubicMeters: {
    type: Number,
  },
  reconnectionFee: {
    type: Number,
  },
  membershipFee: {
    type: Number,
  },
  disconnectionPeriodMonths: {
    type: Number,
  },
  dueDateOffsetDays: {
    type: Number,
  },
});

module.exports = mongoose.model("BillingRate", billingRateSchema);
