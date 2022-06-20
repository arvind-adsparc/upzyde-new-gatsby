import React, { useState } from "react";
import axios from "axios";
import { Form, Input } from "antd";
import { API_URL } from "../../../utlis/apiURL";
import "./styles.scss";

const Newsletter = () => {
  const [loading, setLoading] = useState(false);
  const onFinish = async (values) => {
    console.log("Success:", values);

    setLoading(true);

    try {
      const data = {
        email: values.email,
        formName: "newsletter form",
        page: "homepage",
      };

      const headers = {
        "Content-Type": "application/json",
      };
      const res = await axios.post(`${API_URL}/submission`, data, { headers });

      console.log("success", res);

      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log("err", err);
    }
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
