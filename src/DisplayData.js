import React from "react";
import { useSelector } from "react-redux";

const DisplayData = () => {
  const formDetails = useSelector((state) => state.form);

  return (
    <div className="form-details">
      <h1 className="title">Details Received</h1>
      <div className="fields">
        Name:
        <span className="span">{formDetails.name || "Not Available"}</span>
      </div>
      <div className="fields">
        Email:
        <span className="span">{formDetails.email || "Not Available"}</span>
      </div>
      <div className="fields">
        Contact Number:
        <span className="span">
          {formDetails.contactNumber || "Not Available"}
        </span>
      </div>
      <div className="fields">
        DOB:<span className="span">{formDetails.dob || "Not Available"}</span>
      </div>

      <div className="fields">
        Role:<span className="span">{formDetails.role || "Not Available"}</span>
      </div>

      <div className="fields">
        Current CTC:
        <span className="span">
          {formDetails.currentCTC || "Not Available"}
        </span>
      </div>
      <div className="fields">
        Expected CTC:
        <span className="span">
          {formDetails.expectedCTC || "Not Available"}
        </span>
      </div>
    </div>
  );
};

export default DisplayData;
