import "./ContactForm.css";
import person from "../assets/person.png";
import email from "../assets/email.png";

const ContactForm = () => {
  return (
    <div className="form-container">
      <form>
        <div className="header">
          <h2>HOW CAN WE HELP YOU </h2>
          <div className="underline"></div>
        </div>
        <div className="input">
          <img src={person} alt=""></img>
          <input type="text" placeholder="Full Name" required></input>
        </div>

        <div className="input">
          <img src={email} alt=""></img>
          <input type="email" placeholder="Email Address" required></input>
        </div>

        <div className="input">
          <input type="tel" placeholder="Mobile Number"></input>
        </div>
        <div className="input box">
          <input type="text" placeholder="Type text" required></input>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
