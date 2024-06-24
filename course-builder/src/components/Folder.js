import React, { useState } from 'react';
import { FaEllipsisH, FaEdit, FaTrash, FaDownload } from 'react-icons/fa';
import Outlined from './Outlined';
import ModuleDialogBox2 from './ModuleDialogBox2';
import EditLinkDialogBox from './EditLinkDialogBox'; // Import EditLinkDialogBox
import '../styles/Folder.css';
import pdfIcon from '../images/pdf-icon.png';
import linkIcon from '../images/link-icon.png';

function Folder({ moduleId, moduleName, moduleType, fileURL, url, onEditModuleName, onDeleteModule, onDrop, items }) {
  const [isActive, setIsActive] = useState(false);
  const [isEditDialogOpen, setEditDialogOpen] = useState(false);
  const [linkData, setLinkData] = useState({ id: '', url: '', displayName: '' });
  const [isDragOver, setIsDragOver] = useState(false);

  const toggleDropdown = () => {
    setIsActive(!isActive);
  };

  const handleDeleteModule = () => {
    onDeleteModule(moduleId);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = fileURL;
    link.download = moduleName;
    link.click();
  };

  const handleEditLink = (id, newUrl, newDisplayName) => {
    setLinkData({ id: id, url: newUrl, displayName: newDisplayName });
    setEditDialogOpen(false);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragOver(false);
    onDrop(event, moduleId);
  };

  return (
    <div className={`folder ${isDragOver ? 'drag-over' : ''}`} onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop}>
      <div className="frame-627620">
        {moduleType === 'file' ? (
          <img src={pdfIcon} alt="PDF Icon" className="pdf-icon" />
        ) : (
          moduleType === 'link' ? (
            <img src={linkIcon} alt="Link Icon" className="link-icon" />
          ) : (
            <Outlined />
          )
        )}
        <div className="frame-628786">
          {moduleType === 'file' ? (
            <a href={fileURL} target="_blank" rel="noopener noreferrer" className="module-name pdf-link">
              {moduleName}
            </a>
          ) : moduleType === 'link' ? (
            <a href={url} target="_blank" rel="noopener noreferrer" className="module-name link-url">
              {moduleName}
            </a>
          ) : (
            <p className="module-name">{moduleName}</p>
          )}
          <p className="add-items">
            {moduleType === 'file' ? 'PDF' : moduleType === 'link' ? 'Link' : 'Add items to this module'}
          </p>
        </div>
      </div>
      <div className={`options-icon ${isActive ? 'active' : ''}`} onClick={toggleDropdown}>
        <FaEllipsisH />
        <div className="dropdown-content">
          {moduleType === 'link' && (
            <button className="dropdown-option" onClick={() => {
              setLinkData({ id: moduleId, url: url, displayName: moduleName });
              setEditDialogOpen(true);
            }}>
              <FaEdit className="edit-icon" />
              Edit link
            </button>
          )}
          <button className="dropdown-option" onClick={() => setEditDialogOpen(true)}>
            <FaEdit className="edit-icon" />
            Edit module name
          </button>
          <button className="dropdown-option" onClick={handleDeleteModule}>
            <FaTrash className="delete-icon" />
            Delete
          </button>
          {moduleType === 'file' && (
            <button className="dropdown-option" onClick={handleDownload}>
              <FaDownload className="download-icon" />
              Download
            </button>
          )}
        </div>
      </div>
      {isEditDialogOpen && (
        <ModuleDialogBox2
          onClose={() => setEditDialogOpen(false)}
          onEditModuleName={onEditModuleName}
          moduleId={moduleId}
          moduleName={moduleName}
        />
      )}
      {moduleType === 'link' && isEditDialogOpen && (
        <EditLinkDialogBox
          onClose={() => setEditDialogOpen(false)}
          linkData={linkData}
          onEditLink={handleEditLink}
        />
      )}
      <div className="module-items">
        {items && items.map(item => (
          <div key={item.id} className="module-item">
            {item.type === 'file' ? (
              <div>
                <img src={pdfIcon} alt="PDF Icon" className="pdf-icon" />
                <a href={item.fileURL} target="_blank" rel="noopener noreferrer" className="module-name pdf-link">{item.name}</a>
              </div>
            ) : (
              <div>
                <img src={linkIcon} alt="Link Icon" className="link-icon" />
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="module-name link-url">{item.name}</a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Folder;
