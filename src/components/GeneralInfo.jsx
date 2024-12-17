import React, { useState } from "react";
function GeneralInfo() {
  const [info, setInfo] = useState({ name: "", email: "", phone: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };
  return (
    <div>
      {" "}
      <h2>General Information</h2>{" "}
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={info.name}
        onChange={handleChange}
      />{" "}
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={info.email}
        onChange={handleChange}
      />{" "}
      <input
        type="tel"
        name="phone"
        placeholder="Phone"
        value={info.phone}
        onChange={handleChange}
      />{" "}
    </div>
  );
}
export default GeneralInfo;
