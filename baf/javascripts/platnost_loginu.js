var cookieExpi = Number(getCookie("expiers_spo"));
        
function SecondsSpo() {
            
var secondsS = cookieExpi - Number(Math.floor(new Date().getTime()/1000.0));

if (secondsS > 59) {
    var minutesS = Math.floor(secondsS/60);
    var secondsS2 = secondsS % 60;
    document.getElementById('secSp').innerHTML = "Platnost tohodle loginu: " + minutesS + " minut a " + secondsS2 + " sekund. ";
} else {
    document.getElementById('secSp').innerHTML = "Platnost tohodle loginu: " + secondsS + " sekund. ";
}

if (secondsS < 0) {
    alert("Vypršel časový limit přihlášení, přihlašte se prosím znovu.");
    window.location.href = "./login";
};

}

var cancel = setInterval(SecondsSpo, 1000);