const express=require("express")
const cors=require("cors")
const dotEnv=require("dotenv").config()
const connectDb=require("./config/db.js")
const app=express()
const taskRoutes=require("./routes/taskRoutes.js")

const PORT=process.env.PORT || 8000
connectDb()

app.use(express.json())
app.use(cors())

app.use("/tasks", taskRoutes)

app.listen(PORT, ()=>console.log(`The port is running on http://localhost:${PORT}`))

