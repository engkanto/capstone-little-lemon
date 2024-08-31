import { updateTimes, submitReservation } from './reservationApi';

describe('Reservation API', () => {
  test('updateTimes returns array of time slots', () => {
    const availability = updateTimes();
    expect(Array.isArray(availability)).toBe(true);
    expect(availability.length).toBeGreaterThan(0);
    expect(availability.length).toBeLessThanOrEqual(14); // Max possible slots

    availability.forEach(timeSlot => {
      expect(timeSlot).toMatch(/^(0[5-9]|1[0-2]):[0-5][0-9] (AM|PM)$/);
    });
  });

  // test('submitReservation resolves or rejects randomly', async () => {
  //   const mockReservation = { name: 'John Doe', date: '2023-06-01', time: '7:00 PM', guests: 2 };
    
  //   try {
  //     const result = await submitReservation(mockReservation);
  //     expect(result).toEqual({ success: true, message: 'Reservation submitted successfully' });
  //   } catch (error) {
  //     expect(error).toEqual({ success: false, message: 'Reservation taken' });
  //   }
  // });
});

describe('submitReservation', () => {
  test('resolves with success message', async () => {
    jest.spyOn(Math, 'random').mockReturnValue(0.6);
    const result = await submitReservation({});
    expect(result).toEqual({ success: true, message: 'Reservation submitted successfully' });
  });

  test('resolves with failure message', async () => {
    jest.spyOn(Math, 'random').mockReturnValue(0.3);
    const result = await submitReservation({});
    expect(result).toEqual({ success: false, message: 'Reservation taken' });
  });

  test('rejects with error message', async () => {
    jest.spyOn(Math, 'random').mockReturnValue(0.1);
    await expect(submitReservation({})).rejects.toEqual({ success: false, message: 'Failed to submit reservation' });
  });
});