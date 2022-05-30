import leaf1 from '../../assets/images/home/Leaf1.png';
import leaf2 from '../../assets/images/home/Leaf2.png';
import manInBlackCrew from '../../assets/images/home/man-in-black-crew-neck-t-shirt-eating 1.png';
import woodenRoundPlate from '../../assets/images/home/brown-wooden-round-plate-with-food 1.png';
import './chef.css';

const Chef = () => {
  return (
    <section className="chef">
      <div className="chef__container">
        <img src={leaf1} alt="" className="chef__img--leaf" />
        <div className="chef__wrapper">
          <div className="chef__img">
            <img
              src={woodenRoundPlate}
              alt=""
              className="chef__img--item1"
            />
            <img
              src={manInBlackCrew}
              alt=""
              className="chef__img--item2"
            />
          </div>

          <div className="chef__info">
            <h1 className="chef__info--title">Excellent cook</h1>
            <p className="chef__info--description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
              modi voluptas? Culpa, reprehenderit. Vel ducimus deleniti, id
              ullam laborum eum doloribus ipsa commodi. In dignissimos, quos
              consequatur quam deleniti debitis!
            </p>
          </div>
        </div>

        <img src={leaf2} alt="" className="chef__info--leaf" />
      </div>
    </section>
  );
};

export default Chef;
