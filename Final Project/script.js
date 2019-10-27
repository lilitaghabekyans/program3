function setup() {
    var socket = io();
    var side = 10;
    var matrix = [];


    let weatherElement = document.getElementById('weather');

    let grassCountElement = document.getElementById('grassCount');
    let grassLiveCountElement = document.getElementById('grassLiveCount');

    let grassEaterCountElement = document.getElementById('grassEaterCount');
    let grassEaterLiveCountElement = document.getElementById('grassEaterLiveCount');

    let gishatichCountElement = document.getElementById('gishatichCount');
    let gishatichLiveCountElement = document.getElementById('gishatichLiveCount');

    let boyCountElement = document.getElementById('boyCount');
    let boyLiveCountElement = document.getElementById('boyLiveCount');

    let waterCountElement = document.getElementById('waterCount');
    let waterLiveCountElement = document.getElementById('waterLiveCount');

    let sunCountElement = document.getElementById('sunCount');
    let sunLiveCountElement = document.getElementById('sunLiveCount');



    socket.on("data", drawCreatures);

    function drawCreatures(data) {


        matrix = data.matrix;
        weatherElement.innerText = data.weather;

        grassCountElement.innerText = data.grassCounter;
        grassLiveCountElement.innerText = data.grassLiveCounter;

        grassEaterCountElement.innerText = data.grassEaterCounter;
        grassEaterLiveCountElement.innerText = data.grassEaterLiveCounter;

        gishatichCountElement.innerText = data.gishatichCounter;
        gishatichLiveCountElement.innerText = data.gishatichLiveCounter;

        boyCountElement.innerText = data.boyCounter;
        boyLiveCountElement.innerText = data.boyLiveCounter;

        waterCountElement.innerText = data.waterCounter;
        waterLiveCountElement.innerText = data.waterLiveCounter;

        sunCountElement.innerText = data.sunCounter;
        sunLiveCountElement.innerText = data.sunLiveCounter;

        createCanvas(matrix[0].length * side, matrix.length * side)

        background('#acacac');

        //! Drawing and coloring RECTs
        for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == 1) {
                    if (data.weather == "summer") {
                        fill("green");
                    } else if (data.weather == "autumn") {
                        fill("#0f852e");
                    }
                    else if (data.weather == "winter") {
                        fill("#30c257");
                    }
                    else if (data.weather == "spring") {
                        fill("#167530");
                    }
                }
                else if (matrix[i][j] == 2) {
                    if (data.weather == "summer") {
                        fill("#d4f518");
                    } else if (data.weather == "autumn") {
                        fill("#a9c219");
                    }
                    else if (data.weather == "winter") {
                        fill("#d5eb59");
                    }
                    else if (data.weather == "spring") {
                        fill("#bbdb02");
                    }
                }
                else if (matrix[i][j] == 0) {
                    fill('#acacac');
                } else if (matrix[i][j] == 3) {
                    if (data.weather == "summer") {
                        fill("#ab0205");
                    }
                    if (data.weather == "autumn") {
                        fill("#d11518");
                    }
                    if (data.weather == "winter") {
                        fill("#ed3b3e");
                    }
                    if (data.weather == "spring") {
                        fill("#d40f12");
                    }
                } else if (matrix[i][j] == 5) {
                    if (data.weather == "summer") {
                        fill("#070963");
                    }
                    if (data.weather == "autumn") {
                        fill("#151896");
                    }
                    if (data.weather == "winter") {
                        fill("#464aeb");
                    }
                    if (data.weather == "spring") {
                        fill("#060aba");
                    }
                } else if (matrix[i][j] == 4) {
                    if (data.weather == "summer") {
                        fill("#02020a");
                    }
                    if (data.weather == "autumn") {
                        fill("#0f0f24");
                    }
                    if (data.weather == "winter") {
                        fill("#3c3c4d");
                    }
                    if (data.weather == "spring") {
                        fill("#141429");
                    }
                }
                else if (matrix[i][j] == 6) {
                    if (data.weather == "summer") {
                        fill("#b87100");
                    }
                    if (data.weather == "autumn") {
                        fill("#cc810a");
                    }
                    if (data.weather == "winter") {
                        fill("#acacac");
                    }
                    if (data.weather == "spring") {
                        fill("#d48506");
                    }
                }
                rect(j * side, i * side, side, side);
            }
        }
    }
}




