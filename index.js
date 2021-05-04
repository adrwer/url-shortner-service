const express = require('express')
const app = express()
const connectDB = require('./config/db')

// Connect to database
connectDB()

// Accespt json data into the api
app.use(express.json({ exteded: false }))

// Define our routes
app.use('/', require('./routes/index'))
app.use('/api/url', require('./routes/url'))

const PORT = 5000

app.listen(PORT, () => console.log(`Server listening on port number ${PORT}`))