import React, { useState } from 'react';
import '../styles/ModuleDialogBox2.css'; // Assuming you have the correct CSS file imported

function EditLinkDialogBox({ onClose, linkData, onEditLink }) {
  const [url, setUrl] = useState(linkData.url);
  const [displayName, setDisplayName] = useState(linkData.displayName);

  const handleEditLink = () => {
    if (url && displayName) {
      onEditLink(linkData.id, url, displayName);
      onClose();
    }
  };

  return (
    <div className="dialog-container">
      <div className="dialog">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>Edit Link</h2>
        <h3 className="less-bold">URL</h3>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="input-field"
          placeholder="Enter URL"
        />
        <h3 className="less-bold">Display name</h3>
        <input
          type="text"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          className="input-field"
          placeholder="Enter display name"
        />
        <div className="button-container">
          <button className="cancel-button" onClick={onClose}>Cancel</button>
          <button className="save-button" onClick={handleEditLink}>Save</button>
        </div>
      </div>
    </div>
  );
}

export default EditLinkDialogBox;
