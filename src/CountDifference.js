import React, { useState } from 'react';

export function CounterDifference() {
    const [count, setCount] = useState(100);

    // BUGGY WAY: Tries to subtract 1 twice using the variable
    function minusTwoBuggy() {
        setCount(count - 1); 
        setCount(count - 1); 
        // Result will only be 99 because both lines use the old value (100)
    }

    // CORRECT WAY: Tries to subtract 1 twice using the functional updater
    function minusTwoCorrect() {
        setCount(c => c - 1); 
        setCount(c => c - 1); 
        // Result will be 98 because the second line waits for the live update
    }

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Count: {count}</h1>
            
            {/* Click this: It will only drop by 1 instead of 2! */}
            <button 
                onClick={minusTwoBuggy} 
                style={{ margin: "10px", padding: "10px", backgroundColor: "lightcoral" }}
            >
                Minus 2 (Buggy Way)
            </button>

            {/* Click this: It will successfully drop by 2! */}
            <button 
                onClick={minusTwoCorrect} 
                style={{ margin: "10px", padding: "10px", backgroundColor: "lightgreen" }}
            >
                Minus 2 (Correct Way)
            </button>

            <br />
            <button onClick={() => setCount(100)} style={{ marginTop: "20px" }}>Reset to 100</button>
        </div>
    );
}
