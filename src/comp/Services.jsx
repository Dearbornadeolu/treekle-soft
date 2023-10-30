import Header from "./Header"
import Footer from "./Footer"

const Services = () => {
    return (
        <>
            <div >
                <Header />
                <div className="md:w-[90%] m-auto p-[10px] md:p-0 mb-[100px] mt-5">
                    <div className=" ">
                        <h1 className="text-[40px] font-bold font-Inter">
                            Our Service
                        </h1>
                        <p className="text-[1rem] font-Inter">
                            YARA is a customizable open-source eCommerce platform, empowering businesses of all sizes to create and scale their online stores. At YARA, we specialize in providing comprehensive eCommerce services tailored to meet your specific business needs. Our team of experts is dedicated to delivering the following services:
                        </p>
                    </div>
                    <ul className="font-Inter mt-5">
                        <li className="">
                            <h1 className="flex items-center gap-4 text-[1.2rem] font-bold"><div className="bg-black w-[8px] h-[8px] rounded-full"></div> Setup and Configuration</h1>
                            <p className="mt-4">
                                Our team of experienced developers will help you set up and configure your eCommerce store to ensure a seamless and efficient online shopping experience for your customers. From installation to customization, we've got you covered.
                            </p>
                        </li>
                        <li className="mt-5">
                            <h1 className="flex items-center gap-4 text-[1.2rem] font-bold"><div className="bg-black w-[8px] h-[8px] rounded-full"></div> Custom Theme Development</h1>
                            <p className="mt-4">
                                Looking for a unique and engaging design for your online store? Our expert designers will work closely with you to develop a custom eCommerce theme that reflects your brand identity and resonates with your target audience.
                            </p>
                        </li>
                        <li className="mt-5">
                            <h1 className="flex items-center gap-4 text-[1.2rem] font-bold"><div className="bg-black w-[8px] h-[8px] rounded-full"></div> Plugin Integration and Customization</h1>
                            <p className="mt-4">
                                Enhance the functionality of your eCommerce store with our plugin integration and customization services. Whether you need to integrate a payment gateway, improve security features, or add new functionalities, our team will ensure a smooth integration process.
                            </p>
                        </li>
                        <li className="mt-5">
                            <h1 className="flex items-center gap-4 text-[1.2rem] font-bold"><div className="bg-black w-[8px] h-[8px] rounded-full"></div> Product Management and Optimization</h1>
                            <p className="mt-4">
                                Optimize your product listings for maximum visibility and conversion. Our product management services include optimizing product descriptions, images, and pricing to create an appealing and user-friendly shopping experience.
                            </p>
                        </li>
                        <li className="mt-5">
                            <h1 className="flex items-center gap-4 text-[1.2rem] font-bold"><div className="bg-black w-[8px] h-[8px] rounded-full"></div> Payment Gateway Setup</h1>
                            <p className="mt-4">
                                We'll help you set up secure and reliable payment gateways to ensure smooth transactions and build trust with your customers. Our experts will guide you through the process and recommend the best payment solutions for your business needs.
                            </p>
                        </li>
                        <li className="mt-5">
                            <h1 className="flex items-center gap-4 text-[1.2rem] font-bold"><div className="bg-black w-[8px] h-[8px] rounded-full"></div> Performance Optimization</h1>
                            <p className="mt-4">
                                Improve your websites performance and speed with our optimization services. From caching to image optimization, we will fine-tune your eCommerce site to deliver a seamless and fast browsing experience for your customers.
                            </p>
                        </li>
                    </ul>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Services