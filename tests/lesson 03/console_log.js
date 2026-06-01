let myName = "Giang";
let queQuan = "Phú Thọ"
console.log(`Toi là ${myName}, toi den tu ${queQuan}`);


//Object là một trong những kiểu dữ liệu quan trọng nhất trong JavaScript, dùng để lưu trữ dữ liệu dạng key-value
// Cú pháp: 
// const/let <variable_name> = {
//     key1: value1;
//     key2: value2;
    // Key 3: {
    //  address:'Ha Noi'
    // }
// }
// Ví dụ: 
const myInfo = {
    myName1: 'Giang',
    myBirthday: 04012003,
    myAddress: 'Phu Tho',
    'Tam tru': 'Ha Noi',
    isLovecoding: true,
    congTy: {
        diaChi: 'Yen Hoa'
    }
}
console.log(myInfo.myAddress);
console.log(myInfo.congTy.diaChi);
console.log(myInfo['myName1']);
console.log(myInfo['congTy']['diaChi']);

// Trong đó: 
// <Key>: giống quy tắc đặt tên biến
// <value>: có kiểu giống biến, hoặc là 1 object khác
            // - Chứa giá trị 
            // - Có thể là String, Number, Boolean hoặc là một object khác

// Array(mảng)
// Tạo mảng: 
// - Khai báo 
// - Sử dụng 
// Truy xuất mảng: 
// - Độ dài mảng: length 
// - Lấy phần tử theo index [0],[1],[2]

const arr1 = [1,3,5,7,9];
console.log(arr1[4]);
console.log(arr1.length);

//Function
// Function = hàm, là đoạn code được đặt tên và có thể tái sử dụng, thực hiện 1 nhiệm vụ hoặc 1 tính toán cụ thể. 
// khai báo: 
//     function <nameFunction> (){
//         //code
//     }

function tinhDienTich(doDai, doRong){
    const dienTich = doDai*doRong;
    // console.log(`Dien tich hinh chu nhat la (${doDai} x ${doRong}) = ${dienTich}`);
    return dienTich;
}
// tinhDienTich(5,10);
// tinhDienTich(10,20);
console.log(tinhDienTich(5,10));


//a%2===0 => số chẵn
//a%2!==0 => số lẻ

function kiemTraChanLe(number){
    if(number%2===0){
        return "chan";
    }else{
        return "le";
    }
}

console.log(kiemTraChanLe(19));

//array with for 
arr = [24, 11, 26, 39];
for (let i=0; i<arr.length; i++){
    console.log(arr[i]);
}