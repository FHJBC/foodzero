import facebookIcon from '../../assets/images/home/facebook-icon.png'
import instagramIcon from '../../assets/images/home/instagram-icon.png'
import twitterIcon from '../../assets/images/home/twitter-icon.png'
import youtubeIcon from '../../assets/images/home/youtube-icon.png'
import './footer.css'

const Footer = () => {
  return (
    <section className="footer">
        <div className="footer__top">
            <h1>Food <br /> Zero.</h1>
            <div className="contact">
                    <h1>Contact</h1>
                    <div className="contact__list">
                        <p className="contact__phone">+1+86 852 346 000</p>
                        <p className="contact__email">info@foodzero.com</p>
                    </div>
                    <div className="address">
                        <p className="address__street">1959 Sepulveda Blvd.</p>
                        <p className="address__city">Culver City, CA, 90230</p>
                    </div>
            </div>

            <div className="subscription">
                <h1 className="subscription__title">Never miss a recipe</h1>
                <form className="subscription__form">
                    <div className="input__group">
                        <input type="email" name="email" id="email" placeholder="Email Address" className="input__group--email" />
                        <input type="button" value="Subscribe" className="input__group--button" />
                    </div>
                    <p>
                        Join our subscribers and get best recipe delivered each week!
                    </p>
                </form>
            </div>
        </div>
        <hr />
        <div className="footer__bottom">
            <p>
                &copy; {new Date().getFullYear()} Zero Inc. All rights reserved
            </p>
            <ul className="social__links">
                <li className="social__link">
                    <img src={instagramIcon} alt="" />
                </li>
                <li className="social__link">
                    <img src={twitterIcon} alt="" />
                </li>
                <li className="social__link">
                    <img src={facebookIcon} alt="" />
                </li>
                <li className="social__link">
                    <img src={youtubeIcon} alt="" />
                </li>
            </ul>
        </div>
    </section>
  )
}

export default Footer