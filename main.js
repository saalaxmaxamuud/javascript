    let car={
     brand:'toyota',
    model:'corolla',
    year:2020
   };
 console.log(car) 
//  create constructor
 function product(productName,price,instock){
    this.productName=productName,
    this.price=price,
    this.instock=instock
 }

 product1=new product('laptop',200,true)
 console.log(product1)
  product2=new product('phone',500,false)
 console.log(product2)
  product3=new product('tv',1000,true)
 console.log(product3)
//  creating class
class bankAccount{
    constructor(AccountNumber,ownerName,balance){
        this.AccountNumber=AccountNumber;
        this.ownerName=ownerName;
        this.balance=balance;
    }
}
bankAccount1=new bankAccount('ca1234','saalax mohamud mohamed',300)
console.log(bankAccount1)
bankAccount2=new bankAccount('ca555','caadil nor hilowle',500)
console.log(bankAccount2)
//creating object using object literal notation
let Student={
    name:"amina",
    age:20,
    course:"Data science"
} 
// console.log(Student);
//creating object using constructor function
function Employee (name, salary, role){
    this.name=name;
    this.salary=salary;
    this.role=role;
}
let student = {
    name: "maryam",
    grade: "A",
    school: "afbaro acdemy"
};

student.age = 18;
student["favorite-subject"] = "Physics";

console.log(student);

let item = {
    itemName: "Milk",
    price: 2,
    category: "Food"
};

item.quantity = 30;
item["discount-percentage"] = 10;

console.log(item);
let menu = {
    burger: 5,
    pizza: 8,
    juice: 3
};

for (let item in menu) {
    console.log(item, ":", menu[item]);
}
let city = {
    population: 500000,
    mayor: "Hassan",
    area: "200 sq km"
};

for (let key in city) {
    console.log(key, ":", city[key]);
}
let schedule = {
    math: "8:00 AM",
    english: "10:00 AM",
    science: "1:00 PM"
};

for (let subject in schedule) {
    console.log(subject, ":", schedule[subject]);
}


let movie = {
    title: "Inception",
    duration: "2h 30m",
    rating: 9
};

let jsonString = JSON.stringify(movie);
console.log(jsonString);
let jsonData = '{"name":"Sara","age":25,"country":"Kenya"}';

let obj = JSON.parse(jsonData);

console.log(obj.name);
console.log(obj.age);
console.log(obj.country);
let weather = {
    temperature: 32,
    humidity: "70%",
    condition: "Sunny"
};

let json = JSON.stringify(weather);  
let finalObj = JSON.parse(json);      

console.log(finalObj);



// emp1=new Employee("ahmed", 1200, "manager")
// console.log(emp1)
// emp2=new Employee("hassan", 1000, "hr")
// console.log(emp2)
// emp3=new Employee("ali", 800, "waiter")
// console.log(emp3)
// emp4=new Employee("hamdi", 1000, "receptionst")
// console.log(emp4)

//creating object using class 
// class Teacher{
//     constructor(name, subject , experience){
//         this.name=name;
//         this.subject=subject;
//         this.experience=experience;
//     }
// }

// teacher1= new Teacher("roble",' python', 12);
// teacher1.name="azam";
// teacher1.level="Phd";
// console.log(teacher1)
// teacher2= new Teacher("iqra",' java', 8);
// teacher2["experience"]=5
// console.log(teacher2)

class BankAccount{
    constructor(accNumber, ownerName, balance){
        this.accNumber=accNumber;
        this.ownerName=ownerName;
        this.balance=balance;
        this.withdrow=function (){
            let amount=prompt("enter the amount you want:");
            alert( (amount<this.balance)? this.balance-=amount: " haraagaaga kuguma filna ")
        }
        this.deposit=function (){
            let amount=parseInt(prompt("enter amount to deposit:"))
            this.balance+=amount
        }
    }
}

acc1=new BankAccount("AC2001", "Muse", 500);
alert(acc1.balance);
acc1.deposit();
alert(acc1.balance);
acc1.withdrow()
alert(acc1.balance)


