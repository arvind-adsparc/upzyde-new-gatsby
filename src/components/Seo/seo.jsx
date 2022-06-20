import React from "react";
import { Helmet } from "react-helmet";

const Seo = ({ url, title, description }) => {
  return (
    <Helmet htmlAttributes={{ lang: "en" }}>
      <meta charSet="utf-8" />
      <meta property="og:url" content={url} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="robots"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
      <meta property="og:locale" content="en_US" />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={description} />
      <link
        rel="shortcut icon"
        href="https://res.cloudinary.com/dqove2qhg/image/upload/v1655716070/Upzyde/icon-ico_ze5rl6.png"
        type="image/x-icon"
      />

      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default Seo;
