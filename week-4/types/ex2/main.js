var Student = /** @class */ (function () {
    function Student(name, age) {
        this.name = name;
        this.age = age;
        this.grades = [];
    }
    Student.prototype.addGrade = function (grade) {
        this.grades.push(grade);
    };
    Student.prototype.getGradeAve = function () {
        return (this.grades.reduce(function (prev, cur) { return prev + cur; }, 0)) / this.grades.length;
    };
    return Student;
}());
var student1 = new Student('Avi', 35);
student1.addGrade(70);
student1.addGrade(90);
student1.addGrade(80);
student1.addGrade(100);
var student2 = new Student('Lea', 24);
student2.addGrade(50);
student2.addGrade(110);
student2.addGrade(100);
student2.addGrade(100);
var student3 = new Student('Mati', 10);
student3.addGrade(5);
student3.addGrade(3);
student3.addGrade(33);
student3.addGrade(322);
console.log('student name: ' + student1.name + '\n' + 'age: ' + student1.age + '\n' + 'Avarage: ' + student1.getGradeAve());
console.log('student name: ' + student2.name + '\n' + 'age: ' + student2.age + '\n' + 'Avarage: ' + student2.getGradeAve());
console.log('student name: ' + student3.name + '\n' + 'age: ' + student3.age + '\n' + 'Avarage: ' + student3.getGradeAve());
var value = true;
function doX(val) {
    return val == 8;
}
doX(value);
