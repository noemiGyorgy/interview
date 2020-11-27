import "./App.css";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

function App() {
  const [birthDate, setBirthDate] = useState(new Date());
  const [registrationDate, setRegistrationDate] = useState(new Date());
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [taxNumber, setTaxNumber] = useState("");

  return (
    <div className="App">
      <p>
        Name:
        <input
          type="text"
          onChange={(event) => setName(event.target.value)}
        ></input>
      </p>
      <p>
        Birth Date:
        <DatePicker
          selected={birthDate}
          onChange={(date) => setBirthDate(date)}
        />
      </p>
      <p>
        E-mail:
        <input type="text" onChange={(event) => setEmail(event.target.value)} />
      </p>
      <p>
        Phone:
        <input type="text" onChange={(event) => setPhone(event.target.value)} />
      </p>
      <p>
        Tax number:
        <input
          type="text"
          onChange={(event) => setTaxNumber(event.target.value)}
        />
      </p>
      <p>
        Registration time:
        <DatePicker
          selected={registrationDate}
          onChange={(date) => setRegistrationDate(date)}
        />
      </p>
      <p>
        <input type="submit" />
      </p>
      <p>{birthDate.toString()}</p>
    </div>
  );
}

export default App;
