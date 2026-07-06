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

  findStudentById(id){ 
    return this.students.find(student => student.id === id)
  },

  passedStudents(){
    return this.students.filter(student => student.marks > 49)
  },

  studentNames(){
    return this.students.map(student => student.name)
  },

  averageMarks(){
    const total = this.students.reduce((sum,student) => sum + student.marks , 0);
    return total / this.students.length;
  },

  addStudent(student){
    if(!this.validateStudent(student)) return "Student Info isn't valid!"
    const lastStudent = this.students[this.students.length - 1]  // Remember we can't work on indexes as it can create problem while deleting
    const newStudent = {
      ...student, id : lastStudent ? lastStudent.id + 1 : 1 // Spread Operator copies all properties from student
    }
    this.students.push(newStudent)
  },

  validateStudent(student){
    if(!this.validateMarks(student.marks)) return false
    else if(student.age<1 || !Number.isInteger(student.age)) return false
    
    const required = ["name", "age", "marks", "department"];
    for(const field of required){
      if(!(field in student)) return false
    }
    return true
  },

  deleteStudent(id){
    const student = this.findStudentById(id)
    if(!student) return "Student doesn't Exists!"
    this.students = this.students.filter(student => student.id !== id)
  },

  updateMarks(id, marks){
    const student = this.findStudentById(id)
    if(!student) return "Student Not Found!"
    if(!this.validateMarks(marks)) return "Please! Enter a valid marks!"
    student.marks = marks;
  },

  validateMarks(marks){
    if(marks<0) return false
    else if(marks>100) return false
    else if(!Number.isInteger(marks)) return false
    return true;
  },

  topper(){
    return this.students.reduce((topper,student) => student.marks > topper.marks? student : topper);
  },

  statistics(){
    return {
     Total_Students: this.students.length,
     Passed_Students: this.passedStudents().length,
     Average_Marks: this.averageMarks(),
     Topper: this.topper().name
    };
  },

  searchStudentByName(name){
    return this.students.filter(student => student.name.toLowerCase().includes(name.toLowerCase()));
  },

  searchStudentByDepartment(department){
    return this.students.filter(student => student.department.toLowerCase().includes(department.toLowerCase()));
  },

  searchStudentByMarksRange(first,second){
    return this.students.filter(student => student.marks >= first && student.marks <= second);
  },

  searchStudentByAgeRange(first,second){
    return this.students.filter(student => student.age >= first && student.age <= second);
  },

  search(criteria){
    const required = ["name", "department"];
    let results = this.students;
    for(const field of required){
      if((field in criteria)) {results = results.filter(result => result[field].includes(criteria[field]))}
    }
    if(criteria.minMarks !== undefined && criteria.minMarks !== "") results = results.filter(result => result.marks >= criteria.minMarks);
    return results;
  },

  sortByName(){
    return this.students.name.sort();
  }

};

studentManagementSystem.displayAll()
console.log(studentManagementSystem.findStudentById(3))
console.log(studentManagementSystem.passedStudents())
console.log(studentManagementSystem.studentNames())
console.log(studentManagementSystem.averageMarks())
studentManagementSystem.addStudent({name: "Amna", age: 20, marks: 90, department: "CSE"});
studentManagementSystem.deleteStudent(1)
studentManagementSystem.updateMarks(4,91)
console.log(studentManagementSystem.topper());
console.table(studentManagementSystem.statistics())
console.log(sortByName())
