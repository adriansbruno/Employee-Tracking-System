const inquirer = require('inquirer');
const mysql = require('mysql');
require('console.table');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'employee_db',
  });
  
  connection.connect((err) => {
    if (err) throw err;
    console.log('Connected as id ' + connection.threadId);
  });

  connection.connect((err) => {
    if (err) throw err;
    console.log('Connected as id ' + connection.threadId);
});

const options = [
    {
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: [
        'View all departments',
        'View all roles',
        'View all employees',
        'Add a department',
        'Add a role',
        'Add an employee',
        'Update an employee role',
        'Exit',
      ],
    },
  ];