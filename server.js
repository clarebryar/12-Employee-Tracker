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
    break;
    case "Add_a_department": 
    newADepartment();
    break;
    case "Add_a_role":
        newRole();
    break;

}
    })
  }  

  function viewDepartments() {
    db.departments()
    .then(([data]) => {
        console.table(data);
    })
    .then(() => startPrompts()) ;

  }

  function viewRoles() {
    db.roles()
    .then(([data]) => {
        console.table(data);
    })
    .then(() => startPrompts()) ;
  }

  function viewEmployees() {
    db.employees()
    .then(([data]) => {
        console.table(data);
    })
    .then(() => startPrompts()) ;
  }

function newADepartment () {    
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "New Department name",

        }
    ]) 
   
    .then(res => {
        db.addDept(res)
        console.table(res)
    } 
    )
    .then(() => startPrompts()) ;
}

function newRole () {
    db.departments() 
    .then (([data]) => {
        const departments = data.map(({id, name}) => ({
            name: name,
            value: id,
        }))
    

    inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "New Role Title",

        },
        {
            type: "input",
            name: "salary",
            message: "New Role Salary",

        },
        {
            type: "list",
            name: "department_id",
            message: "New Role's Department",
            choices: departments

        }
    ]) 
    .then(res => {
        db.addRole(res)
        console.table(res)
    })
    .then(() => startPrompts()) ;
});
}
  startPrompts();