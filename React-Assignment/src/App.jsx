import { useState } from "react"
import StudentForm from "./StudentForm"
import StudentList from "./StudentList"

function App() {
  const [students, setStudents] = useState([
    {name: "Ahmed", course: "Teacher", age: "20"},
    {name: "Ali", course: "Doctor", age: "22"},
    {name: "Husein", course: "Police", age: "17"},
    {name: "Yasin", course: "Engineer", age: "19"}
  ])

  return (
    <div>
      <h1>Students</h1>
      <p>Total: {students.length}</p>
      <StudentForm addStudent={(s) => setStudents([...students, s])} />
      <StudentList students={students} deleteStudent={(i) => setStudents(students.filter((s, x) => x != i))} />
    </div>
  )
}
export default App

    
      