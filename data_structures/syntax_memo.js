//ES2015 - class syntax

class Student {
    //constructor needs to be used to instantiate new object
    constructor(firstName, lastName, year) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
        this.tardies = 0;
        this.scores = []
    }
    //defining instance method
    markLate() {
        this.tardies += 1;
        if (this.tardies >= 3) {
            return 'YOU ARE EXPELLED!'
        }
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`
    }
    addScore(score) {
        this.scores.push(score);
        return this.scores;
    }
    calculateAverage() {
        let sum = this.scores.reduce(function (a, b) { return a + b })
        return sum / this.scores.length;
    }
    static enrollStudents() {
        return 'enrolling students'
    }
}

// let firstStudent = new Student('Colt', 'Steele', 3)
// firstStudent.firstName

//calling static method
// Student.enrollStudents()



