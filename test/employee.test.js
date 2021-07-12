

const { test, expect } = require('@jest/globals');
const employee = require('../classes/employee');

describe('employee', () => {
    it('should create an employee based off of inquierer questions', () =>{
        expect(new employee('jafet', 1, 'jafet@gmail.com', 'manager')).toBeDefined();
    });
    test('can set new name'), () => {
        let name = 'jafet';
        let e = new employee(name);
        expect(e.name).toBe('jafet');
    }
});