import React, { useState } from 'react';
import '../styles/ModuleDialogBox.css';

function EditPdfDialogBox({ onClose, onRenamePdf, initialName }) {
  const [name, setName] = useState(initialName);

  const handleRenamePdf = () => {
    if (name.trim()) {
      onRenamePdf(name);
      onClose();
    }
  };

  return (
    <div className="dialog-container">
      <div className="dialog">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>Rename PDF</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="module-name-input"
          placeholder="Enter new name"
        />
        <div className="button-container">
          <button className="cancel-button" onClick={onClose}>Cancel</button>
          <button className="create-button" onClick={handleRenamePdf}>Save changes</button>
        </div>
      </div>
    </div>
  );
}

export default EditPdfDialogBox;
