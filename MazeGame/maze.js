$(function () {
    let s = false;
    let count = 0;
    $(".boundary").mouseover(function () {
        if (s) {
            count = count + 1;
            $(".boundary").not(".example").addClass("youlose");
        } else {
            count = 0;
            $(".boundary").removeClass("youlose");
        }
    });
    $("#end").mouseover(function () {
        if (s && !count) {
            $("#status").text("You win:]");
        } else {
            $("#status").text("Sorry,You lose!");
        }
        s = false;
    });
    $("#start").click(function () {
        s = true;
        $(".boundary").removeClass("youlose");
        $("#status").text("Game started");
    });
    $("#maze").mouseleave(function () {
        if (s) {
            $("#status").text("You lose!");
            $(".boundary").not(".example").addClass("youlose");
        }
    });
});