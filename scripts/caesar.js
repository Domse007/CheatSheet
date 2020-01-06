function encrypt() {
    var encMsg = '';

    var msg = document.getElementById("inputencrypt").value;

    var key = document.getElementById("inputnumberencrypt").value;

    if (parseInt(key, 10) >= 0 && parseInt(key, 10) <= 26) {
        for (var i = 0; i < msg.length; i++) {
            var code = msg.charCodeAt(i);

            // Encrypt only letters in 'A' ... 'Z' interval
            if (code >= 65 && code <= 65 + 26 - 1) {
                if (code + parseInt(key, 10) <= 90) {
                    code = code + parseInt(key, 10);
                } else {
                    code = code + (parseInt(key, 10) - 26);
                }
            } else if (code >= 97 && code <= 97 + 26 - 1) {
                if (code + parseInt(key, 10) <= 122) {
                    code = code + parseInt(key, 10);
                } else {
                    code = code + (parseInt(key, 10) - 26);
                }
            }
            encMsg += String.fromCharCode(code);
        }
        document.getElementById('log').innerHTML += `<div class="black-text"; style="margin-left: 5px;">Die Eingabe ist: ` + msg + `</div>`
        document.getElementById('log').innerHTML += `<div class="black-text"; style="margin-left: 5px;">Es wurde um so viele Stellen verschoben: ` + key + `</div>`
        document.getElementById('log').innerHTML += `<div class="black-text"; style="margin-left: 5px;"> Die verschlüsselte Ergebniss ist: ` + encMsg + `</div>`
    } else {
        document.getElementById('log').innerHTML += `<div class="black-text"; style="margin-left: 5px;">Keine validen eingaben.</div>`
    }
};


function decrypt() {
    var msg = document.getElementById("inputdecrypt").value;

    for (key = 25; key >= 0; key--) {
        var encMsg = '';
        if (parseInt(key, 10) >= 0 && parseInt(key, 10) <= 26) {
            for (var i = 0; i < msg.length; i++) {
                var code = msg.charCodeAt(i);

                // Encrypt only letters in 'A' ... 'Z' interval
                if (code >= 65 && code <= 65 + 26 - 1) {
                    if (code + parseInt(key, 10) <= 90) {
                        code = code + parseInt(key, 10);
                    } else {
                        code = code + (parseInt(key, 10) - 26);
                    }
                } else if (code >= 97 && code <= 97 + 26 - 1) {
                    if (code + parseInt(key, 10) <= 122) {
                        code = code + parseInt(key, 10);
                    } else {
                        code = code + (parseInt(key, 10) - 26);
                    }
                }
                encMsg += String.fromCharCode(code);
            }
            document.getElementById('log2').innerHTML += `<div class="black-text"; style="margin-left: 5px;">Verschiebung: ` + (26 - key) + `; Ergebniss: ` + encMsg + `</div>`
        } else {
            document.getElementById('log').innerHTML += `<div class="black-text"; style="margin-left: 5px;">Keine validen eingaben.</div>`
        }
    }
};