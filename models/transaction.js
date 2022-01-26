//require the mongoose package
const mongoose = require("mongoose");
//declare the Schema transaction
const Schema = mongoose.Schema;
// set the object and key values of Transaction
const transactionSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: "Enter a name for transaction"
    },
    value: {
      type: Number,
      required: "Enter an amount"
    },
    date: {
      type: Date,
      default: Date.now
    }
  }
);
//declare the Transaction model
const Transaction = mongoose.model("Transaction", transactionSchema);
//exports the transaction model schema
module.exports = Transaction;
