import Button from "react-bootstrap/Button";
import { AiOutlineMail } from "react-icons/ai";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="Contact">
      <h1>Get In Touch</h1>
      <h4>Open to job oppurtuntities and freelance work</h4>
      <Button
        href="mailto:isaac.laster812@outlook.com"
        rel="noreferrer"
        variant="dark"
        size="lg"
      >
        <AiOutlineMail />
        Contact
      </Button>
    </div>
  );
}
