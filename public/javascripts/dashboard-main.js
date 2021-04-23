let Dashboard = function () {
    let global = {
        tooltipOptions: {
            placement: "right"
        },
        menuClass: ".c-menu"
    };

    let menuChangeActive = function menuChangeActive(el) {
        let hasSubmenu = $(el).hasClass("has-submenu");
        $(global.menuClass + " .is-active").removeClass("is-active");
        $(el).addClass("is-active");

    };

    let sidebarChangeWidth = function sidebarChangeWidth() {
        let $menuItemsTitle = $("li .menu-item__title");

        $("body").toggleClass("sidebar-is-reduced sidebar-is-expanded");
        $(".hamburger-toggle").toggleClass("is-opened");

        if ($("body").hasClass("sidebar-is-expanded")) {
            $('[data-toggle="tooltip"]').tooltip("destroy");
        } else {
            $('[data-toggle="tooltip"]').tooltip(global.tooltipOptions);
        }
    };

    return {
        init: function init() {
            $(".js-hamburger").on("click", sidebarChangeWidth);

            $(".js-menu li").on("click", function (e) {
                menuChangeActive(e.currentTarget);
            });

            $('[data-toggle="tooltip"]').tooltip(global.tooltipOptions);
        }
    };
}();

Dashboard.init();

function changeTab(id) {
    let page = id.title;
    $('.mainContainer').addClass('d-none');
    $(`.${page}`).removeClass('d-none');
}

function editFunc() {
    $('.updateForm').prop("disabled", false);
    $('#submitBtn').prop("disabled", false);

    $('#sex').remove();
    $('.sex').removeClass('d-none');

}

function validUpdateForm() {

    let firstName = $("#firstName").val();
    let lastName = $("#lastName").val();
    let userName = $("#userName").val();
    let password = $("#password").val();
    let phoneNumber = $("#phoneNumber").val();
    let Email = $("#Email").val();

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


function validAvatar() {
    let avatar = $('.avatarInput').val()
    if(!avatar){
        alert("empty avatar")
       return false
    }
}

// function ReadArticle(id) {
//     $.ajax({
//         type: "GET",
//         url: `/article/getSingleArticle/${id}`,
//         success: function (response) {
//                 console.log(12);
//         }
//     });
// }

// function DeleteArticle(id) {
//     console.log(id);
    
// }