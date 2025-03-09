import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone! I'm <span className="purple">Asad Ur Rehman</span> from{" "}
            <span className="purple">Punjab, Pakistan.</span>
            <br />I am a passionate <strong>Software Developer</strong>{" "}
            currently working at <span className="purple">QuantumStack</span>.
            <br />I hold a Bachelor's degree in{" "}
            <strong>Information Technology (BSIT)</strong> from the{" "}
            <span className="purple">University of Education Lahore</span>.
            <br />
            <br />
            Besides coding, I enjoy engaging in various activities:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling & Exploring New Places ✈️
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)", fontStyle: "italic" }}>
            "Strive to build things that make a difference and leave a positive
            impact!"
          </p>
          <footer className="blockquote-footer">Asad Ur Rehman</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
