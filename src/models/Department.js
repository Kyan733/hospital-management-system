// Department model
class Department {
    constructor(name, budget) {
        this.name = name;
        this.budget = budget;
        this.employees = [];
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    getEmployees() {
        return this.employees;
    }
}

module.exports = Department;