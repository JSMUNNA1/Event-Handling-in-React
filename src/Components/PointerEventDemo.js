// Explanation
// Pointer Events:
// onPointerDown: Triggered when a pointer input (like touch, pen, or mouse) is pressed down.
// onPointerMove: Triggered when the pointer moves across the element.
// onPointerUp: Triggered when the pointer input is released.
// onPointerCancel: Triggered when the pointer event is canceled, typically due to system events or loss of input device focus.
// onGotPointerCapture: Triggered when the element gains pointer capture, allowing it to capture all pointer events, even if the pointer moves outside the element.
// onLostPointerCapture: Triggered when the element loses pointer capture.
// onPointerEnter: Triggered when the pointer enters the element's bounds.
// onPointerLeave: Triggered when the pointer leaves the element's bounds.
// onPointerOver: Triggered when the pointer is over the element, similar to onMouseOver.
// onPointerOut: Triggered when the pointer leaves the element, similar to onMouseOut.
// Use Cases
// Pointer events provide a unified way to handle different types of input, such as touch, pen, and mouse. They're useful for building interactive applications that work consistently across different input devices

import React from 'react';

function PointerEventsDemo() {
  // Handle pointer down event (when a pointer input is pressed)
  const handlePointerDown = () => {
    console.log('Pointer down');
  };

  // Handle pointer move event (when a pointer moves across the element)
  const handlePointerMove = () => {
    console.log('Pointer moved');
  };

  // Handle pointer up event (when a pointer input is released)
  const handlePointerUp = () => {
    console.log('Pointer up');
  };

  // Handle pointer cancel event (when a pointer event is canceled)
  const handlePointerCancel = () => {
    console.log('Pointer canceled');
  };

  // Handle when the element gains pointer capture (to track pointer events outside its boundaries)
  const handleGotPointerCapture = () => {
    console.log('Got pointer capture');
  };

  // Handle when the element loses pointer capture
  const handleLostPointerCapture = () => {
    console.log('Lost pointer capture');
  };

  // Handle pointer enter event (when a pointer enters the element)
  const handlePointerEnter = () => {
    console.log('Pointer entered element');
  };

  // Handle pointer leave event (when a pointer leaves the element)
  const handlePointerLeave = () => {
    console.log('Pointer left element');
  };

  // Handle pointer over event (when a pointer is over the element)
  const handlePointerOver = () => {
    console.log('Pointer over element');
  };

  // Handle pointer out event (when a pointer leaves the element, similar to onMouseOut)
  const handlePointerOut = () => {
    console.log('Pointer out of element');
  };

  return (
    <div
      style={{
        border: '2px solid blue',
        padding: '20px',
        margin: '20px',
        display: 'inline-block',
        width: '250px',
        textAlign: 'center',
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerCancel}
      onGotPointerCapture={handleGotPointerCapture}
      onLostPointerCapture={handleLostPointerCapture}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    >
      Interact with pointer events!
    </div>
  );
}

export default PointerEventsDemo;
