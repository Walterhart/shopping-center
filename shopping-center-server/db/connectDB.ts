/* Connect to mongoose server */

import mongoose from "mongoose";

const connectDB = (URL: string | "") => {
  mongoose.set('strictQuery', true)
  return mongoose
    .connect(URL, )
    .then(() => console.log("Mongoose connected..."))
    .catch((err) => console.log(err));
};

export default{
  connectDB
}
