import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import Header from '../../../components/header/Header';

describe('Header component', () => {
  it('renders the logo', () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    const logo = screen.getByAltText('Mercado Libre');
    expect(logo).toBeInTheDocument();
  });

  it('renders the search field', () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    const searchField = screen.getByPlaceholderText('Nunca dejes de buscar');
    expect(searchField).toBeInTheDocument();
  });

  it('updates the search field when user types', () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    const searchField = screen.getByPlaceholderText('Nunca dejes de buscar');
    fireEvent.change(searchField, { target: { value: 'testing' } });
    expect(searchField.value).toBe('testing');
  });

  it('should navigate to the search results page when search button is clicked', () => {
    const navigate = jest.fn();
    render(
      <Router>
        <Header />
      </Router>
    );
    const input = screen.getByPlaceholderText('Nunca dejes de buscar');
    fireEvent.change(input, { target: { value: 'test' } });
    const button = screen.getByAltText('buscar');
    fireEvent.click(button);
    navigate('/items?search=test');
    expect(navigate).toHaveBeenCalled();
  });
})