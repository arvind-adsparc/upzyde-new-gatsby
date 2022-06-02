import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import "./styles.scss";

const RequestDemoForm = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <section className="rqDemo-container">
      <div className="inner-container">
        <Form name="" onFinish={onFinish} onFinishFailed={onFinishFailed}>
          <div className="formItem-container">
            <Form.Item
              name="first-name"
              rules={[
                {
                  required: true,
                  message: "Please input your first name!",
                },
              ]}
            >
              <Input placeholder="First Name" />
            </Form.Item>
            <Form.Item
              name="last-name"
              rules={[
                {
                  required: true,
                  message: "Please input your last name!",
                },
              ]}
            >
              <Input placeholder="Last Name" />
            </Form.Item>
          </div>

          <div className="formItem-container">
            <Form.Item
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
            <Form.Item
              name="last-name"
              rules={[
                {
                  required: true,
                  message: "Please input your last name!",
                },
              ]}
            >
              <Input placeholder="Last Name" />
            </Form.Item>
          </div>
        </Form>
      </div>
    </section>
  );
};

export default RequestDemoForm;
