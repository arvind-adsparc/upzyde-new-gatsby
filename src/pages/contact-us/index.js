import React from "react";
import ContactUsHero from "../../components/Hero/contactUs";
import Layout from "../../components/Layout/layout";
import ConactOverview from "../../components/Overview/contactOverview/contactOverview";
import Seo from "../../components/Seo/seo";

const ContactUs = () => {
  return (
    <Layout page="contact">
      <Seo
        url="https://res.cloudinary.com/dqove2qhg/image/upload/v1654087901/Upzyde/Banner_image_1_bshcup.webp"
        title=" Contact Us | Upzyde"
        description="Use Upzyde’s advanced tech to maximize revenue with in-app bidding. Our innovative ad monetization features safeguard your brand, improve UX, and serve you with maximum return on inventory."
      />
      <ContactUsHero />
      <ConactOverview />
    </Layout>
  );
};

export default ContactUs;
