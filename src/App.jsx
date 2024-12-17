import React from "react";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      {" "}
      <h1>CV Creator</h1> <GeneralInfo /> <Education /> <Experience />{" "}
      <Skills />{" "}
    </div>
  );
}
export default App;
