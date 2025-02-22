import { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../Components/Navbar";
import Footer from "../Components/Footer";
import SEO from "../utils/SEO";

const FAQRS = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="bg-white min-h-screen">
            <SEO
                title="FAQ-RUBBER-STOPPERS by Elastomech"
                description="Explore Elastomech's detailed FAQ on rubber stoppers, including materials, applications, durability, and installation. Learn about the benefits of rubber stoppers for industrial, automotive, and household use. Get expert insights on selecting the right rubber stoppers for your needs."
                keywords="rubber stoppers, industrial rubber stoppers, automotive rubber stoppers, rubber plugs, vibration dampers, shock absorbers, rubber bumpers, Elastomech rubber stoppers, rubber stopper applications, rubber stopper benefits"
            />

            <NavBar />

            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold text-black text-center mb-6">Rubber Stoppers - FAQs</h1>

                {/* FAQ 1 */}
                <div className="border border-yellow-500 rounded-lg overflow-hidden shadow-md mb-4">
                    <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(0)}>
                        What are rubber stoppers, and what are they used for?
                        <span className="text-yellow-500">{openIndex === 0 ? "-" : "+"}</span>
                    </button>
                    {openIndex === 0 && (
                        <div className="p-4 bg-yellow-100 text-black">
                            Rubber stoppers are versatile components used to seal, dampen vibrations, and protect surfaces from damage. They are commonly used in:
                            <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-800">
                                <li><b>Industrial Applications:</b> Sealing pipes, machinery, and equipment.</li>
                                <li><b>Automotive:</b> Vibration damping and noise reduction.</li>
                                <li><b>Household:</b> Furniture protection and anti-slip solutions.</li>
                            </ul>
                            🔗 <a href="https://www.elastomech.in/products/rubber-stoppers" target="_blank" rel="noopener noreferrer" className="text-blue-700">Learn More About Rubber Stoppers</a>
                        </div>
                    )}
                </div>

                {/* FAQ 2 */}
                <div className="border border-yellow-500 rounded-lg overflow-hidden shadow-md mb-4">
                    <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(1)}>
                        What materials are used in rubber stoppers?
                        <span className="text-yellow-500">{openIndex === 1 ? "-" : "+"}</span>
                    </button>
                    {openIndex === 1 && (
                        <div className="p-4 bg-yellow-100 text-black">
                            Rubber stoppers are typically made from high-quality materials such as:
                            <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-800">
                                <li><b>Natural Rubber:</b> Flexible and durable for general use.</li>
                                <li><b>Synthetic Rubber:</b> Resistant to chemicals and extreme temperatures.</li>
                                <li><b>Silicone:</b> Ideal for high-temperature applications.</li>
                            </ul>
                            🔗 <a href="https://www.elastomech.in/products/rubber-stoppers" target="_blank" rel="noopener noreferrer" className="text-blue-700">Explore Rubber Stopper Materials</a>
                        </div>
                    )}
                </div>

                {/* FAQ 3 */}
                <div className="border border-yellow-500 rounded-lg overflow-hidden shadow-md mb-4">
                    <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(2)}>
                        What are the benefits of using rubber stoppers?
                        <span className="text-yellow-500">{openIndex === 2 ? "-" : "+"}</span>
                    </button>
                    {openIndex === 2 && (
                        <div className="p-4 bg-yellow-100 text-black">
                            Rubber stoppers offer several advantages:
                            <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-800">
                                <li><b>Vibration Damping:</b> Reduces noise and wear in machinery.</li>
                                <li><b>Shock Absorption:</b> Protects surfaces from impact damage.</li>
                                <li><b>Sealing:</b> Prevents leaks and contamination.</li>
                                <li><b>Durability:</b> Long-lasting and resistant to wear.</li>
                            </ul>
                            🔗 <a href="https://www.labdepotinc.com/articles/rubber-stopper-size-guide.html" target="_blank" rel="noopener noreferrer" className="text-blue-700">Benefits of Rubber Stoppers</a>
                        </div>
                    )}
                </div>

                {/* FAQ 4 */}
                <div className="border border-yellow-500 rounded-lg overflow-hidden shadow-md mb-4">
                    <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(3)}>
                        What are the different types of rubber stoppers?
                        <span className="text-yellow-500">{openIndex === 3 ? "-" : "+"}</span>
                    </button>
                    {openIndex === 3 && (
                        <div className="p-4 bg-yellow-100 text-black">
                            Elastomech offers a variety of rubber stoppers, including:
                            <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-800">
                                <li><b>Solid Rubber Stoppers:</b> For heavy-duty applications.</li>
                                <li><b>Hollow Rubber Stoppers:</b> Lightweight and flexible.</li>
                                <li><b>Custom-Molded Stoppers:</b> Designed for specific needs.</li>
                            </ul>
                            🔗 <a href="https://www.elastomech.in/products/rubber-stoppers" target="_blank" rel="noopener noreferrer" className="text-blue-700">Explore Rubber Stopper Types</a>
                        </div>
                    )}
                </div>

                {/* FAQ 5 */}
                <div className="border border-yellow-500 rounded-lg overflow-hidden shadow-md mb-4">
                    <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(4)}>
                        How do I choose the right rubber stopper for my application?
                        <span className="text-yellow-500">{openIndex === 4 ? "-" : "+"}</span>
                    </button>
                    {openIndex === 4 && (
                        <div className="p-4 bg-yellow-100 text-black">
                            Consider the following factors:
                            <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-800">
                                <li><b>Application:</b> Industrial, automotive, or household.</li>
                                <li><b>Material:</b> Natural rubber, synthetic rubber, or silicone.</li>
                                <li><b>Size and Shape:</b> Ensure it fits your requirements.</li>
                                <li><b>Load Capacity:</b> Choose based on the weight and pressure.</li>
                            </ul>
                            🔗 <a href="https://www.elastomech.in/products/rubber-stoppers" target="_blank" rel="noopener noreferrer" className="text-blue-700">Choosing the Right Rubber Stopper</a>
                        </div>
                    )}
                </div>

                {/* FAQ 6 */}
                <div className="border border-yellow-500 rounded-lg overflow-hidden shadow-md mb-4">
                    <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(5)}>
                        Can rubber stoppers be used in high-temperature environments?
                        <span className="text-yellow-500">{openIndex === 5 ? "-" : "+"}</span>
                    </button>
                    {openIndex === 5 && (
                        <div className="p-4 bg-yellow-100 text-black">
                            Yes, certain rubber stoppers, such as those made from silicone, are designed for high-temperature environments.
                            <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-800">
                                <li><b>Silicone Stoppers:</b> Withstand temperatures up to 250°C.</li>
                                <li><b>Heat-Resistant Rubber:</b> Ideal for industrial applications.</li>
                            </ul>
                            🔗 <a href="https://www.rubberandseal.com/rubber-stoppers-types/#:~:text=This%20article%20explores%20the%20different%20types%20of%20rubber,as%20test%20tubes%2C%20flasks%2C%20and%20other%20laboratory%20glassware." target="_blank" rel="noopener noreferrer" className="text-blue-700">High-Temperature Rubber Stoppers</a>
                        </div>
                    )}
                </div>

                {/* FAQ 7 */}
                <div className="border border-yellow-500 rounded-lg overflow-hidden shadow-md mb-4">
                    <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(6)}>
                        How do I install rubber stoppers?
                        <span className="text-yellow-500">{openIndex === 6 ? "-" : "+"}</span>
                    </button>
                    {openIndex === 6 && (
                        <div className="p-4 bg-yellow-100 text-black">
                            Installation is simple:
                            <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-800">
                                <li>Clean the surface where the stopper will be placed.</li>
                                <li>Press the stopper firmly into place.</li>
                                <li>Ensure it is securely fitted and aligned.</li>
                            </ul>
                            🔗 <a href="https://www.elastomech.in/products/rubber-stoppers" target="_blank" rel="noopener noreferrer" className="text-blue-700">Rubber Stopper Installation Guide</a>
                        </div>
                    )}
                </div>

                {/* FAQ 8 */}
                <div className="border border-yellow-500 rounded-lg overflow-hidden shadow-md mb-4">
                    <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(7)}>
                        Are rubber stoppers resistant to chemicals?
                        <span className="text-yellow-500">{openIndex === 7 ? "-" : "+"}</span>
                    </button>
                    {openIndex === 7 && (
                        <div className="p-4 bg-yellow-100 text-black">
                            Yes, synthetic rubber stoppers are highly resistant to chemicals and oils.
                            <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-800">
                                <li><b>Nitrile Rubber:</b> Resistant to oils and fuels.</li>
                                <li><b>EPDM Rubber:</b> Resistant to acids and alkalis.</li>
                            </ul>
                            🔗 <a href="https://mykin.com/rubber-chemical-resistance-chart" target="_blank" rel="noopener noreferrer" className="text-blue-700">Chemical Resistance of Rubber</a>
                        </div>
                    )}
                </div>

                {/* FAQ 9 */}
                <div className="border border-yellow-500 rounded-lg overflow-hidden shadow-md mb-4">
                    <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(8)}>
                        Can rubber stoppers be customized?
                        <span className="text-yellow-500">{openIndex === 8 ? "-" : "+"}</span>
                    </button>
                    {openIndex === 8 && (
                        <div className="p-4 bg-yellow-100 text-black">
                            Yes, Elastomech offers custom rubber stoppers tailored to your specific requirements.
                            <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-800">
                                <li><b>Custom Shapes:</b> Designed to fit unique applications.</li>
                                <li><b>Custom Sizes:</b> Available in various dimensions.</li>
                            </ul>
                            🔗 <a href="https://www.elastomech.in/custom-product/" target="_blank" rel="noopener noreferrer" className="text-blue-700">Custom Rubber Stoppers</a>
                        </div>
                    )}
                </div>

                {/* FAQ 10 */}
                <div className="border border-yellow-500 rounded-lg overflow-hidden shadow-md mb-4">
                    <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(9)}>
                        Where can I buy Elastomech rubber stoppers?
                        <span className="text-yellow-500">{openIndex === 9 ? "-" : "+"}</span>
                    </button>
                    {openIndex === 9 && (
                        <div className="p-4 bg-yellow-100 text-black">
                            Mail us <a href="mailto:sales.elastomech@gmail.com" className="text-blue-700">sales.elastomech@gmail.com</a> or call to <a href="tel:+91 90753 58795" className="text-blue-700">+91 90753 58795</a>.
                        </div>
                    )}
                </div>

                {/* Back to Home Link */}
                <div className="mt-6 text-center">
                    <Link to="/" className="text-yellow-500 font-semibold">Back to Home</Link>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default FAQRS;