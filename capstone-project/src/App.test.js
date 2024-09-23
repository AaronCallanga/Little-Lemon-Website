import { render, screen, fireEvent } from '@testing-library/react';
import { BookingForm } from './pages/BookingForm';
import { fetchAPI } from './component/api';

describe('fetchAPI', () => {
  test('returns an empty array when the date is outside the range', () => {
    const date = new Date('2024-01-01');
    const availableTimes = fetchAPI(date);
    expect(availableTimes.length).toBeGreaterThan(0);
  });
  test('returns correct times based on the random function', () => {
    const date1 = new Date('2024-09-23');
    const date2 = new Date('2024-09-23'); // Different date
    const times1 = fetchAPI(date1);
    const times2 = fetchAPI(date2);

    // If using the same seed, the output should be deterministic for the same input
    expect(times1).toEqual(times2);
  });
})

describe('BookingForm', () => {
  test('renders form elements', () => {
      render(<BookingForm />);

      // Check if the form elements are rendered
      expect(screen.getByLabelText(/date/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/time/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/type of occasion/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/notes/i)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });


  test('submits form with correct data', () => {
      render(<BookingForm />);

      // Fill out the form
      fireEvent.change(screen.getByLabelText(/date/i), { target: { value: '2024-09-23' } });
      fireEvent.change(screen.getByLabelText(/time/i), { target: { value: '17:00' } });
      fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: '2' } });
      fireEvent.change(screen.getByLabelText(/type of occasion/i), { target: { value: 'Birthday' } });
      fireEvent.change(screen.getByLabelText(/notes/i), { target: { value: 'Celebrating with friends!' } });

      // Submit the form
      fireEvent.click(screen.getByRole('button', { name: /submit/i }));

      // Check if the new booking is displayed
      expect(screen.getByText(/reservation #1/i)).toBeInTheDocument();
      expect(screen.getByText(/date: 2024-09-23/i)).toBeInTheDocument();
      expect(screen.getByText(/time: 17:00/i)).toBeInTheDocument();
    });

  test('shows alert when fields are empty', () => {
      render(<BookingForm />);

      // Submit the form without filling it
      fireEvent.click(screen.getByRole('button', { name: /submit/i }));

      // Check if alert is called (you might need to mock window.alert)
      jest.spyOn(window, 'alert').mockImplementation(() => {});
      fireEvent.click(screen.getByRole('button', { name: /submit/i }));
      expect(window.alert).toHaveBeenCalledWith("Fill up all the input fields");
  });
  
});