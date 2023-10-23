import { Link } from "react-router-dom";
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
      <div className=" md:w-[90%] m-auto mt-5">
        <h1 className="text-center text-[25px] font-Inter font-bold mt-9 mb-9">Why Choose Us?</h1>
        <div className="flex flex-wrap gap-5  font-Inter md:w-[80%] md:m-auto justify-center">
          <div className="flex flex-col gap-2 max-w-[250px] bg-[#F9F8FF] rounded-2xl pt-[60px] p-[20px]  items-center">
            <div className="h-[40px] w-[40px] bg-white rounded-md p-[10px]">
              <img src="ecommerce.svg" alt="" />
            </div>
            <h1 className="text-[20px] font-bold">E-Commerce Based</h1>
            <p>
              Helping you sell stuff is what gets us uo in the morning - we do not do any other type of marketing.
            </p>
          </div>
          <div className="flex flex-col gap-2 max-w-[250px] bg-white rounded-2xl pt-[60px] p-[20px]  items-center border-2">
            <div className="h-[40px] w-[40px] bg-[#F9F8FF] rounded-md p-[10px]">
              <img src="growth.svg" alt="" />
            </div>
            <h1 className="text-[20px] font-bold">Focus is on Growth</h1>
            <p>
              Helping you sell stuff is what gets us uo in the morning - we dont do any other type of marketing.
            </p>
          </div>
          <div className="flex flex-col gap-2 max-w-[250px] bg-white rounded-2xl pt-[60px] p-[20px]  items-center border-2">
            <div className="h-[40px] w-[40px] bg-[#F9F8FF] rounded-md p-[10px]">
              <img src="people.svg" alt="" />
            </div>
            <h1 className="text-[20px] font-bold">We are Experts</h1>
            <p>
              Helping you sell stuff is what gets us uo in the morning - we do not do any other type of marketing.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-5  font-Inter md:w-[80%] md:m-auto justify-between pt-[50px]">
          <div>
            <h1 className="text-[20px] font-extrabold text-center">+ 310%</h1>
            <p className="font-medium">increase in Revenue</p>
            <img src="/co1.svg" alt="" className="w-fit" />
            <div className="text-center">
              <Link to="#" className="text-[.5rem] font-bold underline text-center text-[#70C216] ">View Case study</Link>
            </div>
          </div>
          <div>
            <h1 className="text-[20px] font-extrabold text-center">+ 310%</h1>
            <p className="font-medium">increase in Revenue</p>
            <img src="/col2.svg" alt="" className="w-fit" />
            <div className="text-center">
              <Link to="#" className="text-[.5rem] font-bold underline text-center text-[#70C216] ">View Case study</Link>
            </div>
          </div>
          <div>
            <h1 className="text-[20px] font-extrabold text-center">+ 310%</h1>
            <p className="font-medium">increase in Revenue</p>
            <img src="/col3.svg" alt="" className="w-fit" />
            <div className="text-center">
              <Link to="#" className="text-[.5rem] font-bold underline text-center text-[#70C216] ">View Case study</Link>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default About;
