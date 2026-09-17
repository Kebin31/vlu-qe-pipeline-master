const login = require('./auth');

describe('Smoke Test - Đăng nhập', () => {
    test('Đăng nhập thành công với tài khoản admin và mật khẩu 123', () => {
        expect(login('admin', '123')).toBe(true);
    });
});