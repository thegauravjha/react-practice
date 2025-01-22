import React, { useState, useEffect, useRef } from 'react';

const UseRefHook = () => {
  const [count, setCount] = useState(0);
  const value = useRef(0);
  const inputFocus = useRef(null);

  useEffect(() => {
    // inputFocus.current.focus();
  });

  return (
    <>
      <section>
        <h1 style={{ textAlign: 'center' }}>UseRef</h1>
        <h3>Ref vs State</h3>
        <h5>
          1. Storing mutable values that persist without causing re-renders
        </h5>
        <h5>2. Caching Values to avoid re-initialization or re-renders</h5>
        <div>
          <p>Ref: {value.current}</p>
          <p>State: {count}</p>
        </div>
        <div>
          <button onClick={() => (value.current += 1)}>
            Increase Count Ref
          </button>
          <button
            onClick={() => {
              setCount((prevvalue) => prevvalue + 1);
            }}
          >
            Increase Count State
          </button>
        </div>
        <h5>3. Accessing DOM elements or managing focus</h5>
        <div>
          First Name: <input ref={inputFocus} />
        </div>
        <hr />
      </section>

      <section>
        <h3>Caching Values to avoid re-initialization or re-renders</h3>
        <hr />
      </section>
    </>
  );
};

export default UseRefHook;
