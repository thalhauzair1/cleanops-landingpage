import React, { useState } from "react";
import "./ContactForm.css";
import Form, { Input, TextArea, FormButton } from "react-form-component";
import image from "../../assets/landingpage-assets/HK-02.png";

const ContactForm = () => {
  return (
    <div className="getinTouchSection">
      <div className="getinTouchform">
        <h1 style={{textAlign:"left"}}>Get in <span style={{color:'#F89C7B'}}>Touch</span></h1>
        <Form fields={["name", "email", "message"]}>
          <Input name="name" label="User name" />
          <Input name="email" type="email" label="E-mail" />
          <TextArea name="message" label="Message" type="textarea" />

          <div className="buttonStyle">
              <FormButton onClick={(fields) => console.log(fields)}>Submit</FormButton>
          </div>
        </Form>
      </div>
      <div className="getinTouchImage">
        <img src={image} alt="contact us" />
      </div>
    </div>
  );
};

export default ContactForm;
