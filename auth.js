// Thử nghiệm tạo nhánh mới và sửa code
function login(username, password) {
    // Xử lý ngoại lệ: Tài khoản bị khóa
    if (username === 'locked_user') {
        throw new Error('Tài khoản bị khóa');
    }
    
    // Xử lý ngoại lệ: Username hoặc password rỗng
    if (!username || !password) {
        return false;
    }
    
    // Luồng chính (Happy path): Đăng nhập đúng
    if (username === 'admin' && password === '123') {
        return true;
    }
    
    // Các trường hợp còn lại (sai mật khẩu, ký tự đặc biệt...)
    return false;
}

// Xuất hàm để file test có thể gọi được
module.exports = login;
