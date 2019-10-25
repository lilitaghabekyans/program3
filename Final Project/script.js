function setup() {
    var socket = io();
    var side = 30;
    var matrix = [];

    //! Getting DOM objects (HTML elements)
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
    //! adding socket listener on "data" <-- name, after that fire 'drawCreatures' function 

    socket.on("data", drawCreatures);

    function drawCreatures(data) {


        // let sendData = {
        //     matrix: matrix,
        //     grassCounter: grassHashiv,
        //     grassLiveCounter: grassArr.length,
        //     eatCounter: eatHashiv,
        //     huntCounter: huntHashiv,
        //     termCounter: termHashiv,
        //     titanCounter: titanHashiv,
        //     weather: weather
        // }

        //! after getting data pass it to matrix variable
        matrix = data.matrix;
        weatherElement.innerText = data.weather; "summer" 
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
        //! Every time it creates new Canvas with new matrix size
        createCanvas(matrix[0].length * side, matrix.length * side)
        //! clearing background by setting it to new grey color
        background('#acacac');
        //! Draw grassCount and grassEaterCount to HTML (use DOM objects to update information, yes, and use .innerText <- function)

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
                    rect(j * side, i * side, side, side);
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
                    rect(j * side, i * side, side, side);
                }
                else if (matrix[i][j] == 0) {
                    fill('#acacac');
                    rect(j * side, i * side, side, side);
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
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 5) {
                    if (data.weather == "summer") {
                        fill("#070963");}
                        if (data.weather == "autumn") {
                            fill("#151896");}
                            if (data.weather == "winter") {
                                fill("#464aeb");}
                                if (data.weather == "spring") {
                                    fill("#060aba");}
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 4) {
                    if (data.weather == "summer") {
                        fill("#02020a");}
                        if (data.weather == "autumn") {
                            fill("#0f0f24");}
                            if (data.weather == "winter") {
                                fill("#3c3c4d");}
                                if (data.weather == "spring") {
                                    fill("#141429");}
                    rect(j * side, i * side, side, side);
                }
                else if (matrix[i][j] == 6) {
                    if (data.weather == "summer") {
                        fill("#b87100");}
                        if (data.weather == "autumn") {
                            fill("#cc810a");}
                            if (data.weather == "winter") {
                                fill("#e89e27");}
                                if (data.weather == "spring") {
                                    fill("#d48506");}
                    rect(j * side, i * side, side, side);
                }
            }
        }
    }
}



