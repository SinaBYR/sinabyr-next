'use client';

import classes from './contact.module.scss';
import { Button } from '../utilities';
import { useFormik } from 'formik';
import { validationSchema } from './validation-schema';
import { BiError } from 'react-icons/bi'

export function Contact() {
  const { values, errors, isValid, submitCount, handleSubmit, handleChange, handleBlur } = useFormik({
    initialValues: {
      fullname: '',
      email: '',
      message: ''
    },
    onSubmit: (values, _helpers) => {
      console.log(values);
    },
    validationSchema,
    validateOnChange: false,
    validateOnBlur: false
  });

  const errorMessages = Object.keys(errors)
    .map(field => <li key={field}><BiError color="#fd3c3c" />{errors[field]}</li>);

  return (
    <section className={classes.contact}>
      <div className={classes.header}>
        <h2>Get in touch</h2>
        <p>Send me a message and I'll get back to you as soon as possible.</p>
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
    </section>
  )
}