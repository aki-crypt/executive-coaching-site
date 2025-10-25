import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CoachingCard } from '@/components/CoachingCard';

describe('CoachingCard', () => {
  const defaultProps = {
    title: 'Executive Leadership Coaching',
    description: 'Learn to lead with confidence and clarity',
    price: 199,
    duration: '1 hour',
  };

  it('renders the coaching card with all content', () => {
    render(<CoachingCard {...defaultProps} />);

    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.description)).toBeInTheDocument();
    expect(screen.getByText(`$${defaultProps.price}`)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.duration)).toBeInTheDocument();
  });

  it('displays duration and price with correct labels', () => {
    render(<CoachingCard {...defaultProps} />);

    expect(screen.getByText('Duration')).toBeInTheDocument();
    expect(screen.getByText('Price')).toBeInTheDocument();
  });

  it('renders the image when provided', () => {
    const imageUrl = 'https://example.com/image.jpg';
    render(<CoachingCard {...defaultProps} image={imageUrl} />);

    const image = screen.getByAltText(defaultProps.title) as HTMLImageElement;
    expect(image).toBeInTheDocument();
    expect(image.src).toBe(imageUrl);
  });

  it('does not render image when not provided', () => {
    render(<CoachingCard {...defaultProps} />);

    const images = screen.queryAllByRole('img');
    expect(images).toHaveLength(0);
  });

  it('applies correct styling classes', () => {
    const { container } = render(<CoachingCard {...defaultProps} />);

    const card = container.querySelector('.bg-white');
    expect(card).toBeInTheDocument();
    expect(card).toHaveClass('rounded-lg', 'shadow-md');
  });
});
