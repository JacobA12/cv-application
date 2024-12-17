import React, { useState } from "react";
import "../styles/experience.css";

function Experience() {
  const [experience, setExperience] = useState({
    company: "",
    position: "",
    responsibilities: "",
    dateFrom: "",
    dateTo: "",
  });
  const [isEditing, setIsEditing] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExperience({ ...experience, [name]: value });
  };

  const handleSubmit = () => {
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div class="experience">
      {" "}
      <h2>Practical Experience</h2>{" "}
      {isEditing ? (
        <div>
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={experience.company}
            onChange={handleChange}
          />{" "}
          <input
            type="text"
            name="position"
            placeholder="Position Title"
            value={experience.position}
            onChange={handleChange}
          />{" "}
          <textarea
            name="responsibilities"
            placeholder="Main Responsibilities"
            value={experience.responsibilities}
            onChange={handleChange}
          ></textarea>{" "}
          <input
            type="date"
            name="dateFrom"
            placeholder="Date From"
            value={experience.dateFrom}
            onChange={handleChange}
          />{" "}
          <input
            type="date"
            name="dateTo"
            placeholder="Date To"
            value={experience.dateTo}
            onChange={handleChange}
          />
        </div>
      ) : (
        <div>
          <p>Company: {experience.company}</p>{" "}
          <p>Position: {experience.position}</p>{" "}
          <p>Responsibilities: {experience.responsibilities}</p>{" "}
          <p>Date From: {experience.dateFrom}</p>{" "}
          <p>Date To: {experience.dateTo}</p>{" "}
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}{" "}
    </div>
  );
}
export default Experience;
