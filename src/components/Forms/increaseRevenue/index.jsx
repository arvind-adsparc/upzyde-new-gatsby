import React from "react";
import { Form, Input } from "antd";
import "./styles.scss";

const IncreaseRevenueForm = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <section className="revenueForm-container">
      <Form
        name="revenue-form"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input placeholder="Enter your email address" />
        </Form.Item>

        <Form.Item>
          <div className="cta">
            <button className="btn">Increase Your Revenue</button>
          </div>
        </Form.Item>
      </Form>
    </section>
  );
};

export default IncreaseRevenueForm;
