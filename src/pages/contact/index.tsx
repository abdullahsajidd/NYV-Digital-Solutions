import React from "react";
import Map from "./Map";
import OfficeCardData from "@/sections/contact/office-card-data";
import ContactForm from '@/sections/home/contactForm/ContactForm'
import Head from "next/head";

const Contact = () => {
  return (
    <>
     <Head>
        <title>Contact Us | Code UpScale LLC - Web & Mobile APP | Artificial Intelligence and Blockchain Development Services</title>
 
        <meta
          name="description"
          content="Code UpScale LLC - Web & Mobile APP | Artificial Intelligence and Blockchain Development Services - Get in touch with Code UpScale LLC. Our 'Contact Us' page provides easy access to our team. Let's connect and discuss your software and technology needs."
          key="desc"
        />
      </Head>
      <div className="">
        <ContactForm
          ContactGeneralHeading={" Contact Us"}
          ContactInfoCard
          ContatctSubHeading={"Let’s Work Togather"}
          className="mt-0 pb-24"
        />
        <Map />
        <OfficeCardData />
      </div>
    </>
  );
};

export default Contact;
