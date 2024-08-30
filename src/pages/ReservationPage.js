import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

function ReservationPage() {
  const [formData, setFormData] = useState({
    name: '',
    guests: '',
    date: '',
    time: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.guests || isNaN(formData.guests) || formData.guests < 1) newErrors.guests = 'Valid number of guests is required';
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.time) newErrors.time = 'Time is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      // Submit the form
      console.log('Form submitted:', formData);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <>
      <Helmet>
        <title>Little Lemon - Reservation</title>
        <meta name="description" content="Make a reservation at Little Lemon restaurant" />
      </Helmet>
      <div className="container">
        <h1>Make a Reservation</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}

          <label htmlFor="guests">Number of guests:</label>
          <input
            type="number"
            id="guests"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            min="1"
          />
          {errors.guests && <p className="error">{errors.guests}</p>}

          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
          {errors.date && <p className="error">{errors.date}</p>}

          <label htmlFor="time">Time:</label>
          <select
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
          >
            <option value="">Select a time</option>
            <option value="17:00">5:00 PM</option>
            <option value="18:00">6:00 PM</option>
            <option value="19:00">7:00 PM</option>
            <option value="20:00">8:00 PM</option>
            <option value="21:00">9:00 PM</option>
          </select>
          {errors.time && <p className="error">{errors.time}</p>}

          <button type="submit">Make Reservation</button>
        </form>
      </div>
    </>
  );
}

export default ReservationPage;