var LiveForm = require("./LiveForm");
var random = require("./random.js");

module.exports = class Boy extends LiveForm {
    constructor(x, y) {
        super(x, y);
        this.li = 20;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x + 1, this.y + 1],
            [this.x - 1, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y + 1],
        ];
    }
    chooseCell(character) {
        this.getNewCoordinates()
        return super.chooseCell(character);
    }
    mul() {
        this.li++;
        let emptyCells = this.chooseCell(0);
        let emptyCells5 = this.chooseCell(1);
        let newCell = random(emptyCells.concat(emptyCells5));
        if (newCell && this.li > 10) {
            let x = newCell[0];
            let y = newCell[1];
            matrix[y][x] = 4;
            for (let i in grassArr) {
                if (grassArr[i].x == x && grassArr[i].y == y) {
                    grassArr.splice(i, 0)
                }
            }
            let boy = new Boy(x, y);
            boyArr.push(boy);
            this.li = 26;
        }
    }
    eatboy() {
        let emptyCells = this.chooseCell(3);
        let newCell = random(emptyCells);
        if (newCell) {
            this.li++;
            let x = newCell[0];
            let y = newCell[1];
            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;
            for (let i in gishatichArr) {
                if (gishatichArr[i].x == x && gishatichArr[i].y == y) {
                    gishatichArr.splice(i, 1)
                }
            }
            this.x = x;
            this.y = y;
            if (this.li >= 15) {
                this.mul();
            }
        } else {
            this.move()
        }
    }
    move() {
        this.li--;
        let emptyCells = this.chooseCell(0);
        let emptyCellss = this.chooseCell(1);
        let newCell = random(emptyCells.concat(emptyCellss));
        if (newCell) {
            let x = newCell[0];
            let y = newCell[1];
            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;
            this.y = y;
            this.x = x;
        }
    }
}
