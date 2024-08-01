const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const meterReadingSchema = new Schema(
  {
    consumerId: {
      type: Schema.Types.ObjectId,
      ref: "Consumer",
    },
    readingDate: {
      type: Date,
    },
    currentReading: {
      type: Number,
    },
    previousReading: {
      type: Number,
    },
    consumption: {
      type: Number,
    },
    readingBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("MeterReading", meterReadingSchema);
