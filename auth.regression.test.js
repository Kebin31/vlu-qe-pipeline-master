const login = require('./auth');

describe('Regression Test - Các ngoại lệ khi đăng nhập', () => {
    
    test('Đăng nhập thất bại khi sai mật khẩu', () => {
        expect(login('admin', '123456')).toBe(false);
    });

    test('Đăng nhập thất bại khi username rỗng', () => {
        expect(login('', '123')).toBe(false);
    });
    
    test('Đăng nhập thất bại khi password rỗng', () => {
        expect(login('admin', '')).toBe(false);
    });

    test('Đăng nhập thất bại khi mật khẩu chứa ký tự đặc biệt', () => {
        expect(login('admin', '123@#$')).toBe(false);
    });

    test('Báo lỗi ngoại lệ (Exception) khi đăng nhập bằng tài khoản bị khóa', () => {
        expect(() => {
            login('locked_user', '123');
        }).toThrow('Tài khoản bị khóa');
    });
    
});