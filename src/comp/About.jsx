
// import Header from "./Header";
// import Footer from "./Footer";

const About = () => {
  return (
    <div>
      {/* <Header /> */}
      {/*  bg-gradient-to-t from-blue-50 via-blue-100 to-blue-400 w-64 */}
      <div className="md:flex md:w-[90%] m-auto mt-5 gap-2">
        <div className="w-[100%] md:w-[80%] lg:w-[60%]">
          <h1 className=" font-Inter font-bold text-[30px]">The Mission</h1>
          <p className="mt-3 font-Inter text-[.9rem] lg:text-[1.5rem]">We are a dedicated team of e-commerce enthusiasts committed to providing a seamless online shopping experience for our valued customers. With a passion for technology and a deep understanding of customer needs, we have curated a diverse collection of products designed to cater to a wide range of tastes and preferences.</p>
          <p className="mt-4 font-Inter text-[.9rem] lg:text-[1.5rem]">
            Our mission is to simplify the online shopping experience and empower customers to make informed purchasing decisions.
          </p>
        </div>
        <div>
          <img src="/img-group.png" alt="" />
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default About;
