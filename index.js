const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 

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

    console.log(manager);
  })
};