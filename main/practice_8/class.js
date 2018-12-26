
class Class {
    constructor(number) {
        this.number = number;
    }
    assignLeader(student) {
        if (student.klass.number === this.number) {
            this.leader = student;
        }
    }
    getDisplayName() {
        return `Class ${this.number}`;
    }
}

module.exports = Class;
