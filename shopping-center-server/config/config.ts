/*Config  file
  Note: Make sure env files contains connections inputs
*/
import * as dotenv from "dotenv";

dotenv.config();
const MONG_USERNAME = process.env.MONGO_USERNAME || "";
const MONG_PASSWORD = process.env.MONGO_PASSWORD || "";
const MONGO_URL = `mongodb+srv://${MONG_USERNAME}:${MONG_PASSWORD}@shopping-cluster.6ffgqyd.mongodb.net/?retryWrites=true&w=majority`;

const SERVER_PORT = process.env.SERVER_PORT
  ? Number(process.env.SERVER_PORT)
  : 4000;

export const config = {
  mongo: {
    url: MONGO_URL,
  },
  server: {
    port: SERVER_PORT,
  },
};
