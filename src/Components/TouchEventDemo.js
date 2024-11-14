// Explanation
// Touch Events:
// onTouchStart: Triggered when a touch point is placed on the touch surface (e.g., when a finger touches the screen).
// onTouchMove: Triggered when a touch point moves across the touch surface. This event can be used to handle swipe gestures.
// onTouchEnd: Triggered when a touch point is removed from the touch surface (e.g., when a finger is lifted off the screen).
// onTouchCancel: Triggered when the touch event is canceled, usually due to external reasons such as an alert box popping up or the browser's gesture detection.
// Use Cases
// Touch events are essential for mobile and touch-based interfaces. They allow developers to implement features like swiping, dragging, and custom touch gestures
import React from 'react';
function TouchEventsDemo() {
  // Handle touch start event (when a finger is placed on the screen)
  const handleTouchStart = () => {
    console.log('Touch started');
  };

  // Handle touch move event (when a finger moves across the screen)
  const handleTouchMove = () => {
    console.log('Touch moved');
  };

  // Handle touch end event (when a finger is lifted from the screen)
  const handleTouchEnd = () => {
    console.log('Touch ended');
  };

  // Handle touch cancel event (when a touch event is canceled, like a system interruption)
  const handleTouchCancel = () => {
    console.log('Touch canceled');
  };

  return (
    <div
      style={{
        border: '2px solid green',
        padding: '20px',
        margin: '20px',
        display: 'inline-block',
        width: '250px',
        textAlign: 'center',
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchCancel}
    >
      Interact with touch events!
    </div>
  );
}

export default TouchEventsDemo;
