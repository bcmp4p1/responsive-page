import React from 'react';
import classNames from 'classnames';

export const Footer = ({ open }) => {
  return (
    <footer className={classNames('footer', {
      'footer-hidden': open,
    })}>
      <p className="footer-title">FUTSAL</p>
      <div className="links">
        <a className="link" href="/">Contact Us</a>
        <a className="link" href="/">Terms of Service</a>
        <a className="link" href="/">Privacy policy</a>
        <a className="link" href="/">Careers</a>
      </div>

      <p className="text">Created by oleksii@bitmotive.com 2023</p>
    </footer>
  );
};
