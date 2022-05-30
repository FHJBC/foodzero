import React from 'react'
import Footer from '../../components/footer/Footer'


const MainLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
        {children}
        <Footer />
    </>
  )
}

export default MainLayout