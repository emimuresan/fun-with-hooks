import React, { useState, useEffect } from 'react';

function Button() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `Clicked ${count} times`;
  });

  return (
    <div className="demo">
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default Button;

/**
 * Notes:
 *
 * 1. useEffect hook can be thought of as componentDidMount, componentDidUpdate, and componentWillUnmount combined.
 *
 * 2. useEffect fires after each render.
 *
 * 3. Notice that hooks lets us split the code based on what it is doing rather than a lifecycle method name.
 *
 */

/**
 * // Only re-run the effect if count changes
 * useEffect(() => { document.title = `You clicked ${count} times`;}, [count]);
 */
