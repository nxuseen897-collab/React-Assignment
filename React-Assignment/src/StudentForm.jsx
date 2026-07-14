function StudentForm({ addStudent }) {
  
  function add() {
    let name = document.getElementById("name").value
    let course = document.getElementById("course").value
    let age = document.getElementById("age").value
    
    addStudent({name, course, age})
    
    document.getElementById("name").value = ""
    document.getElementById("course").value = ""
    document.getElementById("age").value = ""
  }

  return (
    <div>
      Name <input id="name" /> <br/>
      Course <input id="course" /> <br/>
      Age <input id="age" /> <br/>
      <button onClick={add}>Add</button>
    </div>
  )
}
export default StudentForm