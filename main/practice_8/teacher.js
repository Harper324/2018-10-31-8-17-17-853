import Person from './person'

class Teacher extends Person {
    constructor(id, name, age, klass) {
        super(id, name, age)
        this.klass = klass;
    }
    introduce() {
        if (this.klass) {
            return `${super.introduce()} I am a Teacher. I teach Class ${this.klass.number}.`;
        }
        return `${super.introduce()} I am a Teacher. I teach No Class.`;
    }
}

module.exports = Teacher;