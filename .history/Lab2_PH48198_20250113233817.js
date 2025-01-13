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

console.log('Danh sách sinh viên có điểm số từ cao xuống thấp:', top100ByAvgPoint);
console.log('Danh sách sinh viên có điểm rèn luyện từ cao xuống thấp:', top10ByTrainingPoint);
console.log('Thông tin của Ong vàng:', ongVang);