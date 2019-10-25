// var LiveForm = require("./LiveForm");
// var random = require("./random.js");

// module.exports = class Sun extends LiveForm {
//     constructor(x, y) {
//         super(x, y);
//         this.ener = 40;
//     }
//     getNewCoordinates() {
//         this.directions = [
//             [this.x - 1, this.y - 1],
//             [this.x, this.y - 1],
//             [this.x + 1, this.y - 1],
//             [this.x - 1, this.y],
//         ];
//     }
//     chooseCell(character) {
//         this.getNewCoordinates();
//         return super.chooseCell(character);
//     }
//     eat() {
//         let emptyCells = this.chooseCell(5);
//         let newCell = random(emptyCells);

//         if (newCell) {

//             this.ener++;
//             let x = newCell[0];
//             let y = newCell[1];

//             matrix[y][x] = 6;
//             matrix[this.y][this.x] = 0;
//             for (let i in waterArr) {
//                 if (waterArr[i].x == x && waterArr[i].y == y) {
//                     waterArr.splice(i, 1)
//                 }
//             }
//             this.x = x;
//             this.y = y;
//             if (this.ener >= 10) {
//                 this.move()
//             }
//         }
//     }
//     move() {
//         this.ener--;
//         let emptyCells = this.chooseCell(0);
//         let newCell = random(emptyCells);
//         if (newCell) {
//             let x = newCell[0];
//             let y = newCell[1];
//             matrix[y][x] = 6;
//             matrix[this.y][this.x] = 0;
//             this.y = y;
//             this.x = x;
//         }
//         if (this.ener < 0) {
//             this.die();
//         }
//     }
//     die() {
//         matrix[this.y][this.x] = 0;

//         for (let i in sunArr) {
//             if (sunArr[i].x == this.x && sunArr[i].y == this.y) {
//                 sunArr.splice(i, 1)
//             }
//         }
//     }
// }

var LiveForm = require("./LiveForm");
var random = require("./random.js");

module.exports = class Sun extends LiveForm {
    constructor(x, y) {
        super(x, y);
        this.energ = 13;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
        ];
    }
    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
    }
    mul() {
        this.energ++;
        let emptyCells = this.chooseCell(0);
        let newCell = random(emptyCells);
        if (newCell && this.energ > 20) {
            let x = newCell[0];
            let y = newCell[1];
            matrix[y][x] = 6;
            let sun = new Sun(x, y);
            sunArr.push(sun);
            this.energ = 0;
        }
    }
//     move() {
//         this.energ--;
//         let emptyCells = this.chooseCell(0);
//         let newCell = random(emptyCells);
//         if (newCell) {
//             let x = newCell[0];
//             let y = newCell[1];
//             matrix[y][x] = 6;
//             matrix[this.y][this.x] = 0;
//             this.y = y;
//             this.x = x;
//         }
//         if (this.energ >= 30) {
//             this.mul();
//     }
// }
}
