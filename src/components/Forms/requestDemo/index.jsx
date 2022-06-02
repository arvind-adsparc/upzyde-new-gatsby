import React from "react";
import { Form, Input } from "antd";
import "./styles.scss";

// const { Option } = Select;

const RequestDemoForm = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  // const selectChange = () => {};
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
                  type: "email",
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input placeholder="Email" />
            </Form.Item>
          </div>

          <Form.Item>
            <div className="cta">
              <button className="btn">Request Demo</button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
};

export default RequestDemoForm;
