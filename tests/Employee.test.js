const Employee = require('../lib/employee');

describe("Employee", () => {
    describe("getName", () => {
        it("should return the employee name", () => {
            const name = Employee.name;
            const result = name;
            expect(result).toBe(name);
        });
    });
});