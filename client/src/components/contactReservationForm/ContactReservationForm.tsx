import { useState } from 'react'
import axios from 'axios'
import mint from '../../assets/images/contact/Mint.png'
import './contactReservationForm.css'


const ContactReservationForm = () => {

  const [client, setClient] = useState(
    {
      firstName: "",
      lastName: "",
      email: "",
      phone: ""
    }
  )

  const [reservation, setReservation] = useState(
    {
      date: "",
      time: "06:00",
      guestsNumber: "2 people"
    }
  )

  const handleChange = (e: { target: { id: any; value: any } }) => {
    setClient((prev) => ({ ...prev, [e.target.id]: e.target.value }))
    setReservation((prev) => ({ ...prev, [e.target.id]: e.target.value }))
  }

  const handleClick = async (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    try {
      console.log(client)
      // await axios.post("/auth/register", info)
      // await axios.post("/auth/register", client)
      // await axios.post("/reservations", client)
      setClient(
        {
          firstName: "",
          lastName: "",
          email: "",
          phone: ""
        }
      )
      
      setReservation(
        {
          date: "",
          time: "06:00",
          guestsNumber: "2 people"
        }
      )
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <section id="reservation" className="contact__reservation--form">
        <div className="mint__wrapper">
          <img src={mint} alt="" className="mint__wrapper--item" />
        </div>        
        <div className="contact__reservation--form__container">
            <h1 className="contact__reservation--form__title">Make a Reservation</h1>
            <h6 className="contact__reservation--form__subtitle">Get in touch with restaurant</h6>
            <form className="contact__reservation--form__form">
                <div className="form__group">
                  <input 
                    id="firstName"
                    className="form__input form__group--item" 
                    type="text" 
                    placeholder="First Name"
                    value={client.firstName} 
                    onChange={handleChange}
                    required
                  />
                  <input 
                    id="lastName" 
                    className="form__input form__group--item" 
                    type="text" 
                    placeholder="Last Name"
                    value={client.lastName} 
                    onChange={handleChange} 
                  />
                </div>
                <input 
                  id="email" 
                  className="form__input" 
                  type="email" 
                  placeholder="Email" 
                  value={client.email}
                  onChange={handleChange} 
                  required
                />
                <input 
                  id="phone" 
                  className="form__input" 
                  type="tel" 
                  placeholder="Phone" 
                  value={client.phone}
                  onChange={handleChange}
                  required 
                />
                <div className="form__group">
                  <input 
                    id="date"
                    className="form__input form__group--item" 
                    type="date" 
                    value={reservation.date}
                    onChange={handleChange} 
                    required
                  />
                  <input 
                    id="time" 
                    className="form__input form__group--item" 
                    type="time" 
                    min="00:00"
                    max="23:59"
                    step="60"
                    value={reservation.time}
                    onChange={handleChange}
                    required
                  />
                </div>
                <select 
                    id="guestsNumber" 
                    className="form__input"
                    value={reservation.guestsNumber}
                    onChange={handleChange}
                    required
                >
                    <option value="1 person">1 person</option>
                    <option value="2 people">2 people</option>
                    <option value="3 people">3 people</option>
                    <option value="4 people">4 people</option>
                    <option value="5 people">5 people</option>
                    <option value="6 people">6 people</option>
                </select>
            </form>
            <button className="form__button" onClick={handleClick}>Book Now</button>
        </div>
    </section>
  )
}

export default ContactReservationForm