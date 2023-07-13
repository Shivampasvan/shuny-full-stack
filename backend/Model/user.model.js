const mongoose = require("mongoose");

// --------------->>>>>>>> User Schema <<<<<<<<-------------------

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
});

// --------------->>>>>>>> UserModel <<<<<<<<-------------------

const UserModel = mongoose.model("users", userSchema);

module.exports = {
  UserModel,
};
