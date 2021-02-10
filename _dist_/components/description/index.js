import React from "../../../_snowpack/pkg/react.js";
import {useSelector} from "../../../_snowpack/pkg/react-redux.js";
export const Description = () => {
  const {helloWorldState} = useSelector((state) => state);
  return /* @__PURE__ */ React.createElement("div", {
    className: "text-black bg-white p-4 rounded mb-4"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-lg font-bold text-center w-full"
  }, "Description"), /* @__PURE__ */ React.createElement("p", {
    className: ""
  }, "Cluster URL: ", helloWorldState?.result.url), /* @__PURE__ */ React.createElement("p", {
    className: ""
  }, "Payer Account: ", helloWorldState?.result.payerAccount), /* @__PURE__ */ React.createElement("p", {
    className: ""
  }, "program ID: ", helloWorldState?.result.programId), /* @__PURE__ */ React.createElement("p", {
    className: ""
  }, "Greeted Pubkey: ", helloWorldState?.result.greetedPubkey), /* @__PURE__ */ React.createElement("p", {
    className: ""
  }, "Num Greetes: ", helloWorldState?.result.numGreetes));
};
