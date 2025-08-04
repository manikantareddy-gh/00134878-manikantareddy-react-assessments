import React from 'react'
import { useState } from 'react';

export default function Child(props) {
    const num1 = props.num1;
    const num2 = props.num2;
    const [result, setResult] = useState(null);

    const handleOperation = (op) => {
        let res;
        if (op === '+') res = num1 + num2;
        else if (op === '-') res = num1 - num2;
        else if (op === '*') res = num1 * num2;

        setResult(res);
    };

    return (
        <div>
            <button onClick={() => handleOperation('+')}>+</button>
            <button onClick={() => handleOperation('-')}>-</button>
            <button onClick={() => handleOperation('*')}>*</button>

            <div>Result: {result !== null ? result : '-'}</div>
        </div>
    );
}
