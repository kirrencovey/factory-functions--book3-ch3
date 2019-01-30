// Write a factory function that creates an object that represents a doctor.
// The function should accept three arguments:
//      1. Doctor's name
//      2. Specialty (Oncologist, pediatrician, etc...)
//      3. Address of practice

const createDoctor = (name, specialty, address) => {
    return {
        name: name,
        specialty: specialty,
        address: address
    }
}

let newDoctor = createDoctor("P.Sherman", "dentist", "42 Wallaby Way, Sydney");

console.table(newDoctor);