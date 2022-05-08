import React, { useState } from "react";


const initialVal = {
  id: "",
  firstname: "",
  lastname: "",
  age: "",
  gender: "Male",
  country: "",
  mail: "",
  event: "Event A"
};
function EditPage(props) {
  const [val, setVal] = useState({
    id: "",
    firstname: "",
    lastname: "",
    age: "",
    gender: "Male",
    country: "",
    mail: "",
    event: "Event A"
  });

  const handleChange = (e) => {
    setVal({
      ...val,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    props.edit(val);
    setVal(initialVal);
  };

  return (
    <>
      <div>
      <div>
        <select name="id" onChange={handleChange} className="selectnewdata" required>
          <option value="">Select</option>
          {props.option?.map((i) => {
            return (
                <option key={i} value={i}>
                  {i}
                </option>
            );
          })}
        </select>
        <input
          type="text"
          className="input-text"
          placeholder="First Name..."
          value={val.firstname}
          name="firstname"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          className="input-text"
          placeholder="Last Name..."
          value={val.lastname}
          name="lastname"
          onChange={handleChange}
          required
        />
        <input
          type="number"
          className="input-text"
          placeholder="Age..."
          value={val.age}
          name="age"
          onChange={handleChange}
          required
        />
        <select onChange={handleChange} name="gender" className="event-select">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <input
          type="text"
          className="input-text"
          placeholder="Country..."
          value={val.country}
          name="country"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          className="input-text"
          placeholder="Mail..."
          value={val.mail}
          name="mail"
          onChange={handleChange}
          required
        />
        <select onChange={handleChange} name="event" className="event-select">
          <option value="Event A">Event A</option>
          <option value="Event B">Event B</option>
          <option value="Event C">Event C</option>
          <option value="Event D">Event D</option>
        </select>
        <br />
        <button className="btnSatu" onClick={() => handleSubmit()}>Change</button>
      </div>

      </div>
    </>
  );
}
export default EditPage;
