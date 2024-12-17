import React, { useState } from "react";
function Education() {
  const [info, setInfo] = useState({ name: "", school: "", degree: "", year: ""});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  return (
    <div>
      <h2>Education Information</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={info.name}
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="school"
        placeholder="School"
        value={info.school}
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="degree"
        placeholder="Degree"
        value={info.degree}
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="year"
        placeholder="Year"
        value={info.year}
        onChange={handleChange}
      ></input>
    </div>
  );
}

export default Education;
