import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
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
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiSymfony,
  SiPostgresql,
  SiPhp,
  SiKotlin,
  SiSwift,
  SiSpringboot,
  SiStreamlit

} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
  

      <Col xs={4} md={2} className="tech-icons">
        <SiSymfony />
      </Col>
  

      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
   
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
  
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
   
   
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPhp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKotlin />
      </Col>
      
     <Col xs={4} md={2} className="tech-icons">
        <SiSwift />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiSpringboot />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiStreamlit />
      </Col>
      
    </Row>
  );
}

export default Techstack;
