"use client"
import React from 'react'
import { useSession, signIn } from "next-auth/react"
import { useRouter } from 'next/navigation'
import DashBoard from '@/components/DashBoard'

const Dashboard = () => {
  const { data: session } = useSession()
  if (!session) {
    const router = useRouter()
    router.push('/login')
  }

  return (
    <>
    <DashBoard />
    </>
  )
}

export default Dashboard
