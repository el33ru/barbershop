$(function() {
    $(".service").click(function () {
        if ($(".catalog-woomens-full").is(':visible')) {
            $(".catalog-woomens-full").hide();
            $(".catalog-height").height(510);
            $(".service").html('Посмотреть полный<br>список услуг');
        }else{
            $(".catalog-woomens-full").show();
            $(".catalog-height").height(850);
            $(".service").html('Скрыть полный<br>список')
        }
    });
});

$(function() {
    $(".catalog-button").click(function () {
        if ($(".catalog-choice").is(':visible')) {
            $(".catalog-choice").hide();
            $(".catalog-height").height(510);
        }else{
            $(".catalog-choice").show();
            $(".catalog-woomens").hide();
            $(".catalog-mens").hide();
        }
    });
});

$(function() {
    $(".her").click(function () {
        $(".catalog-woomens").show();
        $(".catalog-choice").hide();
    });
});

$(function() {
    $(".him").click(function () {
        $(".catalog-mens").show();
        $(".catalog-choice").hide();
    });
});

