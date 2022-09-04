class Person {
  constructor(name, startYear) {
      this.name = name
      this.startYear = startYear
      this.courses = []
  }

  addCourse(course) {
      this.courses.push(course)
  }
}

class Student extends Person {
  constructor(name, startYear) {
      super(name, startYear)
      this.grades = []
  }

  receiveGrade(courseName, finalGrade) {
      this.grades.push({
          course: courseName,
          grade: finalGrade
      })
  }
}

class Teacher extends Person {
  constructor(name,startYear,salary) {
      super(name,startYear);
      this.salary = salary;
      this.courses = {}
  }

  giveGrade(student,course,grade) {
    student.receiveGrade(course,grade);      
  }

  addCourse(course){
    this.courses[course] = this.courses[course]+1 || 1;
  }
}
/* 
const s1 = new Student("Ronda", 2017)
const t1 = new Teacher("Cassandra", 2002, 40000)

t1.giveGrade(s1, "Algebra II", 82)
const firstGrade = s1.grades[0]

console.log(`${s1.name} received an ${firstGrade.grade} in ${fir stGrade.course}`)
//above should print "Ronda received an 82 in Algebra II"﻿*/

const t1 = new Teacher("Cassandra", 2002, 40000)
t1.addCourse("Algebra II")
t1.addCourse("Algebra II")
t1.addCourse("Trigonometry")
console.log(t1.courses) //should print {Algebra II: 2, Trigonometry: 1}