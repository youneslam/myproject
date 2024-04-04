import React from 'react';

const date = new Date();

const Footer = ({length}) => {
  return (
    <footer>
      <p>Copyright &copy; {date.getFullYear()}</p>
      <p>{length} items</p>
    </footer>
  );
}

export default Footer;

