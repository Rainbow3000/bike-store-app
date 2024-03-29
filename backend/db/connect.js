const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL).then(() => {
      console.log("database connect successfully !");
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = connect;
