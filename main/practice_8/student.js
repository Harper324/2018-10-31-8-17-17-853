class Class {
    leader = leader;
    constructor(number) {
        this.number = number;
    }

}
var klass = new Class();
class Student extends Person {
    constructor(id, name, age, klass) {
    super(id, name, age);
    this.class = klass;
}
introduce() {
    return super.introduce() + 'I am a Student. I am at Class ' + this.class;
}
}

