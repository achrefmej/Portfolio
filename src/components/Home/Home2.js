import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar_achx.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              PERMETTEZ-MOI DE ME <span className="purple"> PRÉSENTER </span>
            </h1>
            <p className="home-about-body">
              Je suis un ingénieur informatique diplômé, avec plusieurs expériences professionnelles et une forte implication dans l'entrepreneuriat.
              <br />
              <br />
              J'ai développé des compétences solides dans la conception et la mise en œuvre d'applications web et mobiles
              <i>
                <b className="purple">, avec une maîtrise avancée de JavaScript, notamment dans les environnements Node.js et Angular. </b>
              </i>
              <br />
              <br />
              Je suis actuellement à la recherche d'une nouvelle opportunité professionnelle où je pourrais appliquer mes compétences Full Stack JS et continuer à apprendre et à innover dans un cadre stimulant.
              <br />
              <br />
              Mon expertise englobe le développement avec <b className="purple">Node.js</b> et les bibliothèques et frameworks JavaScript modernes comme
              <i>
                <b className="purple"> React.js, Angular, et Next.js</b>.
              </i>
              <br />
              <br />
              Je suis passionné par le développement de produits innovants, et je suis prêt à relever de nouveaux défis dans le domaine du développement Full Stack.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>RETROUVEZ-MOI SUR</h1>
            <p>
              N'hésitez pas à <span className="purple">me contacter </span> pour discuter de nouvelles opportunités !
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/achrefmej"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/MejriAchref4?t=hXHuFgDNQBUksmLKAQMEuQ&s=09"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/achref-mejri-8a9253179/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/achrefmej?igsh=N3N1OGI4bnNndXd3"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
