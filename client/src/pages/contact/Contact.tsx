import React from 'react'
import ContactBody from '../../components/contactBody/ContactBody'
import ContactHeader from '../../components/contactHeader/ContactHeader'
import ContactReservationForm from '../../components/contactReservationForm/ContactReservationForm'
import Footer from '../../components/footer/Footer'
import MainLayout from '../../layouts/mainLayout/MainLayout'

const Contact = () => {
  return (
    <>
      <ContactHeader />
      <ContactBody />
      <ContactReservationForm />
      <Footer />
    </>
  )
}

export default Contact