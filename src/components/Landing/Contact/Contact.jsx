import Button from "react-bootstrap/Button";
import { AiOutlineMail, AiOutlineUpCircle } from "react-icons/ai";
import "./Contact.css";

export default function Contact({ width, breakpoint }) {
  return (
    <div className="Contact">
      <h1>Get In Touch</h1>
      <h4>Open to job oppurtuntities and freelance work</h4>
      <Button
        href="mailto:isaac.laster812@outlook.com"
        rel="noreferrer"
        variant="dark"
        size="lg"
        id="contact"
      >
        <AiOutlineMail />
        Contact
      </Button>
      <div className="bottom">
        {width > breakpoint ? (
          <a href="#welcome" className="lanchor">
            <AiOutlineUpCircle size={35} style={{ color: "white" }} />
          </a>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
