import React, { useState } from 'react';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: 'John Doe', age: 22, major: 'Computer Science' },
    { id: 2, name: 'Jane Smith', age: 21, major: 'Mathematics' },
  ]);

  const addStudent = (newStudent) => {
    const studentWithId = {
      ...newStudent,
      id: students.length + 1
    };
    setStudents([...students, studentWithId]);
  };

  const deleteStudent = (id) => {
    setStudents(students.filter(student => student.id !== id));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Student Management System
      </h1>
      <div className="grid md:grid-cols-2 gap-8">
        <StudentForm onAddStudent={addStudent} />
        <StudentList 
          students={students} 
          onDeleteStudent={deleteStudent} 
        />
      </div>
    </div>
  );
}

export default App;