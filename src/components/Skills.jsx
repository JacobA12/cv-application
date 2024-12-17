import React, { useState } from "react";
import "../styles/skills.css"
function Skills() {
  const [skills, setSkills] = useState([{skill: ""}]);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const newSkills = [...skills];
    newSkills[index][name] = value;
    setSkills(newSkills);
  };

  const addSkill = () => {
    setSkills([...skills, { skill: ""}]);
  };

  return (
    <div className="skills">
      <h2>Skills</h2>
      {skills.map((skill,index) => (
        <input
        key = {index}
        name="skill"
        type="text"
        placeholder="Skill"
        value={skill.skill}
        onChange={(e) => handleChange(index, e)} />
      ))}
      <button onClick={addSkill}>Add Skill</button>
    </div>
  );
}

export default Skills;
