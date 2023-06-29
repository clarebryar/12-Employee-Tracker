const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  // Your username
  user: "root",
  // Your password
  password: "coldbrew",
  database: "employees_db"
});

connection.connect(function (err) {
  if (err) throw err;
});

class SqlQueries {
    constructor(connection) {
    this.connection = connection;
    
    }
departments () {
    return this.connection.promise().query(
        "SELECT department.id, department.name FROM department;");
}

roles () {
    return this.connection.promise().query(
        "SELECT role.id, role.title, role.salary, role.department_id FROM role");
}
employees () {
    return this.connection.promise().query(
        "SELECT employee.id, employee.first_name, employee.last_name, employee.role_id FROM employee");
}

addDepartment() {
  
}

}

 

module.exports = new SqlQueries(connection);