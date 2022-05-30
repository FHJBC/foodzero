import React from 'react'
import Footer from '../../components/footer/Footer'
import MenuBody from '../../components/menuBody/MenuBody'
import MenuHeader from '../../components/menuHeader/MenuHeader'
import Reservation from '../../components/reservation/Reservation'
import MainLayout from '../../layouts/mainLayout/MainLayout'

const Menu = () => {
  return (
    <>
      <MenuHeader />
      <MenuBody />
      <Reservation />
      <Footer />
    </>
  )
}

export default Menu