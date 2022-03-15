import React from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { PhoneOutlined, MailOutlined, EnvironmentOutlined } from "@ant-design/icons";
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const Input1 = useRef();
  const Input2 = useRef();
  const Input3 = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_37ncdqc', 'template_fd4872j', form.current, 'i6KmwNtOkbi77uUX6')
      .then((result) => {
          console.log(result.text);
          Input1.current.value= "";
          Input2.current.value= "";
          Input3.current.value= "";
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className='box-3' id='contact'>
      <h3 style={{textAlign: 'center', fontSize: '10px', color:'white', marginTop:'100px'}} >Get In Touch</h3>
      <h2 style={{textAlign:'center', fontSize:'30px', color:'white', marginLeft: '20px'}} >Contact Me</h2>
      <div className='container-3'>
      <div style={{fontSize:"50px"}} className='cont'>
        <h1  
        style={{    writingMode: "vertical-lr",
         transform: "rotate(-180deg)"}}
         >Contact</h1>
      </div>
      <div className='container-4'>
      <div className='contact-me'>
          <h3 style={{color:"white",fontFamily: "Garamond"}}><span className='cont-icon'><PhoneOutlined /></span>Call Me</h3>
          <p style={{color:"white"}}>+91 9680993087</p>
          <h3 style={{color:"white",fontFamily: "Garamond"}}><span className='cont-icon'><MailOutlined /></span>Email</h3>
          <p style={{color:"white"}}>Aman2000tailor29@gmail.com</p>
          <h3 style={{color:"white",fontFamily: "Garamond"}}><span className='cont-icon'><EnvironmentOutlined /></span>Location</h3>
          <p style={{color:"white"}}>Jaipur - Rajasthan</p>
      </div>
      <div className='form-box' >
      <form ref={form} onSubmit={sendEmail} >
        <input ref={Input1} className='form' type='text' name='name' placeholder='Enter Your Name...' autoComplete='off' required/>
        <br/>
        <br/>
        <input ref={Input2} className='form' type='Email' name='email' placeholder='Enter Your Email...' autoComplete='off' required/>
        <br/>
        <br/>
        <textarea  ref={Input3} className='form' name='message' placeholder='Enter Your Message...' rows='7' style={{height:"250px"}} required ></textarea>
        <br />
        <br />
        <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
      </div>
      </div>
    </div>


  )
}

export default Contact;