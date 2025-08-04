import React from 'react'
import { useState } from 'react';

export default function Task4() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        age: '',
        state: 'TG',
        gender: '',
        contractAccepted: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.contractAccepted) {
            alert('Please accept the contract!');
            return;
        }

        console.log('Form Data:', formData);
        alert('Registration Successful!');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Username:{' '}
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </label>
            </div>

            <div>
                <label>
                    Password:{' '}
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </label>
            </div>

            <div>
                <label>
                    Age:{' '}
                    <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        min="1"
                        max="120"
                        required
                    />
                </label>
            </div>

            <div>
                <label>
                    State:{' '}
                    <select
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        required
                    >
                        <option value="TG">Telangana (TG)</option>
                        <option value="AP">Andhra Pradesh (AP)</option>
                        <option value="TN">Tamil Nadu (TN)</option>
                    </select>
                </label>
            </div>

            <div>
                Gender:
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="M"
                        checked={formData.gender === 'M'}
                        onChange={handleChange}
                        required
                    />{' '}
                    Male
                </label>
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="F"
                        checked={formData.gender === 'F'}
                        onChange={handleChange}
                        required
                    />{' '}
                    Female
                </label>
            </div>

            <div>
                <label>
                    <input
                        type="checkbox"
                        name="contractAccepted"
                        checked={formData.contractAccepted}
                        onChange={handleChange}
                        required
                    />{' '}
                    I accept the contract terms
                </label>
            </div>

            <button type="submit">Register</button>
        </form>
    );
}
