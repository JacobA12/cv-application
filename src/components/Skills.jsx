import React, { useState } from "react";
function Skills() {
  const [skills, setSkills] = useState({ skill: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSkills({ ...skills, [name]: value });
  };

  return (
    <div>
      <h2>Skills</h2>
      <input
        name="skill"
        type="text"
        placeholder="Skill"
        value={skills.skill}
        onChange={handleChange}
      ></input>
    </div>
  );
}

export default Skills;
