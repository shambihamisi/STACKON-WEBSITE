import React from "react";
import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import Numbers from "../components/Numbers";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import FAQ from "../components/FAQ";
import GetQuote from "../components/GetQuote";
import faqData from "../data/FaqData";

const HomePage = () => {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Stackon",
    url: "https://stackon-website.vercel.app/",
    description:
      "Stackon provides web development, data analytics, cloud services and branding for businesses.",
    serviceType: [
      "Web Development",
      "Data Analytics",
      "Cloud Services",
      "Branding"
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
        },
    })),
    };

  return (
    <>
      <Helmet>
        <title>StackOn Technologies - Website Development, Data Analytics, Cloud Services and Branding Company in Kenya</title>
        <meta
          name="description"
          content="Stackon provides full stack development, data analytics, cloud services, and branding services in Kenya. Build scalable systems for your business."
        />

        <meta name="keywords" content="web development Kenya, branding Kenya, data analytics Kenya, cloud services Kenya" />

        <meta name="robots" content="index, follow"/>
        <link rel="canonical" href="ttps://stackon-website.vercel.app/" />
        
        <meta property="og:title" content="StackOn Technologies - Website Development, Data Analytics, Cloud Services and Branding Company in Kenya" />
        <meta property="og:description" content="Stackon provides full stack development, data analytics, cloud services, and branding services in Kenya. Build scalable systems for your business." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://stackon-website.vercel.app/" />

        <link rel="canonical" href="https://stackon-website.vercel.app/" />
        <script type="application/ld+json">
          {JSON.stringify(businessSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <Hero />
      <Numbers />
      <AboutUs />
      <Services />
      <Portfolio />
      <FAQ />
      <GetQuote />
    </>
  );
};

export default HomePage;