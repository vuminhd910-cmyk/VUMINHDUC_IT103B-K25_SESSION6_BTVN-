let accountAdmin = "admin";
let passwordAdmin = "12345";
let count = 0;
let loginSuccess = false; // Biến đánh dấu đăng nhập

while (count < 3) {
    let username = prompt("Mời bạn nhập tài khoản:");
    let password = prompt("Mời bạn nhập mật khẩu:");

    if (username === accountAdmin && password === passwordAdmin) {
        alert("Đăng nhập thành công!");
        loginSuccess = true; // Đánh dấu thành công
        break; 
    } else {
        count++;
        let remaining = 3 - count;
        if (username !== accountAdmin && password !== accountAdmin) {
            alert(`Sai cả tài khoản và mật khẩu! Bạn còn ${remaining} lần thử.`);
        } else if (username !== accountAdmin) {
            alert(`Sai tài khoản! Bạn còn ${remaining} lần thử.`);
        } else {
            alert(`Sai mật khẩu! Bạn còn ${remaining} lần thử.`);
        }
    }
}

if (count === 3) {
    alert("Bạn đã sai quá 3 lần");
} 

// CHỈ CHẠY KHI ĐĂNG NHẬP THÀNH CÔNG
if (loginSuccess) {
    let libraries = ["Toán", "Văn", "Anh"]; // Khai báo ở đây để dùng được trong do-while
    let choice;

    do {
        choice = +prompt(`
            === QUẢN LÝ THƯ VIỆN ===
            1. Nhập thêm lô sách mới
            2. Hiển thị danh sách sách
            3. Tìm kiếm sách
            4. Cập nhật tên sách
            5. Đảo ngược thứ tự kệ sách
            6. Nhập kho từ nguồn khác
            7. Thoát chương trình
            Mời bạn chọn chức năng (1-7):
        `);

        switch (choice) {
            case 1:
                let newBooks = prompt("Nhập tên sách mới (cách nhau bằng dấu phẩy):");
                if (newBooks) {
                    let bookArray = newBooks.split(",");
                    // Chống trùng lặp dùng Set như đã học
                    let combined = libraries.concat(bookArray.map(b => b.trim()));
                    libraries = [...new Set(combined)];
                    alert("Thêm sách thành công!");
                }
                break;
                case 2:
    if (libraries.length === 0) {
        alert("Thư viện hiện đang trống!");
    } else {
        let message = "=== DANH SÁCH SÁCH ===\n";
        for (let i = 0; i < libraries.length; i++) {
            message += `Sách thứ ${i + 1}: ${libraries[i]}\n`;
        }
        alert(message); // Hiển thị tất cả sách trong 1 hộp thoại
    }
    break; 
            
            case 3:
                let bookSearch = prompt("Nhập tên sách cần tìm:");
                let indexSearch = libraries.indexOf(bookSearch);
                if (indexSearch !== -1) {
                    alert(`Tìm thấy sách "${libraries[indexSearch]}" tại vị trí ${indexSearch + 1}`);
                } else {
                    alert("Không tìm thấy sách.");
                }
                break;
            case 4:
                let bookUpdate = prompt("Nhập tên sách cần cập nhật:");
                let indexUpdate = libraries.indexOf(bookUpdate);
                if (indexUpdate !== -1) {
                    libraries[indexUpdate] = prompt("Nhập tên sách mới:");
                    alert("Cập nhật thành công!");
                } else {
                    alert("Không tìm thấy sách.");
                }
                break;
            case 5:
                libraries.reverse();
                console.log("Danh sách sau khi đảo ngược");
            for(let i = 0;i< libraries.length;i++){
                console.log(`Sách thứ ${i + 1} : ${libraries[i]}`);
            }
            alert("Đảo ngược kệ sách thành công");
            break;
                
            case 6:
                let khoMoiInput = prompt("Nhập sách kho mới (dấu phẩy):");
                if (khoMoiInput) {
                    let khoMoi = khoMoiInput.split(",").map(item => item.trim());
                    libraries = [...new Set(libraries.concat(khoMoi))];
                    alert("Đã nhập kho mới!");
                }
                break;
            case 7:
                alert("Hẹn gặp lại!");
                break;
            default:
                alert("Lựa chọn không hợp lệ.");
                break;
        }
    } while (choice !== 7);
} 