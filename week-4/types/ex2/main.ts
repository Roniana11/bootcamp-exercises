class Student{

  name: string;
  age: number;
  grades: number[];

  constructor(name: string, age: number){
    this.name = name;
    this.age = age;
    this.grades = [];
  }

  addGrade(grade:number){
    this.grades.push(grade);
  }

  getGradeAve(): number{
    return (this.grades.reduce((prev,cur)=> prev+cur, 0))/ this.grades.length;
  }

}

const student1: Student = new Student('Avi',35)
student1.addGrade(70)
student1.addGrade(90)
student1.addGrade(80)
student1.addGrade(100)
const student2: Student = new Student('Lea',24)
student2.addGrade(50)
student2.addGrade(110)
student2.addGrade(100)
student2.addGrade(100)
const student3: Student = new Student('Mati',10)
student3.addGrade(5)
student3.addGrade(3)
student3.addGrade(33)
student3.addGrade(322)

console.log('student name: '+ student1.name + '\n' + 'age: ' +student1.age + '\n'+ 'Avarage: ' + student1.getGradeAve() );
console.log('student name: '+ student2.name + '\n' + 'age: ' +student2.age + '\n'+ 'Avarage: ' + student2.getGradeAve() );
console.log('student name: '+ student3.name + '\n' + 'age: ' +student3.age + '\n'+ 'Avarage: ' + student3.getGradeAve() );

type val = string | number | boolean;

let value: val = true;

function doX(val: val): val {
    return val == 8;
}

doX(value);