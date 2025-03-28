const emailField = document.getElementById('id_email');
emailField.addEventListener('change', function() {
    let email = 'email=' + this.value;
    let csrftoken = getCookie();

    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'ajax/example4/', true);
    xhr.addEventListener('readystatechange', function () {
        if ( (xhr.readyState==4) && (xhr.status==200) ) {
            let data = JSON.parse(xhr.response);
            const response = document.querySelector('.check-email-result');
            response.innerHTML = data.message;
        }
    });
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("X-CSRFToken", csrftoken);
    xhr.send(email);
});