// AddMenu.js
import React, { useState } from 'react';
import { FaPlus, FaFileAlt, FaLink, FaUpload } from 'react-icons/fa';
import ModuleDialogBox from './ModuleDialogBox';
import LinkDialogBox from './LinkDialogBox';
import '../styles/AddMenu.css';

function AddMenu({ onAddModule, onCreateModule, onAddLink, onUpload }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showModuleDialog, setShowModuleDialog] = useState(false);
  const [showLinkDialog, setShowLinkDialog] = useState(false);

  const handleToggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleOpenModuleDialog = () => {
    setShowDropdown(false);
    setShowModuleDialog(true);
  };

  const handleOpenLinkDialog = () => {
    setShowDropdown(false);
    setShowLinkDialog(true);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      onUpload(file);
    }
  };

  return (
    <div className="add-menu">
      <button className="add-button" onClick={handleToggleDropdown}>
        <FaPlus className="add-icon" /> Add
      </button>
      {showDropdown && (
        <div className="add-dropdown">
          <button onClick={handleOpenModuleDialog}><FaFileAlt className="dropdown-icon" /> Create module</button>
          <button onClick={handleOpenLinkDialog}><FaLink className="dropdown-icon" /> Add a link</button>
          <button onClick={() => document.getElementById('file-upload').click()}>
            <FaUpload className="dropdown-icon" /> Upload
          </button>
          <input
            type="file"
            id="file-upload"
            onChange={handleFileUpload}
            style={{ display: 'none' }}
            accept=".pdf"
          />
        </div>
      )}

      {showModuleDialog && (
        <ModuleDialogBox
          onClose={() => setShowModuleDialog(false)}
          onCreateModule={onCreateModule}
        />
      )}

      {showLinkDialog && (
        <LinkDialogBox
          onClose={() => setShowLinkDialog(false)}
          onAddLink={onAddLink}
        />
      )}
    </div>
  );
}

export default AddMenu;
