"use client"

import React, { useState } from 'react';

// File component
const File = ({ name }) => {
  const handleFileClick = () => {
    alert(`Opening file: ${name}`);
  };

  return (
    <div className="file" onClick={handleFileClick}>
      📄 {name}
    </div>
  );
};

// Folder component
const Folder = ({ folderData }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFolder = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="folder">
      <div onClick={toggleFolder} className="folder-header">
        {isOpen ? '📂' : '📁'} {folderData.name}
      </div>
      {isOpen && (
        <div className="folder-content">
          {folderData.children.map((item, index) =>
            item.type === 'folder' ? (
              <Folder key={index} folderData={item} />
            ) : (
              <File key={index} name={item.name} />
            )
          )}
        </div>
      )}
    </div>
  );
};

// Main FileExplorer component
const FileExplorer = () => {
  const [fileStructure, setFileStructure] = useState([
    {
      type: 'folder',
      name: 'Documents',
      children: [
        { type: 'file', name: 'resume.pdf' },
        { type: 'file', name: 'project-plan.docx' },
        {
          type: 'folder',
          name: 'Photos',
          children: [
            { type: 'file', name: 'photo1.jpg' },
            { type: 'file', name: 'photo2.png' },
          ],
        },
      ],
    },
    {
      type: 'folder',
      name: 'Music',
      children: [
        { type: 'file', name: 'song1.mp3' },
        { type: 'file', name: 'song2.wav' },
      ],
    },
  ]);

  return (
    <div className="file-explorer">
      <h2>File Explorer</h2>
      {fileStructure.map((item, index) =>
        item.type === 'folder' ? (
          <Folder key={index} folderData={item} />
        ) : (
          <File key={index} name={item.name} />
        )
      )}
    </div>
  );
};

export default FileExplorer;
