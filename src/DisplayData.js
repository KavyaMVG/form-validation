import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const DisplayData = () => {
  const formDetails = useSelector((state) => state.form);
  const navigate = useNavigate();

  return (
    <div className="flex items-center h-screen justify-center bg-f5f5f5">
      <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <h1 className="font-bold text-2xl text-center mb-4">Details</h1>
        <div className="mb-4">
          <span className="text-gray-700 text-lg font-semibold">Name:</span>
          <span className="ml-2 text-gray-800 text-right">
            {formDetails.name || "Not Available"}
          </span>
        </div>
        <div className="mb-4">
          <span className="text-gray-700 text-lg font-semibold">Email:</span>
          <span className="ml-2 text-gray-800 text-right">
            {formDetails.email || "Not Available"}
          </span>
        </div>
        <div className="mb-4">
          <span className="text-gray-700 text-lg font-semibold">
            Contact Number:
          </span>
          <span className="ml-2 text-gray-800 text-right">
            {formDetails.contactNumber || "Not Available"}
          </span>
        </div>
        <div className="mb-4">
          <span className="text-gray-700 text-lg font-semibold">DOB:</span>
          <span className="ml-2 text-gray-800 text-right">
            {formDetails.dob || "Not Available"}
          </span>
        </div>
        <div className="mb-4">
          <span className="text-gray-700 text-lg font-semibold">Role:</span>
          <span className="ml-2 text-gray-800 text-right">
            {formDetails.role || "Not Available"}
          </span>
        </div>
        <div className="mb-4">
          <span className="text-gray-700 text-lg font-semibold">
            Current CTC:
          </span>
          <span className="ml-2 text-gray-800 text-right">
            {formDetails.currentCTC || "Not Available"}
          </span>
        </div>
        <div className="mb-4">
          <span className="text-gray-700 text-lg font-semibold">
            Expected CTC:
          </span>
          <span className="ml-2 text-gray-800 text-right">
            {formDetails.expectedCTC || "Not Available"}
          </span>
        </div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm mt-4"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default DisplayData;
