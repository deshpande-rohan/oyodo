import './Card.css';

const Card = ({ img, heading, description, dir }) => {
    return (
        <div className={`card__container ${dir === 'vertical' ? 'card__vertical' : 'card__horizontal'}`}>
            <div className="card__section--1">
                <img src={img} alt="article glance" />
            </div>
            <div className="card__section--2">
                <h2 className="card__heading">
                    {heading}
                </h2>
                <p className="card__description">
                    {description}
                </p>
            </div>
        </div>
    )
};

export default Card;