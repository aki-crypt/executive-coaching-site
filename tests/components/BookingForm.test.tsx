import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BookingForm, type BookingFormData } from '@/components/BookingForm';

describe('BookingForm', () => {
  it('renders all form fields', () => {
    render(<BookingForm />);

    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/phone number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/select service/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/preferred date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/preferred time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/additional information/i)).toBeInTheDocument();
  });

  it('has a submit button', () => {
    render(<BookingForm />);

    const submitButton = screen.getByRole('button', {
      name: /submit booking request/i,
    });
    expect(submitButton).toBeInTheDocument();
  });

  it('shows all coaching services in the dropdown', () => {
    render(<BookingForm />);

    const select = screen.getByLabelText(/select service/i);
    expect(select).toBeInTheDocument();

    const options = screen.getAllByRole('option');
    expect(options.length).toBeGreaterThan(1);
    expect(screen.getByRole('option', { name: /executive leadership coaching/i })).toBeInTheDocument();
  });

  it('calls onSubmit with form data when submitted', async () => {
    const mockOnSubmit = vi.fn();
    render(<BookingForm onSubmit={mockOnSubmit} />);

    const formData: BookingFormData = {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '555-1234',
      service: 'Executive Leadership Coaching',
      preferredDate: '2025-12-01',
      preferredTime: '10:00',
      message: 'Looking forward to coaching',
    };

    fireEvent.change(screen.getByLabelText(/full name/i), {
      target: { value: formData.name },
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: formData.email },
    });
    fireEvent.change(screen.getByLabelText(/phone number/i), {
      target: { value: formData.phone },
    });
    fireEvent.change(screen.getByLabelText(/select service/i), {
      target: { value: formData.service },
    });
    fireEvent.change(screen.getByLabelText(/preferred date/i), {
      target: { value: formData.preferredDate },
    });
    fireEvent.change(screen.getByLabelText(/preferred time/i), {
      target: { value: formData.preferredTime },
    });
    fireEvent.change(screen.getByLabelText(/additional information/i), {
      target: { value: formData.message },
    });

    fireEvent.click(screen.getByRole('button', { name: /submit booking request/i }));

    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalledWith(formData);
    });
  });

  it('shows success message after submission', async () => {
    render(<BookingForm />);

    const formData = {
      name: 'Jane Smith',
      email: 'jane@example.com',
      phone: '555-5678',
      service: 'Career Transition Coaching',
      preferredDate: '2025-12-15',
      preferredTime: '14:00',
      message: '',
    };

    fireEvent.change(screen.getByLabelText(/full name/i), {
      target: { value: formData.name },
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: formData.email },
    });
    fireEvent.change(screen.getByLabelText(/phone number/i), {
      target: { value: formData.phone },
    });
    fireEvent.change(screen.getByLabelText(/select service/i), {
      target: { value: formData.service },
    });
    fireEvent.change(screen.getByLabelText(/preferred date/i), {
      target: { value: formData.preferredDate },
    });
    fireEvent.change(screen.getByLabelText(/preferred time/i), {
      target: { value: formData.preferredTime },
    });

    fireEvent.click(screen.getByRole('button', { name: /submit booking request/i }));

    await waitFor(() => {
      expect(screen.getByText(/booking request received/i)).toBeInTheDocument();
    });
  });

  it('requires all mandatory fields', () => {
    render(<BookingForm />);

    const form = screen.getByRole('button', { name: /submit booking request/i }).closest('form');
    expect(form).toBeInTheDocument();

    const requiredInputs = [
      screen.getByLabelText(/full name/i),
      screen.getByLabelText(/email/i),
      screen.getByLabelText(/phone number/i),
      screen.getByLabelText(/select service/i),
      screen.getByLabelText(/preferred date/i),
      screen.getByLabelText(/preferred time/i),
    ];

    requiredInputs.forEach((input) => {
      expect(input).toBeRequired();
    });
  });
});
