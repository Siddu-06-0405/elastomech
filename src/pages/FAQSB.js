import { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../Components/Navbar";
import Footer from "../Components/Footer";
import SEO from "../utils/SEO";

const FAQSB = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="bg-white min-h-screen">
            <SEO
                title="FAQ - Speed Breakers by Elastomech"
                description="Explore Elastomech's detailed FAQ on speed breakers. Learn about rubber, plastic, and concrete speed breakers for traffic control, road safety, and industrial use. Get insights on selection, installation, legal regulations, and maintenance for effective speed management."
                keywords="speed breakers, rubber speed breakers, plastic speed bumps, road safety speed breakers, industrial speed bumps, highway speed breakers, traffic calming speed humps, speed breakers installation, best speed breakers, heavy-duty speed breakers, parking lot speed breakers, school zone speed breakers, commercial speed breakers, durable speed breakers, reflective speed breakers, non-slip speed breakers, high-impact speed breakers, vehicle safety speed breakers, speed bumps for roads, Elastomech speed breakers, Speed Breakers online, buy Speed Breakers, industrial Speed Breakers, Plastic Speed Bump, Plastic Road Speed Breaker, manufacturers, suppliers, exporters, traders, dealers, manufacturing companies, retailers, producers, Road Barriers & Safety India, Rubber Speed Breaker manufacturer & oem manufacturer, rubber speed hump, speed breakers, road barriers & safety, Speed Breaker, Speed Breaker With Reflective Arrow, Heavy Duty Speed Breakers Rubber, Speed Bumps For Colleges, Heavy Duty Speed Bumps, Speed Bumps For Industries"
            />

            <NavBar />
            
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold text-black text-center mb-6">Speed Breakers - FAQs</h1>
                

                {/* FAQ 1 */}
                <div className="border border-yellow-500 rounded-lg overflow-hidden shadow-md mb-4">
                    
                    <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(0)}>
                        What are speed breakers, and why are they important?
                        <span className="text-yellow-500">{openIndex === 0 ? "-" : "+"}</span>
                    </button>
                    {openIndex === 0 && (
                        <div className="p-4 bg-yellow-100 text-black">
                            Speed breakers, also known as speed bumps or speed humps, are raised pavement structures designed to slow down vehicles in areas where speed control is necessary. They are commonly used in parking lots, residential areas, school zones, and industrial facilities to enhance road safety, reduce accidents, and ensure pedestrian protection.

                            Speed breakers play a crucial role in traffic calming, forcing vehicles to reduce speed in high-risk areas. They help prevent accidents by controlling reckless driving, especially in places with high pedestrian movement.

                            For more information on the importance of speed breakers in traffic management, check out this resource: <a href='https://www.who.int/publications-detail/world-report-on-road-traffic-injury-prevention' target='_blank' className='text-blue-700' >The Role of Speed Breakers in Road Safety</a>.
                        </div>
                    )}
                </div>

                {/* FAQ 2 */}
                <div className="border border-yellow-500 rounded-lg overflow-hidden shadow-md mb-4">
                    <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(1)}>
                        What types of speed breakers does Elastomech offer?
                        <span className="text-yellow-500">{openIndex === 1 ? "-" : "+"}</span>
                    </button>
                    {openIndex === 1 && (
                        <div className="p-4 bg-yellow-100 text-black">
                            Elastomech provides a wide range of speed breakers, including rubber speed breakers, custom speed breakers. More details can be found <a href='https://www.elastomech.in/products/speed-breakers' className='text-blue-700' >here</a>.
                        </div>
                    )}
                </div>

                {/* FAQ 3 */}
                <div className="border border-yellow-500 rounded-lg overflow-hidden shadow-md mb-4">
                    <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(2)}>
                        What materials are used in making speed breakers?
                        <span className="text-yellow-500">{openIndex === 2 ? "-" : "+"}</span>
                    </button>
                    {openIndex === 2 && (
                        <div className="p-4 bg-yellow-100 text-black leading-relaxed">
                            Speed breakers can be made from different materials based on their intended use, durability, and location:
                            <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-800">
                                <li><span className="font-semibold">Rubber Speed Breakers:</span><ul>
                                    <li>➡️ Made from recycled or high-grade rubber.</li>
                                    <li>➡️ Durable, flexible, and ideal for temporary or semi-permanent applications.</li>
                                    <li>➡️ Easy to install and remove.</li>
                                    <li>➡️ Commonly used in parking lots and private roads.</li>
                                </ul></li>
                                <li><span className="font-semibold">Plastic Speed Breakers:</span><ul>
                                    <li>➡️ Lightweight and modular in design.</li>
                                    <li>➡️ Resistant to weather and chemical damage.</li>
                                    <li>➡️ Suitable for places where frequent relocation is needed.</li>
                                </ul></li>
                                <li><span className="font-semibold">Concrete Speed Breakers:</span><ul>
                                    <li>➡️ Permanent and highly durable.</li>
                                    <li>➡️ Used in public roads, highways, and city streets.</li>
                                    <li>➡️ Requires significant installation effort but lasts for years.</li>
                                </ul></li>
                                <li><span className="font-semibold">Metal Speed Breakers:</span><ul>
                                    <li>➡️ Used for heavy-duty applications in industrial areas.</li>
                                    <li>➡️ Can handle extreme loads from trucks and large machinery.</li>
                                </ul></li>
                            </ul>
                            <p className="mt-2">
                                Read more about types of speed breakers and their uses
                                <a
                                    href="https://www.sinoconcept.co.uk/car-park-safety-management/speed-bumps-and-speed-humps/speed-bump-types/speed-bumps-in-different-locations/#:~:text=Speed%20bumps%2C%20also%20called%20speed%20breakers%20or%20ramps%2C,divided%20into%206%20types%20based%20on%20their%20locations."
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
                        How do speed breakers improve road safety?
                        <span className="text-yellow-500">{openIndex === 3 ? "-" : "+"}</span>
                    </button>
                    {openIndex === 3 && (
                        <div className="p-4 bg-yellow-100 text-black">
                            Speed breakers force vehicles to slow down, reducing the risk of accidents in areas where pedestrians, cyclists, and vehicles interact. Some key safety benefits include:
                            <ol className="list-decimal pl-6 mt-2 space-y-1 text-gray-800">
                                <li><b>Preventing speeding in sensitive zones</b> like school areas, hospitals, and pedestrian crossings.</li>
                                <li><b>Reducing the severity of accidents</b> by ensuring vehicles move at controlled speeds.</li>
                                <li><b>Encouraging careful driving</b> by making drivers more aware of their surroundings.</li>
                            </ol>
                            <p>
                                Elastomech offers safer speed breakers. Checkout the details of best speed breakers at <a href="https://www.elastomech.in/products/speed-breakers"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-700">Elastomech</a>
                            </p>
                            <p>Read more on speed breakers and their impact on safety here:🔗<a href="https://www.who.int/news-room/fact-sheets/detail/road-traffic-injuries"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-700">WHO Road Safety Report</a></p>
                        </div>
                    )}
                </div>

                {/* FAQ 5 */}
                <div className="border border-yellow-500 rounded-lg overflow-hidden shadow-md mb-4">
                    <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(4)}>
                        What are the differences between speed bumps, speed humps, and rumble strips?
                        <span className="text-yellow-500">{openIndex === 4 ? "-" : "+"}</span>
                    </button>
                    {openIndex === 4 && (
                        <div className="p-4 bg-yellow-100 text-black">
                            <ol className="list-decimal pl-6 mt-2 space-y-1 text-gray-800">
                                <li><b>Speed Bumps:</b> Typically shorter and more abrupt, designed to slow vehicles to 5-10 mph.</li>
                                <li><b>Speed Humps:</b> Longer and gentler, designed to slow vehicles to 15-20 mph.</li>
                                <li><b>Rumble Strips:</b> Series of raised or grooved patterns on the road surface that create vibration and noise to alert drivers.</li>
                            </ol>
                            For more details, visit: <a href="https://www.traffictech.com/speed-bumps-vs-speed-humps/" target="_blank" rel="noopener noreferrer" className="text-blue-700">Speed Bumps vs Speed Humps</a>
                        </div>
                    )}
                </div>

                {/* FAQ 6 */}
                <div className="border border-yellow-500 rounded-lg overflow-hidden shadow-md mb-4">
                    <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(5)}>
                        How are rubber speed breakers installed?
                        <span className="text-yellow-500">{openIndex === 5 ? "-" : "+"}</span>
                    </button>
                    {openIndex === 5 && (
                        <div className="p-4 bg-yellow-100 text-black">
                            Installing rubber speed breakers is a simple process:
                            <ol className="list-decimal pl-6 mt-2 space-y-1 text-gray-800">
                                <li><b>Mark the placement</b> – Identify the area and measure the length required.</li>
                                <li><b>Drill holes</b>– Use a drill to make anchor holes in the road.</li>
                                <li><b>Place the speed breaker sections</b> – Align the rubber pieces correctly.</li>
                                <li><b>Secure with bolts</b> – Use heavy-duty bolts to fasten them.</li>
                                <li><b>Test for stability</b> – Ensure they are firmly in place and can withstand vehicle impact.</li>
                            </ol>
                            For an installation guide, check:
                            <a className='text-blue-700' href="https://newsbreakers.ng/how-to-install-a-rubber-speed-breaker/">🔗 How to Install Rubber Speed Breakers</a>
                        </div>
                    )}
                </div>

                {/* FAQ 7 */}
                <div className="border border-yellow-500 rounded-lg overflow-hidden shadow-md mb-4">
                    <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(6)}>
                        What are the advantages of using rubber speed breakers over concrete ones?
                        <span className="text-yellow-500">{openIndex === 6 ? "-" : "+"}</span>
                    </button>
                    {openIndex === 6 && (
                        <div className="p-4 bg-yellow-100 text-black">
                            <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-800">
                                <li><b>Easier installation and removal</b> – Can be installed in a few hours.</li>
                                <li><b>Flexible and weather-resistant</b> – Does not crack or erode like concrete.</li>
                                <li><b>Environmentally friendly</b> – Often made from recycled rubber.</li>
                                <li><b>Less vehicle damage</b> – Gentler on tires and suspension.</li>
                                <li><b>Better visibility</b> – Bright colors and reflective strips improve nighttime safety.</li>
                            </ul>
                            For more information, visit: <a href="https://www.rubberspeedbumps.com/advantages-of-rubber-speed-bumps/" target="_blank" rel="noopener noreferrer" className="text-blue-700">Advantages of Rubber Speed Bumps</a>
                        </div>
                    )}
                </div>

                {/* FAQ 8 */}
                <div className="border border-yellow-500 rounded-lg overflow-hidden shadow-md mb-4">
                    <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(7)}>
                        How do speed breakers affect vehicle wear and tear?
                        <span className="text-yellow-500">{openIndex === 7 ? "-" : "+"}</span>
                    </button>
                    {openIndex === 7 && (
                        <div className="p-4 bg-yellow-100 text-black">
                            <ol className="list-decimal pl-6 mt-2 space-y-1 text-gray-800">
                                Improperly designed or unmarked speed breakers can cause:
                                <li><span className="font-semibold">Suspension damage.</span></li>
                                <li><span className="font-semibold">Increased tire wear.</span></li>
                                <li><span className="font-semibold">Discomfort to passengers.</span></li>
                                <li><span className="font-semibold">Potential loss of vehicle control if taken at high speeds.</span></li>
                            </ol>
                            For more details, visit: <a href="https://www.caranddriver.com/news/a15347760/how-speed-bumps-affect-your-car/" target="_blank" rel="noopener noreferrer" className="text-blue-700">How Speed Bumps Affect Your Car</a>
                        </div>
                    )}
                </div>

                {/* FAQ 9 */}
                <div className="border border-yellow-500 rounded-lg overflow-hidden shadow-md mb-4">
                    <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(8)}>
                        Why choose Elastomech speed breakers?
                        <span className="text-yellow-500">{openIndex === 8 ? "-" : "+"}</span>
                    </button>
                    {openIndex === 8 && (
                        <div className="p-4 bg-yellow-100 text-black">
                            Elastomech provides high-quality rubber speed breakers that offer:
                            <ol className="list-decimal pl-6 mt-2 space-y-1 text-gray-800">
                                <li><b>Durability and weather resistance.</b></li>
                                <li><b>Easy installation and maintenance.</b></li>
                                <li><b>High visibility with reflective markings.</b></li>
                                <li><b>Eco-friendly materials with long lifespan.</b></li>
                                <br />
                                <p>Our products are designed to meet <b>global road safety standards</b>, ensuring effective traffic management.</p>
                                <a
                                    href="https://www.elastomech.in/products/speed-breakers"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-700"
                                >
                                    best speed breakers at Elastomech
                                </a>
                            </ol>
                        </div>
                    )}
                </div>

                {/* FAQ 10 */}
                <div className="border border-yellow-500 rounded-lg overflow-hidden shadow-md mb-4">
                    <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(9)}>
                        Are speed breakers legally required?
                        <span className="text-yellow-500">{openIndex === 9 ? "-" : "+"}</span>
                    </button>
                    {openIndex === 9 && (
                        <div className="p-4 bg-yellow-100 text-black">
                            Yes, many countries and municipalities require speed breakers in specific locations for safety compliance. Regulations vary, but they often specify:
                            <ol className="list-decimal pl-6 mt-2 space-y-1 text-gray-800">
                                <li><b>Material and dimensions</b> for legal compliance.</li>
                                <li><b>Proper signage</b> before a speed breaker.</li>
                                <li><b>Placement guidelines</b> to avoid unnecessary vehicle discomfort.</li>
                                <br />
                                For Indian road safety rules, visit:<a href="https://morth.nic.in/" target="_blank" rel="noopener noreferrer">🔗 Ministry of Road Transport & Highways</a>
                            </ol>
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

export default FAQSB;