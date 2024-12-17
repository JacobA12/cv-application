import React, { useState } from "react";
import "../styles/experience.css"

function Experience() {
  const [experience, setExperience] = useState({
    company: "",
    position: "",
    responsibilities: "",
    dateFrom: "",
    dateTo: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setExperience({ ...experience, [name]: value });
  };
  return (
    <div class="experience">
      {" "}
      <h2>Practical Experience</h2>{" "}
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
      />{" "}
    </div>
  );
}
export default Experience;
