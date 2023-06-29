const inquirer = require('inquirer');
const db = require('./db');
  
const choices =  [
    {
        type: "list", 
        name: "choice", 
        message: "What would you like to do?", 
        choices: [
            {
                name: "View all departments", 
                value: "view_all_departments",  
            },
            {
                name: "view all roles", 
                value: "view_all_roles",  
            },
            {
                name: "view all employees", 
                value: "view_all_employees",  
            },
            {
                name: "Add a department", 
                value: "Add_a_department",  
                    
            },
            {
                name: "Add a role", 
                value: "Add_a_role",  
            },
            {
                name: "Add an employee", 
                value: "Add_an_employee",  
            },
            {
                name: "Update an employee role", 
                value: "Update_an_employee_role",  
            }
        
        ] 
         
    }
]
  function startPrompts () {
   return inquirer.prompt (choices)
    .then(res => {
console.log(res);

switch (res.choice) { 
    case "view_all_departments":  
    viewDepartments();
    break;
    case "view_all_roles":
    viewRoles()
    break;
    case "view_all_employees":
    viewEmployees();
    case "Add_a_department": 
    addADepartment();
}
    })
  }  

  function viewDepartments() {
    db.departments()
    .then(([data]) => {
        console.table(data);
    });

  }

  function viewRoles() {
    db.roles()
    .then(([data]) => {
        console.table(data);
    });
  }

  function viewEmployees() {
    db.employees()
    .then(([data]) => {
        console.table(data);
    });
  }

function addADepartment () {    
    inquirer.prompt() ([
        {
            name: "name",
            message: "New Department name",
            type: "input"

        }
    ]) 
    db.addDept(res)
    .then(([res]) => {
        console.table(res)
    }
)
}
  startPrompts();