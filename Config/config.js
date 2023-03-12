import morgan from "morgan";
import * as dotenv from 'dotenv';
dotenv.config();

const logger = morgan("combined");

// const mongoUrl = `mongodb+srv://wildbadger:jkhinpiqosq@clusterbankapp.pn7rge3.mongodb.net/?retryWrites=true&w=majority`;

const mongoUrl = `mongodb+srv://wildbadger:jkhinpiqosq@clusterbankapp.pn7rge3.mongodb.net/?retryWrites=true&w=majority;

export { logger, mongoUrl };
