const mongoose = require("mongoose");

const theatreSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    owner: {
      // this is kind of a reference, every theatre will have a owner and owner will be a user, 
      // and that user will be some record from the users collection where we store all the users
      // so basically corresponding to every theatre we have a property called owner, and that owner will be
      // an Id from the users collection to which user the theatre belongs to
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Theatre", theatreSchema);