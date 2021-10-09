import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../../layouts/LayoutOne";
// import BannerOne from "../../wrappers/banner/BannerOne";
// import BlogFeatured from "../../wrappers/blog-featured/BlogFeatured";
import HeroSliderNine from "../../wrappers/hero-slider/HeroSliderNine";
// import TabProductFive from "../../wrappers/product/TabProductFive";

const HomeFashionTwo = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>SpirexRealTech </title>
        <meta
          name="description"
          // content="Fashion home of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
      >
        {/* hero slider */}
        <div className="container">
        <div className="welcome-content text-center">
          
       <h1>India’s waste management problem and it’s digital application solution to reduce construction cost</h1>
        </div>
        </div>
        <HeroSliderNine spaceLeftClass="ml-70" spaceRightClass="mr-70" />

        <div className="container mt-5">
        <div className=" text-center">
          <p>Green, eco-friendly building is not only a hype. Modern architecture requires a house to be designed not only aesthetically pleasing but environmentally friendly too. Indeed, sustainability is among the top features that put a premium on real estate.

Recycling is no doubt the number one option when it comes to eco-friendly construction. Not only it helps you keep your footprint to the minimum, but it’s also only much cheaper too. So there’s all the more reason to choose this type of building.

As we as humans are an inventive kind, we are always seeking new ways how to do something. This includes making new innovative recycled resources for construction. 








</p>
          </div>
        </div>
        {/* banner */}
        {/* <BannerOne spaceTopClass="pt-60" spaceBottomClass="pb-65" /> */}
        {/* tab product */}
        {/* <TabProductFive spaceBottomClass="pb-60" category="accessories" /> */}
        {/* blog featured */}
        {/* <BlogFeatured spaceBottomClass="pb-55" /> */}
      </LayoutOne>
    </Fragment>
  );
};

export default HomeFashionTwo;
