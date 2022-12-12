const express = require("express")
const cors = require("cors")

const app = express()
const corsOptions = {
  origin: "http://localhost:8081"
}
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Default route
app.get("/", (req, res) => {
  req.json({message: "Welcome to Express MongoDB application."})
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
})