//Bai 1: 
function multiply(a, b) {
    const result = a * b;
    console.log(`Result: ${a} * ${b} = ${result}`);
}
multiply(5, 10);
multiply(10, 20);

//Bai 2: 
// function findMin(a, b, c) {
//     if (a <= b && a <= c) {
//         console.log(`Gia tri nho nhat la: ${a}`);
//     } else if (b <= a && b <= c) {
//         console.log(`Gia tri nho nhat la: ${b}`);
//     } else {
//         console.log(`Gia tri nho nhat la: ${c}`);
//     }
// }

// findMin(1, 2, 4);    
// findMin(20, 10, 5);  

function findMin(a, b, c) {
    return Math.min(a, b, c);
}

console.log(findMin(1, 2, 4));
console.log(findMin(20, 10, 5));

//Bai 3:
function getTopStudents(students, threshold) {
    let result = [];
    for (let i = 0; i < students.length; i++) {
        if (students[i].score >= threshold) {
            result.push(students[i].name);
        }
    }
    return result;
}
const student = [
    { name: 'An', score: 8 },
    { name: 'Bình', score: 5 },
    { name: 'Châu', score: 9 },
    { name: 'Dũng', score: 6 },
    { name: 'Em', score: 10 }
];
console.log(getTopStudents(student, 10));

//Bai 4: 
function calculateInterest(principal, rate, years) {
    const total = principal + ((principal * rate * years) / 100);
    console.log(`Tong tien goc va lai la: ${principal}+(${principal}*${rate}*${years})/100) = ${total}`);
}
calculateInterest(10000, 5, 10);

// Khác nhau giữa return và console.log
// Console.log
// console.log(total) — chỉ in ra màn hình, không dùng được ở nơi khác
// function calculateInterest(principal, rate, years) {
//     const total = principal + (principal * rate * years) / 100;
//     console.log(total); // chỉ in ra: 15000
// }
// const ketQua = calculateInterest(10000, 5, 10);
// console.log(ketQua); // undefined ❌ vì hàm không trả về gì

// Return
// return total — trả về giá trị để dùng ở nơi khác
// function calculateInterest(principal, rate, years) {
//     const total = principal + (principal * rate * years) / 100;
//     return total; // trả về: 15000
// }

// const ketQua = calculateInterest(10000, 5, 10);
// console.log(ketQua); // 15000 ✅ dùng được giá trị
