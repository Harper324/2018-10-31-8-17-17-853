import Person from './person'

class Teacher extends Person {
    constructor(id, name, age, klasses) {
        super(id, name, age)
        this.klasses = klasses;
    }
    introduce() {
        if (this.klasses) {
            return `${super.introduce()} I am a Teacher. I teach Class ${this.klasses[0].number}, ${this.klasses[1].number}.`;
        }
        return `${super.introduce()} I am a Teacher. I teach No Class.`;
    }
    isTeaching(student) {
        if(student.klass.isIn()) {
            return true;
        }

    }

}

module.exports = Teacher;


