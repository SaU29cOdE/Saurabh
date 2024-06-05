import image from "../assets/AboutUs.webp";
import question from "../assets/chef-que.png";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <>
      <div className="aboutus-image">
        <img src={image} alt=""></img>
        <div className="aboutus-text">What Is A Cloud Kitchen?</div>
      </div>
      <div className="container">
        <img src={question} alt=""></img>
        <p>
          <h3>What Is A Cloud Kitchen?</h3>
          A cloud kitchen—also referred to as a “ghost kitchen” or “virtual
          kitchen”—is a commercial kitchen space that provides food businesses
          the facilities and services needed to prepare menu items for delivery
          and takeout. Unlike traditional brick-and-mortar locations, cloud
          kitchens allow food businesses to create and deliver food products
          with minimal overhead. <br />
          <br />
          Recent data indicates that meal delivery orders increased by more than
          150% from 2019 to 2020—and UBS anticipates the food delivery market to
          increase more than 10x over a ten-year period from $35 billion per
          year to $365 billion. More and more restaurant owners and food
          entrepreneurs are turning to cloud kitchens as an ideal business
          solution to capture this increase in food delivery demand.
          <br />
        </p>
      </div>
    </>
  );
};

export default AboutUs;
