// Patient Controller class
class PatientController {
    constructor() {
        this.patients = [];
    }

    createPatient(name, age, medicalHistory) {
        const patient = { id: this.patients.length + 1, name: name, age: age, medicalHistory: medicalHistory };
        this.patients.push(patient);
        return patient;
    }

    getPatient(id) {
        return this.patients.find(p => p.id === id);
    }

    getAllPatients() {
        return this.patients;
    }

    updatePatient(id, name, age, medicalHistory) {
        const patient = this.getPatient(id);
        if (patient) {
            patient.name = name;
            patient.age = age;
            patient.medicalHistory = medicalHistory;
        }
        return patient;
    }

    deletePatient(id) {
        this.patients = this.patients.filter(p => p.id !== id);
    }
}

module.exports = PatientController;