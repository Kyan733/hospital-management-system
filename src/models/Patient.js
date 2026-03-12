// Patient Model

class Patient {
    constructor(name, age, medicalHistory) {
        this.name = name;
        this.age = age;
        this.medicalHistory = medicalHistory;
    }

    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}, Medical History: ${this.medicalHistory}`;
    }
}

module.exports = Patient;