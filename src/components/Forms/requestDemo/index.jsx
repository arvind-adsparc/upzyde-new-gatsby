import React, { useState } from "react";
import axios from "axios";
import { Form, Input, Select, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { API_URL } from "../../../utlis/apiURL";
import "./styles.scss";

const { Option } = Select;

const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 24,
    }}
    spin
  />
);

const RequestDemoForm = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const onFinish = async (values) => {
    // console.log("Success:", values);

    setLoading(true);

    try {
      const data = {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        format: values.format,
        page: "Advertisers Page",
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

  // const selectChange = () => {};
  return (
    <section className="rqDemo-container request-demo">
      <div className="inner-container">
        <Form
          form={form}
          name=""
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <div className="formItem-container">
            <Form.Item
              name="firstName"
              rules={[
                {
                  required: true,
                  message: "Please input your first name!",
                },
              ]}
              hasFeedback
              validateStatus={status}
            >
              <Input placeholder="First Name" />
            </Form.Item>
            <Form.Item
              name="lastName"
              rules={[
                {
                  required: true,
                  message: "Please input your last name!",
                },
              ]}
              hasFeedback
              validateStatus={status}
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
              hasFeedback
              validateStatus={status}
            >
              <Input placeholder="Email" />
            </Form.Item>

            <Form.Item
              name="format"
              rules={[
                {
                  required: true,
                  message: "Please select an Ad Format!",
                },
              ]}
              hasFeedback
              validateStatus={status}
            >
              <Select placeholder="Ad Format">
                <Option value="adFormat">Ad Format</Option>
                <Option value="other">Other</Option>
              </Select>
            </Form.Item>
          </div>

          <Form.Item>
            <div className="cta">
              {loading ? (
                <Spin indicator={antIcon} />
              ) : (
                <button className="btn">Request Demo</button>
              )}
            </div>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
};

export default RequestDemoForm;
