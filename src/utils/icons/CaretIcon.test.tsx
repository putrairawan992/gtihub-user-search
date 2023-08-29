import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { CaretIcon } from './CaretIcon'; // Adjust this import to your folder structure

describe('<CaretIcon />', () => {
  it('renders without crashing', () => {
    render(<CaretIcon />);
  });

  it('sets the width and height attributes correctly', () => {
    const { container } = render(<CaretIcon width={50} height={60} />);
    const svgElement = container.querySelector('svg');

    expect(svgElement).toHaveAttribute('width', '50');
    expect(svgElement).toHaveAttribute('height', '60');
  });

  it('applies custom classes when className prop is passed', () => {
    const { container } = render(<CaretIcon className="custom-class" />);
    const svgElement = container.querySelector('svg');

    expect(svgElement).toHaveClass('custom-class');
  });

  it('renders correct path data', () => {
    const { container } = render(<CaretIcon />);
    const pathElement = container.querySelector('path');

    expect(pathElement).toHaveAttribute(
      'd',
      'M5.161 10.073C4.454 9.265 5.028 8 6.101 8h11.797c1.074 0 1.648 1.265.94 2.073l-5.521 6.31a1.75 1.75 0 0 1-2.634 0l-5.522-6.31ZM6.653 9.5l5.159 5.896a.25.25 0 0 0 .376 0l5.16-5.896H6.652Z'
    );
  });
});
