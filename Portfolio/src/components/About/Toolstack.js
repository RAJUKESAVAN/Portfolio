import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiGit,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiNetlify,
  SiLinode,
  SiGithub,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ color: "purple", fontSize: "20px" }}>GIT</div>
        <SiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ color: "purple", fontSize: "20px" }}>VS CODE</div>
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ color: "purple", fontSize: "20px" }}>POSTMAN</div>
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ color: "purple", fontSize: "20px" }}>NETLIFY</div>
        <SiNetlify />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ color: "purple", fontSize: "20px" }}>HEROKU</div>
        <SiHeroku />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ color: "purple", fontSize: "20px" }}>GITHUB</div>
        <SiGithub />
      </Col>
    </Row>
  );
}

export default Toolstack;
