import orange from '../../assets/images/contact/Orange.png';
import img1 from '../../assets/images/contact/img1.png';
import img2 from '../../assets/images/contact/img2.png';
import './contactBody.css'

const ContactBody = () => {
  return (
    <section className="contact">
        <div className="contact__container">
            <div className="contact__heading--img">
                <img src={orange} alt="" />
            </div>
            
            <div className="contact__info">
                <div className="contact__img">
                    <img src={img1} alt="" />
                </div>
                <p>
                    We can be contacted via email <span>info@foodzero.com</span> <br /> 
                    or telephone on <span>+86 852 346 000</span>
                </p>
            </div>
            <div className="contact__address">
                <div>
                    <p>
                        We are located in <span>1959 Sepulveda Blvd. Culver</span> <br /> 
                        <span>City, CA, 90230</span>
                    </p>
                    <div>
                        <button>View in maps</button>
                    </div>
                </div>
                <div className="contact__img">
                    <img src={img2} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactBody