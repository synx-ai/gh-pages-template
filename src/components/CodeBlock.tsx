import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "../assets/prism/okaidia";

export const CodeBlock = ({ children, className }) => {
  const language =
    className !== undefined ? className.replace(/language-/, "") : "text";

  return (
    <div className="outer dark">
      <div className="dot red"></div>
      <div className="dot amber"></div>
      <div className="dot green"></div>
      <Highlight
        {...defaultProps}
        code={children.replace(/,+$/, "")}
        language={language}
        theme={theme}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={{ ...style }}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
};

export default CodeBlock;
