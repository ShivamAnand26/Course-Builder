import React, { useState } from 'react';
import '../styles/ModuleDialogBox.css';

function ModuleDialogBox({ onClose, onCreateModule }) {
  const [moduleName, setModuleName] = useState('');

  const handleCreateModule = () => {
    if (moduleName.trim() !== '') {
      onCreateModule(moduleName);
      setModuleName(''); // Clear the input after creating the module
      onClose(); // Close the dialog after creating the module
    }
  };

  return (
    <div className="dialog-container">
      <div className="dialog">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>Create new module</h2>
        <h3 className="less-bold">Module name</h3>
        <input
          type="text"
          value={moduleName}
          onChange={(e) => setModuleName(e.target.value)}
          className="module-name-input"
          placeholder="Enter module name"
        />
        <div className="button-container">
          <button className="cancel-button" onClick={onClose}>Cancel</button>
          <button className="create-button" onClick={handleCreateModule}>Create</button>
        </div>
      </div>
    </div>
  );
}

export default ModuleDialogBox;
