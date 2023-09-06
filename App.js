import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement(
  "div",
  { id: "parent" },
[React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", { id: "heading" }, "I am Sruti"),
    React.createElement("h2", { id: "heading" }, "I am H2")]
  ),
  React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", { id: "heading" }, "I am H1"),
    React.createElement("h2", { id: "heading" }, "I am H2")]
  )]
);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from react"
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
