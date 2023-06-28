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

}

 

module.exports = new SqlQueries(connection);