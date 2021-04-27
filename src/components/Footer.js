import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNode, faReact, faHtml5, faCss3Alt, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="flex justify-items-center text-center">
      <div>
        <p>
          {" Brought to you by the Web 3 Enterprise Adoption Advocacy Team"}
        </p>
        <p>Built with the following technologies:</p>
        <span className="m-2" style={{ color: "#689f63" }}>
          <FontAwesomeIcon icon={faNode} size="2x" />
        </span>
        <span className="m-2" style={{ color: "#61dafb" }}>
          <FontAwesomeIcon icon={faReact} size="2x" />
        </span>
        <span className="m-2" style={{ color: "#E54D26" }}>
          <FontAwesomeIcon icon={faHtml5} size="2x" />
        </span>
        <span className="m-2" style={{ color: "#1572B7" }}>
          <FontAwesomeIcon icon={faCss3Alt} size="2x" />
        </span>
        <span className="m-2" style={{ color: "#FFF" }}>
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </span>
      </div>
    </footer>
  );
};

export default Footer;
