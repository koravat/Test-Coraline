
var mongoose = require("mongoose");

var foodSchema = mongoose.Schema(
  {
    // กำหนด ชื่อและชนิดของ document เรา
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
