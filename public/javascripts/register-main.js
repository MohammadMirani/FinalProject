function validform() {

    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
    var userName = $("#userName").val();
    var password = $("#password").val();
    var phoneNumber = $("#phoneNumber").val();
    var Email = $("#Email").val();
    let count = 0;

    if (firstName == null || firstName == "") {
        $("#firstNameAlert").removeClass('d-none');
        $("#firstNameAlert").html("Please Enter Your firstName");
        count++;

    } else if (firstName.length < 4) {
        $("#firstNameAlert").html("first name should be greater than 3 character");
        count++;

    }


    if (lastName == null || lastName == "") {
        $("#lastNameAlert").removeClass('d-none');
        $("#lastNameAlert").html("Please Enter Your last name");
        count++
    } else if (lastName.length < 4) {
        $("#lastNameAlert").html("last name should be greater than 3 character");
        count++
    }

    if (Email == null || Email == "") {
        $("#EmailAlert").removeClass('d-none');
        $("#EmailAlert").html("Please Enter Your E-mail address");
        count++
    } else if (Email.length < 4) {
        $("#EmailAlert").html("E-mail address should be greater than 3 character");
        count++
    }

    if (phoneNumber == null || phoneNumber == "") {
        $("#phoneNumberAlert").removeClass('d-none');
        $("#phoneNumberAlert").html("Please Enter Your phone number");
        count++
    } else if (phoneNumber.length < 4) {
        $("#phoneNumberAlert").html("phone number should be greater than 3 character");
        count++
    }

    if (userName == null || userName == "") {
        $("#userNameAlert").removeClass('d-none');
        $("#userNameAlert").html("Please Enter Your userName");
        count++
    } else if (userName.length < 4) {
        $("#userNameAlert").html("userName should be greater than 3 character");
        count++
    }

    if (password == null || password == "") {
        $("#passwordAlert").removeClass('d-none');
        $("#passwordAlert").html("Please Enter Your password");
        count++
    } else if (password.length < 4) {
        $("#passwordAlert").html("password should be greater than 3 character");
        count++
    }





    if (count !== 0) return false

}