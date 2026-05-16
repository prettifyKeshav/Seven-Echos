import React from "react";
import "@/uploads/styles/blogs/blogs.css"
import Hero from "@/components/organisms/Hero";
import BlogList from "./BlogList";

const Blogs = () => {
  return (
    <>
      <Hero
        bannerClassName="about-banner"
        imgSrc="/assets/images/about/banner.jpg"
        imgHeight="626"
        imgWidth="1028"
        heading="Blogs"
        description="Stories that inspire, guide, and stay with you long after the last word."
      />
      <BlogList />
    </>
  );
};

export default Blogs;
