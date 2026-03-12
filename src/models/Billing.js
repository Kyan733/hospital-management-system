// Billing model for hospital management system

class Billing {
    constructor(id, patientId, amount, date) {
        this.id = id;
        this.patientId = patientId;
        this.amount = amount;
        this.date = date;
    }

    // Example method: calculate tax on billing amount
    calculateTax() {
        const taxRate = 0.15; // Example tax rate
        return this.amount * taxRate;
    }
}

module.exports = Billing;