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
        </Form>
      </div>
    </section>
  );
};

export default RequestDemoForm;
