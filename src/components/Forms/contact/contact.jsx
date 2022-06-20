import React, { useState } from "react";
import axios from "axios";
import { Form, Input, Radio, Spin } from "antd";
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

const ContactForm = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const onFinish = async (values) => {
    console.log("Success:", values);

    setLoading(true);

    try {
      const data = {
        firstName: values.firstName,
        lastName: values.lastName,
        company: values.companyName,
        email: values.email,
        companyType: values.companyType,
        message: values.message,
        formName: "Contact Us",
        format: "test",
        page: "NA",
      };

      const headers = {
        "Content-Type": "application/json",
      };
      const res = await axios.post(`${API_URL}/request-demo`, data, {
        headers,
      });

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
    <section className="contactForm-container">
      <Form
        form={form}
        name=""
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <div className="form-group">
          <Form.Item
            name="firstName"
            label="First Name"
            rules={[
              {
                required: true,
                message: "Please input your first name!",
              },
            ]}
            hasFeedback
            validateStatus={status}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="lastName"
            label="Last Name"
            rules={[
              {
                required: true,
                message: "Please input your last name!",
              },
            ]}
            hasFeedback
            validateStatus={status}
          >
            <Input />
          </Form.Item>
        </div>
        <div className="form-group">
          <Form.Item
            name="companyName"
            label="Company Name"
            rules={[
              {
                required: true,
                message: "Please input your company name!",
              },
            ]}
            hasFeedback
            validateStatus={status}
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
                type: "email",
              },
            ]}
            hasFeedback
            validateStatus={status}
          >
            <Input />
          </Form.Item>
        </div>

        <Form.Item
          name="companyType"
          label="Company Type"
          rules={[
            {
              required: true,
              message: "Please input select a companty type!",
            },
          ]}
          hasFeedback
          validateStatus={status}
        >
          <Radio.Group>
            <div className="radio-group">
              <Radio value="advertiser">Advertiser</Radio>
              <Radio value="dsp/ssp">DSP/SSP</Radio>
              <Radio value="game-developer">Game Developer</Radio>
              <Radio value="game-publisher">Game Publisher</Radio>
              <Radio value="metaverse-enthusiast">Metaverse Enthusiast</Radio>
              <Radio value="other">Other</Radio>
            </div>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          name="message"
          label="Message"
          rules={[
            {
              required: false,
            },
          ]}
          hasFeedback
          validateStatus={status}
        >
          <Input.TextArea rows={4} showCount maxLength={200} />
        </Form.Item>

        <Form.Item>
          <div className="cta">
            {loading ? (
              <Spin indicator={antIcon} />
            ) : (
              <button className="btn">Send</button>
            )}
          </div>
        </Form.Item>
      </Form>
    </section>
  );
};

export default ContactForm;
