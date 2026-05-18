import HomePage from '@/components/pages/HomePage'
import React from 'react'

const page = async () => {
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  await delay(3000);
  return (
    <>
      <HomePage />
    </>
  )
}

export default page