import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

function ReservationPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    occasion: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    // Clear the error for this field when the user starts typing
    if (errors[name]) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (formData.phone && !/^\d{10}$/.test(formData.phone.replace(/\D/g,''))) {
      tempErrors.phone = "Phone number is invalid";
    }
    if (!formData.date) tempErrors.date = "Date is required";
    if (!formData.time) tempErrors.time = "Time is required";
    if (!formData.guests) {
      tempErrors.guests = "Number of guests is required";
    } else if (formData.guests < 1 || formData.guests > 10) {
      tempErrors.guests = "Number of guests must be between 1 and 10";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you would typically send the form data to your server
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
    } else {
      console.log('Form has errors');
    }
  };

  if (isSubmitted) {
    return (
      <div className="container thank-you" style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Thank You!</h1>
        <p>Your reservation has been sent. A confirmation email has been sent to {formData.email}.</p>
        <p>We look forward to seeing you on {formData.date} at {formData.time}.</p>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Little Lemon - Reservation</title>
        <meta name="description" content="Make a reservation at Little Lemon restaurant" />
      </Helmet>
      <div className="container">
        <h1>Make a Reservation</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div>
            <label htmlFor="phone">Phone Number (optional):</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <span className="error">{errors.phone}</span>}
          </div>

          <div>
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
            {errors.date && <span className="error">{errors.date}</span>}
          </div>

          <div>
            <label htmlFor="time">Time:</label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
            {errors.time && <span className="error">{errors.time}</span>}
          </div>

          <div>
            <label htmlFor="guests">Number of guests:</label>
            <input
              type="number"
              id="guests"
              name="guests"
              min="1"
              max="10"
              value={formData.guests}
              onChange={handleChange}
              required
            />
            {errors.guests && <span className="error">{errors.guests}</span>}
          </div>

          <div>
            <label htmlFor="occasion">Occasion:</label>
            <select
              id="occasion"
              name="occasion"
              value={formData.occasion}
              onChange={handleChange}
            >
              <option value="">Select an occasion</option>
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
              <option value="date">Date</option>
              <option value="business">Business Meal</option>
              <option value="other">Other</option>
            </select>
          </div>

          <button type="submit">Make Reservation</button>
        </form>
      </div>
    </>
  );
}

export default ReservationPage;