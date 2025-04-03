import { useState } from "react";

export default function MyForm() {
  // Correcting state to store multiple fields
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    password: "",
  });

  // Handles input changes dynamically
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // Updates the specific field based on the input name
    }));
  };

  // Handles form submission
  const submitForm = (e) => {
    e.preventDefault();
    console.log("Form submitted with:", formData);
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <input
          type="text"
          name="firstname"
          placeholder="First Name"
          onChange={handleChange}
          value={formData.firstname}
        />
        <input
          type="text"
          name="lastname"
          placeholder="Last Name"
          onChange={handleChange}
          value={formData.lastname}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={formData.password}
        />
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}
