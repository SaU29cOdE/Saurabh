import heroimage from "../assets/contactHero.jpg";
import "./ContactHero.css";

const ContactHero = () => {
  return (
    <div className="hero-container">
      <img src={heroimage} alt="image" className="hero-image" />
      <div className="text">Contact Us</div>
    </div>
  );
};

export default ContactHero;
