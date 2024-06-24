// DroppableTarget.js
import React from 'react';
import { useDrop } from 'react-dnd';

const DroppableTarget = ({ onDrop }) => {
  const [{ isOver }, drop] = useDrop({
    accept: 'item',
    drop: (item) => onDrop(item),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div
      ref={drop}
      style={{
        width: '200px',
        height: '200px',
        border: '1px solid black',
        backgroundColor: isOver ? 'lightgreen' : 'white',
      }}
    >
      Drop here
    </div>
  );
};

export default DroppableTarget;
