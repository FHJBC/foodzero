import featureImg1 from '../../assets/images/home/Feature Image 1.png'
import featureImg2 from '../../assets/images/home/Feature Image 2.png'
import arrowIconRight from '../../assets/images/home/arrow-icon-right.png'
import avatar from '../../assets/images/home/Avatar.png'
import julieChristie from '../../assets/images/home/julie-christie-img.png'
import dianneRussell from '../../assets/images/home/dianne-russell-img.png'
import './blogPosts.css'

const BlogPost = () => {
  return (
    <section className="blog__posts">
        <article className="blog__post">
            <div className="blog__post--img">
                <img src={featureImg1} alt="" className="blog__post--featureImg" />
                <button className="blog__post--fashion__btn">Fashion</button>
            </div>
            <div className="blog__post--comment">
                <div className="blog__post--comment__wrapper">
                    <img src={julieChristie} alt="" className="blog__post--comment__avatar" />
                    <span className="blog__post--comment__username">Julie Christie - </span>
                    <span className="blog__post--comment__date">October 17, 2021 - 3:33 pm </span>
                    <span className="blog__post--comment__number">2 comments</span>
                </div>
            </div>
            <div className="blog__post--text">
                <h1 className="blog__post--title">Fruit and vegetables and protection against diseases</h1>
                <p className="blog__post--body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, labore deserunt mollitia dignissimos quae commodi, velit deleniti id tempore earum, molestias voluptatum? Suscipit sit temporibus quisquam, vitae debitis nihil reiciendis!
                </p>
                <button className="blog__post--btn">
                    Read More <img src={arrowIconRight} alt="" />
                </button>
            </div>
        </article>
        <article className="blog__post">
            <div className="blog__post--img">
                <img src={featureImg2} alt="" className="blog__post--featureImg" />
                <button className="blog__post--fashion__btn">Fashion</button>
            </div>
            <div className="blog__post--comment">
                <div className="blog__post--comment__wrapper">
                    <img src={dianneRussell} alt="" className="blog__post--comment__avatar" />
                    <span className="blog__post--comment__username">Dianne Russel - </span>
                    <span className="blog__post--comment__date">October 17, 2021 - 3:33 pm </span>
                    <span className="blog__post--comment__number">2 comments</span>
                </div>          
            </div>
            <div className="blog__post--text">
                <h1 className="blog__post--title">Asparagus spring salad with Rocket, Goat's Cheese</h1>
                <p className="blog__post--body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, labore deserunt mollitia dignissimos quae commodi, velit deleniti id tempore earum, molestias voluptatum? Suscipit sit temporibus quisquam, vitae debitis nihil reiciendis!
                </p>
                <button className="blog__post--btn">
                    Read More <img src={arrowIconRight} alt="" />
                </button>
            </div>
        </article>
    </section>
  )
}

export default BlogPost