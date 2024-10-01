import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Ingénieur Logiciel",
          "Développeur Full Stack js",
          "Développeur Web",
          "Développeur Mobile",
          "Passionné par Node.js et angular",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
