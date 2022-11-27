const Employee = require('../lib/employee');

describe('getName', () => {
    test('should get name of employee', () => {
        const str = 'Bob';
        const e1 = new Employee(str);;
        expect(e1.getName()).toBe(str);
    });
});

describe('getId', () => {
    test('should get id of employee', () => {
        const str = '12345';
        const id = new Employee("name" , str);
        expect(id.getId()).toBe(str);
    });
});

describe('getEmail', () => {
    test('should get email of employee', () => {
        const str = 'hello@email.com';
        const email = new Employee("name" , "id", str);
        expect(email.getEmail()).toBe(str);
    });
});

describe('getRole', () => {
    test('should get role of employee', () => {
        const str = 'Employee';
        const role = new Employee("name" , "id", "email", str);
        expect(role.getRole()).toBe(str);
    });
});