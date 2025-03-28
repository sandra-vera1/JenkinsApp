import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Practice 10 This is my Jenkins App for AWS-S3 by Sandra/i);
  expect(linkElement).toBeInTheDocument();
});
