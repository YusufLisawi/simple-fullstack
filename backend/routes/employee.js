const router = require("express").Router();
const bcrypt = require("bcryptjs");
const Employee = require("../models/employeeSchema");

// Route: GET /api/employee
// Description: Get all employees
router.get("/", async (req, res) => {
  try {
    const employees = await Employee.find({});
    res.json(employees);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

// Route: POST /api/employee
// Description: Create a new employee
router.post("/", async (req, res) => {
  try {
    const newEmployee = new Employee(req.body);
    const savedEmployee = await newEmployee.save();
    res.json(savedEmployee);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

// Route: GET /api/employee/:id
// Description: Get a specific employee by ID
router.get("/:id", async (req, res) => {
  const employeeId = req.params.id;
  try {
    const employee = await Employee.findById(employeeId);
    if (!employee) {
      res.status(404).send("Employee not found");
    } else {
      res.json(employee);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

// Route: PUT /api/employee/:id
// Description: Update a specific employee by ID
router.put("/:id", async (req, res) => {
  const employeeId = req.params.id;
  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(
      employeeId,
      req.body,
      { new: true }
    );
    if (!updatedEmployee) {
      res.status(404).send("Employee not found");
    } else {
      res.json(updatedEmployee);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

// Route: DELETE /api/employee/:id
// Description: Delete a specific employee by ID
router.delete("/:id", async (req, res) => {
  const employeeId = req.params.id;
  try {
    const deletedEmployee = await Employee.findByIdAndRemove(employeeId);
    if (!deletedEmployee) {
      res.status(404).send("Employee not found");
    } else {
      res.send("Employee deleted");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
