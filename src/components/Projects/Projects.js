import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import VICTORIOUS from "../../Assets/Projects/demo1.gif";
import ios from "../../Assets/Projects/ios.png";
import meta from "../../Assets/Projects/gif1.gif";
import appvoloh2 from "../../Assets/Projects/appvoloh2.gif";
import android from "../../Assets/Projects/android.png";
import appvoloh1 from "../../Assets/Projects/appvoloh1.gif";
import appvolo from "../../Assets/Projects/appvolo.gif";
import appvolo_1 from "../../Assets/Projects/appvolo_1.gif";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes <strong className="purple">récentes réalisations</strong>
        </h1>
        <p style={{ color: "white" }}>
          Voici quelques projets sur lesquels j'ai travaillé récemment.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
       
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={appvoloh1}
              isBlog={false}
              title="Application client"
              description="Création d'une application mobile pour les utilisateurs abonnés afin de gérer leurs expériences de vélo électrique."
              ghLink="https://github.com/achrefmej"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={appvoloh2}
              isBlog={false}
              title="Application d’achat"
              description="Développement d’une application d’entrée pour permettre aux nouveaux utilisateurs de découvrir les offres de VOLO-BIKES et d’initier des abonnements."
              ghLink="https://github.com/achrefmej"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={appvolo}
              isBlog={false}
              title="Système de back-office"
              description="Conception d’un système complet pour la gestion interne par l’équipe VOLO-BIKES, couvrant la gestion des utilisateurs, le suivi des abonnements et la maintenance des vélos."
              ghLink="https://github.com/achrefmej"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={appvolo_1}
              isBlog={false}
              title="Tableau de bord analytique en temps réel"
              description="Développement d'un tableau de bord analytique utilisé par les agents pour gérer la modélisation des informations de construction (BIM) et les rendez-vous."
              ghLink="https://github.com/achrefmej"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={meta}
              isBlog={false}
              title="Meta co-working Metaverse"
              description="Espace de travail virtuel qui peut se transformer en bureau, espace de coworking, ou même en une entreprise entière, selon les besoins du client."
              ghLink="https://github.com/achrefmej"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ios}
              isBlog={false}
              title="Frippy App projet intégré iOS"
              description="Application mobile de médias sociaux pour les appareils iOS afin de lancer votre marque et vendre des vêtements, des produits électroniques, etc."
              ghLink="https://github.com/achrefmej"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={android}
              isBlog={false}
              title="Frippy App projet intégré Android"
              description="Application mobile de médias sociaux pour les appareils Android afin de lancer votre marque et vendre des vêtements, des produits électroniques, etc."
              ghLink="https://github.com/achrefmej"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={VICTORIOUS}
              isBlog={false}
              title="VICTORIOUS: Application intégrée Web"
              description="Victorious est une solution pour gérer plus facilement les compétitions esport (Symfony - JavaFX - CodenameOne - SQL)."
              ghLink="https://github.com/achrefmej"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
