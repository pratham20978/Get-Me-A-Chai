
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
    let p = await Payment.findOne({old: body.razorapy_order_id})
    if(!p){
        return NextResponse.error("Order Id not found")
    }

    // varify payment
    let xx = validatePaymentVerification({"order_id": body.razorapy_order_id, "razorpay_payment_id": body.razorpay_payment_id, "razorpay_signature": body.razorpay_signature }, process.env.KEY_SECRET)

    if(xx){
        // update the payment status
        const updatePayment = await Payment.findByIdAndUpdate({old: razorapy_order_id}, {done: true},{new: true})
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/${updatePayment.to_user}?paymentdone=true`)
    }
    else{
        return NextResponse.error("Payment varification failed")
    }

}