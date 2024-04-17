import React, { useRef, useState, forwardRef } from "react";
import "./ContactForm.css";
import Form, { Input, TextArea, FormButton } from "react-form-component";
import image from "../../assets/landingpage-assets/HK-02.png";
import emailjs from "emailjs-com";

const ForwardedForm = forwardRef((props, ref) => (
  <form ref={ref} {...props} />
));

const ContactForm = () => {
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);

  const sendEmail = () => {
    setIsSubmitting(true);
    console.log(formRef.current);
    emailjs
      .sendForm(
        "service_jeeikui",
        "template_k9fn2ih",
        formRef.current,
        "hh92VPEWQfF8tJj6g"
      )
      .then(
        (result) => {
          setStateMessage("Message sent!");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000);
        },
        (error) => {
          setStateMessage("Something went wrong, please try again later");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000);
        }
      );
  };

  return (
    <div className="getinTouchSection" id="contact">
      <div className="getinTouchform">
        <h1 style={{ textAlign: "left" }}>
          Get in <span style={{ color: "#F89C7B" }}>Touch</span>
        </h1>
        <ForwardedForm ref={formRef}>
          <Input name="name" label="User name" />
          <Input name="email" type="email" label="E-mail" />
          <TextArea name="message" label="Message" type="textarea" />

          <div className="buttonStyle">
            <FormButton type="submit" onClick={sendEmail}>
              Submit
            </FormButton>
          </div>
        </ForwardedForm>
        {stateMessage && <div>{stateMessage}</div>}
      </div>
      <div className="getinTouchImage">
        <img src={image} alt="contact us" />
      </div>
    </div>
  );
};

export default ContactForm;
