import React from "react";
import ReactDOM from "react-dom";
import { MDXProvider } from "@mdx-js/react";
import { Title } from "./components/Title";
import { CodeBlock } from "./components/CodeBlock";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import Readme from "../../readme";
import "./assets/styles.scss";

const App = ({ props }) => {
  const components = {
    pre: (props) => <div {...props} />,
    code: CodeBlock,
    h1: Title,
  };

  return (
    <React.Fragment>
      <div>
        <Header />
        <section className="container">
          <div className="row">
            <MDXProvider components={components}>
              <Readme {...props} />
            </MDXProvider>
          </div>
        </section>
      </div>
      <Footer />
    </React.Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
