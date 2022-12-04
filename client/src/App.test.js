import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event'

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();

  const incBut = screen.getByText('+')
    const decBut = screen.getByText('-')
    const val = screen.getByTestId('p1')

    userEvent.click(incBut)
    // expect(screen.getByTestId('p1')).toBe('1')
    userEvent.click(decBut)
    // expect(val).toBe('0')
});

