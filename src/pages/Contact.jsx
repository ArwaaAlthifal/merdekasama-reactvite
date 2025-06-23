import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ebuzu0a', 'template_23680hd', form.current, 'gDLHTUhPnacpHAE2R')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className='konput'>
      <label>Name</label>
      <input type="text" name="user_name" placeholder='Nama Anda'/>
      <label>Email</label>
      <input type="email" name="user_email" placeholder='Email Anda'/>
      <label>Message</label>
      <textarea name="message" placeholder='Pesan' cols="50"/>
      <input type="submit" value="Send" className='btn' />
    </form>
  );
};