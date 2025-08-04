import React from 'react'
import { useState } from 'react';
import Child from '../child/Child';

export default function Parent() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);

    return (
        <div>
            <input
                type="number"
                value={num1}
                onChange={(e) => setNum1(Number(e.target.value))}
                placeholder="Number 1"
            />
            <input
                type="number"
                value={num2}
                onChange={(e) => setNum2(Number(e.target.value))}
                placeholder="Number 2"
            />

            <Child num1={num1} num2={num2} />
        </div>
    );
}
