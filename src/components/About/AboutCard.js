import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bonjour à tous, je suis <span className="purple">Mejri Achref  </span>
            de <span className="purple">Tunisie.</span>
            <br />
            Je suis ingénieur en informatique, passionné par le développement web et mobile.
            J'ai obtenu mon diplôme d'ingénieur en informatique à l'École Supérieure Privée d'Ingénierie et de Technologies (ESPRIT), 
            ainsi qu'une licence en sciences informatiques à la Faculté des Sciences de Tunis El Manar (FST).
            <br />
            <br />
            Grâce à ces formations, j'ai acquis de solides compétences dans la conception et la mise en œuvre d'applications innovantes.
            Actuellement, je suis à la recherche d'une nouvelle opportunité professionnelle dans le domaine du développement Full Stack,
            avec une expertise particulière en <span className="purple">Node.js</span> et <span className="purple">Angular</span>.
          </p>
          
          <p style={{ color: "rgb(155 126 172)" }}>
            "Toujours viser à construire des choses qui font une différence !"{" "}
          </p>
          <footer className="blockquote-footer">Mejri Achref</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
