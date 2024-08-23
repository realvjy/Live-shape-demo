import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./ui.css";
import { Exclude, Intersect, Substract, Union } from "./icons";

declare function require(path: string): any;

function App() {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const count = 4;
  const h = 200;
  const w = 300;
  const onCreateRectangle = () => {
    parent.postMessage({ pluginMessage: { type: "rect", count, h, w } }, "*");
  };

  const onCreateEllipse = () => {
    parent.postMessage({ pluginMessage: { type: "ellipse", count } }, "*");
  };

  const doUnion = () => {
    console.log("union");

    parent.postMessage({ pluginMessage: { type: "union" } }, "*");
  };

  const doIntersect = () => {
    console.log("intersect");
    parent.postMessage({ pluginMessage: { type: "in" } }, "*");
  };

  const doSubstract = () => {
    console.log("Substract");
    parent.postMessage({ pluginMessage: { type: "sub" } }, "*");
  };

  const doExclude = () => {
    console.log("Exclude");
    parent.postMessage({ pluginMessage: { type: "ex" } }, "*");
  };

  return (
    <main>
      <div className="wrap">
        <div onClick={doUnion} className="cta">
          <Union size="32" />
        </div>
        <div onClick={doIntersect} className="cta">
          <Intersect size="32" />
        </div>

        <div onClick={doSubstract} className="cta">
          <Substract size="32" />
        </div>

        <div onClick={doExclude} className="cta">
          <Exclude size="32" />
        </div>
      </div>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("react-page")).render(<App />);
