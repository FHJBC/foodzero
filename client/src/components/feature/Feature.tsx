import carrotIcon from '../../assets/icons/carrot-icon.png'
import fishIcon from '../../assets/icons/fish-icon.png'
import lemonIcon from '../../assets/icons/lemon-icon.png'
import './feature.css'

const Feature = () => {
  return (
    <section className="features">
        <article className="feature">
            <div className="feature__img">
                <img src={fishIcon} alt="" />
            </div>
            <h1 className="feature__title">Premium quality</h1>
            <p className="feature__description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam ut ex alias aliquid, consectetur odit porro reiciendis veniam? Eaque perspiciatis cumque beatae tempore. Quae repudiandae itaque aperiam minima assumenda reprehenderit.
            </p>
        </article>
        <article className="feature">
            <div className="feature__img">
                <img src={carrotIcon} alt="" />
            </div>
            <h1 className="feature__title">Seasonal vegetables</h1>
            <p className="feature__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quibusdam at quia sunt libero modi rerum nihil nobis eveniet officiis cum incidunt velit perspiciatis eaque illum, aliquam voluptatem. Vero, quod.
            </p>
        </article>
        <article className="feature">
            <div className="feature__img">
                <img src={lemonIcon} alt="" />
            </div>
            <h1 className="feature__title">Fresh fruit</h1>
            <p className="feature__description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla dolore repellendus tenetur cum dicta alias quae asperiores hic! Tenetur eveniet fuga nisi non corrupti vero hic molestiae officia voluptatum earum!
            </p>
        </article>
    </section>
  )
}

export default Feature