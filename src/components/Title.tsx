import React from "react";

export const Title = ({ children, className }) => {
  return (
    <React.Fragment>
      <div>
        <h1>{children}</h1>
      </div>
    </React.Fragment>
  );
};

export default Title;
