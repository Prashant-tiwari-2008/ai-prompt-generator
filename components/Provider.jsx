"use client"
import React from 'react'

// tood : need to read about
import { SessionProvider } from 'next-auth/react'

const Provider = ({ children, session }) => {
  
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  )
}

export default Provider