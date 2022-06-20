import React, { useState } from "react";
import axios from "axios";
import { Form, Input, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { API_URL } from "../../../utlis/apiURL";
import "./styles.scss";

const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 24,
    }}
    spin
  />
);

const Newsletter = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const onFinish = async (values) => {
    // console.log("Success:", values);

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

      setLoading(false);
      setStatus("success");
      form.resetFields();
    } catch (err) {
      setLoading(false);
      setStatus("error");
      console.log("err", err);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <section className="newsletter-form">
      <Form
        form={form}
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
            hasFeedback
            validateStatus={status}
          >
            <Input allowClear placeholder="Email" />
          </Form.Item>

          <Form.Item>
            <div className="cta">
              {loading ? (
                <Spin indicator={antIcon} />
              ) : (
                <button className="btn">Submit</button>
              )}
            </div>
          </Form.Item>
        </div>
      </Form>
    </section>
  );
};

export default Newsletter;
