import React, { useState } from "react";
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
    setInfo({ ...experience, [name]: value });
  };

  return (
    <div>
      <h2>Experience</h2>
      <input
        type="text"
        name="company"
        placeholder="Company Name"
        value={experience.company}
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="position"
        placeholder="Position Title"
        value={experience.position}
        onChange={handleChange}
      ></input>
      <textarea
        name="responsibilities"
        placeholder="Main Responsibilities"
        value={experience.responsibilities}
        onChange={handleChange}
      ></textarea>
      <input
        type="date"
        name="startDate"
        placeholder="Start Date"
        value={experience.dateFrom}
        onChange={handleChange}
      ></input>
      <input
        type="date"
        name="endDate"
        placeholder="End Date"
        value={experience.dateTo}
        onChange={handleChange}
      ></input>
    </div>
  );
}

export default Experience;
