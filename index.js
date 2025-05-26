import dotenv from "dotenv";
dotenv.config()
import express from "express";
import path from "path";
import { fileURLToPath} from "url";
import servicesRouter from "./routes/servicesRouter.js";
import aboutRouter from "./routes/aboutRouter.js";
import contactData from "./data/contact.js";

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);
const app = express()
const port = process.env.PORT || 3000;

dotenv.config()

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("pages/home", {pageTitle: "Home"})
})

app.use("/services", servicesRouter);
app.use("/about", aboutRouter);

app.get("/contact", (req, res) => {
    res.render("pages/contact", {
        pageTitle: "Contact",
        contact: contactData
    })
})

app.use((req, res) => {
    res.status(404).render("pages/404", {pageTitle: "Page Not Found!"})
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})