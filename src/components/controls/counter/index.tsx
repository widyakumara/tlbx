import { useState } from "preact/hooks";
// import "./styles.css";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div class="counter">
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
    </div>
  );
}
