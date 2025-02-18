import React from "react";
import ContactForm from "../Components/ContactForm";
import InfoTopBar from "../Components/InfoTopBar";
import NavBar from "../Components/Navbar";
import { Breadcrumbs } from "@mui/material";
import Footer from "../Components/Footer";
import WhatsAppIcon from "../assets/whatsapp.webp";

const ContactPage = () => {
  const page_header_details = {
    header_name: "Contact Us",
    header_dec:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est 20 years experience.",
    header_current_page_name: "About Us",
  };
  return (
    <>
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
