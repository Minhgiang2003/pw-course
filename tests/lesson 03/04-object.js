//Bai 1: 
let car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2021
}
console.log(car.year);


//Bai 2:
let person = {
    name: 'Giang',
    address: {
        street: 'Hoang Hoa Tham',
        city: "Ha Noi",
        country: 'Tu Liem'
    }
}
console.log(person.address.street);

//Bai 3: 
let student = {
    name: 'Giang',
    grades: {
        math: 10,
        english: 9
    }
}
console.log(student['grades']['math']);

//Bai 4: 
let setting = {
    volume: 10,
    brightness: 20,
}
setting.volume = 15;
console.log(setting);

//Bai 5: 
let bike = {
}
bike.color = "green";
console.log(bike);

//Bai 6: 
let employee = {
    name: 'Linh',
    age: 24
}
delete employee.age;
console.log(employee);

//Bai 7: 
const school = {
    classA: ['An','Bình','Châu'],
    classB: ['Đào','Hương','Giang']
}
console.log(school);
