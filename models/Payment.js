const { Schema, model } = require("mongoose");

const PaymentSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    amount: String,
    status: String,
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

const Payment = model("Payment", PaymentSchema);

module.exports = Payment;