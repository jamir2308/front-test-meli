import React from 'react';
import { useNavigate } from "react-router-dom";
import shipping from '../../assets/images/ic_shipping.png';
import { Price } from '../../types/product';
import './productCard.scss';

interface ProductCardProps {
  picture: string;
  title: string;
  price: Price;
  location: string;
  free_shipping: boolean;
  id: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ picture, title, price, location, free_shipping, id }) => {
  const navigate = useNavigate();
  const redirectProductDetail = ()=>{
    navigate(`/items/${id}`);
  }

  return (
    <div data-testid="product-card" className="product-card"  onClick={redirectProductDetail}>
      <picture className="product-card__image">
        <img src={picture} alt={title} />
      </picture>
      <div className="product-card__content">
        <div className="product-card__info">
          <div className="product-card__price">
            <p>{new Intl.NumberFormat('es-AR', {style: 'currency',currency: price.currency}).format(Number(price.amount.toFixed()))}</p>
            {free_shipping  && <img src={shipping} alt='shipping' />}
          </div>
          <h2 className="product-card__title">{title}</h2>
        </div>
        <div className="product-card__location">
          <p>{location}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;