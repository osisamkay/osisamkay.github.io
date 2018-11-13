(function() {

    // variables
    var contactForm = $('#contactForm');
    var name = $('#name');
    var email = $('#email');
    var message = $('#message');

    // onsubmit function
    contactForm.submit(function(event) {
        if ((name.val() === "" || email.val() === "" || message.val() === "")) {
            event.preventDefault();
            swal({
                icon: 'error',
                text: 'please fill out all the text field',
            });
        } else {
            var span = document.createElement("span");
            span.innerHTML = 'A reply has been sent to your email:' + ' ' + email.val();
            swal({
                icon: 'success',
                title: 'Hello' + ' ' + name.val(),
                text: 'we received your message:' + ' ' + message.val(),
                content: span,
                width: 600,
                padding: '3em',
            });
            event.preventDefault();

            // form reset
            contactForm[0].reset();
        }

    });

}());