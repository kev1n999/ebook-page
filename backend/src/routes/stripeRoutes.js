const { Router } = require("express");
const createStripeSection = require("../controllers/stripeSection");
const downloadPage = require("../controllers/downloadPage");

const router = Router();

router.post("/checkout-section", createStripeSection);
router.get("/download", downloadPage);

module.exports = router;