import blueBerry from '../../assets/images/menu/Blueberry.png'
import startersImg from '../../assets/images/menu/starters-img-bg.png'
import mainsImg from '../../assets/images/menu/mains-img-bg.png'
import pastriesDrinksImg from '../../assets/images/menu/pastries-drinks-img-bg.png'
import avocado from '../../assets/images/menu/Avocado.png'
import './menuBody.css'

const MenuBody = () => {
  return (
    <section className="menus">
        <div className="menus__container">
            <div className="menu__heading--img">
                <img src={blueBerry} alt="" />
            </div>
            
            <div className="menu">
                <h1 className="menu__title">
                    Starters
                </h1>
                <p className="menu__description">
                    This is a section of your menu. Give your menu a brief description
                </p>
                <div className="menu__wrapper">
                    <div className="menu__img">
                        <img src={startersImg} alt="" />
                    </div>
                    <div className="menu__list">
                        <div className="menu__item">
                            <h4 className="menu__item--price">$20</h4>
                            <h1 className="menu__item--title">Grilled Okra and Tomatoes</h1>
                            <p className="menu__item--description">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            </p>
                        </div>
                        <div className="menu__item">
                            <h4 className="menu__item--price">$18</h4>
                            <h1 className="menu__item--title">cucumber salad</h1>
                            <p className="menu__item--description">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            </p>
                        </div>
                        <div className="menu__item">
                            <h4 className="menu__item--price">$12</h4>
                            <h1 className="menu__item--title">basil pancakes</h1>
                            <p className="menu__item--description">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="menu">
                <h1 className="menu__title">
                    Mains
                </h1>
                <p className="menu__description">
                    This is a section of your menu. Give your menu a brief description
                </p>
                <div className="menu__wrapper">                    
                    <div className="menu__list">
                        <div className="menu__item">
                            <h4 className="menu__item--price">$20</h4>
                            <h1 className="menu__item--title">deep sea snow white cod fillet</h1>
                            <p className="menu__item--description">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            </p>
                        </div>
                        <div className="menu__item">
                            <h4 className="menu__item--price">$22</h4>
                            <h1 className="menu__item--title">steak with rosemay butter</h1>
                            <p className="menu__item--description">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            </p>
                        </div>
                        <div className="menu__item">
                            <h4 className="menu__item--price">$20</h4>
                            <h1 className="menu__item--title">steaks with grilled kimchi</h1>
                            <p className="menu__item--description">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            </p>
                        </div>
                    </div>
                    <div className="menu__img">
                        <img src={mainsImg} alt="" />
                    </div>
                </div>
            </div>

            <div className="menu">
                <img src={avocado} alt="" className="avocado" />
                <h1 className="menu__title menu__pastries">
                    Pastries & Drinks
                </h1>
                <p className="menu__description">
                    This is a section of your menu. Give your menu a brief description
                </p>
                <div className="menu__wrapper">
                    <div className="menu__img">
                        <img src={pastriesDrinksImg} alt="" />
                    </div>
                    <div className="menu__list">
                        <div className="menu__item">
                            <h4 className="menu__item--price">$158</h4>
                            <h1 className="menu__item--title">wine pairing</h1>
                            <p className="menu__item--description">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            </p>
                        </div>
                        <div className="menu__item">
                            <h4 className="menu__item--price">$168</h4>
                            <h1 className="menu__item--title">natural wine pairing</h1>
                            <p className="menu__item--description">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            </p>
                        </div>
                        <div className="menu__item">
                            <h4 className="menu__item--price">$90</h4>
                            <h1 className="menu__item--title">whisky flyer</h1>
                            <p className="menu__item--description">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default MenuBody