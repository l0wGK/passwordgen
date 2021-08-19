var num = 12;

function weak() {
    num = 8;
    document.getElementById('weak').style.backgroundColor = "red";
    document.getElementById('good').style.backgroundColor = "#393a4e";
    document.getElementById('strong').style.backgroundColor = "#393a4e";
    password();
}

function good() {
    num = 12;
    document.getElementById('weak').style.backgroundColor = "#393a4e";
    document.getElementById('good').style.backgroundColor = "orange";
    document.getElementById('strong').style.backgroundColor = "#393a4e";
    password();
}

function strong() {
    num = 20;
    document.getElementById('weak').style.backgroundColor = "#393a4e";
    document.getElementById('good').style.backgroundColor = "#393a4e";
    document.getElementById('strong').style.backgroundColor = "green";
    password();
}

function generate_password() {
    document.getElementById('button_generate').style.backgroundColor = "#494d9c";
    setTimeout(function() {
        document.getElementById('button_generate').style.backgroundColor = "#393a4e";
    }, 500)

    var pass = '';
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz0123456789@#$!,.-_';
        
    for (i = 1; i <= num; i++) {
        var char = Math.floor(Math.random()
                    * str.length + 1);
            
        pass += str.charAt(char)
    }
        
    return pass;
}

function password() {
    document.getElementById('password').innerHTML = "<b>" + generate_password(); + "</b>"
}

function copy(that){
    document.getElementById('password').style.backgroundColor = "#494d9c";
    setTimeout(function() {
        document.getElementById('password').style.backgroundColor = "#393a4e";
    }, 500)
    var inp = document.createElement('input');
    document.body.appendChild(inp)
    inp.value = that.textContent
    inp.select();
    document.execCommand('copy',false);
    inp.remove();
}