function responsivenav() {
    var x = document.getElementById("myTopnav");
    if ($("#myTopnav").hasClass("responsive")) {
        x.classList.remove("responsive");
    } else {
        x.classList.add("responsive");
    }
}

function ChangeView(value) {
    $('html,body').animate({
        scrollTop: $("#"+value).offset().top
    }, 'normal')
    document.getElementById("myTopnav").classList.remove("responsive");
}

