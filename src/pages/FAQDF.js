import { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../Components/Navbar";
import Footer from "../Components/Footer";
import SEO from "../utils/SEO";
const FAQDF = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (

        <div className="bg-white min-h-screen ">
            <SEO
                title="FAQ - Dock Fenders by Elastomech"
                description="Explore Elastomech's detailed FAQ on dock fenders. Learn about rubber, foam-filled, and pneumatic dock fenders for marine and industrial use. Find information on installation, maintenance, and why Elastomech's high-impact, weather-resistant fenders are the best choice for docks, ships, and ports."
                keywords="dock fenders, rubber dock fenders, marine dock fenders, boat fenders, ship docking fenders, heavy-duty fenders, impact protection, industrial fenders, custom dock fenders, durable marine fenders, dock bumper guards, port safety solutions, vessel docking solutions, dock protection, fender maintenance, fender installation guide, dock accessories, Elastomech dock solutions, fender impact absorption, dock fender customization"
            />
            <NavBar />
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold text-black text-center mb-6">Dock Fenders - FAQs</h1>

                {/* FAQ 1 */}
                <div className="border border-yellow-500 rounded-lg overflow-hidden shadow-md mb-4">
                    <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(0)}>
                        What are dock fenders, and why are they important?
                        <span className="text-yellow-500">{openIndex === 0 ? "-" : "+"}</span>
                    </button>
                    {openIndex === 0 && (
                        <div className="p-4 bg-yellow-100 text-black">
                            Dock fenders are protective devices installed on docks, piers, and berthing areas to absorb the impact of vessels or heavy vehicles. They help prevent damage to both the dock structure and the vessel by reducing the force of collision. Without fenders, repeated impacts can lead to costly repairs, structural weakening, and safety hazards. Elastomech specializes in high-quality rubber dock fenders. Our fenders serve as a dependable buffer, absorbing impact and minimizing damage during berthing and mooring operations. Learn more at <a href='https://en.wikipedia.org/wiki/Fender_(boating)' target='_blank' className='text-blue-700' >Wikipedia</a>.
                        </div>
                    )}
                </div>

                {/* FAQ 2 */}
                <div className="border border-yellow-500 rounded-lg overflow-hidden shadow-md mb-4">
                    <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(1)}>
                        What types of dock fenders does Elastomech offer?
                        <span className="text-yellow-500">{openIndex === 1 ? "-" : "+"}</span>
                    </button>
                    {openIndex === 1 && (
                        <div className="p-4 bg-yellow-100 text-black">
                            Elastomech provides a wide range of dock fenders, including rubber dock fenders, custom dock fenders, and rubber fenders for added protection. More details can be found <a href='https://www.elastomech.in/products/dock-fenders' className='text-blue-700' >here</a>.
                        </div>
                    )}
                </div>

                {/* FAQ 3 */}
                <div className="border border-yellow-500 rounded-lg overflow-hidden shadow-md mb-4">
                    <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(2)}>
                        What materials are used in Elastomech dock fenders?
                        <span className="text-yellow-500">{openIndex === 2 ? "-" : "+"}</span>
                    </button>
                    {openIndex === 2 && (
                        <div className="p-4 bg-yellow-100 text-black leading-relaxed">
                            Our dock fenders are made from premium materials, including:
                            <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-800">
                                <li><span className="font-semibold">Rubber Fenders:</span> Highly durable and flexible, suitable for both marine and industrial applications.</li>
                                <li><span className="font-semibold">Pneumatic Fenders:</span>Air-filled fenders that provide superior energy absorption, commonly used in ports and large ship docking.</li>
                                <li><span className="font-semibold">Foam-Filled Fenders:</span> Made with a high-energy absorption foam core, these fenders are resistant to punctures and ideal for harsh environments.</li>
                                <li><span className="font-semibold">Extruded Fenders:</span> Designed for edge protection in small docking areas and industrial use.</li>
                                <li><span className="font-semibold">D-Type and V-Type Fenders:</span>Specialized designs that provide enhanced energy absorption and durability for heavy-duty applications.</li>
                            </ul>
                            <p className="mt-2">
                                Read more about rubber types
                                <a
                                    href="https://www.rubbercal.com/sheet-rubber/"
                                    target="_blank"
                                    className="text-blue-700 font-semibold hover:underline"
                                >
                                    here
                                </a>.
                            </p>
                        </div>

                    )}
                </div>

                {/* FAQ 4 */}
                <div className="border border-yellow-500 rounded-lg overflow-hidden shadow-md mb-4">
                    <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(3)}>
                        How do I choose the right dock fender for my facility?
                        <span className="text-yellow-500">{openIndex === 3 ? "-" : "+"}</span>
                    </button>
                    {openIndex === 3 && (
                        <div className="p-4 bg-yellow-100 text-black">
                            Selecting the right dock fender depends on multiple factors, including:
                            <ol className="list-decimal pl-6 mt-2 space-y-1 text-gray-800">
                                <li><span className="font-semibold">Vessel Size and Weight:</span> Larger ships require fenders with higher energy absorption.</li>
                                <li><span className="font-semibold">Impact Force:</span> Consider the berthing speed and force of docking vessels.</li>
                                <li><span className="font-semibold">Dock Structure:</span> The type of dock (concrete, steel, floating) influences the fender choice.</li>
                                <li><span className="font-semibold">Environmental Conditions:</span> Factors like tide variations, weather, and wave action should be considered.</li>
                                <li><span className="font-semibold">Operational Requirements:</span> If the dock handles frequent docking, a highly durable fender is recommended.</li>
                            </ol>
                            Elastomech offers custom rubber fenders tailored to your needs.
                        </div>
                    )}
                </div>

                {/* FAQ 5 */}
                <div className="border border-yellow-500 rounded-lg overflow-hidden shadow-md mb-4">
                    <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(4)}>
                        Are your dock fenders resistant to weather and saltwater?
                        <span className="text-yellow-500">{openIndex === 4 ? "-" : "+"}</span>
                    </button>
                    {openIndex === 4 && (
                        <div className="p-4 bg-yellow-100 text-black">
                            Yes, all our dock fenders are designed to withstand extreme marine environments. Our rubber fenders are UV-stabilized to prevent degradation from sunlight exposure, while our neoprene and polyurethane coatings provide excellent resistance against saltwater corrosion, oil, and chemical spills. This ensures longevity and consistent performance even in harsh conditions.
                        </div>
                    )}
                </div>

                {/* FAQ 6 */}
                <div className="border border-yellow-500 rounded-lg overflow-hidden shadow-md mb-4">
                    <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(5)}>
                        Can I get a custom dock fender for my application?
                        <span className="text-yellow-500">{openIndex === 5 ? "-" : "+"}</span>
                    </button>
                    {openIndex === 5 && (
                        <div className="p-4 bg-yellow-100 text-black">
                            Absolutely! Elastomech specializes in custom dock fenders tailored to your specific needs. Whether you need unique dimensions, materials, or designs, we can create a solution that fits perfectly.
                            <a className='text-blue-700' href="https://elastomech.in/custom-product">Contact us here</a>
                        </div>
                    )}
                </div>

                {/* FAQ 7 */}
                <div className="border border-yellow-500 rounded-lg overflow-hidden shadow-md mb-4">
                    <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(6)}>
                        What maintenance is required for dock fenders?
                        <span className="text-yellow-500">{openIndex === 6 ? "-" : "+"}</span>
                    </button>
                    {openIndex === 6 && (
                        <div className="p-4 bg-yellow-100 text-black">
                            Elastomech dock fenders are designed for minimal maintenance. However, periodic checks can help prolong their lifespan. Recommended maintenance steps include:
                            <ol className="list-decimal pl-6 mt-2 space-y-1 text-gray-800">
                                <li><span className="font-semibold">Regular Inspection:</span> Check for cracks, deformations, or excessive wear.</li>
                                <li><span className="font-semibold">Cleaning:</span> Remove marine growth, dirt, and debris to maintain efficiency.</li>
                                <li><span className="font-semibold">Bolt Tightening:</span>  Ensure mounting bolts remain secure to prevent movement or misalignment.</li>
                                <li><span className="font-semibold">Replacement of Damaged Units:</span> If a fender shows significant wear or impact damage, timely replacement is advised to maintain dock safety.</li>
                            </ol>
                        </div>
                    )}
                </div>

                {/* FAQ 8 */}
                <div className="border border-yellow-500 rounded-lg overflow-hidden shadow-md mb-4">
                    <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(7)}>
                        What are the benefits of using Elastomech dock fenders?
                        <span className="text-yellow-500">{openIndex === 7 ? "-" : "+"}</span>
                    </button>
                    {openIndex === 7 && (
                        <div className="p-4 bg-yellow-100 text-black">
                            Elastomech dock fenders offer several advantages, including:
                            <ol className="list-decimal pl-6 mt-2 space-y-1 text-gray-800">
                                <li><span className="font-semibold">Superior Impact Absorption:</span> Effectively minimizes damage to docks and vessels.</li>
                                <li><span className="font-semibold">Long Lifespan:</span> High-quality materials ensure durability and resistance to environmental wear.</li>
                                <li><span className="font-semibold">Low Maintenance:</span>  Requires minimal upkeep compared to traditional dock protection methods.</li>
                                <li><span className="font-semibold">Easy Installation:</span> Pre-drilled holes and mounting accessories make installation simple.</li>
                                <li><span className="font-semibold">Cost-Effective:</span> Prevents expensive repairs by reducing impact damage.</li>
                            </ol>
                        </div>
                    )}
                </div>

                {/* FAQ 9 */}
                <div className="border border-yellow-500 rounded-lg overflow-hidden shadow-md mb-4">
                    <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(8)}>
                        How are dock fenders installed?
                        <span className="text-yellow-500">{openIndex === 8 ? "-" : "+"}</span>
                    </button>
                    {openIndex === 8 && (
                        <div className="p-4 bg-yellow-100 text-black">
                            <ol className="list-decimal pl-6 mt-2 space-y-1 text-gray-800">
                                <li><span className="font-semibold">Bolt-on Installation:</span>  Most fenders feature pre-drilled holes for direct bolting onto the dock structure.</li>
                                <li><span className="font-semibold">Chain Suspension:</span> Used for pneumatic fenders to allow movement and flexibility.</li>
                                <li><span className="font-semibold">Floating Installation:</span> Some fenders are designed to float and adjust according to water levels.
                                    We provide complete installation guidance and support to ensure proper fitting and alignment.</li>
                            </ol>
                        </div>
                    )}
                </div>

                {/* FAQ 10 */}
                <div className="border border-yellow-500 rounded-lg overflow-hidden shadow-md mb-4">
                    <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(9)}>
                        Why choose Elastomech for dock fenders?
                        <span className="text-yellow-500">{openIndex === 9 ? "-" : "+"}</span>
                    </button>
                    {openIndex === 9 && (
                        <div className="p-4 bg-yellow-100 text-black">
                            Elastomech combines quality, durability, and affordability to deliver the best dock fenders in the market. We offer custom solutions, expert support, and competitive pricing for Shipping Ports and Harbors. <a
                                href="https://www.elastomech.in/products/dock-fenders"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-700"
                            >
                                best dock fenders at Elastomech
                            </a>

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
}

export default FAQDF