require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')

const port = process.env.PORT
const mongoURI = process.env.MONGO_URI

const app = express()
// Bodyparser middleware
app.use(express.json())

// Connect to MongoDB
mongoose.connect(mongoURI, {useNewUrlParser: true})
		.then(() => console.log('MongoDB connected'))
		.catch(err => console.log(err))

// Method 1: Using Router middleware
app.use('/api/employee', require('./routes/employee'))

// Method 2: Using app
// app.get('/api/employee', (req, res) => {
// 	employeeSchema.find({}, (err, data) => {
// 		if (err) {
// 			console.log(err)
// 			res.status(500).send('Internal server error')
// 		} 
// 		else res.json(data)
// 	})
// });

// Start server
app.listen(port, (err) => {
	if (err) console.log(err)
	else console.log(`Server running on port ${port}`);
})
