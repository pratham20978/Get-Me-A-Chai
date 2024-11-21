
import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import Payment from "@/models/Payment";
import Razorpay from "razorpay";
import connectDB from "@/db/connectDb";


export const POST = async (req)=>{
    await connectDB();
    let body = await req.formData()
    body = Object.fromEntries(body)

    // check if razopayorderid is present on the server
    let p = await Payment.findOne({old: body.razorpay_order_id})
    console.log(body.razorpay_order_id);
    console.log("Hellow");
    
    
    if(!p){
        return NextResponse.json({success: false, message: "Order Id not found"})
    }

    // varify payment
    let xx = validatePaymentVerification({"order_id": body.razorpay_order_id, "payment_id": body.razorpay_payment_id}, body.razorpay_signature , process.env.KEY_SECRET)

    if(xx){
        // update the payment status
        const updatePayment = await Payment.findOneAndUpdate({old: body.razorpay_order_id}, {done: true},{new: true})
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/${updatePayment.to_user}?paymentdone=true`)
    }
    else{
        return NextResponse.json({success:false, message:"Payment varification failed"})
    }

}