import {
  TbChartArea,
  TbHeart,
  TbKey,
  TbLocation,
  TbLock,
  TbPresentation,
  TbTrophy,
  TbUser,
  TbWorld,
} from "react-icons/tb";
import story1 from "./assets/img/story-1.jpeg";
import story2 from "./assets/img/story-2.jpeg";

import house1 from "./assets/img/house-1.jpeg";
import house2 from "./assets/img/house-2.jpeg";
import house3 from "./assets/img/house-3.jpeg";
import house4 from "./assets/img/house-4.jpeg";
import house5 from "./assets/img/house-5.jpeg";
import house6 from "./assets/img/house-6.jpeg";

import gal1 from "./assets/img/gal-1.jpeg";
import gal2 from "./assets/img/gal-2.jpeg";
import gal3 from "./assets/img/gal-3.jpeg";
import gal4 from "./assets/img/gal-4.jpeg";
import gal5 from "./assets/img/gal-5.jpeg";
import gal6 from "./assets/img/gal-6.jpeg";
import gal7 from "./assets/img/gal-7.jpeg";
import gal8 from "./assets/img/gal-8.jpeg";
import gal9 from "./assets/img/gal-9.jpeg";
import gal10 from "./assets/img/gal-10.jpeg";
import gal11 from "./assets/img/gal-11.jpeg";
import gal12 from "./assets/img/gal-12.jpeg";
import gal13 from "./assets/img/gal-13.jpeg";
import gal14 from "./assets/img/gal-14.jpeg";

import logo from "./assets/img/logo.png";
import logoBBC from "./assets/img/logo-bbc.png";
import logoForbes from "./assets/img/logo-forbes.png";
import logoTechcruch from "./assets/img/logo-techcrunch.png";
import logoBi from "./assets/img/logo-bi.png";

import realtor1 from "./assets/img/realtor-1.jpeg";
import realtor2 from "./assets/img/realtor-2.jpeg";
import realtor3 from "./assets/img/realtor-3.jpeg";

function App() {
  return (
    <div>
      <div className="container">
        <div class="sidebar">
          <button class="nav-btn"></button>
        </div>

        <header class="header">
          <img src={logo} alt="Nexter logo" class="header__logo" />
          <h3 class="heading-3">Your own home:</h3>
          <h1 class="heading-1">The ultimate personal freedom</h1>
          <button class="btn header__btn">View our properties</button>
          <div class="header__seenon-text">Seen on</div>
          <div class="header__seenon-logos">
            <img src={logoBBC} alt="Seen on logo 1" />
            <img src={logoForbes} alt="Seen on logo 2" />
            <img src={logoTechcruch} alt="Seen on logo 3" />
            <img src={logoBi} alt="Seen on logo 4" />
          </div>
        </header>

        <div class="realtors">
          <h3 class="heading-3">Top 3 Realtors</h3>
          <div class="realtors__list">
            <img src={realtor1} alt="Realtor 1" class="realtors__img" />
            <div class="realtors__details">
              <h4 class="heading-4 heading-4--light">Erik Feinman</h4>
              <p class="realtors__sold">245 houses sold</p>
            </div>

            <img src={realtor2} alt="Realtor 2" class="realtors__img" />
            <div class="realtors__details">
              <h4 class="heading-4 heading-4--light">Kim Brown</h4>
              <p class="realtors__sold">212 houses sold</p>
            </div>

            <img src={realtor3} alt="Realtor 3" class="realtors__img" />
            <div class="realtors__details">
              <h4 class="heading-4 heading-4--light">Toby Ramsey</h4>
              <p class="realtors__sold">198 houses sold</p>
            </div>
          </div>
        </div>

        <section className="features">
          <div className="feature">
            <TbWorld className="feature__icon" />
            <h4 className="heading-4 heading-4--dark">
              World's best luxury homes
            </h4>
            <p className="feature__text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              distinctio necessitatibus pariatur voluptatibus.
            </p>
          </div>

          <div className="feature">
            <TbTrophy className="feature__icon" />
            <h4 className="heading-4 heading-4--dark">
              Only the best properties
            </h4>
            <p className="feature__text">
              Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus
              rerum sed a eligendi aut quia.
            </p>
          </div>

          <div className="feature">
            <TbLocation className="feature__icon" />
            <h4 className="heading-4 heading-4--dark">
              All homes in in top locations
            </h4>
            <p className="feature__text">
              Tenetur distinctio necessitatibus pariatur voluptatibus quidem
              consequatur harum.
            </p>
          </div>

          <div className="feature">
            <TbKey className="feature__icon" />
            <h4 className="heading-4 heading-4--dark">New home in one week</h4>
            <p className="feature__text">
              Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor
              sit amet consectetur adipisicing elit.
            </p>
          </div>

          <div className="feature">
            <TbPresentation className="feature__icon" />
            <h4 className="heading-4 heading-4--dark">Top 1% realtors</h4>
            <p className="feature__text">
              Quidem consequatur harum, voluptatum mollitia quae. Tenetur
              distinctio necessitatibus pariatur voluptatibus.
            </p>
          </div>

          <div className="feature">
            <TbLock className="feature__icon" />
            <h4 className="heading-4 heading-4--dark">
              Secure payments on nexter
            </h4>
            <p className="feature__text">
              Pariatur voluptatibus quidem consequatur harum, voluptatum
              mollitia quae.
            </p>
          </div>
        </section>
        <div className="story__pictures">
          <img
            src={story1}
            alt="Couple with new house"
            className="story__img--1"
          />
          <img src={story2} alt="New house" className="story__img--2" />
        </div>
        <div className="story__content">
          <h3 className="heading-3 mb-sm">Happy Customers</h3>
          <h2 className="heading-2 heading-2--dark mb-md">
            &ldquo;The best decision of our lives&rdquo;
          </h2>
          <p className="story__text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            distinctio necessitatibus pariatur voluptatibus. Quidem consequatur
            harum volupta!
          </p>
          <button className="btn">Find your own home</button>
        </div>
        <section className="homes">
          <div className="home">
            <img src={house1} alt="House 1" className="home__img" />
            <TbHeart className="home__like" />
            <h5 className="home__name">Beautiful Familiy House</h5>
            <div className="home__location">
              <TbLocation />
              <p>USA</p>
            </div>
            <div className="home__rooms">
              <TbUser />
              <p>5 rooms</p>
            </div>
            <div className="home__area">
              <TbChartArea />
              <p>
                325 m<sup>2</sup>
              </p>
            </div>
            <div className="home__price">
              <TbKey />
              <p>$1,200,000</p>
            </div>
            <button className="btn home__btn">Contact realtor</button>
          </div>

          <div className="home">
            <img src={house2} alt="House 2" className="home__img" />
            <TbHeart className="home__like" />
            <h5 className="home__name">Modern Glass Villa</h5>
            <div className="home__location">
              <TbLocation />
              <p>Canada</p>
            </div>
            <div className="home__rooms">
              <svg>
                <use xlink="img/sprite.svg#icon-profile-male"></use>
              </svg>
              <TbUser />
            </div>
            <div className="home__area">
              <TbChartArea />

              <p>
                450 m<sup>2</sup>
              </p>
            </div>
            <div className="home__price">
              <TbKey />
              <p>$2,750,000</p>
            </div>
            <button className="btn home__btn">Contact realtor</button>
          </div>

          <div className="home">
            <img src={house3} alt="House 3" className="home__img" />
            <TbHeart className="home__like" />
            <h5 className="home__name">Cozy Country House</h5>
            <div className="home__location">
              <TbLocation />
              <p>UK</p>
            </div>
            <div className="home__rooms">
              <TbUser />
              <p>4 rooms</p>
            </div>
            <div className="home__area">
              <TbChartArea />

              <p>
                250 m<sup>2</sup>
              </p>
            </div>
            <div className="home__price">
              <TbKey />
              <p>$850,000</p>
            </div>
            <button className="btn home__btn">Contact realtor</button>
          </div>

          <div className="home">
            <img src={house4} alt="House 4" className="home__img" />
            <TbHeart className="home__like" />
            <h5 className="home__name">Large Rustical Villa</h5>
            <div className="home__location">
              <TbLocation />
              <p>Portugal</p>
            </div>
            <div className="home__rooms">
              <TbUser />
              <p>6 rooms</p>
            </div>
            <div className="home__area">
              <TbChartArea />

              <p>
                480 m<sup>2</sup>
              </p>
            </div>
            <div className="home__price">
              <TbKey />
              <p>$1,950,000</p>
            </div>
            <button className="btn home__btn">Contact realtor</button>
          </div>

          <div className="home">
            <img src={house5} alt="House 5" className="home__img" />
            <TbHeart className="home__like" />
            <h5 className="home__name">Majestic Palace House</h5>
            <div className="home__location">
              <TbLocation />
              <p>Germany</p>
            </div>
            <div className="home__rooms">
              <TbUser />
              <p>18 rooms</p>
            </div>
            <div className="home__area">
              <TbChartArea />

              <p>
                4230 m<sup>2</sup>
              </p>
            </div>
            <div className="home__price">
              <TbKey />
              <p>$9,500,000</p>
            </div>
            <button className="btn home__btn">Contact realtor</button>
          </div>

          <div className="home">
            <img src={house6} alt="House 6" className="home__img" />
            <TbHeart className="home__like" />
            <h5 className="home__name">Modern Familiy Apartment</h5>
            <div className="home__location">
              <TbLocation />
              <p>Italy</p>
            </div>
            <div className="home__rooms">
              <TbUser />
              <p>3 rooms</p>
            </div>
            <div className="home__area">
              <TbChartArea />

              <p>
                180 m<sup>2</sup>
              </p>
            </div>
            <div className="home__price">
              <TbKey />
              <p>$600,000</p>
            </div>
            <button className="btn home__btn">Contact realtor</button>
          </div>
        </section>
        <section className="gallery">
          <figure className="gallery__item gallery__item--1">
            <img src={gal1} alt="Gallery image 1" className="gallery__img" />
          </figure>
          <figure className="gallery__item gallery__item--2">
            <img src={gal2} alt="Gallery image 2" className="gallery__img" />
          </figure>
          <figure className="gallery__item gallery__item--3">
            <img src={gal3} alt="Gallery image 3" className="gallery__img" />
          </figure>
          <figure className="gallery__item gallery__item--4">
            <img src={gal4} alt="Gallery image 4" className="gallery__img" />
          </figure>
          <figure className="gallery__item gallery__item--5">
            <img src={gal5} alt="Gallery image 5" className="gallery__img" />
          </figure>
          <figure className="gallery__item gallery__item--6">
            <img src={gal6} alt="Gallery image 6" className="gallery__img" />
          </figure>
          <figure className="gallery__item gallery__item--7">
            <img src={gal7} alt="Gallery image 7" className="gallery__img" />
          </figure>
          <figure className="gallery__item gallery__item--8">
            <img src={gal8} alt="Gallery image 8" className="gallery__img" />
          </figure>
          <figure className="gallery__item gallery__item--9">
            <img src={gal9} alt="Gallery image 9" className="gallery__img" />
          </figure>
          <figure className="gallery__item gallery__item--10">
            <img src={gal10} alt="Gallery image 10" className="gallery__img" />
          </figure>
          <figure className="gallery__item gallery__item--11">
            <img src={gal11} alt="Gallery image 11" className="gallery__img" />
          </figure>
          <figure className="gallery__item gallery__item--12">
            <img src={gal12} alt="Gallery image 12" className="gallery__img" />
          </figure>
          <figure className="gallery__item gallery__item--13">
            <img src={gal13} alt="Gallery image 13" className="gallery__img" />
          </figure>
          <figure className="gallery__item gallery__item--14">
            <img src={gal14} alt="Gallery image 14" className="gallery__img" />
          </figure>
        </section>
        <footer className="footer">
          <ul className="nav">
            <li className="nav__item">
              <a href="#" className="nav__link">
                Find your dream home
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                Request proposal
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                Download home planner
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                Contact us
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                Submit your property
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                Come work with us!
              </a>
            </li>
          </ul>
          <p className="copyright">&copy; Copyright 2022 by Seyir Yazilim.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
