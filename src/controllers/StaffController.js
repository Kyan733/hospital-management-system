// Staff Controller class
class StaffController {
    constructor() {
        this.staffMembers = [];
        this.nextId = 1;
    }

    createStaff(name, position, department, salary) {
        const staff = {
            id: this.nextId++,
            name: name,
            position: position,
            department: department,
            salary: salary,
            dateOfJoining: new Date()
        };
        this.staffMembers.push(staff);
        return staff;
    }

    getStaff(id) {
        return this.staffMembers.find(s => s.id === id);
    }

    getAllStaff() {
        return this.staffMembers;
    }

    updateStaff(id, name, position, department, salary) {
        const staff = this.getStaff(id);
        if (staff) {
            staff.name = name;
            staff.position = position;
            staff.department = department;
            staff.salary = salary;
        }
        return staff;
    }

    deleteStaff(id) {
        this.staffMembers = this.staffMembers.filter(s => s.id !== id);
    }

    getStaffByDepartment(department) {
        return this.staffMembers.filter(s => s.department === department);
    }
}

module.exports = StaffController;