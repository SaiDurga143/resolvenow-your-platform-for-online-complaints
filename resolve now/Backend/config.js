const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://dnsdurga:DSR1234@cluster0.i5fwzpw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
   console.log("connected to mongodb")
})