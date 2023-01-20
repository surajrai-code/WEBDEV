
var st={nu:23}
var add=function(a,b,b,c){
    return this.nu +a+b+c;
};
console.log(add.call(st,3,2,1)); // by using call to call function

var arr=[3,2,1];
console.log(add.apply(st,arr)); // by using apply to call function

var bound=add.bind(st);         // by using bind to call function
console.log(bound(3,2,1)); 
    

function student(a){
     var age=a;
     this.printAge=funtion(){
        console.log(age);
     }
}
var student1 = new Student(20);
student1.printAge();
