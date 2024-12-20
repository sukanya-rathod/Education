// src/ContactUs.js
import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const TextArea = styled.textarea`
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const Button = styled.button`
  padding: 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #0056b3;
  }
`;

const Header = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1rem;
  margin-bottom: 2rem;
  color: #555;
`;

const ContactUs = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    // Handle form submission logic here
    console.log(data);
  };

  return (
    
    <div  style={{backgroundColor:'#102134'}}>
    <Container>
      <Header>Contact Us</Header>
      <Description>
        We are here to help you with any inquiries or support related to our educational services. Please fill out the form below, and we'll get back to you as soon as possible.
      </Description>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input 
          type="text" 
          placeholder="Your Name" 
          {...register('name', { required: 'Name is required' })} 
        />
        {errors.name && <p>{errors.name.message}</p>}

        <Input 
          type="email" 
          placeholder="Your Email" 
          {...register('email', { required: 'Email is required' })} 
        />
        {errors.email && <p>{errors.email.message}</p>}

        <Input 
          type="text" 
          placeholder="Subject" 
          {...register('subject', { required: 'Subject is required' })} 
        />
        {errors.subject && <p>{errors.subject.message}</p>}

        <Input 
          type="tel" 
          placeholder="Phone Number" 
          {...register('phone')} 
        />
        
        <TextArea 
          rows="6" 
          placeholder="Your Message" 
          {...register('message', { required: 'Message is required' })} 
        />
        {errors.message && <p>{errors.message.message}</p>}

        <Input 
          type="text" 
          placeholder="Preferred Contact Time" 
          {...register('contactTime')} 
        />

        <Button type="submit">Send Message</Button>
      </Form>
    </Container>
    </div>
  );
};

export default ContactUs;
