function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}


function setCookie(cname, cvalue, extime) {
    const d = new Date();
    d.setTime(d.getTime() + ((extime-60) * 1000));
    let expires = "expires="+ d.toUTCString();
    var cook = cname + "=" + cvalue + ";" + expires + ";path=/"; 
    document.cookie = cook;
}


function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}
