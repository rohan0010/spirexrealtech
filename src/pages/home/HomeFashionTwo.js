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
          
       <h1> India’s waste management problem and it’s digital application solution</h1>
        </div>
        </div>
        <HeroSliderNine spaceLeftClass="ml-70" spaceRightClass="mr-70" />

        <div className="container mt-5">
        <div className=" text-center">
          <p>One alarming spillover of India’s remarkable growth story is the fact that its growing population, coupled with rapid urbanization and industrialization, has resulted in spiraling levels of civic and industrial waste being generated.

With an average annual growth rate of 4%, this inextricably intertwined byproduct of industrialization poses far reaching ramifications of urban pollution, public health and hygiene. The US Public Health Service has identified 22 human diseases that are linked to improper solid waste management. Multiple studies have demonstrated a link between garbage burning and diseases such as asthma, bronchitis, emphysema and heart attack. Garbage burning, which is classified as the third biggest cause of greenhouse emission in the country, is responsible for releasing carbon monoxide, nitrogen oxide, sulfur dioxide and carcinogenic hydrocarbons, along with particulate matter into the air. 
India, the world’s fifth-largest economy, currently generates 62 million tons of waste (both recyclable and non-recyclable) every year, according to the Ministry of Environment, Forest and Climate Change (GoI).
Currently India generates 70 million metrics of municipal solid wastes, of which only 20% is recycled and rest 80% ends up in landfills and oceans affecting humans, marine life and destroying the environment

Our company  is aimed at addressing this health menace, we offer a unique set of solutions. The idea is to disrupt the existing waste and recyclables space by leveraging digital technology and connect waste generators like businesses and consumers with waste aggregators and recyclers.
“Waste management in India is a $15 billion opportunity in India. Idea is to provide cloud-based full service waste and recycle enabling platform. It's focused on buying and selling recyclable, connecting recyclable generators like customers, businesses, manufacturers, and waste collectors to a network of recyclers, who are facing a shortage of reliable supply in this informal industry,”

“WASTE MANAGEMENT DIGITALISATION IS OPPOURTUNITY WITH A NOBLE CAUSE TO SERVE THE SOCIETY.”

Waste management, one of the world's oldest industries, has been awaiting digital disruption. Apart from being a business idea, transforming the waste management space can lead to a social, environmental and economic impact,”

We can bring a change in the way India recycles and thinks about waste management. “The current waste value chain consisting of waste generators, waste aggregators, waste processors and recyclers work in their own silos that remain disconnected. Also, the industry is dominated by the informal workforce where the majority of the transactions are carried out offline, leaving no traceability of materials.

To address such issues, our digital technology provides many SaaS-based solutions. Our startup’s existing offerings for the waste management industry, include, a marketplace that enables transactions between waste generators, waste aggregators, recyclers with transparency and traceability. The portal makes buying, selling plastics, paper, e-waste and other recyclable wastes with digital payments, online documentation, logistics support and complete digital transaction support.
Our EPR Platform is a digital online platform that helps FMCG companies, electrical, electronics companies to manage their EPR fulfillment digitally. The platform allows brands to engage with waste generators and urban local bodies to source material digitally, thereby facilitating actionable analytics and reporting capabilities to keep things on track.

Waste picker gets a dedicated app for, enabling them access to various incentive programs to potentially alter their livelihoods.
Further, a consumer take-back and incentivization app is in process of development which will allow consumers to dispose of recyclable wastes responsibly by offering convenient pickup service and online incentives. The app will be used by corporate, schools, and colleges to run engagement programs. Consumers have an option for a doorstep pick up or drop recyclable wastes at the collection point and consumers are rewarded with points in their respective account. These points can be redeemed for gift vouchers from leading brands, incentivizing their efforts for creating a sustainable planet.

The cloud-based platform brings a host of benefits, including a hassle-free experience in facilitating recycling of large quantity of plastics, paper or e-waste generated by the industries.

Our software and mobile applications will be simple to understand and have target downloading of application by over 400,000 individuals and over 1000 businesses. A small membership fee with digital platform to connect C 2 C module will generate huge revenue and even we shall be able to involve promising youth who are looking for income generation through digital application of waste management.
Corporate clients will be charged with a reasonable service fee and all application services with it’s  up-gradation, AMC services, tailor made application development are various revenue generation opportunities.







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
