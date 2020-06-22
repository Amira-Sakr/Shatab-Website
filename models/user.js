var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
  order:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Order"
    }
],
  username: String,
  password: String,
  Email: String,
  address: String,
  phone: String,
  isAdmin: { type: Boolean, default: false },
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);
