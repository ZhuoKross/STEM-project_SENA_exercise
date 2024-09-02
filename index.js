import express from "express"; 
import cors from "cors";
import morgan from "morgan";
import path from "path";
import helmet from "helmet";
import v1Routes from "./routes/v1/mainRoutes.js";

const app = express();
const PORT = process.env.PORT || 4200;
const __dirname = path.dirname(new URL(import.meta.url). pathname);
const publicArchives = path.join(__dirname, "public")

console.log(publicArchives);

app.set("view engine", "pug");
app.set("views", "./public/views");

//MIDDLEWARES

app.use(express.static(publicArchives));
//app.use(express.static("public"))
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());


// RUTAS 
app.use("/v1", v1Routes);




app.listen(PORT, () =>{
    console.log(`Server listening on port ${PORT}`);
});