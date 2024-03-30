import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  fullName: {
    type: String,
  },
  cpf: {
    type: String,
  },
  cellphone: {
    type: String,
  },
  cep: {
    type: String,
  },
  rua: {
    type: String,
  },
  numero: {
    type: String,
  },
  complemento: {
    type: String,
  },
  bairro: {
    type: String,
  },
  cidade: {
    type: String,
  },
  uf: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  orders: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order'
  }]
});

const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default User;