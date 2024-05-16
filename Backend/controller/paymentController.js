// const instance = require("../index")
const Razorpay = require("razorpay");
const { config } = require("dotenv");
config({path: "./config/config.env"});

const instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_API_SECRET,
  });


const checkout  = async (req, res)=>{
    try {
        console.log(instance);
    const options = {
        amount: 50000,  // amount in the smallest currency unit
        currency: "INR",
        };
        const order = await instance.orders.create(options);
        console.log(order);
        res.json({
        msg:"success"
        })
        
    } catch (error) {
        console.log(error)
        res.json({msg:"ERROR"})
        
    }

}

module.exports =  checkout;