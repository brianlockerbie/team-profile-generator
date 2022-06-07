const generateHTML = require('./src/generateHTML');
const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 

const teamArray = [];

const addManager = () => {
  return inquirer.prompt ([
    {
      type: 'input',
      name: 'name',
      message: 'Enter the team manager name.',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter the name of the manager.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: 'Please enter the managers ID.',
      validate: nameInput => {
        if (isNaN(nameInput)) {
          console.log("Please enter the manger ID.")
          return false;
        } else {
          return true;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: "Please enter the manager's email.",
      validate: email => {
        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
        if (valid) {
          return true;
        } else {
          console.log ('Please enter an email.')
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: "Enter the managers office number.",
      validate: nameInput => {
        if (isNaN(nameInput)) {
          console.log ('Please enter an office number.')
          return false;
        } else {
          return true;
        }
      }
    }

  ])
  .then(managerInput => {
    const { name, id, email, officeNumber } = managerInput;
    const manager = new Manager (name, id, email, officeNumber);

    teamArray.push(manager);
    console.log(manager);
  })
};

const addEmployee = () => {
  console.log(`
  ====================
  Adding an employee to the team
  ====================
  `);

  return inquirer.prompt ([
    {
      type:'list',
      name: 'role',
      message: 'Please select employee role',
      choices: ['Engineer', 'Intern']
    },
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of the employee?',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Type in an employee name.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: 'Please enter an employee ID.',
      validate: nameInput => {
        if  (isNaN(nameInput)) {
          console.log ('Please enter an employee ID!')
          return false; 
        } else {
          return true;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'Type in an employee email.',
      validate: email => {
        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
        if (valid) {
          return true;
        } else {
          console.log ('Please enter an email.')
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter employee GitHub username.',
      when: (input) => input.role === 'Engineer',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter employee GitHub username.')
        }
      }
    },
    {
      type: 'input',
      name: 'school',
      message: 'Enter the intern school',
      when: (input) => input.role === 'Intern',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Type in the intern school.')
        }
      }
    },
    {
      type: 'confirm',
      name: 'confirmAddEmployee',
      message: 'Do you want to add more team members?',
      default: false
    }
  ])
  .then(employeeData => {
    let { name, id, email, role, github, school, confirmAddEmployee } = employeeData;
    let employee;

    if (role === 'Engineer') {
      employee = new Engineer (name, id, email, github);

      console.log(employee);
    } else if (role === 'Intern') {
      employee = new Intern (name, id, email, school);

      console.log(employee);
    }

    teamArray.push(employee);

    if (confirmAddEmployee) {
      return addEmployee(teamArray);
    } else {
      return teamArray;
    }
  })
};

const writeFile = data => {
  fs.writeFile('./dist/index.html', data, err => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log('Congradulations! Your team has successfully been created!')
    }
  })
};

addManager()
  .then(addEmployee)
  .then(teamArray => {
    return generateHTML(teamArray);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
    console.log(err);
  });