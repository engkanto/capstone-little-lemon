const updateTimes = () => {
  const availabilities = [];
  const startTime = new Date().setHours(17, 0, 0); // 5 PM
  const endTime = new Date().setHours(24, 0, 0); // 12 AM

  for (let time = startTime; time < endTime; time += 30 * 60 * 1000) {
    if (Math.random() > 0.5) {
      availabilities.push(new Date(time).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }));
    }
  }

  return availabilities;
};

const submitReservation = (reservationData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve({ success: true, message: 'Reservation submitted successfully' });
      } else if (Math.random() > 0.2) {
        resolve({ success: false, message: 'Reservation taken' });
      } else {
        reject({ success: false, message: 'Failed to submit reservation' });
      }
    }, 1000);
  });
};

export { updateTimes, submitReservation };
