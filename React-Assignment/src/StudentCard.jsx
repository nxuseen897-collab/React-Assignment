function StudentCard({ s, i, deleteStudent }) {
  let status = "Minor"
  if(s.age >= 18) { status = "Adult" }

  return (
    <div>
      <p>{s.name}</p>
      <p>{s.course}</p>
      <p>{s.age}</p>
      <p>{status}</p>
      <button onClick={() => deleteStudent(i)}>Delete</button>
    </div>
  )
}
export default StudentCard