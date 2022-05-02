const Engineer = require('../lib/Engineer');

test('returns an engineer object', () => {
  const engineer = new Engineer('Brian', 10, 'brian.lockerbie@gmail.com', 'brianlockerbie');

  expect(engineer.github).toEqual(expect.any(String));
});

test('gets engineer github value', () => {
  const engineer = new Engineer('Brian', 10, 'brian.lockerbie@gmail.com', 'brianlockerbie');

  expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('gets engineer role', () => {
  const engineer= new Engineer('Brian', 10, 'brian.lockerbie@gmail.com', 'brian.lockerbie');

  expect(engineer.getRole()).toEqual('Engineer')
});