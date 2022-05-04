import React from 'react';
import Bars from '../../assets/bars.svg';
import './Navbar.css';

const Navbar = () => {
  return (
    /* eslint-disable jsx-a11y/anchor-is-valid */
    <section className='navbar__container'>
      <nav className="navbar__content-wrapper">
        <h2 className="navbar__brand-name">OYODO</h2>
        <input type="checkbox" id="menu" />
        <label htmlFor="menu" className='navbar__menu-button'>
          <img src={Bars} alt="Menu icon" />
        </label>
        <ul className="navbar__links">
          <li className="navbar__link navbar__link--active"><a href="#">Home</a></li>
          <li className="navbar__link"><a href="#">Dapibus</a></li>
          <li className="navbar__link"><a href="#">ULTricies</a></li>
          <li className="navbar__link"><a href="#">bibendum</a></li>
          <li className="navbar__link"><a href="#">magna</a></li>
        </ul>
      </nav>
    </section>
  )
}

export default Navbar