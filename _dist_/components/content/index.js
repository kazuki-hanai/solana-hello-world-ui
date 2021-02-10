import React from "../../../_snowpack/pkg/react.js";
import {Header} from "../header/index.js";
import {HelloWorld} from "../helloWorld/index.js";
import {Description} from "../description/index.js";
export const Content = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col place-content-center justify-center min-h-screen"
  }, /* @__PURE__ */ React.createElement(Header, null), /* @__PURE__ */ React.createElement(Description, null), /* @__PURE__ */ React.createElement(HelloWorld, null));
};
