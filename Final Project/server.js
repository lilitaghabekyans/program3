//! Requiring modules  --  START
var Grass = require("./modules/Grass.js");
var GrassEater = require("./modules/GrassEater.js");
var Gishatich = require("./modules/Gishatich.js");
var Boy = require("./modules/Boy.js");
var Water= require("./modules/Water.js");
var Sun = require("./modules/Sun.js");
var Night= require("./modules/Night.js");
let random = require('./modules/random');
//! Requiring modules  --  END

//! Initializing global arrays  --  START
grassArr = [];
grassEaterArr = [];
gishatichArr = [];
boyArr = [];
waterArr = [];
sunArr = [];
nightArr = [];
matrix = [];
//! Initializing global arrays  --  END

// statistics start
grassHashiv = 0;
grassEaterHashiv = 0;
gishatichHashiv = 0;
boyHashiv = 0;
waterHashiv = 0;
sunHashiv = 0;
nightHashiv = 0;
// statistics end

// time = 0
//! Creating MATRIX -- START

function matrixGenerator(matrixSize, grass, grassEater,gishatich, boy, water, sun, night) {
    for (let i = 0; i < matrixSize; i++) {
        matrix[i] = [];
        for (let o = 0; o < matrixSize; o++) {
            matrix[i][o] = 0;
        }
    }
    for (let i = 0; i < grass; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 1;
    }
    for (let i = 0; i < grassEater; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 2;
    }
    for (let i = 0; i < gishatich; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 3;
    }
    for (let i = 0; i < boy; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 4;
    }
    for (let i = 0; i < water; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 5;
    }
    for (let i = 0; i < sun; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 6;
    }
    for (let i = 0; i < night; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 7;
    }
}
matrixGenerator(20, 15, 5, 5, 5, 5, 5, 0);  //matrixGenerator(20, 25, 20, 15, 10, 2);
//! Creating MATRIX -- END

//! SERVER STUFF  --  START
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);
//! SERVER STUFF END  --  END

function creatingObjects() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 2) {
                var grassEater = new GrassEater(x, y);
                grassEaterArr.push(grassEater);
                grassEaterHashiv++;
            } else if (matrix[y][x] == 1) {
                var grass = new Grass(x, y);
                grassArr.push(grass);
                grassHashiv++
            }
            else if (matrix[y][x] == 3) {
                var gishatich = new Gishatich(x, y);
                gishatichArr.push(gishatich);
                gishatichHashiv++;
            }
            else if (matrix[y][x] == 4) {
                var boy = new Boy(x, y);
                boyArr.push(boy);
                boyHashiv++
            }
            else if (matrix[y][x] == 5) {
                var water = new Water(x, y);
                waterArr.push(water);
                waterHashiv++
            }
            else if (matrix[y][x] == 6) {
                var sun = new Sun(x, y);
                sunArr.push(sun);
                sunHashiv++
            }
            else if (matrix[y][x] == 7) {
                var night = new Night(x, y);
                nightArr.push(night);
                nightHashiv++
            }
        }
    }
}

creatingObjects();

let exanak = 0;
let weather = "weather"

function game() {

    exanak++;
    if (exanak <= 10){
        weather = "summer"
        
    }else if (exanak <= 20){
        weather = "autumn"
    }
    else if (exanak <= 30){
        weather = "winter"
    }
    else if (exanak <= 40){
        weather = "spring"
    }else if (exanak > 20){
        exanak = 0
    }


    if (grassArr[0] !== undefined) {
        for (var i in grassArr) {
            grassArr[i].mul();
        }
    }
    if (grassEaterArr[0] !== undefined) {
        for (var i in grassEaterArr) {
            grassEaterArr[i].eat();
        }
    }
    if (gishatichArr[0] !== undefined) {
        for (var i in gishatichArr) {
            gishatichArr[i].utel();
        }
    }
    if (boyArr[0] !== undefined) {
        for (var i in boyArr) {
            boyArr[i].eatboy();
        }
    }
    if (waterArr[0] !== undefined) {
        for (var i in waterArr) {
            waterArr[i].mul1();
        }
    }
    if (sunArr[0] !== undefined) {
        for (var i in sunArr) {
            sunArr[i].eat();
        }
    }

    if (nightArr[0] !== undefined) {
        for (var i in nightArr) {
            nightArr[i].eatnight();
        }
    }

    //! Object to send
    let sendData = {
        matrix: matrix,
        grassCounter: grassHashiv,
        grassLiveCounter: grassArr.length,
        grassEaterCounter: grassEaterHashiv,
        gishatichCounter: gishatichHashiv,
        boyCounter: boyHashiv,
        waterCounter: waterHashiv,
        sunCounter: sunHashiv,
        nightCounter: nightHashiv,
        weather: weather
    }

    //! Send data over the socket to clients who listens "data"
    io.sockets.emit("data", sendData);
}
//hdshg



setInterval(game, 1000)