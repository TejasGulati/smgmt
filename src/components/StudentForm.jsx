import React, { useState } from 'react';

function StudentForm({ onAddStudent }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [major, setMajor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!name || !age || !major) {
      alert('Please fill in all fields');
      return;
    }

    const newStudent = {
      name,
      age: parseInt(age),
      major
    };

    onAddStudent(newStudent);

    // Reset form
    setName('');
    setAge('');
    setMajor('');
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Add New Student</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-2 font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter student name"
            required
          />
        </div>
        <div>
          <label htmlFor="age" className="block mb-2 font-medium">
            Age
          </label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter student age"
            min="16"
            max="100"
            required
          />
        </div>
        <div>
          <label htmlFor="major" className="block mb-2 font-medium">
            Major
          </label>
          <input
            type="text"
            id="major"
            value={major}
            onChange={(e) => setMajor(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter student major"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
        >
          Add Student
        </button>
      </form>
    </div>
  );
}

export default StudentForm;