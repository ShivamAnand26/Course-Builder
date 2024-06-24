import React from 'react';
import '../styles/EmptyState.css';
import nothingImage from '../images/Nothing.png';

function EmptyState() {
  return (
    <div className="empty-state">
      <img src={nothingImage} alt="Nothing here" />
      <p>Nothing added here yet</p>
      <p>Click on the [+] Add button to add items to this course</p>
    </div>
  );
}

export default EmptyState;
