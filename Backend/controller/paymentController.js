// const instance = require("../index")
const Razorpay = require("razorpay");
const { config } = require("dotenv");
config({path: "./config/config.env"});

const instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_API_SECRET,
  });

let orderId = 0;

const checkout  = async (req, res)=>{
    try {
        
    const options = {
        amount: Number(req.body.amount * 100),  // amount in the smallest currency unit
        currency: "INR",
        };

        const order = await instance.orders.create(options);
        orderId = order.id

        res.json({
        msg:"success",
        order,
        })
        
    } catch (error) {
        console.log(error)
        res.json({msg:"ERROR"})
        
    }

}

const paymentVarification =  async (req, res) => {

  const { razorpay_payment_id, razorpay_signature } =
    req.body;

  const order_id = orderId
  const secret = process.env.RAZORPAY_API_SECRET
    
  const generated_signature = hmac_sha256(order_id + "|" + razorpay_payment_id, secret);

  if (generated_signature == razorpay_signature) {
    res.status(200).json({
        msg:"success"
    })
  }
  else{
    res.json({
        msg:"error"
    })
  }
    

}

const getkey  = (req, res) => {
    res.status(200).json({
        key:process.env.RAZORPAY_API_KEY
    })
}

module.exports = { checkout, paymentVarification, getkey };