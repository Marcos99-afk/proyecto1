import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import hola from './hola';

describe('<hola />', () => {
  test('should mount', () => {
    render(<hola />);

    const hola = screen.getByTestId('hola');

    expect(hola).toBeInTheDocument();
  });
});