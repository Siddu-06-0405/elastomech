import React, { useState, useEffect } from "react";
import SideBar from "../Components/Product/SideBar";
import Variety from "../Components/Product/Variety";
import Technical from "../Components/Product/Technical";
import Description from "../Components/Product/Description";
import Application from "../Components/Product/Application";
import NavBar from "../Components/Navbar";
import InfoTopBar from "../Components/InfoTopBar";
import WhatsAppIcon from "../Components/Product/whatsapp.webp";
import Footer from "../Components/Footer";
import SEO from "../utils/SEO";

const Product = () => {
  const [product, setProduct] = useState(1);
  const [showButton, setShowButton] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(1);

  // Handle scroll event to toggle button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300); // Show button after scrolling down 300px
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleProductChange = (product_id) => {
    setProduct(product_id);
    setSelectedProductId(product_id);
    console.log(product);
  };

  const page_header_details = {
    header_name: "Products",
    header_dec: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est 20 years experience.",
    header_current_page_name: "Product Page"
  };

  return (
    <>
    <SEO title="Products" keywords="dock fenders,boat dock fenders, rubber fenders, marine protection, berthing fenders, mooring fenders, rubber dock fenders,dock bumpers, marine bumpers, impact protection, mooring bumpers, rubber dock bumper, boat dock ,wheel chokers, vehicle safety, parking chokers, rubber chokers, rubber wheel chokers,speed breakers, rubber speed breakers, rubber road products,road humps,hose ramps, hose protection, industrial hose ramps, rubber hose ramps, hose safety, hose line protection,hose ramp with metal insert,cable protectors, cable safety, rubber cable protectors, cable management, cable protection, industrial cable safety, traffic safety,rubber stoppers, container sealing, Rubber Stoppers Manufacturer,Supplier,Exporter, industrial stoppers, rubber seals, versatile stoppers, sealing solutions,tipper pads, load distribution pads, vehicle protection, tipping pads, rubber tipper pads, industrial load pads, equipment protection,corner guards, edge protection, wall corner protectors, rubber corner guards, industrial corner guards, furniture protection, wall protection" description="Products manufactured by Elastomech"/>
      <div className="flex flex-col min-h-screen">
        <InfoTopBar />
        <NavBar />
        {/* <Breadcrumbs page_header_details={page_header_details} /> */}

        <div className="flex flex-col lg:flex-row gap-4 w-full">
          {/* Sidebar */}
         <div className="w-full lg:w-1/4 xl:w-1/5 bg-white shadow-sm p-6 lg:sticky lg:top-0">

            <SideBar selectedProductId={selectedProductId} handleProductChange={handleProductChange} />
          </div>

          {/* Main Content */}
          <div className="flex-grow w-full lg:w-3/4 xl:w-4/5 p-6">
            <Description product={product} />
            <div className="flex flex-col gap-4">
              <div className="flex gap-4 flex-wrap">
                <Application product={product} />
                <Technical product={product} />
              </div>
              <Variety product={product} />
            </div>
          </div>
        </div>

        {/* WhatsApp Icon */}
        <a href="https://api.whatsapp.com/send?phone=9075358795&text=Hello" className="fixed bottom-4 right-3 cursor-pointer">
          <img src={WhatsAppIcon} alt="whatsapp" height="45px" width="45px" />
        </a>

        {/* Scroll to Top Button */}
        {showButton && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-[5rem] right-4 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full p-3 shadow-lg"
            aria-label="Scroll to top"
          >
            ↑
          </button>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Product;
