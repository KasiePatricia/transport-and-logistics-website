import React from "react";
import TitleTestimonial from "../Components/Testimonial/TitleTestimonial";
import UserTestimonial from "../Components/Testimonial/UserTestimonial";

const Testimonial = () => {
  return (
    <div className="w-3/4 mx-auto py-24">
      <TitleTestimonial />
      <UserTestimonial />
    </div>
  );
};

export default Testimonial;
