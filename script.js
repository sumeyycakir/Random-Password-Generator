var password = document.getElementById("password");

function genPassword(){
    var chars = "abcdefghijklmnoprstuvyz1234567890()!@<>?+-{}[],.:&%^=/";
    var plength = 10
    var result = "";

    for (var i=0;i<=plength;i++){
        var rn = Math.floor(Math.random()*chars.length)
        result += chars.substring(rn,rn+1)
    }

    document.getElementById("password").value = result;
}