function setup() {
    var socket = io();
    var side = 30;
    var matrix = [];

    //! Getting DOM objects (HTML elements)
    let weatherElement = document.getElementById('weather');
    let grassCountElement = document.getElementById('grassCount');
    let grassLiveCountElement = document.getElementById('grassLiveCount');
    let grassEaterCountElement = document.getElementById('grassEaterCount');
    let huntCountElement = document.getElementById('huntCount');
    let terminatorCountElement = document.getElementById('termCount');
    let titanCountElement = document.getElementById('titanCount');
    let sunCountElement = document.getElementById('sunCount');
    let nightCountElement = document.getElementById('nightCount');
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
        grassEaterCountElement.innerText = data.eatCounter;
        huntCountElement.innerText = data.huntCounter;
        terminatorCountElement.innerText = data.termCounter;
        titanCountElement.innerText = data.titanCounter;
        sunCountElement.innerText = data.sunCounter;
        nightCountElement.innerText = data.nightCounter;
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
                } else if (matrix[i][j] == 4) {
                    if (data.weather == "summer") {
                        fill("#070963");}
                        if (data.weather == "autumn") {
                            fill("#151896");}
                            if (data.weather == "winter") {
                                fill("#464aeb");}
                                if (data.weather == "spring") {
                                    fill("#060aba");}
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 5) {
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
                    fill('orange');
                    rect(j * side, i * side, side, side);
                }
                else if (matrix[i][j] == 7) {
                    fill('#4f1275');
                    rect(j * side, i * side, side, side);
                }
            }
        }
    }
}



