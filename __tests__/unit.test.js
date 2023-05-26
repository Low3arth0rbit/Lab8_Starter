// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
//phone
test('111-111-1111 is true', () => {
    expect(functions.isPhoneNumber('111-111-1111')).toBe(true);
});

test('(111)111-1111 is true', () => {
    expect(functions.isPhoneNumber('(111)111-1111')).toBe(true);
});

test('11111-1111 is false', () => {
    expect(functions.isPhoneNumber('1111111111')).toBe(false);
});

test('1111-11-1111 is false', () => {
    expect(functions.isPhoneNumber('1111-11-1111')).toBe(false);
});

//email
test('email@email.com is true', () => {
    expect(functions.isEmail('email@email.com')).toBe(true);
});

test('notemail@email.org is true', () => {
    expect(functions.isEmail('notemail@email.org')).toBe(true);
});

test('email@@notemail.com is false', () => {
    expect(functions.isEmail('email@@notemail.com')).toBe(false);
});

test('notemail@notemail.org.com is false', () => {
    expect(functions.isEmail('notemail@notemail.org.com')).toBe(false);
});

//password
test('notsostrong is true', () => {
    expect(functions.isStrongPassword('notsostrong')).toBe(true);
});

test('Stronger_01 is true', () => {
    expect(functions.isStrongPassword('Stronger_01')).toBe(true);
});

test('thispasswordistoolong is false', () => {
    expect(functions.isStrongPassword('thispasswordistoolong')).toBe(false);
});

test('1234numbers is false', () => {
    expect(functions.isStrongPassword('1234numbers')).toBe(false);
});

//date
test('01/01/1111 is true', () => {
    expect(functions.isDate('01/01/1111')).toBe(true);
});

test('2/2/2222 is true', () => {
    expect(functions.isDate('2/2/2222')).toBe(true);
});

test('1/1/11 is false', () => {
    expect(functions.isDate('1/1/11')).toBe(false);
});

test('2023/01/01 is false', () => {
    expect(functions.isDate('2023/01/01')).toBe(false);
});

//hex
test('#FFFFFF is true', () => {
    expect(functions.isHexColor('#FFFFFF')).toBe(true);
});

test('#123 is true', () => {
    expect(functions.isHexColor('#123')).toBe(true);
});

test('#FFFFFFF is false', () => {
    expect(functions.isHexColor('#FFFFFFF')).toBe(false);
});

test('#1234 is false', () => {
    expect(functions.isHexColor('#1234')).toBe(false);
});