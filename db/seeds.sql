INSERT INTO department (name) 
VALUES ("Sales"),
("IT"),
("Finance"),
("Accounting"),
("Customer Service");


INSERT INTO role (title, salary, department_id) 
VALUES ("Sales Account Manager", 80000, 1),
("Cybersecurity Manager", 100000, 2 ),
("Financial Data Analyst", 110000, 3),
("CPA", 135000, 4), 
("Representative", 50000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES ("Sandy", "Brown", 1, 1),
("John", "Doe", 2, 2), 
("Harry", "Styles", 3, 3),
("Taylor", "Swift", 4, 4), 
("Vince", "Vaughn", 5, 5);

SELECT * FROM department;
SELECT * FROM role;

SELECT * FROM employee;