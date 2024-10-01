import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiPostgresql,
  SiMysql,
  SiKotlin,
  SiSwift,
  SiSpringboot,
  SiDocker,
  SiJenkins,
  SiAmazonaws,
  SiFigma,
  SiAdobexd,
  SiUnity,
  SiAngular,
  SiIonic,
} from "react-icons/si";
import './Techstack.css';  // Assurez-vous d'importer le fichier CSS ici

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Langages de programmation */}
      <Col xs={4} md={2} className="tech-icons">
        <DiPython className="DiPython" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 className="DiJavascript1" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKotlin className="SiKotlin" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSwift className="SiSwift" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIonic className="SiIonic" />
      </Col>

      {/* Frameworks et outils */}
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs className="DiNodejs" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact className="DiReact" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpringboot className="SiSpringboot" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiUnity className="SiUnity" />
      </Col>

      {/* Bases de données */}
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb className="DiMongodb" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql className="SiPostgresql" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql className="SiMysql" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAngular className="SiAngular" />
      </Col>

      {/* DevOps et outils */}
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker className="SiDocker" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJenkins className="SiJenkins" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws className="SiAmazonaws" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit className="DiGit" />
      </Col>

      {/* Outils de prototypage */}
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma className="SiFigma" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobexd className="SiAdobexd" />
      </Col>
    </Row>
  );
}

export default Techstack;
