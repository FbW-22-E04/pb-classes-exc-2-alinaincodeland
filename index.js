
class Employee {
    constructor (id, firstName, lastName, taxId, salary) {
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.taxId = taxId
        this.salary = salary 
    }

    generatePaySlip () {

        console.log (`Employee ID: ${this.id}`);
        console.log (`Name: ${this.firstName} ${this.lastName}`);
        console.log (`Tax ID: ${this.taxId}`);
        console.log (`Employee  ID: ${this.id}`);
        console.log (`Pay per month: ${(this.salary / 12).toFixed(2)}`);
    }


}

const olof = new Employee(1, "Olof", "Draper", 1234, 80000)
const betty = new Employee(2, "Betty", "Parker", 1239, 90000)
console.log(olof)
console.log('----------------------');
console.log(betty);
console.log('----------------------');

olof.generatePaySlip();
console.log('----------------------');
betty.generatePaySlip();


console.log("-----------------------------------------------------------");

// 2. Manager Class 

class Manager extends Employee {
    constructor (id, firstName, lastName, taxId, salary) {
        super(id, firstName, lastName, taxId, salary); // invokes the fields of Employee class
        // super should always be first in the constructor function; 
        this.managedEmployees = [];
    }

    addManagedEmployee(name) {
        this.managedEmployees.push(name);

    }

    removeManagedEmployee(name) {
        const idx = this.managedEmployees.findIndex(item => name.id ===
            item.id ) // iterates through each item of the array and identifies the one where name === item
        this.managedEmployees.splice(idx, 1) // removes (1) item according to the idx number
        console.log('remaining managed employees -->', this.managedEmployees);
    }

}

const manager1 = new Manager(2, "Maria", "Bonita", 1234, 12000)
console.log("Manager 1 info, no employees --> ", manager1); 

manager1.addManagedEmployee(olof);
manager1.addManagedEmployee(betty);
console.log("Manger 1 info with 2 employees --> ", manager1)

console.log('-----------------------------------------');

manager1.removeManagedEmployee(olof);
console.log('Manager  info after removing Olof', manager1);