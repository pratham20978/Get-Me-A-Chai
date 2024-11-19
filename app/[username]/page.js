"use client"
import React from 'react'
import { useSession, signIn } from "next-auth/react"
import { useRouter } from 'next/navigation'
import PaymentPage from '@/components/PaymentPage'
import { use } from 'react'


const Username = ({ params }) => {
  const resolvedParams = use(params)
  // const { data: session } = useSession()
  // if (!session) {
  //   const router = useRouter()
  //   router.push('/login')
  // }
  return (
    <>
    
      console.log({resolvedParams.username});
      
      <PaymentPage username={resolvedParams.username} />
    </>
  )
}

export default Username
