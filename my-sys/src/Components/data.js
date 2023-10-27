import React from "react";
import { PocketContextProvider, usePocket } from "./contexts/PocketContext";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  const pb = usePocket();
  const students = pb.collection("students").getFullList();

  return (
    <Router>
      <div>
        <h1>Students</h1>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>Full_Name</th>
              <th>Email</th>
              <th>Number</th>
              
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.Number}</td>
               
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Router>
  );
};

export default App;
