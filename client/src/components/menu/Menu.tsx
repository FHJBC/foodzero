import ourMenuRightImg from '../../assets/images/home/our-menu-right-img.png';
import './menu.css';

const Menu = () => {
  return (
    <section className="menu">
      <div className="menu__container">
        <div className="menu__heading">
          <div className="menu__heading--info">
            <h1>Our menu</h1>
            <p>
              This is a section of your menu. Give your section a brief
              description
            </p>
          </div>
          <div className="menu__heading--img">
            <img src={ourMenuRightImg} alt="" />
          </div>
        </div>
        <div className="menu__items">
            <div className="menu__item">
                <h2 className="menu__item--price">$20</h2>
                <h1 className="menu__item--title">Deep See Snow White code fillet</h1>
                <p className="menu__item--description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eos ab temporibus soluta exercitationem at in iste, consectetur, deleniti distinctio quo repellendus nam voluptatem? Optio quidem nesciunt illum quod nam!</p>
            </div>
            <div className="menu__item">
                <h2 className="menu__item--price">$20</h2>
                <h1 className="menu__item--title">steak with rosemary butter</h1>
                <p className="menu__item--description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eos ab temporibus soluta exercitationem at in iste, consectetur, deleniti distinctio quo repellendus nam voluptatem? Optio quidem nesciunt illum quod nam!</p>
            </div>
            <div className="menu__item">
                <h2 className="menu__item--price">$20</h2>
                <h1 className="menu__item--title">cucumber salad</h1>
                <p className="menu__item--description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eos ab temporibus soluta exercitationem at in iste, consectetur, deleniti distinctio quo repellendus nam voluptatem? Optio quidem nesciunt illum quod nam!</p>
            </div>
            <div className="menu__item">
                <h2 className="menu__item--price">$20</h2>
                <h1 className="menu__item--title">natural wine pairing</h1>
                <p className="menu__item--description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eos ab temporibus soluta exercitationem at in iste, consectetur, deleniti distinctio quo repellendus nam voluptatem? Optio quidem nesciunt illum quod nam!</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
