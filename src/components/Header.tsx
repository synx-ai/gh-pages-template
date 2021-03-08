import React from "react";

export const Header = () => {
  return (
    <React.Fragment>
      <header>
        <div className="fluid-container">
          <div className="row">
            <div className="col-6">
              <a href="https://synx.ai" target="_blank">
                <img src="assets/img/synx-logo.svg" className="logo" />
              </a>
            </div>
            <div className="col-6">
              <a href={import.meta.env.SNOWPACK_PUBLIC_REPO} target="_blank">
                <img src="assets/img/github.svg" className="github" />
              </a>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
