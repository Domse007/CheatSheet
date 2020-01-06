function add_strings() {

    alphabeth = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    var str_A = document.getElementById("inputOTP1").value;
    var str_B = document.getElementById("inputOTP2").value;

    str_A = str_A.toUpperCase();
    str_B = str_B.toUpperCase();

    var result = "";

    for (var i = 0; i < str_A.length; i++) {
        new_letter_pos = (alphabeth.search(str_A.charAt(i)) + alphabeth.search(str_B.charAt(i))) % 26;
        result += alphabeth.charAt(new_letter_pos);
    };

    document.getElementById('smalllogOTP1').innerHTML = `<div class="black-text"; style="margin-left: 5px;"> Das Resultat lautet: ` + result + `</div>`;

};