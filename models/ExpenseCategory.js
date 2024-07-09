const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const expenseCategory = new Schema(
  {
    type: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("ExpenseCategory", expenseCategory);
