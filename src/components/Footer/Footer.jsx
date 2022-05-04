import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        /* eslint-disable jsx-a11y/anchor-is-valid */
        <footer className="footer__container">
            <div className="footer__content--wrapper">
                <div className="footer__subsections">
                    <div className="footer__subsection footer__subsection--about">
                        <h2 className="subsection__heading">About us</h2>
                        <div className="subsection__links">
                            <a href="#" className="subsection__link">weh woghiw</a>
                            <a href="#" className="subsection__link">owefj wefwoe</a>
                            <a href="#" className="subsection__link">woie</a>
                            <a href="#" className="subsection__link">eoihfefe</a>
                        </div>
                    </div>
                    <div className="footer__subsection footer__subsection--lega">
                        <h2 className="subsection__heading">Legal</h2>
                        <div className="subsection__links">
                            <a href="#" className="subsection__link">weh woghiw</a>
                            <a href="#" className="subsection__link">owefj wefwoe</a>
                            <a href="#" className="subsection__link">eoihfefe</a>
                        </div>
                    </div>
                    <div className="footer__subsection footer__subsection--dev">
                        <h2 className="subsection__heading">Developers</h2>
                        <div className="subsection__links">
                            <a href="#" className="subsection__link">weh woghiw</a>
                            <a href="#" className="subsection__link">owefj wefwoe</a>
                            <a href="#" className="subsection__link">woie</a>
                            <a href="#" className="subsection__link">eoihfefe</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;