import React from "react";
import ContactForm from "../Components/ContactForm";
import InfoTopBar from "../Components/InfoTopBar";
import NavBar from "../Components/Navbar";
import { Breadcrumbs } from "@mui/material";
import Footer from "../Components/Footer";
import WhatsAppIcon from "../assets/whatsapp.webp";
import SEO from "../utils/SEO";

const ContactPage = () => {
  const page_header_details = {
    header_name: "Contact Us",
    header_dec:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est 20 years experience.",
    header_current_page_name: "About Us",
  };
  return (
    <>
    <SEO  title= "Contact Us - Get in Touch with Elastomech for Custom Rubber Products"
    description="Reach out to Elastomech for inquiries about custom rubber products, solutions, and services. Our team is ready to assist you with all your rubber product needs."
    keywords= "contact Elastomech, rubber product inquiries, custom rubber products, rubber solutions, rubber manufacturing, industrial rubber products, get in touch"
  />
      <div className="flex flex-col min-h-screen">
        <InfoTopBar />
        <NavBar />
        <Breadcrumbs page_header_details={page_header_details} />
        <ContactForm />
        <Footer />
        <a
          href="https://api.whatsapp.com/send?phone=9075358795&text=Hello"
          className=" fixed bottom-4 right-3 cursor-pointer"
        >
          <img src={WhatsAppIcon} alt="whatsapp" height="45px" width="45px" />
        </a>
      </div>
    </>
  );
};

export default ContactPage;
