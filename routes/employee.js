const upload = require("../utils/multer");
const express = require("express");
const router = express.Router();


const {
  allEmployees,
  newEmployee,
  getEmployeeDetails,
  updateEmployee,
  deleteEmployee
} = require("../controllers/employeeController");

// Routes without authentication and authorization middleware
router.route("/admin/store/:id/employees").get(allEmployees);

router.route('/admin/employee/:id')
  .get(getEmployeeDetails)
  .put(upload.single("avatar"), updateEmployee)
  .delete(deleteEmployee);

router.post("/admin/employee/new", upload.single("avatar"), newEmployee);

module.exports = router;
