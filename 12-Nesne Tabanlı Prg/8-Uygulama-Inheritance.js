//person constructor 

let Person = function(name){
    this.name = name;
}

Person.prototype.Intreduce = function(){
    console.log('hello my name is '+ this.name);
}


//teacher constructor
let Teacher = function(name,branch){
    Person.call(this,name);
    this.branch = branch;
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher

Teacher.prototype.teach = function(){
    console.log('i teach '+this.branch);
}

//Studetn constructor
let Student = function(name,number){
    Person.call(this,name)
    this.number=number;
}

Student.prototype= Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.study = function(){
    console.log('My student number is '+this.number);
}

//Headmaster constructor 
let Headmaster = function(name,branch){
    Teacher.call(this,name,branch);
}

Headmaster.prototype= Object.create(Teacher.prototype);
Headmaster.prototype.constructor= Headmaster;

Headmaster.prototype.shareTask = function(){
    console.log('ive already shared all the work');
}

let p1 = new Person('cinar ')
p1.Intreduce();

let t1 = new Teacher('Emel','math')
t1.Intreduce();
t1.teach();

let s1 = new Student('Oguz',52)
s1.Intreduce();
s1.study();

let h1 = new Headmaster('Cem','Turkce')
h1.Intreduce();
h1.teach();
h1.shareTask();