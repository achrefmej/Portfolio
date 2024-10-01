import React from "react";
import { Row } from "react-bootstrap";
import './Services.css';
import { BsCheck2All } from 'react-icons/bs';

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Ce que je propose : <strong className="purple">Services</strong>
      </h1>
      <div className="container services__container">

        {/* Mobile Development */}
        <article className="service">
          <div className="service__head">
            <h3>Développement Mobile</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheck2All className='service__liste-icon' />
              <p>Développement iOS : Je me spécialise dans la création d'applications iOS riches en fonctionnalités, intuitives et évolutives, compatibles avec divers appareils, en utilisant les dernières technologies telles que Swift et Xcode.</p>
            </li>
            <li>
              <BsCheck2All className='service__liste-icon' />
              <p>Développement Android : Je développe des applications Android performantes qui exploitent pleinement le potentiel de la plateforme, garantissant une fonctionnalité fluide et une expérience utilisateur optimale.</p>
            </li>
            <li>
              <BsCheck2All className='service__liste-icon' />
              <p>En utilisant des frameworks comme React Native ou ionic, je crée des applications multiplateformes qui fonctionnent à la fois sur iOS et Android, réduisant ainsi le temps de développement et les coûts tout en maintenant une expérience utilisateur native.</p>
            </li>
          </ul>
        </article>

        {/* Web Development */}
        <article className="service">
          <div className="service__head">
            <h3>Développement Web</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheck2All className='service__liste-icon' />
              <p>Je me spécialise dans la création de sites web sur mesure, évolutifs et performants, adaptés à vos besoins spécifiques. J'utilise des technologies modernes et des frameworks tels que React, .NET, HTML/CSS, JavaScript, Node.js, Spring Boot, et Symfony/PHP.</p>
            </li>
            <li>
              <BsCheck2All className='service__liste-icon' />
              <p>Je développe des sites web réactifs qui s'adaptent parfaitement aux ordinateurs de bureau, tablettes et appareils mobiles, offrant ainsi une expérience utilisateur optimale à tous les visiteurs.</p>
            </li>
          </ul>
        </article>

        {/* Game Development */}
        <article className="service">
          <div className="service__head">
            <h3>Développement de Jeux</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheck2All className='service__liste-icon' />
              <p>Création d'environnements virtuels visuellement époustouflants et captivants.</p>
            </li>
            <li>
              <BsCheck2All className='service__liste-icon' />
              <p>Services de création et de personnalisation d'avatars.</p>
            </li>
            <li>
              <BsCheck2All className='service__liste-icon' />
              <p>Développement d'expériences interactives et de gameplay engageant.</p>
            </li>
            <li>
              <BsCheck2All className='service__liste-icon' />
              <p>Intégration de fonctionnalités sociales et de capacités de mise en réseau dans le metaverse, permettant aux utilisateurs de se connecter, communiquer et collaborer en temps réel.</p>
            </li>
          </ul>
        </article>

      </div>
    </Row>
  );
}

export default Github;
