// Student Management System

// class for a person (Abstraction)
class Person {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }

    getDetails() {
        return `Name: ${this.name}, ID: ${this.id}`;
    }
}

// Student class extending Person (Inheritance)
class Student extends Person {
    constructor(name, id) {
        super(name, id);
        this.grades = [];
    }

    // Encapsulation
    addGrade(grade) {
            this.grades.push(grade);  
    }

    // Calculate average grade (Abstraction)
    calculateAverageGrade() {

        const sum = this.grades.reduce((total, grade) => total + grade, 0);
        return (sum / this.grades.length).toFixed(2);
    }

    // Polymorphism: Overriding getDetails to include grades
    getDetails() {
        const baseDetails = super.getDetails();
        const averageGrade = this.calculateAverageGrade();
        return `${baseDetails}, Average Grade: ${averageGrade}`;
    }
}

// Student Management System class
class StudentManagementSystem {
    constructor() {
        this.students = [];
    }

    // Add a new student
    addStudent(name, id) {
        const student = new Student(name, id);
        this.students.push(student);
        console.log(`Student ${name} (ID: ${id}) added successfully.`);
    }

    // View student details by ID
    viewStudentDetails(id) {
        const student = this.students.find(s => s.id === id);
        if (student) {
            console.log(student.getDetails());
        } else {
            console.log(`Student with ID: ${id} not found.`);
        }
    }

    // Add grade to a student by ID
    addGradeToStudent(id, grade) {
        const student = this.students.find(s => s.id === id);
        if (student) {
            student.addGrade(grade);
            console.log(`Grade ${grade} added to student ID: ${id}.`);
        } else {
            console.log(`Student with ID: ${id} not found.`);
        }
    }
}

// Example usage
const sms = new StudentManagementSystem();
sms.addStudent("Adebayo Owolabi W3", 1);
sms.addStudent("Livinus", 2);
sms.addGradeToStudent(1, 85);
sms.addGradeToStudent(1, 90);
sms.addGradeToStudent(2, 78);
sms.addGradeToStudent(2, 88);
sms.viewStudentDetails(1);
sms.viewStudentDetails(2);
sms.viewStudentDetails(3);
