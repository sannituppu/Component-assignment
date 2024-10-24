import React from 'react';
import headerImage from '../components/images/logo.jpg'; 
import './styles/ComponentUI.css'

const Header = ({ image, title }) => (
  <div className="header">
    <img src={image} alt={title} className="headerImage" />
    <h1 className="headerTitle">{title}</h1>
  </div>
);

const ProductPage = () => {
  return (
    <div>
      <Header image={headerImage} title="Welcome to Product Page!" />
    </div>
  );
};

export default ProductPage;