const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
  {
    itemName: {
      type: String,
      required: true,
      trim: true
    },

    category: {
      type: String,
      required: true
    },

    description: {
      type: String,
      required: true
    },

    type: {
      type: String,
      enum: ["lost", "found"],
      required: true
    },

    location: {
      type: String,
      required: true
    },

    date: {
      type: Date,
      required: true
    },

    contact: {
      type: String,
      required: true
    },

    status: {
      type: String,
      enum: ["active", "returned"],
      default: "active"
    }
  },
  {
    timestamps: true
  }
);

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;