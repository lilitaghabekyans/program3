var LiveForm = require("./LiveForm");
var random = require("./random.js");

module.exports = class Boy extends LiveForm {
    constructor(x, y) {
        super(x, y);
        this.li = 20;
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
        this.getNewCoordinates()
        return super.chooseCell(character);
    }
    mul() {
        let emptyCells = this.chooseCell(0);
        let newCell = random(emptyCells.concat(emptyCells));

        if (newCell) {
            let x = newCell[0];
            let y = newCell[1];

            matrix[y][x] = 4;

            let boy = new Boy(x, y);
            boyArr.push(boy);

            this.li = 20;
            boyHashiv++;
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
            if (this.li >= 25) {
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

            for (let i in grassArr) {
                if (grassArr[i].x == this.x && grassArr[i].y == this.y) {
                    grassArr.splice(i, 1)
                }
            }
            this.y = y;
            this.x = x;
        }
        if (this.li < 0) {
            this.die();
        }

    }
    die() {
        matrix[this.y][this.x] = 0;

        for (let i in boyArr) {
            if (boyArr[i].x == this.x && boyArr[i].y == this.y) {
                boyArr.splice(i, 1)
            }
        }
    }
}
