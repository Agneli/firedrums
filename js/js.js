$(function() {
    lockedAllowed = window.screen.mozLockOrientation("landscape");
});

$(function() {
    $("a").each(function() {
        var width = $(this).width() / $(this).height() * 115;
        $(this).css('height', width);
    });
});

$(function() {
    $("#kick-1").click(function() {
        $("#sound-kick-1")[0].play();
        $("#sound-kick-1")[0].currentTime = 0;
    });

    $("#kick-2").click(function() {
        $("#sound-kick-2")[0].play();
        $("#sound-kick-2")[0].currentTime = 0;
    });

    $("#snare").click(function() {
        $("#sound-snare")[0].play();
        $("#sound-snare")[0].currentTime = 0;
    });

    $("#tom-1").click(function() {
        $("#sound-tom-1")[0].play();
        $("#sound-tom-1")[0].currentTime = 0;
    });

    $("#tom-2").click(function() {
        $("#sound-tom-2")[0].play();
        $("#sound-tom-2")[0].currentTime = 0;
    });

    $("#tom-3").click(function() {
        $("#sound-tom-3")[0].play();
        $("#sound-tom-3")[0].currentTime = 0;
    });

    $("#floor").click(function() {
        $("#sound-floor")[0].play();
        $("#sound-floor")[0].currentTime = 0;
    });

    $("#splash").click(function() {
        $("#sound-splash")[0].play();
        $("#sound-splash")[0].currentTime = 0;
    });

    $("#crash-1").click(function() {
        $("#sound-crash-1")[0].play();
        $("#sound-crash-1")[0].currentTime = 0;
    });

    $("#crash-2").click(function() {
        $("#sound-crash-2")[0].play();
        $("#sound-crash-2")[0].currentTime = 0;
    });

    $("#hat-open").click(function() {
        $("#sound-hat-open")[0].play();
        $("#sound-hat-open")[0].currentTime = 0;
    });

    $("#hat-close").click(function() {
        $("#sound-hat-close")[0].play();
        $("#sound-hat-close")[0].currentTime = 0;
    });

    $("#ride").click(function() {
        $("#sound-ride")[0].play();
        $("#sound-ride")[0].currentTime = 0;
    });
});