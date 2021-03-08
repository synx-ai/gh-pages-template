import React from "react";
import synx from "../assets/img/synx-logo.svg";
import imgCC from "../assets/img/creative-commons/cc.svg";
import imgBy from "../assets/img/creative-commons/by.svg";
import imgRemix from "../assets/img/creative-commons/remix.svg";

export const Footer = () => {
  return (
    <React.Fragment>
      <footer>
        <div className="fluid-container">
          <div className="row">
            <div className="col-4">
              <a href="https://synx.ai" target="_blank">
                <img src={synx} className="footer-logo" />
              </a>
              <p>
                Project proudly powered by <strong>Synx Open Source</strong>{" "}
                code base. Find us on&nbsp;
                <a href="https://github.com/synx-ai" target="_blank">
                  GitHub
                </a>{" "}
                or learn more about&nbsp;
                <a href="https://synx.ai" target="_blank">
                  synx.ai
                </a>
                .
              </p>
            </div>
            <div className="col-4"></div>
            <div className="col-4">
              <div className="tooltip">
                <img src={imgCC} className="cc-logo" />
                <span className="tooltiptext">Cretive Commons</span>
              </div>

              <div className="tooltip">
                <img src={imgBy} className="cc-logo" />
                <span className="tooltiptext">Attribution By</span>
              </div>

              <div className="tooltip">
                <img src={imgRemix} className="cc-logo" />
                <span className="tooltiptext">Remix Allowed</span>
              </div>

              <p className="cc">
                Except for Synx, companies logos and where otherwise noted,
                content on this site is licensed under a&nbsp;
                <a
                  href="https://creativecommons.org/licenses/by/4.0/"
                  target="_blank"
                >
                  Creative Commons Attribution 4.0 International
                </a>{" "}
                license. Code and libraries have their own license at their
                respective repositories.
              </p>
            </div>
          </div>

          <div className="synx-hue-line"></div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
