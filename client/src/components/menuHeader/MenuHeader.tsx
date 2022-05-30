import Navigation from '../header/navigation/Navigation'
import bgHeader from '../../assets/images/menu/header-menu-bg.png'
import './menuHeader.css'

const MenuHeader = () => {
  return (
    <section className="header" style={{ 
            backgroundImage: `url(${bgHeader})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
        <Navigation />
        <div className="headline">
            <h1 className="headline__title">View our menu</h1>
            <p className="headline__subtitle">The freshest ingredients for you every day</p>
        </div>       
    </section>
  )
}

export default MenuHeader