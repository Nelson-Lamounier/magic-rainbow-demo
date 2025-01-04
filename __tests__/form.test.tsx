import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import axios from "axios";
import ContactForm from "@/components/form/contact-form";

// Mock axios
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

// Mock global alert
global.alert = jest.fn();

describe('ContactForm Component', () => {
  it('submits the form successfully when all fields are valid', async () => {
    // Mock a successful API response
    mockedAxios.post.mockResolvedValueOnce({ status: 200, data: 'Success' });

    render(<ContactForm />);

    // Fill out the form fields
    fireEvent.change(screen.getByPlaceholderText('Your Name'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByPlaceholderText('Your Email'), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('Your Phone Number'), { target: { value: '1234567890' } });
    fireEvent.change(screen.getByPlaceholderText('Your Message'), { target: { value: 'Hello there!' } });

    // Submit the form
    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    });

    // Check if alert was called
    expect(global.alert).toHaveBeenCalledWith('Your message has been sent successfully!');
  });

  it('handles API errors gracefully', async () => {
    // Mock a failed API response
    mockedAxios.post.mockRejectedValueOnce(new Error('Network Error'));

    render(<ContactForm />);

    // Fill out the form fields
    fireEvent.change(screen.getByPlaceholderText('Your Name'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByPlaceholderText('Your Email'), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('Your Phone Number'), { target: { value: '1234567890' } });
    fireEvent.change(screen.getByPlaceholderText('Your Message'), { target: { value: 'Hello there!' } });

    // Submit the form
    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    });

    // Check if alert was called with the error message
    expect(global.alert).toHaveBeenCalledWith('An error occurred. Please try again later.');
  });
});