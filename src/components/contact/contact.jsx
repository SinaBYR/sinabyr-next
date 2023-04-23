'use client';

import classes from './contact.module.scss';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from '../utilities';
import { useFormik } from 'formik';
import { validationSchema } from './validation-schema';
import { BiError } from 'react-icons/bi';
import { ToastContainer, toast } from 'react-toastify';

export function Contact() {
  const { values, errors, isValid, handleSubmit, handleChange, handleBlur, resetForm } = useFormik({
    initialValues: {
      fullname: '',
      email: '',
      message: ''
    },
    onSubmit: (values, _helpers) => {
      sendMessageHandler(values.fullname, values.email, 'SUBJECT', values.message);
    },
    validationSchema,
    validateOnChange: false,
    validateOnBlur: false
  });

  async function sendMessageHandler(fullName, email, subject, message) {
    try {
      let headers = new Headers();
      headers.set('Content-Type', 'application/json');
      let response = await fetch('/api/messages/sendMessage', {
        method: 'POST',
        headers,
        body: JSON.stringify({
          fullName,
          email,
          subject,
          message
        })
      });
      if(!response.ok) {
        return toast.error('Sending message failed. Please try again.');
      }
      resetForm();
      toast.success('Message sent successfully');
    } catch(err) {
      console.log(err);
      toast.error(err.message);
    }
  }

  const errorMessages = Object.keys(errors)
    .map(field => <li key={field}><BiError color="#fd3c3c" />{errors[field]}</li>);

  return (
    <section className={classes.contact}>
      <div className={classes.header}>
        <h2>Get in touch</h2>
        <p>Send me a message and I&apos;ll get back to you as soon as possible.</p>
      </div>
      {!isValid && <ul className={classes.errors}>{errorMessages}</ul>}
      <form className={classes.form} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullname">Full name</label>
          <input
            type="text"
            name="fullname"
            id="fullname"
            autoComplete="off"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.fullname}
            />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="off"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.message}
            />
        </div>
        <Button type="submit" variant="primary">Send</Button>
      </form>
      <ToastContainer
        hideProgressBar
        position="top-center"
        theme="dark"
        toastStyle={{fontSize: '15px', textAlign: 'center'}}/>
    </section>
  )
}