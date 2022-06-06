import React from "react";
import { Form, Input } from "antd";
import "./styles.scss";

const Newsletter = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <section className="newsletter-form">
      <Form
        name="newsletter-form"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <div className="group-items">
          <Form.Item
            className="input-container"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item>
            <div className="cta">
              <button className="btn">Submit</button>
            </div>
          </Form.Item>
        </div>
      </Form>
    </section>
  );
};

export default Newsletter;
