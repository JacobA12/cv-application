import React, { useState } from "react";
import "../styles/education.css";

function Education() {
  const [education, setEducation] = useState({
    school: "",
    title: "",
    date: "",
  });
  const [isEditing, setIsEditing] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducation({ ...education, [name]: value });
  };

  const handleSubmit = () => {
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };
  return (
    <div class="education">
      {" "}
      <h2>Educational Experience</h2>{" "}
      {isEditing ? (
        <div>
          <input
            type="text"
            name="school"
            placeholder="School Name"
            value={education.school}
            onChange={handleChange}
          />{" "}
          <input
            type="text"
            name="title"
            placeholder="Title of Study"
            value={education.title}
            onChange={handleChange}
          />{" "}
          <input
            type="date"
            name="date"
            placeholder="Date of Study"
            value={education.date}
            onChange={handleChange}
          />
        </div>
      ) : (
        <div>
          <p>School: {education.school}</p>
          <p>Title: {education.title}</p>
          <p>Date: {education.date}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}{" "}
    </div>
  );
}
export default Education;
