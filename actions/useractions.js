"use server"

import Razorpay from "razorpay"
import Payment from "@/models/Payment"
import connectDB from "@/db/connectDb"
import User from "@/models/User"


export const initiate = async (amount, to_username, paymentform) => {

  await connectDB()
  let user = await User.findOne({ username: to_username })
  const secret = user.razorpaysecret

  var instance = new Razorpay({ key_id: user.razorpayid, key_secret: secret })

  instance.orders.create({
    amount: 5000,
    currency: "INR",
    receipt: "receipt#1",
    notes: {
      key1: "value3",
      key2: "value2"
    }
  })

  let options = {
    amount: Number.parseInt(amount),
    currency: "INR",
  }

  let x = await instance.orders.create(options)


  // create a payment object whcih shows a pending payment in the database
  await Payment.create({ old: x.id, amount: amount / 100, to_user: to_username, name: paymentform.name, message: paymentform.message })

  return x;

}


export const fetchuser = async (username) => {
  await connectDB()
  let u = await User.findOne({ username: username })
  let user = u.toObject({ flattenObjectIds: true })
  return user;
}


export const fetchpayments = async (username) => {
  await connectDB()
  // find all payments sorted by decreasing order of amount and flattend object ids
  let p = await Payment.find({ to_user: username }).sort({ amount: -1 }).limit(10).lean()

  return p;
}

export const updateProfile = async (data, oldusername) => {
  await connectDB()
  let mdata = Object.fromEntries(data)
  // if the username is being updated, check if username is available
  if (mdata.username !== oldusername) {
    let u = await User.findOne({ username: mdata.username })
    if (u) {
      return { error: "Username already exists" }
    }
    await User.updateOne({ email: mdata.email }, mdata)
    // now update all the username in the Payment table
    await Payment.updateMany({to_user: oldusername}, {to_user: mdata.username})

  } else {

    await User.updateOne({ email: mdata.email }, mdata)
  }
}
