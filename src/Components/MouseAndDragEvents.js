// Explanation
// Mouse Events:

// onClick: Triggered when the element is clicked.
// onContextMenu: Triggered on right-click. event.preventDefault() prevents the default context menu.
// onDoubleClick: Triggered when the element is double-clicked.
// onMouseDown: Triggered when the mouse button is pressed down.
// onMouseEnter: Triggered when the mouse enters the element.
// onMouseLeave: Triggered when the mouse leaves the element.
// onMouseMove: Triggered when the mouse moves over the element.
// onMouseOut: Triggered when the mouse leaves the element.
// onMouseOver: Triggered when the mouse is over the element.
// onMouseUp: Triggered when the mouse button is released.
// Drag Events:

// draggable: Makes the element draggable.
// onDrag: Triggered when the element is being dragged.
// onDragEnd: Triggered when the drag operation ends.
// onDragEnter: Triggered when the dragged element enters a drop target.
// onDragExit: Triggered when the dragged element exits a drop target.
// onDragLeave: Triggered when the dragged element leaves a drop target.
// onDragOver: Triggered when the dragged element is over a drop target. Prevent the default behavior to allow dropping.
// onDragStart: Triggered when the drag operation starts.
// onDrop: Triggered when the dragged element is dropped on a drop target.

import React from 'react';

function MouseAndDragEvents() {
  // Handle click event
  const handleClick = () => {
    console.log('Element clicked');
  };

  // Handle context menu event (right-click)
  const handleContextMenu = (event) => {
    event.preventDefault(); // Prevent the default right-click menu
    console.log('Context menu triggered');
  };

  // Handle double-click event
  const handleDoubleClick = () => {
    console.log('Element double-clicked');
  };

  // Handle drag event
  const handleDrag = () => {
    console.log('Element is being dragged');
  };

  // Handle drag end event
  const handleDragEnd = () => {
    console.log('Dragging ended');
  };

  // Handle drag enter event (when a draggable element enters a drop target)
  const handleDragEnter = () => {
    console.log('Drag entered drop target');
  };

  // Handle drag exit event (when a draggable element leaves a drop target)
  const handleDragExit = () => {
    console.log('Drag exited drop target');
  };

  // Handle drag leave event (when a draggable element leaves a drop target)
  const handleDragLeave = () => {
    console.log('Drag left drop target');
  };

  // Handle drag over event (when a draggable element is over a drop target)
  const handleDragOver = (event) => {
    event.preventDefault(); // Allow dropping by preventing the default behavior
    console.log('Dragging over drop target');
  };

  // Handle drag start event
  const handleDragStart = () => {
    console.log('Drag started');
  };

  // Handle drop event (when a draggable element is dropped on a drop target)
  const handleDrop = () => {
    console.log('Element dropped on target');
  };

  // Handle mouse down event (when mouse button is pressed)
  const handleMouseDown = () => {
    console.log('Mouse button pressed');
  };

  // Handle mouse enter event (when mouse enters the element)
  const handleMouseEnter = () => {
    console.log('Mouse entered element');
  };

  // Handle mouse leave event (when mouse leaves the element)
  const handleMouseLeave = () => {
    console.log('Mouse left element');
  };

  // Handle mouse move event (when mouse moves over the element)
  const handleMouseMove = () => {
    console.log('Mouse moving over element');
  };

  // Handle mouse out event (when mouse leaves the element)
  const handleMouseOut = () => {
    console.log('Mouse moved out of element');
  };

  // Handle mouse over event (when mouse is over the element)
  const handleMouseOver = () => {
    console.log('Mouse over element');
  };

  // Handle mouse up event (when mouse button is released)
  const handleMouseUp = () => {
    console.log('Mouse button released');
  };

  return (
    <div
      style={{
        border: '2px solid black',
        padding: '20px',
        margin: '20px',
        display: 'inline-block',
        width: '200px',
        textAlign: 'center',
      }}
      onClick={handleClick}
      onContextMenu={handleContextMenu}
      onDoubleClick={handleDoubleClick}
      draggable
      onDrag={handleDrag}
      onDragEnd={handleDragEnd}
      onDragEnter={handleDragEnter}
      onDragExit={handleDragExit}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDragStart={handleDragStart}
      onDrop={handleDrop}
      onMouseDown={handleMouseDown}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      onMouseOut={handleMouseOut}
      onMouseOver={handleMouseOver}
      onMouseUp={handleMouseUp}
    >
      Interact with me!
    </div>
  );
}

export default MouseAndDragEvents;
