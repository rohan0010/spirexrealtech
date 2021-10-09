import PropTypes from "prop-types";
import React from "react";

const SectionTitleWithText = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div
      className={`welcome-area ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container">
        <div className="welcome-content text-center">
          <h5>Who Are We</h5>
          <h1>Welcome To Spirex Real Tech</h1>
          <p>
          Spirex Real Tech, the waste in India is not managed like other countries which ultimately results in to the pollution and junks either on the road side or dumped in dump yard, Our COMPANY  will use this biodegradable  waste manly palm oil fuel ash, Quarry waste, Rice Husk Ash, Bamboo Fiber by collecting the same through door to door process in both domestic as well as industrial sectors  ultimately making pollution free society, lower budget construction, lesser use of minerals, Green Buildings and many more.


{" "}
          </p>
          <h1>PROBLEM</h1>

       <p>
         
         

       Cloud based technology in digital platform  will be developed by the company and the waste management will be done through these cloud based technology with the participation of government. Digital application will be designed where in the total waste demand will se as an enquiry and the waste available with the Government/ Semi Government Organisations/ Corporate Houses and individual dumpyard etc will update the availability and the same will be picked up by our channels partners for further process.
</p>
<h1>Solution</h1>
<p>
Web based waste management technology in construction. Low cost eco friendly green houses under PM Awas Yojna 2021-22. The walls of the house will be mud coated which will reduce the impact of heat making home comfortable in all weather. Company has a plan to unique employment opportunity for the resident in form of providing them a common platform where in they can exercise their expertise in creating revenue for their livelihood. Company has a plan to unique employment opportunity for the resident in form of providing them a common platform where in they can exercise their expertise in creating revenue for their livelihood.

The company has a plan to get it registered  with patent department and will generate revenue by selling the product and developing low cost eco friendly houses. Our motive is to serve the society at large and create small pockets of revenue from various products and services generated through waste management technology. Technology Would Be instrumental in supporting the government in realizing in “housing for all” target of 20 million affordable home by 2020. Smart cities like Noida which is equipped with intelligent lighting digital connectivity IOT and sustainability would require low budget houses to contribute dream of the common man, small margin with volumes will create sustainable reasonable revenues

</p>
<h1>Traditional Sector</h1>
<p>Being a traditional  sector it has not seen much technology adoption but now its looking up as start ups to come out with innovative construction technologies and affordable products made of waste which in turn will reduce the construction cost.  Most Important the waste in India is not managed like other countries which ultimately results in to the pollution and junks either on the road side or dumped in dump yard, Our startup will use this biodegradable  waste manly palm oil fuel ash, Quarry waste , Rice Husk Ash, Bamboo Fiber by collecting the same through door to door process in both domestic as well as industrial sectors  ultimately making pollution free society, lower budget construction, lesser use of minerals, Green Buildings and many more. 

Cloud based technology in digital platform  will be developed by the company and the waste management will be done through these cloud based technology with the participation of government. Digital application will be designed where in the total waste demand will se as an enquiry and the waste available with the Government/ Semi Government Organisations/ Corporate Houses and individual dumpyard etc will update the availability and the same will be picked up by our channels partners for further process.    

Web based waste management technology in construction. Low cost eco friendly green houses under PM Awas Yojna 2021-22.  The walls of the house will be mud coated which will reduce the impact of heat making home comfortable in all weather.   Company has a plan to unique employment opportunity for the resident in form of providing them a common platform where in they can exercise their expertise in creating revenue for their livelihood. 

The company has a plan to get it registered  with patent department and will generate revenue by selling the product and developing low cost eco friendly houses. Our motive is to serve the society at large and create small pockets of revenue from various products and services generated through waste management technology.   
</p>
        </div>
      </div>
    </div>
  );
};

SectionTitleWithText.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default SectionTitleWithText;
