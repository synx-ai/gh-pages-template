import React from "react";
import synx from "../assets/img/synx-logo.svg";
import github from "../assets/img/github.svg";

export const Header = () => {
  return (
    <React.Fragment>
      <header>
        <div className="fluid-container">
          <div className="row">
            <div className="col-6">
              <a href="https://synx.ai" target="_blank">
                <img src={synx} className="logo" />
              </a>
            </div>
            <div className="col-6">
              <a href="https://synx.ai" target="_blank">
                <img src={github} className="github" />
              </a>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
