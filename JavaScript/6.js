// Creating a Student Management System that stores students and performs differenct operations on them

/*

Task 1: Show All 
Task 2: Find Student by ID
Task 3: Show Passed Students
Task 4: Show Student Names
Task 5: Calculate Average Marks
Task 6: Add Student
Task 7: Delete Student
Task 8: Update Marks
Task 9: Topper
Task 10: Statistics

*/

const studentManagementSystem = {
  students: [
    // ..... Main Students Array to store students data
    {
      id: 1,
      name: "Ali",
      age: 20,
      marks: 85,
      department: "SE",
    },
    {
      id: 2,
      name: "Amaan",
      age: 19,
      marks: 92,
      department: "CS",
    },
    {
      id: 3,
      name: "Ahmed",
      age: 21,
      marks: 65,
      department: "IT",
    },
  ],

  displayAll() {
    console.table(this.students);  // console.table will print the array in proper table
  },

  findStudentById(Id){ 
    console.log(this.students.find(student => student.id === Id))
  },

  passedStudents(){
    return this.students.filter(student => student.marks > 49)
  },

  studentNames(){
    const names = this.students.map(student => student.name)
    console.log(names)
  },

  averageMarks(){
    const marks = this.students.map(student => student.marks);
    return marks.reduce((sum , mark) => sum + mark , 0) / marks.length;
  },

  addStudent(id, name, age, marks, department){
    this.students.push({id,name,age,marks,department})
    console.log(this.students)
  },

  deleteStudent(id){
    this.students = this.students.filter(student => student.id !== id)
    console.log(this.students);
  },

  updateMarks(id, marks){
    this.students.find(student => student.id === id).marks = marks;
    console.log(this.students)
  },

  topper(){
    const marks = this.students.map(student => student.marks);
    const max = marks.reduce((max,mark) => (mark > max)? max = mark : max = max , 0)
    return this.students.find(student => student.marks === max)
  },

  statistics(){
    console.log("Total Students: " + this.students.length)
    console.log("Passed Student: " + this.passedStudents().length)
    console.log("Average Marks: " + this.averageMarks())    
    console.log("Topper: " + this.topper().name)
  }

};

studentManagementSystem.displayAll()
studentManagementSystem.findStudentById(3)
console.log(studentManagementSystem.passedStudents())
studentManagementSystem.studentNames()
console.log(studentManagementSystem.averageMarks())
studentManagementSystem.addStudent(4,"Amna", 20, 90, "CSE");
studentManagementSystem.deleteStudent(1)
studentManagementSystem.updateMarks(4,91)
console.log(studentManagementSystem.topper());
studentManagementSystem.statistics()