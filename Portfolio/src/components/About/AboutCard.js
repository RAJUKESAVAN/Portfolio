import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple">Raju Kesavan </span>
            from <span className="purple"> Arakkonam, India.</span>
            <br />
            <br></br>I studied Diploma in Mechanical Engineering and also have 4+ years of
            experience in Automobile industry.
            <br />
            <br></br>
            I mainly work with the MERN stack but I have a profound knowledge of
            HTML & CSS, Javascript.
            <br />
            <br></br>
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Raju</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
