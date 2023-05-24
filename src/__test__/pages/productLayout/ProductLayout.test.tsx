import { render, screen, act  } from '@testing-library/react';
import { BrowserRouter} from 'react-router-dom';
import '@testing-library/jest-dom';
import ProductLayout from '../../../pages/productLayout/ProductLayout';

describe('ProductLayout', () => {
  it('renders product cards', async () => {
    const mockData = [
      {
        id: 'MLA123',
        title: 'iPhone',
        price: { amount: 100, currency: 'ARS' },
        free_shipping: true,
        condition: 'new',
        picture: 'iphone.jpg',
      },
      {
        id: 'MLA456',
        title: 'Samsung Galaxy',
        price: { amount: 200, currency: 'ARS' },
        free_shipping: true,
        condition: 'new',
        picture: 'samsung.jpg',
      },
    ];

    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ items: mockData, categories: [] }),
        ok: true,
      })
    );

    await act(async () => {
      render(
        <BrowserRouter>
          <ProductLayout />
      </BrowserRouter>
      );
    });

    expect(screen.getAllByTestId('product-card')).toHaveLength(2);
  });
});