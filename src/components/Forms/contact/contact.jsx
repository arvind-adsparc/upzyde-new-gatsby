import React from "react";
import { Form, Input } from "antd";
import "./styles.scss";

const ContactForm = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <section className="contactForm-container">Form content goes here</section>
  );
};

export default ContactForm;
