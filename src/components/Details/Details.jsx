import './Details.css';
import Card from '../Card';
import Picture6 from '../../assets/picture-6.jpg';
import Picture7 from '../../assets/picture-7.jpg';
import User from '../../assets/user.jpg';
import City from '../../assets/city.jpg';
import Map from '../../assets/map.jpg';

const cardsData = [
    {
        img: Picture6,
        heading: 'Lorem Cras Pellentesque',
        direction: 'horizontal',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut consectetur adipiscing elit, sed do eiusmod tempor incididunt ut'
    },
    {
        img: Picture7,
        heading: 'Lorem Cras Pellentesque',
        direction: 'horizontal',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut consectetur adipiscing elit, sed do eiusmod tempor incididunt ut'
    }
];

const Details = () => {
  return (
    <main className="details__container">
        <div className="details__content-wrapper">
            <section className="details__section--1">
                <div className="details__info">
                    <h2 className="info__heading">Justo Vulputate Tortor Sem</h2>
                    <p className="info__desc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, sapiente aperiam, ut asperiores quo, saepe facere maiores ipsa consectetur quod nulla laboriosam suscipit. Eaque voluptas autem, voluptatem doloremque delectus suscipit.
                    </p>

                    <div className="details__description">
                        <p className="info__paragraph">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus odit laudantium repellat! Totam ab aliquam eveniet magnam veritatis reprehenderit, quo rerum minus illum quisquam, labore atque iusto, beatae obcaecati deserunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, et!
                        </p>
                        <div className="details__block">
                            <figure className="details__blockquote">
                                <blockquote className='details__blockquote--quote'>
                                    <p>Words can be like X-rays, if you use them properly—they’ll go through anything. You read and you’re pierced.</p>
                                </blockquote>
                                <figcaption className='details__blockquote--author'>— Jane Doe</figcaption>
                            </figure>
                            <p className="info__paragraph">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo rem ad ex? Eos laborum quo nobis iste et dolor neque? Quam tempore, eligendi qui voluptate nihil doloribus magnam fugiat non architecto sapiente incidunt assumenda! Velit perferendis quidem tempore laborum similique! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sequi dicta exercitationem esse libero. Natus fugit error omnis sed repellendus minus aspernatur quo libero. Ipsum aut harum rerum velit quas. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam doloremque culpa quam eligendi quidem est perspiciatis, voluptatem corporis eum obcaecati id autem mollitia nulla quibusdam ea. Eaque maiores doloribus maxime.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="details__extras">
                    <h2 className="details__heading">
                        <span>More in this series</span>
                    </h2>
                    <div className="extras__list">
                        {
                            cardsData.map((card) => (
                                <Card 
                                    img={card.img}
                                    heading={card.heading}
                                    description={card.desc}
                                    dir={card.direction}
                                    key={Math.random() * 100}
                                />
                            ))
                        }
                    </div>
                </div>
            </section>
            <section className="details__section--2">
                <div className="details__submenu">
                    <h2 className="submenu__heading">Submenu</h2>
                    <ul className="submenu__list">
                        <li className="submenu__list--item">Home</li>
                        <li className="submenu__list--item submenu__list--item-active">Example</li>
                        <li className="submenu__list--item">Contact</li>
                        <li className="submenu__list--item">About</li>
                    </ul>
                </div>
                <div className="details__profile">
                    <div className="profile__header">
                        <img src={City} alt="background" className="profile__background" />
                        <img src={User} alt="User Avatar" className="profile__avatar" />
                    </div>
                    <div className="profile__details">
                        <div className="profile__detail profile__detail--name">
                            <h2>Name</h2>
                            <p>Nomen shgig</p>
                        </div>
                        <div className="profile__detail profile__detail--name">
                            <h2>Email</h2>
                            <p>nomen@gmail.com</p>
                        </div>
                        <div className="profile__detail profile__detail--name">
                            <h2>Phone</h2>
                            <p>88888 88888</p>
                        </div>
                    </div>
                    <div className="details__message">
                        <h2 className="message__heading">Send me a message</h2>
                        <form className='message__form'>
                            <div className="message__field">
                                <label htmlFor="subject">Subject</label>
                                <input type="text" id="subject" />
                            </div>
                            <div className="message__field">
                                <label htmlFor="msg">Message</label>
                                <textarea id="msg" />
                            </div>
                            <button type='submit'>Send</button>
                        </form>
                    </div>
                    <div className="details__location">
                        <h2 className="location__heading">Or meet me at the office</h2>
                        <div className="location__block">
                            <img src={Map} alt="Location" className="location-img" />
                            <div className="location-address">
                                <p>ONE MIDTOWN</p>
                                <p>11 Hoi Shing Road</p>
                                <p>Tseun Wan</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </main>
  )
};

export default Details;