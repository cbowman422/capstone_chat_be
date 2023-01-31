const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ChatSchema = new Schema({
  textChat: String ,
  chatRoomUserTwo: {
    type: String,
   // required: true
    // unique: true,
     },
      owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
      }
}, {timestamps: true})

const Chat = mongoose.model("Chat", ChatSchema)

module.exports = Chat