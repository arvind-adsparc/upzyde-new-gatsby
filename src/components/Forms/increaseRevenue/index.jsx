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

const IncreaseRevenueForm = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const onFinish = async (values) => {
    // console.log("Success:", values);

    setLoading(true);

    try {
      const data = {
        email: values.email,
        formName: "revenue",
        page: "In Game Ads - Video",
      };

      const headers = {
        "Content-Type": "application/json",
      };
      await axios.post(`${API_URL}/submission`, data, { headers });

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
    <section className="revenueForm-container ">
      <Form
        form={form}
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
              type: "email",
            },
          ]}
          hasFeedback
          validateStatus={status}
        >
          <Input placeholder="Enter your email address" />
        </Form.Item>

        <Form.Item>
          <div className="cta">
            {loading ? (
              <Spin indicator={antIcon} />
            ) : (
              <button className="btn">Increase Your Revenue</button>
            )}
          </div>
        </Form.Item>
      </Form>
    </section>
  );
};

export default IncreaseRevenueForm;
