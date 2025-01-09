//Phần 1: Câu lệnh điều kiện
function testNum(a) {
    let result;
    if (a > 0) {
        result = 'Số dương';
    } else {
        result = 'Không phải số dương';
    }
    return result;
}
console.log(testNum(-5));
//Phần 2:
function getFee(isMember) {
    return (isMember ? '$2.00' : '$10.00');
}
console.log("Phí thành viên là: ", getFee(true));
console.log("Phí thành viên là: ", getFee(false));
console.log("Phí thành viên là: ", getFee(null));
//Phần 3: Switch case
const expr = 'Cam';
switch (expr) {
    case 'Tao':
        console.log('Orange are $0.59 a pound.');
        break;
    case 'Cam':
    case 'Buoi':
        console.log('Cam và bưởi giá 20,000/kg');
        break;
    default:
        console.log(`Xin lỗi, chúng tôi không có giá ${expr}.`);
}
//Phần 4: Câu lệnh lặp for
for (let step = 0; step < 5; step++) {
    console.log("Đi bộ mỗi bước về phía đông, bước thứ: ", step + 1);
}
//Phần 5: Câu lệnh lặp do while
do {
    console.log("//Làm gì đó ở đây");
} while (false);
//Phần 6: Câu lệnh lặp for in
const dumpProps = (obj, objName) => {
    let result = '';
    for (const i in obj) {
        result += `${objName}.${i} = ${obj[i]}\n`;
    }
    console.log(result);
}
const myCar = { make: "Ford", model: "Mustang" };
dumpProps(myCar, "Car");
//Phần 7: Thao tác với mảng
const arr = [3, 5, 7, 23, 2, 2, 1];
console.log("Độ dài của mảng là", arr.length);
//Nối mảng
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
console.log("Mảng sau khi nối là: ", array3);
//Filter mảng theo điều kiện
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log("Các từ có độ dài lớn hơn 6 là: ", result);
//find
const array5 = [5, 12, 8, 130, 44];
const found1 = array5.find(element => element > 10);
const found2 = array5.find(element => element > 10000);
console.log("Phần tử đầu tiên lớn hơn 10 là: ", found1);
console.log("Không tìm thấy phần tử nào lớn hơn 10000: ", found2);
//map
const array6 = [1, 4, 9, 16];
const map1 = array6.map((x) => x * 2);
console.log("Mảng sau khi nhân 2 các phần tử là: ", map1);
//forEach
const array7 = ['a', 'b', 'c'];
array7.forEach(element => console.log(element));
//Optional chaining
const userList = null;
userList?.map?.(user => console.log("Chả có gì", user));
//Phần 8: Thao tác với object
const object1 = {
    a: 'somestring',
    b: 42
};
for (const [key, value] of Object.entries(object1)) {
    console.log(`${key}: ${value}`);
}
//Object.keys
const object2 = {
    a: 'somestring',
    b: 42,
    c: false
};
console.log("Các key của object2 là: ", Object.keys(object2));
//Object.values
console.log("Các value của object2 là: ", Object.values(object2));