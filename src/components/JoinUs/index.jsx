import React from "react";
import { Tabs } from "antd";
import "./styles.scss";

const { TabPane } = Tabs;

const JoinUs = () => {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <section className="why-joinus-container">
      <div className="inner-container">
        <h2>Why Join Us?</h2>

        <div className="content">
          <Tabs defaultActiveKey="1" onChange={onChange}>
            <TabPane tab="Feature 1" key="1">
              <h3>Powerful Analytics</h3>
              <p>
                Get real-time access to powerful analytics that help you get
                better insights into your ads so you can suitably optimize to
                increase revenue.
              </p>
            </TabPane>
            <TabPane tab="Feature 2" key="2">
              <h3>Keep Total Control</h3>
              <p>
                Upzyde’s tools, insights, and reports ensure you keep total
                control of all advertisements in your games.
              </p>
            </TabPane>
            <TabPane tab="Feature 3" key="3">
              <h3>Brand Safety</h3>
              <p>
                We ensure total compliance with the highest standards to ensure
                the safety of your brand’s reputation.
              </p>
            </TabPane>

            <TabPane tab="Feature 4" key="4">
              <h3>Programmatic and Direct Demand</h3>
              <p>
                Maximize your revenue by choosing how you want to sell your ad
                inventory. Go for direct deals manually or automate the process
                through programmatic deals.
              </p>
            </TabPane>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
