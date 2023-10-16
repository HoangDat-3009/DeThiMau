// coding implementation

// begin check input
const btnSend = document.getElementById('submit');
btnSend?.addEventListener('click',function() {
    var email = document.getElementById("email").value;
    var rate = document.getElementById("rate").value;
    if(email ===''){
        alert("Email cannot be empty");
    }else{
        if (email.indexOf('@') === -1) {
            alert("Email must contain the @ symbol");
            return;
        }
    }
    if(rate ===''){
        alert("Rate cannot be empty");
    }else{
        if (!/^\d+$/.test(rate)) {
            alert("Rating must contain only numbers");
            return;
        }
    }
});


// end check input

// end coding implementation
