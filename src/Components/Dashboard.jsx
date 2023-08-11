import React, { useState } from "react";

export const Dashboard = () => {
  const [count, setCount] = useState(0);

  const counter = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(count - 1)}>Decrease</button>
        </div>
    )
  }

  return (
    counter()
  );
}