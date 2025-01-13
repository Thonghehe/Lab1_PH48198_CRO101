//Bài 1
const class1 = [
    { mssv: 'PS0000', name: 'Nguyen Van A', avgPoint: 8.9, avgTraningPoint: 7, status: 'pass' },
    { mssv: 'PS0001', name: 'Nguyen Van B', avgPoint: 4.9, avgTraningPoint: 10, status: 'pass' }
];

const class2 = [
    { mssv: 'PS0002', name: 'Nguyen Van C', avgPoint: 4.9, avgTraningPoint: 10, status: 'failed' },
    { mssv: 'PS0003', name: 'Nguyen Van D', avgPoint: 10, avgTraningPoint: 10, status: 'pass' },
    { mssv: 'PS0004', name: 'Nguyen Van E', avgPoint: 10, avgTraningPoint: 2, status: 'pass' }
];

// Gộp danh sách sinh viên từ các lớp
const allStudents = [...class1, ...class2];

// Lọc ra các sinh viên có trạng thái "pass"
const passedStudents = allStudents.filter(student => student.status === 'pass');

// Sắp xếp sinh viên theo điểm trung bình từ cao xuống thấp
const sortedByAvgPoint = [...passedStudents].sort((a, b) => b.avgPoint - a.avgPoint);

// Sắp xếp sinh viên theo điểm rèn luyện từ cao xuống thấp
const sortedByTrainingPoint = [...passedStudents].sort((a, b) => b.avgTraningPoint - a.avgTraningPoint);

// Lấy danh sách top 100 sinh viên có điểm trung bình cao nhất
const top100ByAvgPoint = sortedByAvgPoint.slice(0, 100);

// Lấy danh sách top 10 sinh viên có điểm rèn luyện cao nhất
const top10ByTrainingPoint = sortedByTrainingPoint.slice(0, 10);

// Lấy sinh viên có điểm trung bình cao nhất
const ongVang = sortedByAvgPoint[0];
console.log('Danh sách sinh viên có điểm số từ cao xuống thấp:');
top100ByAvgPoint.forEach((student, index) => {
    console.log(`${index + 1}. ${student.name} - Điểm trung bình: ${student.avgPoint}`);
});

console.log('\nDanh sách sinh viên có điểm rèn luyện từ cao xuống thấp:');
top10ByTrainingPoint.forEach((student, index) => {
    console.log(`${index + 1}. ${student.name} - Điểm rèn luyện: ${student.avgTraningPoint}`);
});

console.log('\nThông tin của Ong vàng:');
console.log(`Tên: ${ongVang.name}`);
console.log(`MSSV: ${ongVang.mssv}`);
console.log(`Điểm trung bình: ${ongVang.avgPoint}`);
console.log(`Điểm rèn luyện: ${ongVang.avgTraningPoint}`);


//Bài 2
const oldData = [
    { code: 'ab', name: 'Son môi' },
    { code: 'ac', name: 'Sữa rửa mặt' },
    { code: null, name: null },
    { code: null, name: '' }
];
const convertArrayToObject = (array) => {
    // Chuyển đổi mảng thành object
    const obj = Object.fromEntries(array.map(item => [item.code, item]));

    // Loại bỏ các dữ liệu không đạt yêu cầu
    Object.keys(obj).forEach(key => {
        const product = obj[key];
        if (!product.code || !product.name) {
            delete obj[key];
        }
    });

    return obj;
};
const newData = convertArrayToObject(oldData);
console.log('Dữ liệu sản phẩm đã được tối ưu hóa:', newData);

//Bài 3
const firstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('foo');
    }, 2000);
});

const secondPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Error: some bug');
    }, 2000);
});

const getList = async () => {
    await fetch('https://jsonplaceholder.typicode.com/posts');
};

//Sử dụng Promise.all
Promise.all([firstPromise, secondPromise, getList()])
    .then(results => {
        console.log('Tất cả promise đã hoàn thành:', results);
    })
    .catch(error => {
        console.error('Một promise đã thất bại:', error);
    });

//Sử dụng Promise.allSettled
Promise.allSettled([firstPromise, secondPromise, getList()])
    .then(results => {
        results.forEach((result, index) => {
            if (result.status === 'fulfilled') {
                console.log(`Promise ${index + 1} hoàn thành với giá trị:`, result.value);
            } else {
                console.error(`Promise ${index + 1} thất bại với lý do:`, result.reason);
            }
        });
    })
    .finally(() => {
        console.log('Tất cả promise đã được xử lý.');
    });