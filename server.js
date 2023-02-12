import Express from "express";
import { mongoUrl } from "./Config/config.js";
import mongoose from "mongoose";
import routes from "./Routes/Routes.js";
import bodyParser from "body-parser";
import cors from "cors";
import * as dotenv from "dotenv";
dotenv.config();

const app = Express();

const PORT = process.env.PORT || 8001;

app.use(cors({ credentials: true, origin: "*" }));

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use("/api", routes);

mongoose.connect(
  mongoUrl,
  {
    useNewUrlParser: true,
    useUnifiedtopology: true,
  },
  (err) => {
    if (!err) {
      console.log("connected to db");
    } else {
      console.log("error", err);
    }
  }
);

app.listen(PORT, () => {
  console.log(`server listening at http://localhost:${PORT}`);
});
