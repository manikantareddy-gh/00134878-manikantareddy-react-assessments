import React from 'react'

export default function Task2() {
  const employees = [
    { name: 'Manikanta', salary: 50000 },
    { name: 'Bhagath', salary: 60000 },
    { name: 'Vijay', salary: 55000 },
  ];

  return (
    <table border="1" cellPadding="8" cellSpacing="0">
      <thead>
        <tr>
          <th>Name</th>
          <th>Salary</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((emp, index) => (
          <tr key={index}>
            <td>{emp.name}</td>
            <td>{emp.salary}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
