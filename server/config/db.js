const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log(`MongoDB connected: ${mongoose.connection.host}`))
    .catch((err) => console.log(err));
};

module.exports = connectDB;
