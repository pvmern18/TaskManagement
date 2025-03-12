const mongoose = require("mongoose")

const connectDb = async () => {
        try {
                await mongoose.connect(`mongodb://localhost:27017/TaskMangement`)
                console.log("mongodb connected")
        } catch (error) {
                console.log("mongodb not connected")
                process.exit(1)
        }
        
}

module.exports=connectDb