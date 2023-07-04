// Initializing the router for contact
const express = require("express");
const router = express.Router();
const contactController = require("./contact.controller");
const e = require("express");

// Import all the controller and connect it to the corresponding routes
router.post("/", (req, res, next) => {
  contactController
    .create(req.body)
    .then((d) => res.json(d))
    .catch((e) => next(e));
});

router.get("/", async (req, res, next) => {
  try {
    const list = await contactController.list();
    res.json(list);
  } catch (e) {
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const result = await contactController.getById(req.params.id);
    res.json(result);
  } catch (e) {
    console.log("err", e);
    next(e);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const payload = req.body;
    const result = await contactController.update(id, payload);
    res.json(result);
  } catch (e) {
    next(e);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await contactController.remove(id);
    res.json(result);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
