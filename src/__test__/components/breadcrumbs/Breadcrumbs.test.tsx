import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom'
import Breadcrumbs from '../../../components/breadcrumbs/Breadcrumbs';

global.React = React;
describe('Breadcrumbs', () => {
  const categories = ['Category 1', 'Category 2', 'Category 3'];

  it('should render a breadcrumb trail with the correct categories', () => {
    render(
      <Router>
        <Breadcrumbs steps={categories} />
      </Router>
    );

    categories.forEach((category) => {
      const linkElement = screen.getByText(category);
      expect(linkElement).toBeInTheDocument();
    });
  });
});