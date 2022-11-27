import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

it('1-render Header', () => {
  render(<Header />);
  const linkElement = screen.getByText(/Chat App/i);
  expect(linkElement).toBeInTheDocument();
});
