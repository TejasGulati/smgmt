import React from 'react';

function StudentList({ students, onDeleteStudent }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Student List</h2>
      {students.length === 0 ? (
        <p className="text-gray-500">No students found.</p>
      ) : (
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 text-left">Name</th>
              <th className="py-2 px-4 text-left">Age</th>
              <th className="py-2 px-4 text-left">Major</th>
              <th className="py-2 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="border-b hover:bg-gray-50">
                <td className="py-2 px-4">{student.name}</td>
                <td className="py-2 px-4">{student.age}</td>
                <td className="py-2 px-4">{student.major}</td>
                <td className="py-2 px-4 text-center">
                  <button 
                    onClick={() => onDeleteStudent(student.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default StudentList;