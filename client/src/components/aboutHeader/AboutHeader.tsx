import Navigation from '../header/navigation/Navigation'
import bgHeader from '../../assets/images/about/bg-header.png'
import './aboutHeader.css'

const AboutHeader = () => {
  return (
    <section className="header" style={{ 
            backgroundImage: `url(${bgHeader})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
        <Navigation />
        <div className="headline">
            <h1 className="headline__title">Who we are</h1>
            <p className="headline__subtitle">
                The most important thing for us is to give you the comfortable dining experience
            </p>
        </div>       
    </section>
  )
}

export default AboutHeader