import React, { useState } from 'react';
import AddMenu from './AddMenu';
import EmptyState from './EmptyState';
import Folder from './Folder';
import '../styles/App.css';

function App() {
  const [modules, setModules] = useState([]);
  const [isModuleDialogOpen, setModuleDialogOpen] = useState(false);

  const handleAddModule = () => {
    setModuleDialogOpen(true);
  };

  const handleCreateModule = (moduleName) => {
    const newModule = { id: Date.now(), name: moduleName, type: 'module', items: [] };
    setModules([...modules, newModule]);
    setModuleDialogOpen(false);
  };

  const handleAddLink = (url, displayName) => {
    const newLinkModule = {
      id: Date.now(),
      name: displayName,
      type: 'link',
      url: url,
      items: []
    };
    setModules([...modules, newLinkModule]);
  };

  const handleEditModuleName = (moduleId, newModuleName) => {
    setModules(prevModules => {
      return prevModules.map(module => {
        if (module.id === moduleId) {
          return { ...module, name: newModuleName };
        }
        return module;
      });
    });
  };

  const handleDeleteModule = (moduleId) => {
    setModules(prevModules => prevModules.filter(module => module.id !== moduleId));
  };

  const handleUpload = (file, moduleId = null) => {
    const newFileModule = {
      id: Date.now(),
      name: file.name,
      type: 'file',
      fileURL: URL.createObjectURL(file),
    };

    if (moduleId) {
      setModules(prevModules =>
        prevModules.map(module =>
          module.id === moduleId
            ? { ...module, items: [...module.items, newFileModule] }
            : module
        )
      );
    } else {
      setModules([...modules, newFileModule]);
    }
  };

  const handleDrop = (event, moduleId) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file && file.type === 'application/pdf') {
      handleUpload(file, moduleId);
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="course-title">Course Builder</h1>
        <AddMenu
          onAddModule={handleAddModule}
          onCreateModule={handleCreateModule}
          onAddLink={handleAddLink}
          isModuleDialogOpen={isModuleDialogOpen}
          setModuleDialogOpen={setModuleDialogOpen}
          onUpload={handleUpload}
        />
      </header>
      {modules.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="modules">
          {modules.map((module) => (
            <Folder
              key={module.id}
              moduleId={module.id}
              moduleName={module.name}
              moduleType={module.type}
              fileURL={module.fileURL}
              url={module.url}
              onEditModuleName={handleEditModuleName}
              onDeleteModule={handleDeleteModule}
              onDrop={handleDrop} // Pass the onDrop handler
              items={module.items}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
