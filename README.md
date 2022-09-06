<h1 align="center">Team Profile Generator</h1> 


## Description
This application was built with Node.js. It is a command line application that takes information about employees & interns on a software engineering team. After answering multiple questions, this application will generate an HTML webpage that displays summaries for each employee/intern. 
  
  <br/>
  <br/>

## Technologies
  * JavaScript
  * Node.js
  * Jest
  * Inquirer
  <br/>

## Table of Contents
  
  1. [ Installation ](#installation)
  2. [ Usage ](#usage)
  3. [ Screenshot ](#screenshot)
  4. [ License ](#license)

## User Story
AS A manager<br>
I WANT to generate a webpage that displays my team's basic info<br>
SO THAT I have quick access to their emails and GitHub profiles

## Acceptance Criteria
GIVEN a command-line application that accepts user input<br>
WHEN I am prompted for my team members and their information<br>
THEN an HTML file is generated that displays a nicely formatted team roster based on user input<br>
WHEN I click on an email address in the HTML<br>
THEN my default email program opens and populates the TO field of the email with the address<br>
WHEN I click on the GitHub username<br>
THEN that GitHub profile opens in a new tab<br>
WHEN I start the application<br>
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number<br>
WHEN I enter the team manager’s name, employee ID, email address, and office number<br>
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team<br>
WHEN I select the engineer option<br>
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu<br>
WHEN I select the intern option<br>
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu<br>
WHEN I decide to finish building my team<br>
THEN I exit the application, and the HTML is generated
  
  

<a name="installation"></a>
## Installation
First clone this repository & type "npm i" in the terimanl. From there you will install Node.js to your computer. Once installed, type "node index.js" in the terminal. Answer all of the prompts to generate a index.html file. The new index.html file will be located in a folder called "dist" in the root directory.
  

<a name="usage"></a>

## Usage
View video walkthrough on how to use this application by clicking [here](https://drive.google.com/file/d/1HSfNE8VwWTKqD7WeNsrs2kksJ2Gye4R3/view)


<a name="screenshot"></a>

## Screenshot
<img src="team-profile-generator-example.png">

  
<a name="license"></a>

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)<br>
This project is licensed under the MIT License - see the [license info](https://opensource.org/licenses/MIT) for more details.
  
