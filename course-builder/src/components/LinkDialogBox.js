import React, { useState } from 'react';
import '../styles/ModuleDialogBox.css';

function LinkDialogBox({ onClose, onAddLink }) {
  const [url, setUrl] = useState('');
  const [displayName, setDisplayName] = useState('');

  const handleAddLink = () => {
    if (url && displayName) {
      onAddLink(url, displayName);
      onClose();
    }
  };

  return (
    <div className="dialog-container">
      <div className="dialog">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>Add new link</h2>
        <h3 className="less-bold">URL</h3>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="module-name-input"
          placeholder="Enter URL"
        />
        <h3 className="less-bold">Display name</h3>
        <input
          type="text"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          className="module-name-input"
          placeholder="Enter display name"
        />
        <div className="button-container">
          <button className="cancel-button" onClick={onClose}>Cancel</button>
          <button className="create-button" onClick={handleAddLink}>Add</button>
        </div>
      </div>
    </div>
  );
}

export default LinkDialogBox;
