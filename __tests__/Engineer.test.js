const Engineer = require('../lib/engineer');

describe('getId', () => {
    test('should get github username of employee', () => {
        const str = 'github123';
        const github = new Engineer("name" , "id", "email", str);
        expect(github.getGitHub()).toBe(str);
    });
});