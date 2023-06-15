var area = document.getElementById('area');
var cell = document.getElementsByClassName('cell')
var currentPlayer = document.getElementById('curPlyr')


var player = 'x'
var robot = 'o'
var player_win = false
var robot_win = false
var winIndex = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];

// Area generation 
for (var i = 1; i <= 9; i++) {
    area.innerHTML += "<div class ='cell' pos= " + i + "></>"
}
// Add event when click
for (var i = 0; i < cell.length; i++) {
    cell[i].addEventListener('click', cellClick, false);
}

function cellClick() {

    var data = []
    if (!this.innerHTML) {
        this.innerHTML = player
    }
    else {
        alert('Ячейка занята')
        return;
    }

    for (var i in cell) {
        if (cell[i].innerHTML == player) {
            data.push(parseInt(cell[i].getAttribute('pos')))
        }
    }

    currentPlayer.innerHTML = player.toLocaleUpperCase()

        curLoop: for (i in winIndex) {
            for (j in winIndex[i]) {
                if(cell[4].innerHTML == ''){
                    cell[4].innerHTML = 'o'
                    break curLoop;
                }
                else { 
                    if(cell[winIndex[i][j] - 1].innerHTML == ''){
                    cell[winIndex[i][j] - 1].innerHTML = 'o'
                    break curLoop;
                }
                if(cell[2].innerHTML == ''){
                    cell[2].innerHTML = 'o'
                    break curLoop;
                }
            }
        }
    }


    if (checkWin(data)) {
        if (player_win) {
            alert('Выиграл ' + player)
        }
        else if(robot_win){
            alert('Выиграл ' + robot)
        }

        //restart()
    } else {
        var full_area = true
        for (i in cell) {
            if (cell[i].innerHTML == '') full_area = false
        }
        if (full_area) {
            alert('Ничья')
            //restart()
        }
    }


    //player = 'o'

    //player = player == 'x' ? 'o' : 'x';
    //alert(cell[1].innerHTML)

}

function checkWin(data) {
    for (i in winIndex) {
        if (cell[winIndex[i][0] - 1].innerHTML == player && cell[winIndex[i][1] - 1].innerHTML == player && cell[winIndex[i][2] - 1].innerHTML == player) {
            cell[winIndex[i][0] - 1].style.backgroundColor = "green"; cell[winIndex[i][1] - 1].style.backgroundColor = "green"; cell[winIndex[i][2] - 1].style.backgroundColor = "green";
            player_win = true
            return true
        }
        if (cell[winIndex[i][0] - 1].innerHTML == robot && cell[winIndex[i][1] - 1].innerHTML == robot && cell[winIndex[i][2] - 1].innerHTML == robot) {
            cell[winIndex[i][0] - 1].style.backgroundColor = "red"; cell[winIndex[i][1] - 1].style.backgroundColor = "red"; cell[winIndex[i][2] - 1].style.backgroundColor = "red";
            robot_win = true
            return true
        }
    }
}

function restart() {
    var player_win = false
    var robot_win = false
    for (i in cell) {
        cell[i].innerHTML = ''
        cell[i].style.backgroundColor = 'white'
        currentPlayer.innerHTML = 'X'
    }
}