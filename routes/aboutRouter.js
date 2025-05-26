import express from "express";
import { createRequire } from "module";
const require = createRequire(import.meta.url)
const about = require("../data/about.json");

const aboutRouter = express.Router();

aboutRouter.get("/", (req, res) => {
    res.render("pages/about", {
        pageTitle: "About",
        about,
        section: null,
    })
})

aboutRouter.get("/:slug", (req, res) => {
    const {slug} = req.params;
    const section = about.sections.find(s => s.slug.toLowerCase() === slug.toLowerCase()
    );
    if (!section) {
        return res.status(404).render("pages/404", {pageTitle: "Page Not Found!"})
        }

    res.render("pages/about-sub", {
        pageTitle: section.title,
        section,
    })
})

export default aboutRouter;