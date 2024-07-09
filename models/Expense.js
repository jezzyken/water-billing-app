const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const expenseSchema = new Schema({
  expenseId: {
    type: String,
    unique: true,
  },
  date: {
    type: Date,
  },
  amount: {
    type: Number,
  },
  category: {
    type: String,
  },
  description: {
    type: String,
  },
});

module.exports = mongoose.model("Expense", expenseSchema);
