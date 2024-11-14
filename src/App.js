import React, { useState } from 'react';
import './DragDropSquare.css';
import KeyWordEvets from './Components/KeyWordEvets';
import MouseAndDragEvents from './Components/MouseAndDragEvents';
import PointerEventsDemo from './Components/PointerEventDemo';
import TouchEventsDemo from './Components/TouchEventDemo';

const App = () => {
  const [positions, setPositions] = useState({
    item1: { x: 50, y: 50 },
    item2: { x: 200, y: 50 },
    item3: { x: 50, y: 200 },
    item4: { x: 200, y: 200 },
  });

  const handleDrag = (e, item) => {
    const newX = e.clientX - e.target.offsetWidth / 2;
    const newY = e.clientY - e.target.offsetHeight / 2;

    setPositions((prevPositions) => ({
      ...prevPositions,
      [item]: { x: newX, y: newY },
    }));
  };

  return (
    <>
    <div className="container">
      {Object.entries(positions).map(([key, pos]) => (
        <div
          key={key}
          className="draggable"
          draggable
          onDrag={(e) => handleDrag(e, key)}
          style={{
            left: `${pos.x}px`,
            top: `${pos.y}px`,
          }}
        >
          {key}
        </div>
      ))}
    </div>
    <KeyWordEvets></KeyWordEvets>
    <MouseAndDragEvents></MouseAndDragEvents>
    <PointerEventsDemo></PointerEventsDemo>
    <TouchEventsDemo></TouchEventsDemo>
    </>
  );
};

export default App;
