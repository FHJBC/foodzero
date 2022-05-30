import ourStoryImg from '../../assets/images/about/our-story-img.png'
import tomato from '../../assets/images/about/Tomato.png'
import restaurantManager from '../../assets/images/about/restaurant-manager.png'
import './aboutBody.css'

const AboutBody = () => {
  return (
    <>
        <section className="ourStory__container">
            <img src={tomato} alt="" className="ourStory__icon" />
            <div className="ourStory__wrapper">
                <div className="ourStory">
                    <h1 className="ourStory__title">Our story</h1>
                    <p className="ourStory__description">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel repellendus consequuntur natus ullam animi facilis, accusantium, voluptatibus porro atque exercitationem ad aperiam voluptate quod placeat quas deleniti in incidunt saepe.
                    </p>
                </div>
                <img src={ourStoryImg} alt="" className="ourStory__photo" />
            </div>
        </section>
        <section className="restaurantManager__container">
            <div className="restaurantManager">
                <div className="left">
                    <h1 className="restaurantManager__title">Restaurant Manager</h1>
                    <h4 className="restaurantManager__name">Carson Hugn</h4>
                    <img className="restaurantManager__photo" src={restaurantManager} alt="" />
                </div>
                <div className="right">
                    <p className="restaurantManager__description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, nihil. Deleniti molestias molestiae, neque aperiam optio deserunt recusandae nemo quaerat quasi magni aliquid expedita saepe culpa quae ipsa eligendi qui?
                    </p>
                </div>
            </div>
            
        </section>
    </>
  )
}

export default AboutBody