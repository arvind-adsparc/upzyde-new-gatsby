import React from "react";
import loadable from "@loadable/component";

// import ContactUsHero from "../../components/Hero/contactUs";
// import Layout from "../../components/Layout/layout";
// import ConactOverview from "../../components/Overview/contactOverview/contactOverview";

const Layout = loadable(() => import("../../components/Layout/layout"));
const ContactUsHero = loadable(() => import("../../components/Hero/contactUs"));
const ConactOverview = loadable(() =>
  import("../../components/Overview/contactOverview/contactOverview")
);

const ContactUs = () => {
  return (
    <Layout page="contact">
      <ContactUsHero />
      <ConactOverview />
    </Layout>
  );
};

export default ContactUs;
