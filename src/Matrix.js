/* Write your code below */

class Matrix {
    constructor(rows, columns) {
        this.matrix = this._generateMatrix(rows, columns)

    }

    _generateMatrix(rowsNo, columnsNo) {
        const matrix = []
        let counter = 1
        for (let i = 0; i < rowsNo; i++) {
            const row = []
            for (let j = 0; j < columnsNo; j++) {
                row.push(counter)
                counter++
            }
            matrix.push(row)

        }
        return matrix
    }

    get(row, column) {
        return this.matrix[row][column]
    }

    alter(row, column, newValue) {
        this.matrix[row][column] = newValue
    }
    print() {
        for (let i = 0; i < this.matrix.length; i++) {
            this.printRow(i)
        }

    }

    printColumn(columnNo) {
        for (let i = 0; i < this.matrix.length; i++) {
            console.log(this.matrix[i][columnNo] + "\n");

        }
    }
    printRow(rowNo) {
        let toPrint = ""
        for (let i = 0; i < this.matrix[0].length; i++) {
            toPrint += this.matrix[rowNo][i] + "\t";
        }
        console.log(toPrint);

    }
    findCoordinate(value) {

        for (let i = 0; i < this.matrix.length; i++) {
            const row = []
            for (let j = 0; j < this.matrix[0].length; j++) {
                if (this.matrix[i][j]=== value) {
                    return `x: ${j}, y: ${i}`
                }
            }
        }

    }



}


//You can paste the code from the lesson below to test your solution
// let m = new Matrix(3, 4)
// m.print()
//prints
/*
1       2       3       4
5       6       7       8
9       10      11      12
*/

// m.alter(0, 0, m.get(1, 1))
// m.printColumn(0) //prints 6, 5, 9 (separate lines)
// m.printRow(0) //prints 6, 2, 3, 4 (separate lines)

// console.log(m.findCoordinate(12)) //prints {x: 3, y: 2}
// console.log(m.findCoordinate(7)) //prints {x: 2, y: 1}


/* Do not remove the exports below */
module.exports = Matrix