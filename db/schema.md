HOGWARTS

teachers 
  id 
  name
  subject

students 
  id 
  name 
  house 

classes 
  teacher_id 
  student_id 

wands 
  id
  type 
  length
  core 
  student_id 

Build the following routes:
/students - GET should give all students 
/students/:id - GET one student 
/students - post creates a new student 
/students/:id - PUT update a student 
/students/house/:house - all students belong to one house
/students/:id - DELETE - kills a student 

/teachers - GET gives all teachers 
/teachers/:id - GET one teacher. 
/teachers/:id/students - GET all students taught by a ateacher 
/teachers/:id - DELETE removes a teacher 


/wands GET all wands 
/wands/:id DELETE -deletes a wand 