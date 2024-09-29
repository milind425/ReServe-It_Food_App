const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password_hash: { type: String, required: true },
  user_type: { type: String, enum: ["donor", "recipient"], required: true },
  address: {
    street: String,
    city: String,
    state: String,
    zipcode: String,
    location: {
      latitude: Number,
      longitude: Number,
    },
  },
  contact_number: String,
  rating: Number,
  total_donations: Number,
  total_claims: Number,
});

module.exports = mongoose.model("User", UserSchema);
