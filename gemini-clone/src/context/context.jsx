import { createContext } from "react";
import run from "../config/gemini";

const Context = createContext();
const ContextProvider = (props) => {
  const onSent = async (prompt) => {
    await run(prompt);
  };
  onSent("What is React.js")
  const contextValue = {};
  return <Context.Provider>{props.children}</Context.Provider>;
};
export default ContextProvider;
