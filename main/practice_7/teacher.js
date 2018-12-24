class Teacher extends Person {
    constructor(name, age, klass) {
    super(name, age);
    this.class = klass;
}
introduce() {
    if (this.class) {
        return super.introduce() + 'I am a Teacher. I teach Class ' + this.class;
    } 
    return super.introduce() + 'I am a Teacher. I teach no Class.';
}
introduceWith() {
    if(Student.klass === 2) {
        return super.introduce() + 'I am a Teacher. I teach ' + this.name;
    }
    return super.introduce() + 'I am a Teacher. I teach no student'; 

}
}






