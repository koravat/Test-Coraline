
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

// ถ้าไม่ได้กำหนด collection ข้างบน default จะเป็น "foods"
var Info = mongoose.model("info", foodSchema);
module.exports = Info;
