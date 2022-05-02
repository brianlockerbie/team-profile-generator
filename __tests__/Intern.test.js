const Intern = require('../lib/Intern');

test('returns a intern school', () => {
  const intern = new Intern('Brian', 10, 'brian.lockerbie@gmail.com', 'UOFT');

  expect(intern.school).toEqual(expect.any(String));
});

test('gets intern school', () => {
  const intern = new Intern('Brian', 10, 'brian.lockerbie@gmail.com', 'UOFT');

  expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('returns intern role', () => {
  const intern = new Intern('Brian', 10, 'brian.lockerbie@gmail.com', 'UOFT');

  expect(intern.getRole()).toEqual('Intern');
});