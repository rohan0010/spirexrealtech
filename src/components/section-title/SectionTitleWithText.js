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
          <h1>SPRIEX – A BRIDGE BETWEEN SOCIETY AND INDUSTRY </h1>
          <p>
          Cloud based technology in digital platform  for the waste management with the participation of Government.
 Digital application will be designed where in the total waste demand will set as an enquiry and the waste available with the Government/ Semi Government Organizations/ Corporate Houses and individual dump yard etc. will update the availability and the same will be picked up by our channels partners for further process.    



{" "}
          </p>
          <h1>Present scenario </h1>

       <p>
         
         

       Being a traditional  sector it has not seen much technology adoption but now its looking up as start ups to come out with innovative construction technologies and affordable products made of waste which in turn will reduce the construction cost.  

Most Important the waste in India is not managed like other countries which ultimately results in to the pollution and junks either on the road side or dumped in dump yard, Our startup will use this biodegradable  waste manly palm oil fuel ash, Quarry waste , Rice Husk Ash, Bamboo Fiber by collecting the same through door to door process in both domestic as well as industrial sectors  ultimately making pollution free society, lower budget construction, lesser use of minerals, Green Buildings and many more. 

</p>
<h1>
HOW SPRIEX WILL BRING THE CHANGE 
</h1>
<p>

Web based waste management technology in construction. Low cost eco friendly green houses under PM Awas Yojna 2021-22.  The walls of the house will be mud coated which will reduce the impact of heat making home comfortable in all weather.   Company has a plan to unique employment opportunity for the resident in form of providing them a common platform where in they can exercise their expertise in creating revenue for their livelihood. 


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
