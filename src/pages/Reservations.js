import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { getRandomAvailability, submitReservation } from '../api/reservationApi';
import Dialog from '../components/Dialog';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string(),
  date: Yup.date().required('Date is required').min(new Date(new Date().setHours(0,0,0,0)), 'Date cannot be in the past'),
  time: Yup.string().required('Time is required'),
  guests: Yup.number().min(1).max(10).required('Number of guests is required'),
  occasion: Yup.string()
});

function Reservations() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState({ title: '', message: '', type: '' });
  
  let availableTimes = getRandomAvailability();

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const result = await submitReservation(values);
      if (result.success) {
        // alert('Reservation submitted successfully!');
        setDialogContent({
          title: 'Reservation Successful',
          message: 'Your reservation has been submitted successfully!',
          type: 'success'
        });
        availableTimes = getRandomAvailability();
        resetForm();
      } else {
        // alert('Failed to submit reservation. Please try again.');
        setDialogContent({
          title: 'Reservation Failed',
          message: 'Sorry, somebody beat you to it. Please try a different time.',
          type: 'error'
        });
        availableTimes = getRandomAvailability();
      }
    } catch (error) {
      console.error('Error submitting reservation:', error);
      setDialogContent({
        title: 'Error',
        message: 'An error occurred. Please try again.',
        type: 'error'
      });
    }
    setDialogOpen(true);
    setSubmitting(false);
  };

  return (
    <>
    <Helmet>
      <title>Little Lemon - Reservation</title>
      <meta name="description" content="Make a reservation at Little Lemon restaurant" />
    </Helmet>
    <section className="reservation">
    <div className="container">
      <h2>Make a Reservation</h2>
      <Formik
        initialValues={{
          name: '',
          email: '',
          phone: '',
          date: '',
          time: '',
          guests: 1,
          occasion: ''
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="formField">
              <Field type="text" name="name" placeholder="Your Name" />
              <ErrorMessage name="name" component="div" className="error" />
            </div>

            <div className="formField">
              <Field type="email" name="email" placeholder="Your Email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div className="formField">
              <Field type="tel" name="phone" placeholder="Phone (optional)" />
              <ErrorMessage name="phone" component="div" className="error" />
            </div>

            <div className="formField">
              <Field type="date" name="date" />
              <ErrorMessage name="date" component="div" className="error" />
            </div>

            <div className="formField">
              <Field as="select" name="time">
                <option value="">Select a time</option>
                {availableTimes.map((time) => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </Field>
              <ErrorMessage name="time" component="div" className="error" />
            </div>

            <div className="formField">
              <Field type="number" name="guests" min="1" max="10" />
              <ErrorMessage name="guests" component="div" className="error" />
            </div>

            <div className="formField">
              <Field as="select" name="occasion">
                <option value="">Select an occasion (optional)</option>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
                <option value="date">Date</option>
                <option value="business">Business Meal</option>
                <option value="other">Other</option>
              </Field>
              <ErrorMessage name="occasion" component="div" className="error" />
            </div>

            <button type="submit" disabled={isSubmitting}>
              Submit Reservation
            </button>
          </Form>
        )}
      </Formik>
      <Dialog
        isOpen={dialogOpen}
        onClose={() => setDialogOpen(false)}
        title={dialogContent.title}
        message={dialogContent.message}
        type={dialogContent.type}
      />
    </div>
    </section>
    </>
  );
}

export default Reservations;
