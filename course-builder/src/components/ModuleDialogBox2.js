import React, { useState } from 'react';
import '../styles/ModuleDialogBox.css';

function ModuleDialogBox2({ onClose, onEditModuleName, moduleId, moduleName }) {
  const [newModuleName, setNewModuleName] = useState(moduleName);

  const handleEditModuleName = () => {
    if (newModuleName !== moduleName) {
      onEditModuleName(moduleId, newModuleName);
    }
    onClose();
  };

  return (
    <div className="dialog-container">
      <div className="dialog">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>Edit module name</h2>
        <h3 className="less-bold">New module name</h3>
        <input
          type="text"
          value={newModuleName}
          onChange={(e) => setNewModuleName(e.target.value)}
          className="module-name-input"
          placeholder="Enter new module name"
        />
        <div className="button-container">
          <button className="cancel-button" onClick={onClose}>Cancel</button>
          <button className="create-button" onClick={handleEditModuleName}>Save</button>
        </div>
      </div>
    </div>
  );
}

export default ModuleDialogBox2;
