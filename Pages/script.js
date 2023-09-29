function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_d6m4hon";
    const templateID = "template_fz0se3q";
    email.send(serviceID, templateID, params)
        .then(
            res => {
                alert("Message Sent!");
                // document.getElementById("name").value = "";
                // document.getElementById("email").value = "";
                // document.getElementById("message").value = "";
                // console.log(res);
                
            }
        ).catch((err) => console.log(err));

}