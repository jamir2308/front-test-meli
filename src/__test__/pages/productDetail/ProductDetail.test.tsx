import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import ProductDetail from './../../../pages/productDetail/ProductDetail';

describe('ProductDetail component', () => {
  it('should render the product detail information', async () => {
    const mockData = {
      item: {
        id: 'MLA123456',
        title: 'Example Product',
        description: 'This is an example product description',
        picture: 'http://example.com/product.jpg',
        condition: 'new',
        sold_quantity: 100,
        price: {
          currency: 'ARS',
          amount: 1234.56,
          decimals: 2,
        },
      },
      categories: ['Electronics', 'Smartphones'],
    };
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockData),
        ok: true,
      })
    );

    render(
      <Router>
        <ProductDetail />
      </Router>
    );

    expect(await screen.findByText('Example Product')).toBeInTheDocument();
    expect(screen.getByText('This is an example product description')).toBeInTheDocument();
    expect(screen.getByText('Nuevo - 100 vendidos')).toBeInTheDocument();
    expect(screen.getByText('Comprar')).toBeInTheDocument();
    expect(screen.getByText('Descripción del producto')).toBeInTheDocument();
    expect(screen.getByAltText('iphone')).toBeInTheDocument();
  });
});