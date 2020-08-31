
var mongoose = require("mongoose");

var foodSchema = mongoose.Schema(
  {
    userID: {
      type: String
    },
    name: {
      type: String
    },
    surname: {
        type: String
    },
    HBD: {
        type: String
    }
  },
  
);

var Info = mongoose.model("info", foodSchema);
module.exports = Info;
