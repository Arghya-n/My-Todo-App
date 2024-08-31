const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TodolistSchema = new Schema(
  {
    Task: {
      type: String,
      required: true,
    },
    Description: {
      type: String,
      required: true,
    },
    dueDate: {
      type: Date,
      required: true,
      validate: {
        validator: function (v) {
          return v instanceof Date && !isNaN(v); // Check if it's a valid date
        },
        message: "Invalid date format",
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("todolist", TodolistSchema);
