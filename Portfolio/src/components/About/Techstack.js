import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiHtml5,
  DiCss3,
  DiMysql,
  DiAws,
  DiBootstrap,
} from "react-icons/di";
import { SiMaterialui, SiLatex, SiStyledcomponents } from "react-icons/si";

function Techstack() {
  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "40px",
      }}
    >
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ color: "purple", fontSize: "20px" }}>JAVASCRIPT</div>
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ color: "purple", fontSize: "20px" }}>NODE JS</div>
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ color: "purple", fontSize: "20px" }}>REACT</div>
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ color: "purple", fontSize: "20px" }}>MONGODB</div>
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ color: "purple", fontSize: "20px" }}>HTML</div>
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ color: "purple", fontSize: "20px" }}>CSS</div>
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ color: "purple", fontSize: "20px" }}>MYSQL</div>
        <DiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ color: "purple", fontSize: "20px" }}>AWS</div>
        <DiAws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ color: "purple", fontSize: "20px" }}>BOOTSTRAP</div>
        <DiBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ color: "purple", fontSize: "20px" }}>MATERIAL-UI</div>
        <SiMaterialui />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ color: "purple", fontSize: "20px" }}>LATEX</div>
        <SiLatex />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ color: "purple", fontSize: "20px" }}>
          STYLED COMPONENTS
        </div>
        <SiStyledcomponents />
      </Col>
    </Row>
  );
}

export default Techstack;
