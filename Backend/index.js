const app = require("./app");
const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://new_user18:user123@cluster0.bazvvyc.mongodb.net/razorpay')

app.listen(process.env.PORT, ()=>{
    console.log(`server is working on ${process.env.PORT}`);
});

// module.exports = instance