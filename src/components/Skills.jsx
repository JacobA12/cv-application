import React, { useState } from "react";
import "../styles/skills.css";
function Skills() {
  const [skills, setSkills] = useState([{ skill: "" }]);
  const [isEditing, setIsEditing] = useState(true);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const newSkills = [...skills];
    newSkills[index][name] = value;
    setSkills(newSkills);
  };

  const handleSubmit = () => {
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const addSkill = () => {
    setSkills([...skills, { skill: "" }]);
  };

  return (
    <div className="skills">
      <h2>Skills</h2>
      {isEditing ? (
        <div>
          {skills.map((skill, index) => (
            <input
              key={index}
              name="skill"
              type="text"
              placeholder="Skill"
              value={skill.skill}
              onChange={(e) => handleChange(index, e)}
            />
          ))}
          <button onClick={addSkill}>Add Skill</button>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      ) : (
        <div>
          {skills.map((skill, index) => (
            <p key={index}>Skill: {skill.skill}</p>
          ))}
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default Skills;
