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
    <section className="contactForm-container">
      <Form name="" onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <div className="form-group">
          <Form.Item
            name="first-name"
            label="First Name"
            rules={[
              {
                required: true,
                message: "Please input your first name!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="last-name"
            label="Last Name"
            rules={[
              {
                required: true,
                message: "Please input your last name!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </div>
        <div className="form-group">
          <Form.Item
            name="comp-name"
            label="Company Name"
            rules={[
              {
                required: true,
                message: "Please input your company name!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </div>

        <Form.Item
          name="message"
          label="Message"
          rules={[
            {
              required: false,
            },
          ]}
        >
          <Input.TextArea rows={4} showCount maxLength={200} />
        </Form.Item>

        <Form.Item>
          <div className="cta">
            <button className="btn">Send</button>
          </div>
        </Form.Item>
      </Form>
    </section>
  );
};

export default ContactForm;
