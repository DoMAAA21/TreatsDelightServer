const upload = require("../utils/multer");
const express = require("express");
const router = express.Router();

const {
  allProducts,
  newProduct,
  deleteProduct,
  getProductDetails,
  updateProduct,
  updateProductStatus,
  allMeals,
  allItems,
  updateStocks,
  allItemsWeb
} = require("../controllers/productController");

// Routes without authentication and authorization middleware
router.get("/allItems", allItems);
router.get("/allItemsWeb", allItemsWeb);
router.route('/product/:id').get(getProductDetails);

// Routes with authentication and authorization middleware
router.get("/admin/store/:id/products", allProducts);
router.get("/admin/store/:id/meals", allMeals);

router.route('/admin/product/:id')
  .get(getProductDetails)
  .put(upload.fields([
    { name: 'firstImage', maxCount: 1 },
    { name: 'secondImage', maxCount: 1 },
    { name: 'thirdImage', maxCount: 1 },
  ]), updateProduct)
  .delete(deleteProduct);

router.post("/admin/product/new", upload.fields([
  { name: 'firstImage', maxCount: 1 },
  { name: 'secondImage', maxCount: 1 },
  { name: 'thirdImage', maxCount: 1 },
]), newProduct);

router.route('/admin/product/status/:id').put(updateProductStatus);
router.route('/admin/product/update-stocks').patch(updateStocks);

module.exports = router;
