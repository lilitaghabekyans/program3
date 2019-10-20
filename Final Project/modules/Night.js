var LiveForm = require("./LiveForm");
var random = require("./random.js");

module.exports = class Night extends LiveForm {
    constructor(x, y) {
        super(x, y);
        this.energ = 50;
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

        if (newCell) {
            nightHashiv++
            let x = newCell[0];
            let y = newCell[1];
            matrix[y][x] = 7;
            let night = new Night(x, y);
            nightArr.push(night);
            this.energ = 55;
        }
    }
    eatnight() {
        let emptyCells = this.chooseCell(2);
        let newCell = random(emptyCells);

        if (newCell) {

            this.energ++;
            let x = newCell[0];
            let y = newCell[1];
            
            matrix[y][x] = 7;
            matrix[this.y][this.x] = 0;
            for (let i in sunArr) {
                if (sunArr[i].x == x && sunArr[i].y == y) {
                    sunArr.splice(i, 1)
                }
            }
            this.x = x;
            this.y = y;
            if (this.energ >= 10) {
                this.mul();
            }
        } else {
            this.move()
        }
    }
    move() {
        this.energ--;
        let emptyCells = this.chooseCell(0);
        let newCell = random(emptyCells);
        if (newCell) {
            let x = newCell[0];
            let y = newCell[1];
            matrix[y][x] = 7;
            matrix[this.y][this.x] = 0;
            this.y = y;
            this.x = x;
        }
        if (this.energ < 0) {
            this.die();
        }
    }
    die() {
        matrix[this.y][this.x] = 0;

        for (let i in nightArr) {
            if (nightArr[i].x == this.x && nightArr[i].y == this.y) {
                nightArr.splice(i, 1)
            }
        }
    }
}