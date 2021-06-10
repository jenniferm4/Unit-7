$(".submit").click(function() {
    let type = $(".type").val();
    let height = $(".height").val();
    $(".answer").append("<p>" + " You are " + height + " and " + type + ". </p>").show();
});