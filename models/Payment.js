const { Schema, model } = require("mongoose");

const PaymentSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    transactions: [{
        amount: Number,
        date: {
            type: Date,
            default: Date.now(),
        },
        transactionStatus: {
            type: String,
        },
        transactionType: {
            type: String,
        }
    }],
    ballance: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

const Payment = model("Payment", PaymentSchema);

module.exports = Payment;