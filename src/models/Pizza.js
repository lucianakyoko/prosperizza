import mongoose, { Schema } from 'mongoose';

const PizzaSchema = new mongoose.Schema({
  pizzaName: {
    type: String
  },
  ingredients: {
    type: String
  },
  imageUrl: {
    type: String
  },
  sizes: {
    individual: {
      size_id: Schema.Types.ObjectId,
      price: Number
    },
    medio: {
      size_id: Schema.Types.ObjectId,
      price: Number
    },
    grande: {
      size_id: Schema.Types.ObjectId,
      price: Number
    }
  },
  category: {
    type: String
  },
  isNewPizza: {
    type: Boolean
  }
});

const Pizza = mongoose.models.Pizza || mongoose.model('Pizza', PizzaSchema);

export default Pizza;