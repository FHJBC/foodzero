import Navigation from '../header/navigation/Navigation'
import bgHeader from '../../assets/images/contact/bg-header.png'
import './contactHeader.css'

const ContactHeader = () => {
  return (
    <section className="header" style={{ 
            backgroundImage: `url(${bgHeader})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
        <Navigation />
        {/* <img src={bgHeader} alt="" /> */}
        <div className="headline">
            <h1 className="headline__title">Get in touch</h1>
            <p className="headline__subtitle">The freshest ingredients for you every day!</p>
        </div>
        <div className="opentime">
            <div className="opentime__workdays">
                <span>Open Time</span>
                <span>Sunday - Friday</span>
            </div>
            <hr />
            <div className="opentime__hours">
                <div className="opentime__hours--brunch">
                    <p>Brunch</p>
                    <p>11:00-12:00</p>
                </div>
                <div className="opentime__hours--lunch">
                    <p>Lunch</p>
                    <p>13:00-17:00</p>
                </div>
                <div className="opentime__hours--dinner">
                    <p>Dinner</p>
                    <p>18:00-20:00</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactHeader