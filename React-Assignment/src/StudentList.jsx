import StudentCard from "./StudentCard"

function StudentList({ students, deleteStudent }) {
  if(students.length == 0) {
    return <p>No students found.</p>
  }
  
  return (
    <div>
      {students.map((s, i) => <StudentCard s={s} i={i} deleteStudent={deleteStudent} />)}
    </div>
  )
}
export default StudentList