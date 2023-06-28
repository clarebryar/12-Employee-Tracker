const inquirer = require('inquirer');
  
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
console.log(res)
    })
  }  

  startPrompts();