"use client"
import React from 'react'
import { useSession, signIn } from "next-auth/react"
import { useRouter } from 'next/navigation'
import DashBoard from '@/components/DashBoard'
import { useEffect } from 'react'

const Dashboard = () => {
  const { data: session } = useSession()
  const router = useRouter()

  useEffect(()=>{
    if (!session) {
      router.push('/login')
    }
  },[session, router])
  

  return (
    <>
    <DashBoard />
    </>
  )
}

export default Dashboard
