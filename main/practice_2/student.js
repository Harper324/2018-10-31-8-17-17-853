class Student extends Person {
    constructor(name,age,class) {
    super(name, age);
    this.class = class;
}
introduce(){
    return 'I am a Student. I am at Class ' + this.class;
}

