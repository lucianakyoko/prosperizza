const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  orderNumber: {
    type: String,
    required: true
  },
  orderDate: {
    type: Date,
    default: Date.now
  },
  pizzas: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Pizza'
  }],
  totalPrice: {
    type: Number,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

const Order = mongoose.models.Order || mongoose.model('Order', OrderSchema);

export default Order;