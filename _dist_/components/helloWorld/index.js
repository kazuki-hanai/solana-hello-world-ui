import React, {useState} from "../../../_snowpack/pkg/react.js";
import {HelloWorldExecutor} from "../../solana/helloWorld.js";
import {useDispatch} from "../../../_snowpack/pkg/react-redux.js";
import {setHelloWorldResult} from "../../reducers/helloWorldState.js";
export const HelloWorld = () => {
  const [url, setUrl] = useState("https://devnet.solana.com");
  const [privateKey, setPrivateKey] = useState("");
  const [programId, setProgramId] = useState("");
  const [greetedPubKey, setGreetedPubKey] = useState("");
  const dispatch = useDispatch();
  const handleHelloWorld = async () => {
    console.log("saying hello world!");
    try {
      const helloworld = new HelloWorldExecutor(url, privateKey, programId, greetedPubKey);
      const result = await helloworld.run();
      dispatch(setHelloWorldResult(result));
      console.log("success!");
    } catch (e) {
      console.log("catch an error!");
      console.log(e);
    }
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    placeholder: "cluster url: e.g. https://devnet.solana.com",
    className: "my-1 px-3 py-3 placeholder-gray-400 text-gray-700 rbg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full",
    onChange: (e) => setUrl(e.target.value)
  }), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    placeholder: "privateKey, e.g. 0,1,2,...,100",
    className: "my-1 px-3 py-3 placeholder-gray-400 text-gray-700 rbg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full",
    onChange: (e) => setPrivateKey(e.target.value)
  }), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    placeholder: "programId",
    className: "my-1 px-3 py-3 placeholder-gray-400 text-gray-700 rbg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full",
    onChange: (e) => setProgramId(e.target.value)
  }), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    placeholder: "greetedPubKey",
    className: "my-1 px-3 py-3 placeholder-gray-400 text-gray-700 rbg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full",
    onChange: (e) => setGreetedPubKey(e.target.value)
  }), /* @__PURE__ */ React.createElement("button", {
    className: `p-3 m-5 rounded-sm shadow-inner bg-green-500 active:bg-green-700`,
    onClick: () => handleHelloWorld()
  }, "Hello World!"));
};
