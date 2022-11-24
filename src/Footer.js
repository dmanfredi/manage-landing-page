import React from 'react';
import './Footer.css';

import logoWhite from './images/logoWhite.png';
import decorationCurve from './images/bg-simplify-section-mobile.svg';
import instagram from './images/icon-instagram.svg';
import facebook from './images/icon-facebook.svg';
import twitter from './images/icon-twitter.svg';
import youtube from './images/icon-youtube.svg';
import pinterest from './images/icon-pinterest.svg';
import decorationPill from './images/bg-tablet-pattern.svg';
import { useMediaQuery } from 'react-responsive';

const Footer = () => {
  const onDesktop = useMediaQuery({ query: '(min-width: 800px)' });

  return (
    <footer className="super-footer-container">
      <div className="footer-container">
        <div className="closing-statement-container">
          <div className="closing-statement-content-container">
            <div className="closing-statement">
              Simplify how your team works today.
            </div>
            <div className="decoration-container-curve">
              <img
                src={onDesktop ? decorationPill : decorationCurve}
                alt="Decoration"
                className="decoration-curve"
                draggable="false"
              />
            </div>

            <button className="get-started-button closing-statement-button">
              Get Started
            </button>
          </div>
        </div>
        <div className="footer-proper-container">
          <div className="mailing-list-copyright-container">
            <div className="mailing-list-container">
              <input
                type="text"
                placeholder="Updates in your inbox..."
                className="mailing-list-input"
              />
              <button className="mailing-list-button">GO</button>
            </div>
            {onDesktop ? (
              <div className="copyright">
                Copyright 2022. All Rights Reserved
              </div>
            ) : null}
          </div>

          <div className="footer-links-container">
            <div className="footer-links">
              <a href="https://dylanmanfredi.xyz/" className="link">
                Home
              </a>
              <a href="https://dylanmanfredi.xyz/" className="link">
                Pricing
              </a>
              <a href="https://dylanmanfredi.xyz/" className="link">
                Products
              </a>
              <a href="https://dylanmanfredi.xyz/" className="link">
                About Us
              </a>
            </div>
            <div className="footer-links">
              <a href="https://dylanmanfredi.xyz/" className="link">
                Careers
              </a>
              <a href="https://dylanmanfredi.xyz/" className="link">
                Community
              </a>
              <a href="https://dylanmanfredi.xyz/" className="link">
                Privacy Policy
              </a>
            </div>
          </div>
          <div className="socials-logo-container">
            <div className="socials-container">
              <a href="https://dylanmanfredi.xyz/" className="social">
                <img
                  src={facebook}
                  alt="Facebook Page"
                  className="social-img"
                />
              </a>
              <a href="https://dylanmanfredi.xyz/" className="social">
                <img
                  src={youtube}
                  alt="Youtube Channel"
                  className="social-img"
                />
              </a>
              <a href="https://dylanmanfredi.xyz/" className="social">
                <img src={twitter} alt="Twitter Page" className="social-img" />
              </a>
              <a href="https://dylanmanfredi.xyz/" className="social">
                <img
                  src={pinterest}
                  alt="Pinterest Profile"
                  className="social-img"
                />
              </a>
              <a href="https://dylanmanfredi.xyz/" className="social">
                <img
                  src={instagram}
                  alt="Instagram Page"
                  className="social-img"
                />
              </a>
            </div>
            <div className="logo-container --footer">
              <img src={logoWhite} alt="Logo" className="logo" />
            </div>
          </div>

          {onDesktop ? null : (
            <div className="copyright">Copyright 2022. All Rights Reserved</div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
