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
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
        ];
    }
    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
    }
    mul() {
        let emptyCells = this.chooseCell(0);
        let newCell = random(emptyCells);
        if (newCell && this.energ > 20) {
            let x = newCell[0];
            let y = newCell[1];
            matrix[y][x] = 6;
            let sun = new Sun(x, y);
            sunArr.push(sun);
            this.energ = 5;
            sunHashiv++;
        }
    }
    move() {
        this.energ++;
        let emptyCells = this.chooseCell(0);
        let newCell = random(emptyCells);
        if (newCell) {
            let x = newCell[0];
            let y = newCell[1];
            matrix[y][x] = 6;
            matrix[this.y][this.x] = 0;
            this.y = y;
            this.x = x;
        }
        if (this.energ > 17) {
            this.mul();
        }
    }
}
