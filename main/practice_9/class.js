class Class {
    constructor(number) {
        this.number = number;
    }
    assignLeader(student) {
        if (student.klass === this) {
          this.leader = student;
        }
        console.log('It is not one of us.');
    }
    appendMember(student) {
        return student.klass = this;

    }
    getDisplayName() {
        return `Class ${this.number}`;
    }
}

module.exports = Class;
