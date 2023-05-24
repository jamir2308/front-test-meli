import React from 'react';
import { render, screen  } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom'
import Home from '../../../pages/home/Home';

describe('Home component', () => {

    it('should render the header', () => {
      render(
        <Router>
          <Home />
        </Router>
      );
      const divElement = screen.getByTestId('home');
    expect(divElement.tagName).toBe('DIV');
    });
});