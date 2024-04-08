import React from 'react';
import './ContiniousScanForm.css'
function ContiniousScanForm() {
  return (
    <div className="Continious-form-container">
    <form className="Continious-Single-form">
      <label className="form-label">
        Target ip Address
        <input type="text" name="inputField1" className="Continious-form-input" />
      </label>
      <br />
      <label className="Single-form-label">
        Target Specification
        <input type="text" name="inputField2" className="Continious-form-input" />
      </label>
      <br />
      <label className="Single-form-label">
        Target Specification
        <input type="text" name="inputField2" className="Continious-form-input" />
      </label>
      <br />
      <button type="Start Scan" className="Continious-form-button">Start Scan</button>
    
    </form>
  </div>
  );
}

export default ContiniousScanForm;
