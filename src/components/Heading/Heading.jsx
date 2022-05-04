import React from 'react';
import './Heading.css';

const Heading = () => {
  return (
    <section className="heading__container">
        <div className="heading__content-wrapper">
            <h2 className="heading__text">
                Duis mollis, est non commodo luctus,<br />
                nisi erat porttitor ligula, eget lacinia odio<br />
                sem nec elit.
            </h2> 
        </div>
    </section>
  )
}

export default Heading