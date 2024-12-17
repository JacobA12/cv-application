import React, { useState } from "react";
function Education() {
  const [education, setEducation] = useState({ name: "", school: "", degree: "", year: ""});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...education, [name]: value });
  };

  return (
    <div>
      <h2>Education Information</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={education.name}
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="school"
        placeholder="School"
        value={education.school}
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="degree"
        placeholder="Degree"
        value={education.degree}
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="year"
        placeholder="Year"
        value={education.year}
        onChange={handleChange}
      ></input>
    </div>
  );
}

export default Education;
