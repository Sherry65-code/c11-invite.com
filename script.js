document.getElementById('password').addEventListener('keyup', (event)=>{
    if (event.code == 'Enter') {
        trylogin();
    }
})
function trylogin() {
    var dt = new Date();
    if (md5(dt.getDate()+dt.getDay()+dt.getHours()+dt.getMonth()+dt.getMinutes()) == document.getElementById('password').value) {
        window.open("https://chat.whatsapp.com/H4OoZdWduGIISsi52oQgBv", "_self");
    }
    
    else if (document.getElementById('password').value == '') alert("Empty Input! You are playing with me ig ?");

    else {
        alert("Wrong Password. Failed to hash.");
    }
}
