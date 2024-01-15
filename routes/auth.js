const upload = require("../utils/multer");

const express = require("express");

const router = express.Router();




const {
  verifyToken,
  registerUser,
  loginUser,
  logout,
  allUsers,
  allOwners,
  updateProfile,
  getUserDetails,
  updateUser,
  deleteUser,
  newUser
} = require("../controllers/userController");

router.post("/verify-token", verifyToken);
router
  .route("/admin/users")
  .get( allUsers);
router.get("/admin/owners", allOwners);


router.post("/admin/user/new", upload.single("avatar"), newUser);
router.route('/admin/user/:id')
  .get( getUserDetails)
  .put(updateUser)
  .delete(deleteUser);

router.route('/edit-profile/:id')
  .put(upload.single("avatar"), updateProfile);


router.post("/register", registerUser);

router.post("/login", loginUser);




router.get("/logout", logout);




module.exports = router;
