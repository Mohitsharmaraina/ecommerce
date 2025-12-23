import React from "react";
import Title from "../components/Title.jsx";
import { assets } from "../assets/frontend_assets/assets.js";
import NewsLetterBox from "../components/NewsLetterBox.jsx";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col lg:flex-row gap-16">
        <img
          className="w-full lg:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 lg:w-2/4 text-gray-600">
          <p>
            At the heart of our collection lies an unwavering commitment to
            premium craftsmanship and durability. We meticulously source
            high-quality fabrics—from breathable organic cottons to luxurious
            silk blends—ensuring that every garment not only looks stunning but
            stands the test of time.
          </p>
          <b className="text-gray-800">Our Mission </b>
          <p>
            We believe that shopping should be an experience, not just a
            transaction. Our team is dedicated to providing personalized styling
            advice and attentive care the moment you walk through our doors.
            Whether you need help finding the perfect outfit for a special
            occasion or require custom fitting adjustments, we go the extra mile
            to ensure you leave feeling confident and satisfied. To us, you
            aren't just a customer; you're part of our fashion community.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col lg:flex-row text-sm mb-20">
        <div className="border px-10 lg:px-16 py-8 sm:py-10 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            Every garment undergoes a multi-point inspection—from fabric
            strength to seam integrity—ensuring that only pieces meeting our
            highest standards of durability and finish make it to your wardrobe.
          </p>
        </div>
        <div className="border px-10 lg:px-16 py-8 sm:py-10 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Your time is valuable, so we’ve streamlined your shopping
            experience. Enjoy seamless browsing, rapid checkout, and a flexible
            return policy.
          </p>
        </div>
        <div className="border px-10 lg:px-16 py-8 sm:py-10 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Our dedicated style consultants provide proactive, personalized
            support, ensuring every question is answered and every fitting is
            perfect, because your confidence is our greatest priority.
          </p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default About;
