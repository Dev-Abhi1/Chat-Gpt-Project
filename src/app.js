const express = require("express");
const indexRoutes = require("./routes/index.routes");
const authRoutes = require("./routes/auth.routes")
const app = express()

app.set("view engine","ejs");

app.use(express.static('public')) // serve static files from the public directory
app.use(express.json()) // used when we send and need to read data in raw format
app.use(express.urlencoded({extended:true})) // used when we  need to send and read data in x-www-form-unlencoded
app.use("/",indexRoutes)
app.use("/auth",authRoutes)


module.exports = app