/* Write your code below */
const Matrix = require('./Matrix')

class EmployeeMatrix extends Matrix {
    constructor(rows, columns) {
        super(0, 0)
    }

    loadData(data) {

        this.matrix = data.map(d => [d._id, d.name, d.department, d.salary])
        
    }

    getEmployees(department){
        const employees=[]
        for (const employee of this.matrix) {
            if(employee[2]== department){
                employees.push(employee[1])
            }
        }
        return employees
    }

    getTotalSalary(department){
        let totalSalaries=0
        for (const employee of this.matrix) {
            if(employee[2]== department){
                totalSalaries+=employee[3]
            }
        }
        return totalSalaries
    }

    findRichest(){
        let richest=this.matrix[0]

        for (const employee of this.matrix) {
            if(employee[3]> richest[3]){
                richest = employee
            }
        }
        return richest[1]
    }

}




//You can paste the code from the lesson below to test your solution
let data = [
    { _id: "e10021", name: "Gillian", department: "Finance", salary: 2000 },
    { _id: "e10725", name: "Tibor", department: "Design", salary: 1200 },
    { _id: "e10041", name: "Anisha", department: "Finance", salary: 2300 },
    { _id: "e10411", name: "Jakub", department: "Design", salary: 1600 },
    { _id: "e11995", name: "Mar", department: "Design", salary: 1300 },
    { _id: "e10732", name: "Nisha", department: "Design", salary: 1200 }
]

let m = new EmployeeMatrix()

m.loadData(data)
// m.print()
// m.printRow(1)
//prints

console.log(m.getEmployees("Finance")) //prints [ 'Gillian', 'Anisha' ]
console.log(m.getEmployees("Design")) //prints [ 'Tibor', 'Jakub', 'Mar', 'Nisha' ]

console.log(m.getTotalSalary("Finance")) //prints 4300
console.log(m.getTotalSalary("Design")) //prints 5300

console.log(m.findRichest()) //prints Anisha

// e10021  Gillian Finance 2000
// e10725  Tibor   Design  1200
// e10041  Anisha  Finance 2300
// e10411  Jakub   Design  1600
// e11995  Mar     Design  1300
// e10732  Nisha   Design  1200

/* Do not remove the exports below */
module.exports = EmployeeMatrix
