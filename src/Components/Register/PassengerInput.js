import {useState } from "react";
import "../../Pages/RegisterEvent/RegisterEvent.css";

function PassengerInput(props) {
  const [state, setState] = useState({
    firstname: "",
    lastname:"",
    age: "",
    gender: "Male",
    country: "",
    mail: "",
    event: "Event A",
    editing: true,
  });
  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    if (state.firstname.trim() && state.lastname && state.age && state.gender && state.country && state.mail && state.event) {
      const age = state.age;
      if (age >= 75 || age <= 12) {
        alert("age tidak sesuai");
      } else {
        const newData = {
          firstname: state.firstname,
          lastname: state.lastname,
          age: state.age,
          gender: state.gender,
          country: state.country,
          mail: state.mail,
          event: state.event
        };
        props.tambahPengunjung(newData);
        setState({
          ...state,
          firstname: "",
          lastname:"",
          age: "",
          gender: "Male",
          country: "",
          mail: "",
          event: ""
        });
      }
    } else {
      alert("Data masih ada yang kosong");
    }
  };

  return (
    <div>
      <div onSubmit={handleSubmit}>
        <input
          type="text"
          className="input-text"
          placeholder="First Name..."
          value={state.firstname}
          name="firstname"
          onChange={onChange}
        />
        <input
          type="text"
          className="input-text"
          placeholder="Last Name..."
          value={state.lastname}
          name="lastname"
          onChange={onChange}
        />
        <input
          type="number"
          className="input-text"
          placeholder="Age..."
          value={state.age}
          name="age"
          onChange={onChange}
        />
        <select onChange={onChange} name="gender" className="event-select">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <input
          type="text"
          className="input-text"
          placeholder="Country..."
          value={state.country}
          name="country"
          onChange={onChange}
        />
        <input
          type="text"
          className="input-text"
          placeholder="Mail..."
          value={state.mail}
          name="mail"
          onChange={onChange}
        />
        <select onChange={onChange} name="event" className="event-select">
          <option value="Event A">Event A</option>
          <option value="Event B">Event B</option>
          <option value="Event C">Event C</option>
          <option value="Event D">Event D</option>
        </select>
        <p></p>
        <button onClick={handleSubmit} className="buttonInput">Submit</button>
      </div>
    </div>
  );
}
export default PassengerInput;
