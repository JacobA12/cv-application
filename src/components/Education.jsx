import React, { useState } from "react";
function Education() {
  const [education, setEducation] = useState({
    school: "",
    title: "",
    date: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducation({ ...education, [name]: value });
  };
  return (
    <div>
      {" "}
      <h2>Educational Experience</h2>{" "}
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
      />{" "}
    </div>
  );
}
export default Education;
