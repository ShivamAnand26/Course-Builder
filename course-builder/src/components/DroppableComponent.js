// DroppableComponent.js
import { useDrop } from 'react-dnd';

const DroppableComponent = ({ onDrop }) => {
  const [{ isOver }, drop] = useDrop({
    accept: 'BOX',
    drop: (item) => onDrop(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div ref={drop} className={isOver ? 'droppable active' : 'droppable'}>
      Drop here
    </div>
  );
};

export default DroppableComponent;
