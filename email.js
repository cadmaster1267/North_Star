function sendmail(){
    let parms = {
        name : document.getElementById("name").value,
        note : document.getElementById("note").value,

    }

    emailjs.send("service_8x0xogo","template_c5avc09",parms).then(alert("Your Nice Note is getting delivered!")),
}