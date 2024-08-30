import express from "express"; 
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import path from "path"; 

const app = express()
const __dirname = path.dirname(new URL(import.meta.url).pathname);


//MIDDLEWARES

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());


app.set("view engine", "pug");



app.listen(3000, () =>{
    console.log("Server listening on http:/localhost:3000");
});