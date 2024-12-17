import React, { useState } from "react";
function GeneralInfo() {
  const [info, setInfo] = useState({ name: "", email: "", address: "", phone: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  return (
    <div>
      <h2>General Information</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={info.name}
        onChange={handleChange}
      ></input>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={info.email}
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="address"
        placeholder="Address"
        value={info.address}
        onChange={handleChange}
      ></input>
      <input
        type="tel"
        name="phone"
        placeholder="Phone"
        value={info.tel}
        onChange={handleChange}
      ></input>
    </div>
  );
}

export default GeneralInfo;
