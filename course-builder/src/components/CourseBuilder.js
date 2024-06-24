import React, { useState } from 'react';
import AddMenu from './AddMenu';
import EmptyState from './EmptyState';
import Folder from './Folder';
import LinkDialogBox from './LinkDialogBox';
import EditLinkDialogBox from './EditLinkDialogBox'; // Import EditLinkDialogBox component
import '../styles/App.css';

function CourseBuilder() {
  const [modules, setModules] = useState([]);
  const [isModuleDialogOpen, setModuleDialogOpen] = useState(false);
  const [isLinkDialogOpen, setLinkDialogOpen] = useState(false);
  const [linkData, setLinkData] = useState({ id: '', url: '', displayName: '' });

  const handleAddModule = () => {
    setModuleDialogOpen(true);
  };

  const handleCreateModule = (moduleName) => {
    const newModule = { id: Date.now(), name: moduleName };
    setModules([...modules, newModule]);
    setModuleDialogOpen(false);
  };

  const handleAddLink = (url, displayName) => {
    const newLinkModule = {
      id: Date.now(),
      name: displayName,
      type: 'link',
      url: url,
    };
    setModules([...modules, newLinkModule]);
  };

  const handleEditLink = (linkId, newUrl, newDisplayName) => {
    setModules(prevModules => {
      return prevModules.map(module => {
        if (module.id === linkId && module.type === 'link') {
          return { ...module, name: newDisplayName, url: newUrl };
        }
        return module;
      });
    });
  };

  const handleUpload = () => {
    // Implement upload functionality
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="course-title">Course Builder</h1>
        <AddMenu 
          onAddModule={handleAddModule} 
          onAddLink={handleAddLink} 
          onUpload={handleUpload} 
          setLinkDialogOpen={setLinkDialogOpen}
        />
      </header>
      {modules.length === 0 ? <EmptyState /> : (
        <div className="modules">
          {modules.map(module => (
            <Folder
              key={module.id}
              moduleId={module.id}
              moduleName={module.name}
              moduleType={module.type}
              fileURL={module.fileURL}
              url={module.url}
              onEditModuleName={handleEditModuleName}
              onDeleteModule={handleDeleteModule}
              setLinkData={setLinkData}
              setLinkDialogOpen={setLinkDialogOpen}
            />
          ))}
        </div>
      )}
      {isLinkDialogOpen && (
        <LinkDialogBox
          onClose={() => setLinkDialogOpen(false)}
          onAddLink={handleAddLink}
        />
      )}
      {isEditLinkDialogOpen && (
        <EditLinkDialogBox
          onClose={() => setEditLinkDialogOpen(false)}
          linkData={linkData}
          onEditLink={handleEditLink} // Pass the function to edit link
        />
      )}
    </div>
  );
}

export default CourseBuilder;
