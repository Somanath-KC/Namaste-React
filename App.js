import React from "react";
import ReactDOM from "react-dom/client";

const h1 = React.createElement("h1", {}, "Hello World From Re@ct!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(h1);
