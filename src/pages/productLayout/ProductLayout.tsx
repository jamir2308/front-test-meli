import React, { useState } from 'react';
import ProductCard from '../../components/productCard/ProductCard';
import { useSearchParams } from 'react-router-dom';
import { Product, ProductResponse } from './../../types/product.d';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import './productLayout.scss';
import useFetch from '../../hooks/useFetch';

const ProductLayout: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [data, setData] = useState<ProductResponse>();
  const params: string = String(searchParams.get('search'));
  const { error } = useFetch(`/api/items?q=${params}`, setData);

  if (error) {
    return null;
  }

  return (
    <div className='product-layout'>
      {data && <Breadcrumbs steps={data?.categories}/>}
      <div className='product-layout__container'>
        {data ? data.items.map(({ id, title, price, free_shipping, condition, picture}: Product) => (
          <ProductCard
            key={id}
            picture={picture}
            title={title}
            price={price}
            location={condition}
            free_shipping={free_shipping}
            id={id}
          />
        )): ''}
      </div>
    </div>
  );
};

export default ProductLayout;