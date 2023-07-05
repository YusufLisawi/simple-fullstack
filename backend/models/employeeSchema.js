const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
	{
		image: { type: String, required: true },
		nom: { type: String, required: true },
		prenom: { type: String, required: true },
		fonction: { type: String, required: true },
	},
	{ collection: "employees" }
);

module.exports = mongoose.model("Employee", employeeSchema, "employees")
