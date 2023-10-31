import { useDispatch, useSelector } from "react-redux";
import { updateFormField, resetForm } from "./features/formSlice";
import DisplayData from "./DisplayData";
import { useState } from "react";
import { Link } from "react-router-dom";

function App() {
  const [showDetails, setShowDetails] = useState(false);
  const form = useSelector((state) => state.form);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateFormField({ field: name, value: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("form", form.length);
    if (!form.length) return;
    setShowDetails(true);
  };

  return (
    <div className="bg-img">
      <div className="App">
        <form action="" method="post" className="form" onSubmit={onSubmit}>
          <div className="form-field">
            <label>Name:</label>

            <input
              className="input-field"
              type="text"
              value={form.name}
              name="name"
              required={true}
              autoComplete="name"
              onChange={handleChange}
            />
          </div>

          <div className="form-field">
            <label>Email:</label>

            <input
              className="input-field"
              type="email"
              name="email"
              required={true}
              value={form.email}
              autoComplete="email"
              onChange={handleChange}
            />
          </div>

          <div className="form-field">
            <label>Contact Number:</label>

            <input
              className="input-field"
              type="number"
              name="contactNumber"
              value={form.contactNumber}
              autoComplete="tel"
              onChange={handleChange}
            />
          </div>

          <div className="form-field">
            <label>DOB:</label>
            <input
              className="input-field"
              type="date"
              name="dob"
              value={form.dob}
              autoComplete="off"
              onChange={handleChange}
            />
          </div>

          <div className="form-field">
            <label htmlFor="role-select">Role:</label>
            <select
              className="input-field"
              onChange={handleChange}
              value={form.role}
              name="role"
              id="role-select"
            >
              <option value="">--Please choose an option--</option>
              <option value="Frontend developer">Frontend developer</option>
              <option value="Backend developer">Backend developer</option>
              <option value="Full stack">Full stack developer</option>
            </select>{" "}
          </div>

          <div className="form-field">
            <label>Current CTC:</label>

            <input
              className="input-field"
              type="number"
              name="currentCTC"
              value={form.currentCTC}
              autoComplete="off"
              onChange={handleChange}
            />
          </div>
          <div className="form-field">
            <label>Expected CTC:</label>

            <input
              className="input-field"
              type="number"
              name="expectedCTC"
              value={form.expectedCTC}
              autoComplete="off"
              onChange={handleChange}
            />
          </div>

          <div className="action-btn">
            <button className="btn reset" onClick={() => dispatch(resetForm())}>
              Reset
            </button>
            <Link to="/form-details">
              <button className="btn submit">Submit</button>
            </Link>
          </div>
        </form>
        {showDetails && <DisplayData />}
      </div>
    </div>
  );
}

export default App;
