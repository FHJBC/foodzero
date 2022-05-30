import { useState } from 'react'
import './reservation.css'

const Reservation = () => {

  const [reservation, setReservation] = useState(
    {
      date: "",
      time: "06:00",
      guestsNumber: "2 people"
    }
  )

  const handleChange = (e: { target: { id: any; value: any } }) => {
    setReservation((prev) => ({ ...prev, [e.target.id]: e.target.value }))
  }

  const handleClick = async (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    try {
      console.log(reservation)
      // await axios.post("/reservations", reservation)
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
    <section id="reservation" className="reservation">
        <div className="reservation__container">
                <h1 className="reservation__title">Make a Reservation</h1>
                <h6 className="reservation__subtitle">Get in touch with restaurant</h6>
            <form className="reservation__form">
                <input 
                    id="date" 
                    type="date" 
                    className="reservation__form--input"
                    value={reservation.date}
                    onChange={handleChange}
                    required
                />
                <input 
                    id="time" 
                    type="time" 
                    className="reservation__form--input"
                    min="00:00"
                    max="23:59"
                    step="60"
                    value={reservation.time}
                    onChange={handleChange}
                    required
                />
                <select 
                    id="guestsNumber" 
                    className="reservation__form--input reservation__form--select"
                    value={reservation.guestsNumber}
                    onChange={handleChange}
                    required
                >
                    <option value="1 person">1 person</option>
                    <option value="2 people">2 people</option>
                    <option value="3 people">3 people</option>
                    <option value="4 people">4 people</option>
                </select>
            </form>
            <button className="reservation__btn" onClick={handleClick}>Book Now</button>
        </div>
    </section>
  )
}

export default Reservation