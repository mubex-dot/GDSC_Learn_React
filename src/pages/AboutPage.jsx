import React from "react";
import Card from "../shared/Card";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About this Project</h1>
        <p>
          This is a React app to leave feedback for my product and services if
          You Like them
        </p>
        <p>Version: 1.0.0</p>
        <div className="link-page">
          <Link className="btn-home" to="/">
            Back to Home
          </Link>
          <Link className="btn-contact" to="/contact-me">
            Contact me
          </Link>
        </div>
        <p></p>
      </div>
    </Card>
  );
}

export default AboutPage;
