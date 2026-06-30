function sendmail(){
    var templateParams = {
        name : document.getElementById("name").value,
        note : document.getElementById("note").value,

    };

    emailjs.send('service_8x0xogo', 'template_c5avc09', templateParams).then(
        (response) => {
            alert("Your Nice Note is on its way!");
        },
        (error) => {
            alert("Something went wrong, please try again or contact support.");
        },
    );
}
