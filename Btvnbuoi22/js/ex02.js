function Person(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
}
var customers = []
function addPerson(name, age, address) {
    customers.push(new Person(name, age, address))
}
addPerson("Nguyễn Văn A", 11, "Ha Noi")
addPerson("Nguyễn Văn B", 2, "Hai Phong")
addPerson("Nguyễn Văn C", 12, "TP.HCM")
console.log(customers)

function createCustomers(customers) {

}
