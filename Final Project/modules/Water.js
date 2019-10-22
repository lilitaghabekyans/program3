var LiveForm = require("./LiveForm");
var random = require("./random.js");

module.exports = class Water extends LiveForm {
    constructor(x, y) {
        super(x, y);
        this.kyanq = 20;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
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
    mul1() {
        this.kyanq++;
        let emptyCells = this.chooseCell(0);
        let newCell = random(emptyCells);
        if (newCell && this.kyanq > 20) {
            let x = newCell[0];
            let y = newCell[1];
            matrix[y][x] = 5;
            let water = new Water(x, y);
            waterArr.push(water);
            this.kyanq = 0;
        }
    }
}



