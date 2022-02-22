
// object constructor
function Student(first,last,age,color){
    this.firstname =first;
    this.lastName =last;
    this.age =age;
    this.color =color;
}
let Student1 = new Student("prakash","samantaray",24,12);
let Student2 = new Student("ajit","sahoo",26,10);
Student1.weight =45;

console.log(Student2);
Student1.akki= function (){
    
    return this.firstname+" "+this.lastName;
}
Student2.pk =function(){
    return this.age+" "+this.color;
}

