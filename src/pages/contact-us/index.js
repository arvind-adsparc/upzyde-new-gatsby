import React from "react";
import ContactUsHero from "../../components/Hero/contactUs";
import Layout from "../../components/Layout/layout";
import ConactOverview from "../../components/Overview/contactOverview/contactOverview";

const ContactUs = () => {
  return (
    <Layout page="contact">
      <ContactUsHero />
      <ConactOverview />
    </Layout>
  );
};

export default ContactUs;
