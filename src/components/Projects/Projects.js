import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import VICTORIOUS from "../../Assets/Projects/demo1.gif";
import ios from "../../Assets/Projects/ios.png";
import meta from "../../Assets/Projects/gif1.gif";
import suicide from "../../Assets/Projects/suicide.png";
import android from "../../Assets/Projects/android.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={meta}
              isBlog={false}
              title="meta co-working Metaverse"
              description="a virtual workspace, that can turn into an office, a coworking space, or even a whole company, based on the client’s needs"
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ios}
              isBlog={false}
              title="Frippy App Integrated project ios"
              description="social media mobile application for android devices to start your brand to sell clothes, electronics"
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={android}
              isBlog={false}
              title="Frippy App Integrated project android"
              description="social media mobile application for android devices to start your brand to sell clothes, electronics"
              ghLink=""
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={VICTORIOUS}
              isBlog={false}
              title="VICTORIOUS: App Integrated project Web"
              description="Victorious. is a solution to manage esport competitions more easily ( Synfony - javaFX - Codenameone - Sql)"
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={meta}
              isBlog={false}
              title=""
              description=""
              ghLink=""
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={meta}
              isBlog={false}
              title=""
              description=""
              ghLink=""
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
