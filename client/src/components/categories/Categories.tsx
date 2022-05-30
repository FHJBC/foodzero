import startersImg from '../../assets/images/home/calories-energy-starters-img.png' 
import mainsImg from '../../assets/images/home/calories-energy-mains-img.png' 
import soupsImg from '../../assets/images/home/calories-energy-soups-img.png'
import arrowIconRight from '../../assets/images/home/arrow-icon-right.png' 
import './categories.css'

const Categories = () => {
  return (
    <section className="categories">
        <div className="categories__headline">
            <h1 className="categories__title">Calories energy balance</h1>
            <h6 className="categories__subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. </h6>
        </div>
        <div className="categories__container">
            <article className="category">
                <img src={startersImg} alt="" className="category__img" />
                <div className="category__heading">
                    <h4><img src={arrowIconRight} alt="" className="arrowIconRight" /></h4>
                    <h1 className="category__name">Starters</h1>
                </div>
            </article>
            <article className="category">
                <img src={mainsImg} alt="" className="category__img" />
                <div className="category__heading">
                    <h4><img src={arrowIconRight} alt="" className="arrowIconRight" /></h4>
                    <h1 className="category__name">Mains</h1>
                </div>
            </article>
            <article className="category">
                <img src={soupsImg} alt="" className="category__img" />
                <div className="category__heading">
                    <h4><img src={arrowIconRight} alt="" className="arrowIconRight" /></h4>
                    <h1 className="category__name">Soups</h1>
                </div>
            </article>
        </div>
    </section>
  )
}

export default Categories