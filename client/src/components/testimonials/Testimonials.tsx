import quoteImg from '../../assets/images/home/quotation-mark.png'
import avatar from '../../assets/images/home/Avatar.png'
import arrowIconLeft from '../../assets/images/home/arrow-icon-left.png'
import arrowIconRight from '../../assets/images/home/arrow-icon-right.png'
import './testimonials.css'

const Testimonials = () => {
  return (
    <section className="testimonials">
        <div className="testimonial__container">
            <article className="testimonial">
            <div className="testimonial__quotation">
                <img src={quoteImg} alt="" className="quoteImg" />
                <p className="testimonial__quote">
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum dolorum cupiditate aliquam labore explicabo illum aut saepe eligendi facere. Inventore in fuga hic veniam dolores unde eligendi facilis, ratione sunt.
                </p>
            </div>
            <div className="client">
                <div className="client__info">
                    <img src={avatar} alt="" className="client__avatar" />
                    <div className="client__title">
                        <h1 className="client__username">John Doe</h1>
                        <p className="client__profession">Blogger</p>
                    </div>
                </div>
                <div className="client__navigation">
                    <img src={arrowIconLeft} className="arrow-icon arrow-icon-left" />
                        <span>2/3</span>
                    <img src={arrowIconRight} className="arrow-icon arrow-icon-right" />
                </div>
            </div>
        </article>
        </div>
        
    </section>
  )
}

export default Testimonials