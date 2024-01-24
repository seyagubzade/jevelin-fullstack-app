const express = require("express");
const { JevelinModelController } = require("../controller/Jevelin.controller");
const router = express.Router();

router.get("/", JevelinModelController.getAll);
router.post("/", JevelinModelController.add);
router.get("/:id", JevelinModelController.getById);
router.delete("/:id", JevelinModelController.deleteById);

module.exports = router;
