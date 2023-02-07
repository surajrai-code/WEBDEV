// variable: var -it is old and golable variable ,let-it is new and block variable we can re assingd it, const-it is also block level variable we cannot resingd it .
// data type - String,Number,Boolean,undefined,null
// const name='john';
// const age=39;
// const rating=4.5;
// const isCool=true;
// const x=null;
// const y=undefined;
// let z;

// console.log(typeof name); 

// concatenation
const nam='john';
const ag=39;
console.log('My name is'+nam+'and i am '+ag);
// template String using backlite
const h=`my name is ${nam} and i am ${ag}`;
console.log(h);
// method in string
const s='Hello World'
// for length
console.log(s.length);
// for converting uppercase
console.log(s.toUpperCase());
// for converting lowercase
console.log(s.toLowerCase());
// for finding substring
console.log(s.substring(0,5));
// to change in array we can simply write blank string in split if string is seperated by , then in split also , is present.
console.log(s.split('')); 
//  Array- variables that hold multiple values;
// number of way to create array like using new keyword or [];
const fruits=['apple','oranges','pears'];
console.log(fruits);
// method in array
// for adding element in last array postion in array we use push method
fruits.push('angur');
// by using unshift we can add element in starting 
fruits.unshift('mango');
console.log(fruits);
// for removing element from last in array we use pop
fruits.pop();
console.log(fruits);
// for get index we use indexOf
// for  checking is it array we use isArray() it give value in true or false
// object literals -it is key value pair
const person={
    firstName:'john',
    lastName:'Doe',
    age:30,
    hobbies:['music','movies','sport'],
    address:{
        street:'50 main st',
        city:'boston',
        state:'ma'
    }

}
// for printing whole value is
console.log(person);
// for printing some part using . operator and printing more than one element use , for seperating in console
console.log(person.firstName,person.lastName);
// for printing value of hobbies in seperate like here we want to print movies
console.log(person.hobbies[1]);
// for printing city from address
console.log(person.address.city);
// for object destructuring if you want to print object as variable
const{firstName,lastName,address:{city}}=person;
console.log(person);
// for adding an element 
person.email='john@gmail.com'
console.log(person);
//  for storing object in the form of array
const todos=[
    {
        id:1,
        text:'take out trash',
        isCompleted: true

    },
    {
        id:2,
        text:'take out',
        isCompleted: true

    },
    {
        id:3,
        text:'take trash',
        isCompleted: true

    },
];
console.log(todos);
// for CONVERTING into JSON
const todoJSON=JSON.stringify(todos);
console.log(todoJSON);
// LOOP:- 1.for loop- it is used when we know how many times we want to perform task
for(let i=0;i<10;i++){
    console.log(i);
}
// while loop -in this loop we have not idea how many time to perform
let i=0
while(i<10){
    console.log(i);
    i++;
}
//  do while loop -this loop run atleast one time 
let j=0;
do{
    console.log(j);
    j++
}while(j<10);

// loop for array
for(let i=0;i<todos.length;i++){
    console.log(todos[i].text)
}
// //   for...of loop 
for(let todo of todos){
    console.log(todo.text)
}
// //  forEach loop 
todos.forEach(function(todo){
    console.log(todo.text)
});
// map- this the method which is used for returning array from array 
const t=todos.forEach(function(todo){
    return todo.text
});
console.log(t);
// filter-Returns array based on condition
const todo1 = todos.filter(function(todo) {
    // Return only todos where id is 1
    return todo.id === 1; 
  });
// conditinal statement-if,if-else ,if-else-if
// ternary operator- condition?true:false
// switch statement 
const color='green'

switch(color){
    case 'red':
        console.log('xyz is red');
        break;
        case 'blue':
            console.log('xyz is blue');
            break;
            case 'black':
                console.log('xyz is black');
                break;
                default:
                    console.log('xyz is not red,blue and black ');
                    break;
} 
// function 
// it is normal function using function key word
function addNums(a,b){
    return a+b;
}
console.log(addNums(2,3))
// arrow funtion
const addNums=(a,b)=>{
    return a+b;
}
console.log(addNums(2,3))
// oops in js
// Constructor Function
function Person(firstName, lastName, dob) {
    // Set object properties
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob); // Set to actual date object using Date constructor
    // this.getBirthYear = function(){
    //   return this.dob.getFullYear();
    // }
    // this.getFullName = function() {
    //   return `${this.firstName} ${this.lastName}`
    // }
  }
  
  // Get Birth Year
  Person.prototype.getBirthYear = function () {
    return this.dob.getFullYear();
  }
  
  // Get Full Name
  Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`
  }
  
  
  // Instantiate an object from the class
  const person11 = new Person('John', 'Doe', '7-8-80');
  const person2 = new Person('Steve', 'Smith', '8-2-90');
  
  console.log(person2);
  
  // console.log(person1.getBirthYear());
  // console.log(person1.getFullName());
  
  
  
  // Built in constructors
  const name1= new String('Kevin');
  console.log(typeof name1); // Shows 'Object'
  const num = new Number(5);
  console.log(typeof num); // Shows 'Object'
  
  
  // ES6 CLASSES
  class Person {
    constructor(firstName, lastName, dob) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.dob = new Date(dob);
    }
  
    // Get Birth Year
    getBirthYear() {
      return this.dob.getFullYear();
    }
  
    // Get Full Name
    getFullName() {
      return `${this.firstName} ${this.lastName}`
    }
  }
  
  const person1 = new Person('John', 'Doe', '7-8-80');
  console.log(person1.getBirthYear());
  


// DOM- 
// ELEMENT SELECTORS

// Single Element Selectors
console.log(document.getElementById('my-form'));
console.log(document.querySelector('.container'));
// Multiple Element Selectors
console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByTagName('li'));
console.log(document.getElementsByClassName('item'));

const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));

// MANIPULATING THE DOM
const ul = document.querySelector('.items');
// ul.remove();
// ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

const btn = document.querySelector('.btn');
// btn.style.background = 'red';


// EVENTS

// Mouse Event
btn.addEventListener('click', e => {
  e.preventDefault();
  console.log(e.target.className);
  document.getElementById('my-form').style.background = '#ccc';
  document.querySelector('body').classList.add('bg-dark');
  ul.lastElementChild.innerHTML = '<h1>Changed</h1>';
});

// Keyboard Event
// const nameInput = document.querySelector('#name');
// nameInput.addEventListener('input', e => {
//   document.querySelector('.container').append(nameInput.value);
// });


// USER FORM SCRIPT

// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    // Create new list item with user
    const li = document.createElement('li');

    // Add text node with input values
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

    // Add HTML
    // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

    // Append to ul
    userList.appendChild(li);

    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
  }
}


