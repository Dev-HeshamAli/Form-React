import { useState } from "react";
import Madal from "./Modal";

export default function Form() {
  const [errorMassage, setErrorMassage] = useState(null);

  const [showModal, setShowModal] = useState(false);
  const [inputs, setInput] = useState({
    name: "",
    age: "",
    phone: "",
    isEmployee: false,
    salary: "Less Than 500$",
  });

  function handelSubmit() {
    setErrorMassage(null);
    const { age, phone } = inputs;
    if (age < 18 || age > 100) {
      setErrorMassage("The Age Is NOt Allow");
    } else if (phone.length < 10 || phone.length > 12) {
      setErrorMassage("The Phone Number Is Not Correct");
    }
    setShowModal(true);
  }

  function closeModal() {
    return showModal ? setShowModal(false) : showModal;
  }

  const btnDisabled =
    inputs.name === "" || inputs.age === "" || inputs.phone === "";

  return (
    <div onClick={closeModal}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(inputs);
        }}
      >
        <h1 style={{ color: "white", paddingBottom: "20px" }}>
          Requesting a loan
        </h1>
        {/* =========== Name ============= */}
        <label
          style={{
            display: "block",
            fontSize: "23px",
            fontWeight: "bold",
            paddingTop: "20px",
            marginBottom: "10px",
            color: "white",
          }}
          htmlFor="name"
        >
          Name
        </label>
        <input
          value={inputs.name}
          onChange={(e) => {
            setInput({ ...inputs, name: e.target.value });
          }}
          id="name"
          required
          style={{
            outline: "none",
            fontSize: "22px",
            border: "none",
            borderRadius: "15px",
            padding: "5px 10px",
            marginBottom: "15px",
          }}
          type="text"
        />
        {/* =========== Age ============= */}
        <label
          style={{
            display: "block",
            fontSize: "23px",
            fontWeight: "bold",
            marginBottom: "10px",
            color: "white",
          }}
          htmlFor="age"
        >
          Age
        </label>
        <input
          value={inputs.age}
          onChange={(e) => {
            setInput({ ...inputs, age: e.target.value });
          }}
          id="age"
          style={{
            outline: "none",
            fontSize: "22px",
            border: "none",
            borderRadius: "15px",
            padding: "5px 10px",
            marginBottom: "15px",
          }}
          type="text"
        />
        {/* =========== Phone ============= */}
        <label
          style={{
            display: "block",
            fontSize: "23px",
            fontWeight: "bold",
            marginBottom: "10px",
            color: "white",
          }}
          htmlFor="phone"
        >
          Phone
        </label>
        <input
          value={inputs.phone}
          onChange={(e) => {
            setInput({ ...inputs, phone: e.target.value });
          }}
          id="phone"
          style={{
            outline: "none",
            fontSize: "22px",
            border: "none",
            borderRadius: "15px",
            padding: "5px 10px",
            marginBottom: "25px",
          }}
          type="text"
        />
        {/* =========== Are you employee ============= */}
        <label
          style={{
            display: "block",
            fontSize: "23px",
            fontWeight: "bold",
            marginBottom: "15px",
            color: "white",
          }}
        >
          Are you employee ?
        </label>
        <input
          checked={inputs.isEmployee}
          onChange={(e) => {
            setInput({ ...inputs, isEmployee: e.target.checked });
          }}
          style={{
            marginBottom: "15px",
            height: "20px",
          }}
          type="checkbox"
        />
        {/* =========== Salary ============= */}
        <label
          style={{
            display: "block",
            fontSize: "23px",
            fontWeight: "bold",
            marginBottom: "10px",
            color: "white",
          }}
        >
          Salary
        </label>
        <select
          value={inputs.salary}
          onChange={(e) => {
            setInput({ ...inputs, salary: e.target.value });
          }}
          style={{
            width: "100%",
            border: "none",
            outline: "none",
            fontSize: "20px",
            borderRadius: "15px",
            padding: "5px 15px",
            marginBottom: "15px",
          }}
        >
          <option>Less Than 500$</option>
          <option>Between 500$ and 2000$</option>
          <option>Above 2000$</option>
        </select>
        {/* =========== Submit ============= */}
        <button
          style={{
            padding: "10px 25px",
            fontSize: "20px",
            marginTop: "10px",
            borderRadius: "10px",
            border: "none",
            cursor: "pointer",
          }}
          className={btnDisabled ? "" : "active"}
          disabled={btnDisabled}
          onClick={handelSubmit}
        >
          Submit
        </button>
      </form>
      <Madal errorMass={errorMassage} isVisible={showModal} />
    </div>
  );
}
