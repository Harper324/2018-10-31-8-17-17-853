class Class {
    constructor(number) {
        this.number = number;
    }    
    registerAssignLeaderListener(teacher) {
            this.teacher = teacher;
        
    }
    assignLeader(student) {
        if (student.klass === this) {
            this.leader = student;
            if(this.teacher) {
                 console.log(`I am ${this.teacher.name}. I know ${this.leader.name} become Leader of Class ${this.number}.`);
            }
           
        }
        console.log('It is not one of us.');
    }
    appendMember(student) {
        student.klass = this;
        if(this.teacher) {
            console.log(`I am ${this.teacher.name}. I know ${student.name} has joined Class ${this.number}.`);
        }
    }
    getDisplayName() {
        return `Class ${this.number}`;
    }
    isIn() {
        if (student.klass) {
            return true;
        }
    }

    registerJoinListener(teacher) {
        this.teacher = teacher;
    }

}

module.exports = Class;

