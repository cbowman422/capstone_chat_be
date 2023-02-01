const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    maxLength: 17,
  },
  password: {
    type: String,
    required: true,
  },
},
{
  timestamps: true,
  toJSON: {
    virtuals: true,
    // ret is the returned Mongoose document
    transform: (_doc, ret) => {
      delete ret.password;
      return ret;
    },
  },
})

const User = mongoose.model("User", UserSchema)
module.exports = User