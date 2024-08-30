import React, { useState } from 'react';
import {Helmet} from 'react-helmet-async';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  // phone: Yup.string().matches(/^\d{10}$/, 'Phone number must be 10 digits'),
  date: Yup.date().required('Date is required').min(new Date(), 'Date cannot be in the past'),
  time: Yup.string().required('Time is required'),
  guests: Yup.number()
  .required('Number of guests is required')
  .min(1, 'At least 1 guest is required')
  .max(10, 'Maximum 10 guests allowed'),
  phone: Yup.string(),
  occasion: Yup.string()
});


function Reservations() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '1',
    date: '',
    time: '',
    occasion: '',
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

  // const validateForm = () => {
  //   let newErrors = {};
  //   if (!formData.name) newErrors.name = 'Name is required';
  //   if (!formData.email) newErrors.email = 'Email is required';
  //   if (!formData.guests || isNaN(formData.guests) || formData.guests < 1) newErrors.guests = 'Valid number of guests is required';
  //   if (!formData.date) newErrors.date = 'Date is required';
  //   if (!formData.time) newErrors.time = 'Time is required';
  //   return newErrors;
  // };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const newErrors = validateForm();
  //   if (Object.keys(newErrors).length === 0) {
  //     // Submit the form
  //     console.log('Form submitted:', formData);
  //   } else {
  //     setErrors(newErrors);
  //   }
  // };


  const validateForm = async () => {
    try {
      await validationSchema.validate(formData, { abortEarly: false });
      setErrors({});
      return true;
    } catch (err) {
      const newErrors = {};
      err.inner.forEach((error) => {
        newErrors[error.path] = error.message;
      });
      setErrors(newErrors);
      return false;
    }
  };  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = await validateForm();
    if (isValid) {
      // Here you would typically send the form data to your server
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
    } else {
      console.log('Form has errors');
    }
  };

  
  if (isSubmitted) {
      return (
        <section className="reservation">
          <div className='thank-you-container'>
            <div className="container thank-you">
              <h1>Thank You!</h1>
              <p>Your reservation has been sent. A confirmation email has been sent to {formData.email}.</p>
              <p>We look forward to seeing you on {formData.date} at {formData.time}.</p>
            </div>
          </div>
        </section>
      );
    }

    return (
      <section className="reservation">
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

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}

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
          <div>&nbsp;</div>

          <button type="submit">Make Reservation</button>
        </form>
      </div>
    </section>
  );
}

export default Reservations;
