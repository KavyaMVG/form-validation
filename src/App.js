import { useDispatch, useSelector } from "react-redux";
import { updateFormField, resetForm } from "./features/formSlice";
import { useNavigate } from "react-router-dom";
import { Autocomplete, TextField } from "@mui/material";

function App() {
  const form = useSelector((state) => state.form);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateFormField({ field: name, value: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    navigate("/form-details");
  };

  const allValues = [
    { label: "Frontend Developer", role: "Frontend Developer" },
    { label: "Backend Developer", role: "Backend Developer" },
    { label: "Fullstack Developer", role: "Fullstack Developer" },
  ];

  return (
    <div className="bg-img">
      <div className="App">
        <form
          action=""
          method="post"
          onSubmit={onSubmit}
          className="form bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 bg-red"
        >
          <div className="form-field">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name:
            </label>

            <input
              className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              value={form.name}
              name="name"
              required={true}
              autoComplete="name"
              onChange={handleChange}
            />
          </div>

          <div className="form-field">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email:
            </label>

            <input
              // className="input-field"
              className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              name="email"
              required={true}
              value={form.email}
              autoComplete="email"
              onChange={handleChange}
            />
          </div>

          <div className="form-field">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Contact Number:
            </label>

            <input
              className="input-field shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              name="contactNumber"
              value={form.contactNumber}
              autoComplete="tel"
              onChange={handleChange}
            />
          </div>

          <div className="form-field">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              DOB:
            </label>
            <input
              style={{ width: "62%" }}
              className=" input-field shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="date"
              name="dob"
              value={form.dob}
              autoComplete="off"
              onChange={handleChange}
            />
          </div>

          <div className="form-field">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="role-select"
            >
              Role:
            </label>
            <Autocomplete
              disablePortal
              id="country-select-demo"
              options={allValues}
              sx={{ width: 225 }}
              renderInput={(params) => <TextField {...params} label="Role" />}
              onChange={(_e, value) => {
                console.log(value);
                dispatch(updateFormField({ field: "role", value: value.role }));
              }}
              value={form.role || null}
            />{" "}
          </div>

          <div className="form-field">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Current CTC:
            </label>

            <input
              className="input-field shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              name="currentCTC"
              value={form.currentCTC}
              autoComplete="off"
              onChange={handleChange}
            />
          </div>
          <div className="form-field">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Expected CTC:
            </label>

            <input
              className="input-field shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              name="expectedCTC"
              value={form.expectedCTC}
              autoComplete="off"
              onChange={handleChange}
            />
          </div>

          <div className="action-btn">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={() => dispatch(resetForm())}
            >
              Reset
            </button>
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 ml-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
