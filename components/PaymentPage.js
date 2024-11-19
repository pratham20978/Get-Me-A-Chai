"use client"
import React from 'react'
import Script from 'next/script'
import { initiate } from '@/actions/useractions'
import { useState } from 'react'
import { useSession } from 'next-auth/react'


const PaymentPage = ({username}) => {
    // const { data: session } = useSession()
    console.log(username);
    
    const [paymentform, setPaymentform] = useState({name:"",message:"",amount:""})

    const handleChange = (e) => {

        setPaymentform({ ...paymentform, [e.target.name]: e.target.value })

        
    }

    const pay = async (amount) => {

        // get the order id
        let a = await initiate(amount, username, paymentform)
        
        let orderId = a.id

        var options = {
            "key": process.env.KEY_ID, // Enter the Key ID generated from the Dashboard
            "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "Get Me A Chai", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": `${process.env.URL}/api/razorpay`,
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "Gaurav Kumar", //your customer's name
                "email": "gaurav.kumar@example.com",
                "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        }

        var rzp1 = new Razorpay(options);
        rzp1.open();
    }

    return (
        <>
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

            <div className='cover w-full bg-red-50 relative flex justify-center'>
                <img className='object-cover w-full h-[350px]' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxNjAwLCJ3ZSI6MX0%3D/16.gif?token-time=1733270400&token-hash=QS3sVKJW9q8GeUW9hq0FzQRBwBbeLrtkbsrgrXY8TEQ%3D" alt="" />
                <div className='absolute -bottom-16  border border-white rounded-lg'>
                    <img width={130} height={130} className='rounded-lg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQccnhw9yfpWE4NDnqNP1eKTCLKS-CumP3w2g&s" alt="" />
                </div>
            </div>
            <div className="info flex flex-col items-center justify-center my-24">
                <div className='font-bold text-lg'>
                    @{username}
                </div>
                <div className='text-slate-400'>
                    Creating Animated art for VTT's
                </div>
                <div className='text-slate-400'>
                    9,712 members . 82 posts . $15,450/release
                </div>

                <div className="payment flex gap-3 w-[80%] mt-11">
                    <div className="suppoters w-1/2 bg-slate-900 rounded-lg text-white p-10">
                        {/* Show list of all the suppoters as a leaderboard */}
                        <h2 className='text-lg font-bold'>Supporters</h2>
                        <ul className='mx-5 text-lg'>
                            <li className='my-3 flex gap-2 items-center'>
                                <img width={30} src="/avatar.gif" alt="user avatar" />
                                <span>
                                    Shubham donated <span className='font-bold'>$30</span> with a message "Lots of love 🫁"
                                </span>
                            </li>
                            <li className='my-3 flex gap-2 items-center'>
                                <img width={30} src="/avatar.gif" alt="user avatar" />
                                <span>
                                    Shubham donated <span className='font-bold'>$30</span> with a message "Lots of love 🫁"
                                </span>
                            </li>
                            <li className='my-3 flex gap-2 items-center'>
                                <img width={30} src="/avatar.gif" alt="user avatar" />
                                <span>
                                    Shubham donated <span className='font-bold'>$30</span> with a message "Lots of love 🫁"
                                </span>
                            </li>
                            <li className='my-3 flex gap-2 items-center'>
                                <img width={30} src="/avatar.gif" alt="user avatar" />
                                <span>
                                    Shubham donated <span className='font-bold'>$30</span> with a message "Lots of love 🫁"
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="makePayment w-1/2 bg-slate-900 rounded-lg text-white p-10">
                        <h1 className='text-2xl font-bold my-5'>Make Payment</h1>
                        <div className="flex flex-col gap-2">
                            {/* input for name and message */}
                            <input onChange={handleChange} name="name" value={paymentform.name} type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Name' />
                            <input onChange={handleChange} name="message" value={paymentform.message} type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Message' />
                            <input onChange={handleChange} name="amount" value={paymentform.amount} type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Amount' />
                            <button onClick={()=> pay(paymentform.amount)} type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Pay</button>
                        </div>
                        {/* Or choose from these amounts */}
                        <div className="flex gap-2 mt-5">
                            <button className='bg-slate-800 p-3 rounded-lg' onClick={()=> pay(1000)}>Pay ₹10</button>
                            <button className='bg-slate-800 p-3 rounded-lg' onClick={()=> pay(2000)}>Pay ₹20</button>
                            <button className='bg-slate-800 p-3 rounded-lg' onClick={()=> pay(3000)}>Pay ₹30</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentPage