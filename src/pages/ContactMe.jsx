import { FaGithub, FaTwitter } from "react-icons/fa";
import { SiGmail, SiWhatsapp } from "react-icons/si";
import { Link } from "react-router-dom";
import Card from "../shared/Card";

function ContactMe() {
  return (
    <div className="contact-me">
      <Card>
        <h1>Contact Me</h1>
        <p>Hi there, contact me to ask me about anything you have in mind</p>
        <div className="contact-links">
          <a
            href="https://github.com/mubex-dot"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub color="#4285f4" size={25} />
          </a>
          <a
            href="https://twitter.com/m_u_b_e_x_"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter color="#4285f4" size={25} />
          </a>
          <a href="mailto:mubee2004@gmail.com" target="_blank" rel="noreferrer">
            <SiGmail color="#4285f4" size={25} />
          </a>
          <a
            href="https://wa.me/qr/GT66T5TVSCXGO1"
            target="_blank"
            rel="noreferrer"
          >
            <SiWhatsapp color="#4285f4" size={25} />
          </a>
        </div>
        <div className="back-home">
          <Link className="btn-home" to="/">
            Back to Home
          </Link>
        </div>
      </Card>
    </div>
  );
}

export default ContactMe;
