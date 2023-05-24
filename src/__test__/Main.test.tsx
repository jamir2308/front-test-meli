import React from 'react';
import { render } from '@testing-library/react';
import Router from '../routes/routes';

describe('Router', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    render(
      <React.StrictMode>
        <Router />
      </React.StrictMode>,
      div
    );
  });
});