const upload = require("../utils/multer");
const express = require("express");
const router = express.Router();

const {
 allStores,
 getStoreDetails,
 updateStore,
 deleteStore,
 newStore,
 updateStoreStatus
} = require("../controllers/storeController");

// Routes without authentication and authorization middleware
router.route("/stores").get(allStores);

router.route("/admin/stores").get(allStores);
router.route('/admin/store/:id')
  .get(getStoreDetails)
  .put(upload.single("logo"), updateStore)
  .delete(deleteStore);

router.post("/admin/store/new", upload.single("logo"), newStore);
router.route('/admin/store/status/:id').put(updateStoreStatus);

module.exports = router;
