const Manager = require('../lib/Manager');

test('returns a manager office number', () => {
  const manager = new Manager('Brian', 10, 'brian.lockerbie@gmail.com', 45);

  expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets role of manager', () => {
  const manager = new Manager('Brian', 10, 'brian.lockerbie@gmail.com');

  expect(manager.getRole()).toEqual('Manager');
});