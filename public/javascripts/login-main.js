function validform() {


    var userName = $("#userName").val();
    var password = $("#password").val();

    let count = 0;


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