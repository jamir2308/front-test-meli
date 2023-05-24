import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductDetailResponse } from '../../types/product';
import './productDetail.scss';
import useFetch from '../../hooks/useFetch';

const ProductDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [data, setData] = useState<ProductDetailResponse>();
    const { error } = useFetch(`/api/items/${id}`, setData);

    if (!data || error) {
        return null;
    }

    return (
        <section className='product-detail'>
            <div className='product-detail__container'><div className='product-detail__card'>
                <div className='product-detail__content'>
                    <picture>
                        <img src={data.item?.picture} alt="iphone" />
                    </picture>
                    <div className='product-detail__info'>
                        <p className='product-detail__sold'>{`${data.item.condition === "new" ? 'Nuevo -' : ''} ${data.item?.sold_quantity} vendidos`}</p>
                        <h2 className='product-detail__title'>{data.item.title}</h2>
                        <span className='product-detail__price'>
                            {`${new Intl.NumberFormat('es-AR', { style: 'currency', currency: "ARS" }).format(data?.item?.price?.amount)?.split(",")?.slice(0, 1)}`}
                            <span className='product-detail__price-decimal'>{`${Number(data.item.price.amount).toFixed(2).split('.')[1]}`}</span>
                        </span>
                        <button className='product-detail__btn'>Comprar</button>
                    </div>
                </div>
                <article className='product-detail__article'>
                    <p>Descripción del producto</p>
                    <p>{data.item?.description}</p>
                </article>
            </div></div>
        </section>
    );
};

export default ProductDetail;