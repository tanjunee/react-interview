import { render, screen } from '@testing-library/react';
import App from './App';

test('render App title', () => {
  render(<App />);
  expect(screen.getByText('App')).toBeInTheDocument();
});
