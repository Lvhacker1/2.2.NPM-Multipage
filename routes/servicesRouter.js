import express from "express";
import { createRequire } from "module";
const require = createRequire(import.meta.url)

const services = require("../data/services.json");
const servicePage = require("../data/servicePage.json");

const servicesRouter = express.Router();

servicesRouter.get("/", (req, res) => {
    res.render("pages/services", {
        pageTitle: "Services",
        services,
        content: servicePage,
        service: null,
    })
})

servicesRouter.get("/:slug", (req, res) => {
    const {slug} = req.params;
    const service = services.find(s => s.slug.toLowerCase() === slug.toLowerCase()
    );
    if (!service) {
        return res.status(404).render("pages/404", {pageTitle: "Page Not Found!"})
        }

    res.render("pages/services-sub", {
        pageTitle: service.name,
        service,
    })
})

export default servicesRouter;