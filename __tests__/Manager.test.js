const Manager = require('../lib/manager');

describe('getOfficeNumber', () => {
    test('should get office number of employee', () => {
        const str = '123-456-7890';
        const officeNumber = new Manager("name" , "id", "email", str);
        expect(officeNumber.getOfficeNumber()).toBe(str);
    });
});