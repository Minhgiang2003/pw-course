//in ra màn hình
console.log('Hello world');

//var và let đều dùng để khai báo biến, let được dùng phổ biến hơn và an toàn hơn, dùng let khi muốn thay đổi giá trị
var centerName = "Better by Academy";
let isLovePlaywright = true;

console.log(centerName);
console.log(isLovePlaywright);

//dùng hằng có tính nhất quán, cố định hơn, thường sẽ sử dụng hằng thay vì let hoặc var
const slogan = "Học kỹ - hiểu bản chất - mentor tận tình";

console.log(slogan);

//kiểu dữ liệu int,string,boolean...
const age = 23;
console.log(age);
const myTemplate = `My age is: ${age}`;
console.log(myTemplate);


//Kết hợp nhiều điều kiện: Nested
let hour = 8;
if (hour >= 6) {        // Nếu giờ >= 6 thì mới vào trong
    if (hour >= 11) {   // Nếu giờ >= 11 (tức 11h trở đi)
        console.log('Good morning');    // In "Good morning"
    } else {            // Nếu giờ < 11 (tức 6h đến 10h)
        console.log('Good afternoon'); // In "Good afternoon"
    }
}
// Nếu hour < 6 → không in gì

//toán tử một ngôi 
let a = 10;
b = ++a;
console.log(a); //tăng a lên 11 rồi mới trả về giá trị cho b => b = 11
console.log(b);


let c = 11;
d = c++;
console.log(c); //trả về giá trị cho d trước = 11, sau đó mới tăng giá trị c = 12
console.log(d);

// === không ép về 1 kiểu dữ liệu, == ép về 1 kiểu dữ liệu rồi mới so sánh
// const c = '50';
// const d = 50; 
// console.log(c===d);
// console.log(c==d);

//toán tử so sánh
// const a = 10;
// const b = 15; 
//Câu điều kiện
if (a > b || a == b) {
    console.log('A > B');
} else {
    console.log('A<B');
}

//toán tử cộng trừ nhân chia 
const firstNumber = 5;
const secondNumber = 10;
const result = firstNumber + secondNumber;
const result1 = firstNumber - secondNumber;
const result2 = firstNumber * secondNumber;
const result3 = firstNumber / secondNumber;

console.log(result);
console.log(result1);
console.log(result2);
console.log(result3);


//vòng lặp, cú pháp vòng lặp for (i)
//for (<điều kiện khởi tạo>; <điều kiện lặp>; <cập nhật>){code}
//trong đó: 
// Điều kiện khởi tạo: chạy 1 lần duy nhất, khi vòng lặp bắt đầu 
// Điều kiện lặp: nếu đúng thì chạy tiếp, sai thì dừng 
// Cập nhật: chạy vào mỗi cuối vòng lặp, để thay đổi giá trị của biến đếm
for (let i = 0; i < 10; i++) {
    console.log('Hello, my name is Minh Giang');
    console.log(i);
}