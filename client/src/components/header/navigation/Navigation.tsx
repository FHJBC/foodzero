import { Link } from 'react-router-dom'
import logo from '../../../assets/images/home/Logo.png'
import naviOpen from '../../../assets/images/home/NaviOpen.png'
import './navigation.css'

const Navigation = () => {
  return (
    <div className='navigation'>
        <div className="navigation__container">
            <div className="navigation__items">
                
                <img className="logo" src={logo} alt="" />
                
                <button className="navigation__items--left__btn">
                    <img src={naviOpen} alt="" />
                </button>
            </div>
            
            <div className="navigation__items navigation__items--right">

                <Link to="/" className="navlink">
                    Home
                </Link>

                <Link to="/menu" className="navlink">
                    Menu
                </Link>
                <Link to="/about" className="navlink">
                    About
                </Link>
                <Link to="/contact" className="navlink">
                    Contact
                </Link>
                <span>
                    +88 852 346 000
                </span>
                <a href="#reservation">Reservations</a>
            </div>
        </div>
        
    </div>
  )
}

export default Navigation