//Bai 1
let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum += i; //sum = sum + i
}
console.log(sum)

//Bai 2: 
for (let i = 2; i <= 9; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}

//Bai 3: 
let oddNumbers = [];
for (let i = 1; i <= 99; i += 2) {
    oddNumbers.push(i); //push i vào mảng
}
console.log(oddNumbers);

//Bai 4: 
let email = [];
for (let i = 1; i <= 10; i++) {
    email.push(`user${i}@example.com`); //gán email vào mảng
}
console.log(email);

//Bai 5:
const revenue = [
    { month: 1, total: 500 },
    { month: 2, total: 100 },
    { month: 3, total: 300 },
    { month: 4, total: 450 },
    { month: 5, total: 200 },
    { month: 6, total: 600 },
    { month: 7, total: 350 },
    { month: 8, total: 400 },
    { month: 9, total: 250 },
    { month: 10, total: 700 },
    { month: 11, total: 150 },
    { month: 12, total: 800 }
];

let sum = 0;
for (let i = 0; i < revenue.length; i++) {
    sum += revenue[i].total; //revenue[i] → lấy từng object trong mảng, revenue[i].total → lấy giá trị total của object đó, sum += revenue[i].total → cộng dồn vào tổng
}

console.log("Tổng doanh thu: " + sum);