import React, { useState } from "react";
function Experience() {
  const [info, setInfo] = useState({ company: "", role: "", dateBegin: "", dateEnd: "", describeRole: ""});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  return (
    <div>
      <h2>Experience</h2>
      <input
        type="text"
        name="company"
        placeholder="Company Name"
        value={info.company}
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="role"
        placeholder="Role"
        value={info.role}
        onChange={handleChange}
      ></input>
      <input
        type="date"
        name="dateBegin"
        placeholder="Start Date"
        value={info.dateBegin}
        onChange={handleChange}
      ></input>
      <input
        type="date"
        name="dateEnd"
        placeholder="End Date"
        value={info.dateEnd}
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="describeRole"
        placeholder="Describe Role"
        value={info.describeRole}
        onChange={handleChange}
      ></input>
    </div>
  );
}

export default Experience;
