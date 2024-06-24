import React from 'react';
import { useDrag } from 'react-dnd';

// Define the drag type for your draggable component
const DRAG_TYPE = 'yourDragType';

// Draggable component
const DraggableComponent = () => {
  // useDrag hook to make this component draggable
  const [{ isDragging }, drag] = useDrag({
    item: { type: DRAG_TYPE }, // Define the type of the item being dragged
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  // Style to apply when dragging
  const opacity = isDragging ? 0.4 : 1;

  return (
    <div
      ref={drag} // Attach the drag ref to make this component draggable
      style={{ opacity, cursor: 'move' }}
    >
      {/* Content of your draggable component */}
      Drag me!
    </div>
  );
};

export default DraggableComponent;
