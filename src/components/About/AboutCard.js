import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mejri Achref </span>
            from <span className="purple"> Zaghouan, Tunisia.</span>
            <br />Student in Computer Engineering with a proven passion for mobile and web development,
             I am currently in the last year of my studies at the ESPRIT School of Engineering
            <br />
            
           
          </p>
         

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Mejri Achref</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
