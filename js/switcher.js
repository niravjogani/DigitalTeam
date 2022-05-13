/*-----------------------------------------------------------------------------------
/* Styles Switcher
-----------------------------------------------------------------------------------*/


jQuery(document).ready(function($) {
    $("ul.pattern .default").click(function() {
        $("#option-color").attr("href", "./css/color/default.css");
        return false;
    });

    $("ul.pattern .blue").click(function() {
        $("#option-color").attr("href", "./css/color/blue.css");
        return false;
    });

    $("ul.pattern .green").click(function() {
        $("#option-color").attr("href", "./css/color/green.css");
        return false;
    });

    $("ul.pattern .purple").click(function() {
        $("#option-color").attr("href", "./css/color/purple.css");
        return false;
    });
    $("ul.pattern .skyblue").click(function() {
        $("#option-color").attr("href", "./css/color/skyblue.css");
        return false;
    });
    $("ul.pattern .yellow").click(function() {
        $("#option-color").attr("href", "./css/color/yellow.css");
        return false;
    });

    $("#color-switcher .bottom a.settings").click(function(e) {
        e.preventDefault();
        var div = $("#color-switcher");
        if (div.css("right") === "-189px") {
            $("#color-switcher").animate({
                right: "0px"
            });
        } else {
            $("#color-switcher").animate({
                right: "-189px"
            });
        }
    })

    $("ul.pattern li a").click(function(e) {
        e.preventDefault();
        $(this).parent().parent().find("a").removeClass("active");
        $(this).addClass("active");
    })

    $("#color-switcher").animate({
        right: "-189px"
    });

});