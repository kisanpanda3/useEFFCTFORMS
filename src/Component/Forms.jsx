import { useState } from "react";
const initFormState = {
  name: "",
  email: "",
  password: "",
  country: "USA",
  maritalStatus: false
};

function Forms() {
  const [users, setUsers] = useState([]);
  const [formState, setFormData] = useState(initFormState);

  const handleChange = (e) => {
    const { name: key, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setFormData({
      ...formState,
      [key]: val
    });
  };
  console.log(formState);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers([...users, formState]);
    setFormData(initFormState);
  };
  return (
    <div>
      <h1>Forms</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            value={formState.name}
            name="name"
            onChange={handleChange}
            type="text"
            placeholder="name"
          />
        </div>
        <div>
          <input
            value={formState.email}
            name="email"
            onChange={handleChange}
            type="text"
            placeholder="email"
          />
        </div>
        <div>
          <input
            value={formState.password}
            name="password"
            onChange={handleChange}
            type="password"
            placeholder="password"
          />
        </div>
        <div>
          <select
            value={formState.country}
            name="country"
            onChange={handleChange}
            placeholder="select country"
          >
            <option value="IND">INDIA</option>
            <option value="USA">USA</option>
            <option value="CND">CANADA</option>
          </select>
        </div>
        <div>
          <label>
            Married
            <input
              name="maritalStatus"
              onChange={handleChange}
              type="checkbox"
              checked={formState.maritalStatus}
            />
          </label>
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}
export default Forms;
