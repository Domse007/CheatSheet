
function bicycle()
{     
    var msg = document.getElementById("inputencrypt1").value;
    var key = document.getElementById("inputnumberencrypt1").value;

    if(key > 0){
        var ascii = "";
        var ascii2 = 0;

        for (i=0; i <= msg.length - 1; i++){
            msg.toUpperCase();
            a = msg.charCodeAt(i);
            ascii = ascii + a.toString();
        }
        ascii2 = Number(ascii)

        ascii2 = ascii2 * key

        document.getElementById('smalllog').innerHTML = `<div class="black-text"; style="margin-left: 5px;">` + ascii + ` * `+ key.toString()+ ` = ` + ascii2.toString()+ `</div><div class="black-text"; id="first";>` + ascii2.toString()+ `</div><div class="black-text"; id="key1";>` + key.toString() + `</div>`;
    } else {
        document.getElementById('smalllog').innerHTML = `<div class="black-text"; style="margin-left: 5px;">Schlüsselfeld ist leer!</div>`;
    }
};

function bicycle2()
{
    var key2 = document.getElementById("inputnumberencrypt2").value;

    if(key2 > 0){
        var ascii3 = document.getElementById("first").textContent;

        ascii4 = Number(ascii3) * Number(key2);

        document.getElementById('smalllog2').innerHTML = `<div class="black-text"; style="margin-left: 5px;">` + ascii3.toString() + ` * `+ key2.toString()+ ` = ` + ascii4.toString() + `</div><div class="black-text"; id="key2";>` + key2.toString() + `</div><div class="black-text"; id="second";>` + ascii4.toString() + `</div>`;
    } else {
        document.getElementById('smalllog2').innerHTML = `<div class="black-text"; style="margin-left: 5px;">Schlüsselfeld ist leer!</div>`;
    }
};

function bicycle3()
{
    var ascii3 = document.getElementById("first").textContent;
    var ascii4 = document.getElementById("second").textContent;

    genkey = Number(ascii4) / Number(ascii3);

    document.getElementById('smalllog3').innerHTML = `<div class="black-text"; style="margin-left: 5px;">` + ascii4.toString() + ` / `+ ascii3.toString()+ ` = ` + genkey.toString()+ `</div><div class="black-text"; id="genkey";>` + genkey.toString() + `</div>`;
};

function bicycle4()
{
    var ascii4 = document.getElementById("second").textContent;
    var key1 = document.getElementById("key1").textContent;

    somewhat = Number(ascii4) / Number(key1);

    document.getElementById('smalllog4').innerHTML = `<div class="black-text"; style="margin-left: 5px;">` + ascii4.toString() + ` / `+ key1.toString()+ ` = ` + somewhat.toString()+ `</div><div class="black-text"; id="somewhat";>` + somewhat.toString() + `</div>`;
};

function bicycle5()
{
    var somewhat = document.getElementById("somewhat").textContent;
    var key2 = document.getElementById("key2").textContent;

    somewhat2 = Number(somewhat) / Number(key2);

    document.getElementById('smalllog5').innerHTML = `<div class="black-text"; style="margin-left: 5px;">` + somewhat.toString() + ` / `+ key2.toString()+ ` = ` + somewhat2.toString()+ `</div>`;
};

function bicycle6()
{
    var ascii2 = document.getElementById("somewhat").textContent;
    var genkey = document.getElementById("genkey").textContent;

    somewhat2 = Number(ascii2) / Number(genkey);

    document.getElementById('smalllog6').innerHTML = `<div class="black-text"; style="margin-left: 5px;">` + ascii2.toString() + ` / `+ genkey.toString()+ ` = ` + somewhat2.toString()+ `</div>`;
};