let nameDevices = getCookie("nameDevices");

function noName() {
    console.log("1");

    if (nameDevices == "" || nameDevices == null) {
        document.getElementById("jmenoP").innerHTML = "Prosím čekejte...";
        sleep(100);          
        nameDevices = prompt("Zadejte název zařízení:", "webDaniel");
    
        do {
            if (nameDevices == "" || nameDevices == null) {
                nameDevices = prompt("ŠPATNÝ FORMÁT\nZadejte název zařízení:", "webDaniel");
            }
        } while (nameDevices == "" || nameDevices == null);
    
        setCookie("nameDevices", nameDevices, 604860);
    };

}

function changeNameSP() {
    console.log("2");
    
    nameDevices2 = prompt("Zadejte nový název zařízení", nameDevices);
    if ((nameDevices2 == null) || (nameDevices2 == "")) {
        document.getElementById("NameDe").innerHTML = "Neplatný název, momentálný název zařízení: " + nameDevices + " ";
    } else if (nameDevices == nameDevices2) {
        alert("Zadaný název se schoduje s tím předchozím. Nic se nezměnilo :D");
    } else {
        nameDevices = nameDevices2;
        setCookie("nameDevices", nameDevices, 604860);
        document.getElementById("NameDe").innerHTML ="Nový název se změní po přenačtení stránky " + nameDevices + " ";
        if (confirm('Nový název se uložil.\nPro aplikování změn se musí stránka přenačíst.\nChcete ji přenačíst ihned?')) {
            location.reload();
        } else {
    
        }
    }
      
}

document.getElementById("change_name").onclick() = function() {
    changeNameSP();
}