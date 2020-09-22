import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faLinkedin,
    faGithub
  } from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div class="social-container">
      <h3 className = "heading">Created by Spirit Industries</h3>
        <a href="https://www.linkedin.com/in/chase-hobson/"
            className="linkedin social">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://github.com/KyleGashler" className="github social">
            <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
    </div>
  );
}