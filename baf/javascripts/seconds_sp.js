function SecondsSong() {
    if (pauseSo == true) {
 
    } else {
        positionSo += 1;
           
    }
    var minutesSo = Math.floor(positionSo/60);
    var SecondsSo2 = ("0" + (positionSo % 60)).slice(-2); 
    var delkaMinuteSo = Math.floor(durationSo/60);
    var delkaSecondsSo = ("0" + (durationSo % 60)).slice(-2);
    document.getElementById('secSong').innerHTML =  minutesSo + ":" + SecondsSo2 + " / " + delkaMinuteSo + ":" + delkaSecondsSo;
    var delkaCary = (positionSo/(durationSo/100))*2.3;
    document.getElementById('cara').style = "width: " + delkaCary + "px;";
        
};

var cancel = setInterval(SecondsSong, 1000);