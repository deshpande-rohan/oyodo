import Card from '../Card';
import Picture1 from '../../assets/picture-1.jpg';
import Picture2 from '../../assets/picture-2.jpg';
import Picture3 from '../../assets/picture-3.jpg';
import Picture4 from '../../assets/picture-4.jpg';
import Picture5 from '../../assets/picture-5.jpg';
import './Articles.css';

const articlesData = [
  {
    img: Picture1,
    heading: 'Lorem Cras Pellentesque',
    direction: 'vertical',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
  },
  {
    img: Picture2,
    heading: 'Lorem Cras Pellentesque',
    direction: 'vertical',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  },
  {
    img: Picture3,
    heading: 'Lorem Cras Pellentesque',
    direction: 'vertical',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
  },
  {
    img: Picture4,
    heading: 'Lorem Cras Pellentesque',
    direction: 'vertical',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut'
  },
  {
    img: Picture5,
    heading: 'Lorem Cras Pellentesque',
    direction: 'vertical',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
];

const Articles = () => {
  return (
    <section className="articles__container">
      <div className="articles__content-wrapper">
        <h2 className="articles__heading">
          <span>Related Articles</span>
        </h2>
        <div className="articles__list">
          {
            articlesData.map((article) => (
              <Card
                img={article.img}
                heading={article.heading}
                description={article.desc}
                dir={article.direction}
                key={Math.random() * 1000}
              />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Articles;