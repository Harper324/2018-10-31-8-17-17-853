class Teacher extends Person {
    constructor(name, age, klass) {
    super(name, age);
    this.class = klass;
}
introduce() {
    if (this.class) {
        return super.introduce() + 'I am a Student. I teach Class ' + this.class;
    } 
    return super.introduce() + 'I am a Student. I teach no Class.';
}
}




