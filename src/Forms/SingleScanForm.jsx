import React from 'react';
import './SingleScanForm.css'; // Import CSS file for styling

function SingleScanForm() {
  return (
    <div className="Single-form-container">
      <form className="Single-form">
        <label className="form-label">
          Target ip Address
          <input type="text" name="inputField1" className="Single-form-input" />
        </label>
        <br />
        <label className="Single-form-label">
          Target Specification
          <input type="text" name="inputField2" className="Single-form-input" />
        </label>
        <br />
        <button type="Scan now" className="Single-form-button">Scan now</button>
        <button type="Save as text" className="Single-form-button">Save as text</button>
        <button type="Save as json" className="Single-form-button">Save as json</button>
      </form>
    </div>
  );
}

export default SingleScanForm;
