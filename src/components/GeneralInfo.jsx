import React, { useState } from "react";
import "../styles/generalInfo.css";

function GeneralInfo() {
  const [info, setInfo] = useState({ name: "", email: "", phone: "" });
  const [isEditing, setIsEditing] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const handleSubmit = () => {
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div class="general-info">
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
