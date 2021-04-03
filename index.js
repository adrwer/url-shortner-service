const express = require('express')
const app = express()

// Accespt json data into the api
app.use(express.json({ exteded: false }))

const PORT = 5000

app.listen(PORT, () => console.log(`Server listening on port number ${PORT}`))