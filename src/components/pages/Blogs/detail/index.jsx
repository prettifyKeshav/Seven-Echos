import Hero from "@/components/organisms/Hero";
import React from "react";
import BlogArticle from "./BlogArticle";
import "@/uploads/styles/blogs-detail/blogs-detail.css";
import "@/uploads/styles/blogs/blogs.css";
import MoreArticle from "./MoreArticle";

const BlogDetail = () => {
  return (
    <>
      <Hero
        bannerClassName="about-banner"
        imgSrc="/assets/images/blog/banner.jpg"
        imgHeight="626"
        imgWidth="1028"
        heading="5 Efficient Rules How to Organize Your next travel "
        description="Lorem ipsum dolor sit amet consectetur. Diam."
      />
      <BlogArticle />
      <MoreArticle />

    </>
  );
};

export default BlogDetail;
