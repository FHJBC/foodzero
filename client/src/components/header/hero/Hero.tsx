import HomeHeaderImgBg from '../../../assets/images/home/home-header-img-bg.png';
import Spice1 from '../../../assets/images/home/spices1.png';
import Spice2 from '../../../assets/images/home/spices2.png';
import Spice3 from '../../../assets/images/home/spices3.png';
import StartToPlanImg1 from '../../../assets/images/home/start-to-plan-img1.png';
import StartToPlanImg2 from '../../../assets/images/home/start-to-plan-img2.png';
import './hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__container">
        <div className="hero__top">
          <div className="hero__top--info">
            <h1 className="hero__top--info__title">
              Healthy Eating is important part of lifestyle
            </h1>
            <p className="hero__top--info__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, perferendis numquam sapiente soluta necessitatibus ea
              illum, esse cum id enim quibusdam recusandae. Sed excepturi
              sapiente voluptatem recusandae aperiam deserunt ipsam!
            </p>
          </div>
          <div className="hero__top--img">
            <div className="hero__top--img__wrapper">
              <img src={HomeHeaderImgBg} alt="" className="hero__top--img1" />
            </div>
            <div className="spices">
              <img src={Spice1} alt="" className="spice" />
              <img src={Spice2} alt="" className="spice" />
              <img src={Spice3} alt="" className="spice" />
            </div>
          </div>
        </div>
        <div className="hero__bottom">
            <div className="hero__bottom--left">
                <img src={StartToPlanImg1} alt="" />
                <h1>Start to plan <br /> your diet today</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ab nulla sapiente ducimus. Possimus itaque similique excepturi hic recusandae at vel, totam veniam quos dignissimos, distinctio voluptatem nihil dolore. Temporibus?</p>
            </div>
            <div className="hero__bottom--right">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur voluptatem suscipit officia eaque tempora hic, minus dolorum fugiat maxime nobis nisi harum natus vel tenetur est et laudantium non libero?</p>
                <img src={StartToPlanImg2} alt="" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
