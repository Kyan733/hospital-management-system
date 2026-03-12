'use strict';

class Staff {
    constructor(name, role) {
        this.name = name;
        this.role = role;
    }

    getName() {
        return this.name;
    }

    getRole() {
        return this.role;
    }

    setRole(newRole) {
        this.role = newRole;
    }
}

module.exports = Staff;