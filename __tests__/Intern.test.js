const Intern = require('../lib/intern');

describe('getSchool', () => {
    test('should get school of employee', () => {
        const str = 'UT';
        const school = new Intern("name" , "id", "email", str);
        expect(school.getSchool()).toBe(str);
    });
});