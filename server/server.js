import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import {dbConnect} from "./config/config.mongoose.js";
import router from "./routes/hospital.routes.js";

dbConnect();

const app = express();

app.use(cors());
app.use(express.json());
dotenv.config();

app.use('/api', router);


 




app.listen(process.env.PORT, () => {
    console.log("Listening on port: " + process.env.PORT);
});
