import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react';
import { useNavigate } from "react-router-dom";
import ProductCard from '../../../components/productCard/ProductCard';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn()
}));

const mockUseNavigate = useNavigate as jest.Mock;

describe('ProductCard', () => {
  const product = {
    id: 'MLA123456789',
    title: 'Product Title',
    price: {
      currency: 'ARS',
      amount: 12345,
      decimals: 2
    },
    location: 'Buenos Aires',
    free_shipping: true,
    picture: 'https://via.placeholder.com/150',
  };

  beforeEach(() => {
    mockUseNavigate.mockReset();
  });

  it('should render the product card correctly', () => {
    const { getByText, container } = render(<ProductCard {...product} />);
    expect(getByText(product.title)).toBeInTheDocument();
    expect(getByText(product.location)).toBeInTheDocument();
    expect(getByText('$ 12.345,00')).toBeInTheDocument();
    expect(container.querySelector('img[src="ic_shipping.png"]')).toBeInTheDocument();
  });

  it('should redirect to product detail on click', () => {
    const mockNavigate = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);

    const { container } = render(<ProductCard {...product} />);
    fireEvent.click(container.querySelector('.product-card'));
    expect(mockNavigate).toHaveBeenCalledWith(`/items/${product.id}`);
  });
});
