$(".a").on("click", function () {

    const random = Math.floor(Math.random() * 5);
    console.log(random, "ランダム数字");

    if (random === 0) {
    $("h2").text("あなたにぴったりの動物は、犬！");
    $(".a").fadeOut(100);
    $("#cat").fadeOut(100);
    $("#bird").fadeOut(100);
    $("#fish").fadeOut(100);
    $("#lion").fadeOut(100);
    } else if (random === 1) {
    $("h2").text("あなたにぴったりの動物は、猫！").attr('src', 'images/cat.jpeg');
    $(".a").fadeOut(100);
    $("#dog").fadeOut(100);
    $("#bird").fadeOut(100);
    $("#fish").fadeOut(100);
    $("#lion").fadeOut(100);
    } else if (random === 2) {
    $("h2").text("あなたにぴったりの動物は、鳥！").attr('src', 'images/bird.jpeg');
    $(".a").fadeOut(100);
    $("#cat").fadeOut(100);
    $("#dog").fadeOut(100);
    $("#fish").fadeOut(100);
    $("#lion").fadeOut(100);
    } else if (random === 3) {
    $("h2").text("あなたにぴったりの動物は、魚！").attr('src', 'images/fish.jpeg');
    $(".a").fadeOut(100);
    $("#cat").fadeOut(100);
    $("#bird").fadeOut(100);
    $("#dog").fadeOut(100);
    $("#lion").fadeOut(100);
    } else if (random === 4) {
    $("h2").text("あなたにぴったりの動物は、ライオン！").attr('src', 'images/lion.jpeg');
    $(".a").fadeOut(100);
    $("#cat").fadeOut(100);
    $("#bird").fadeOut(100);
    $("#fish").fadeOut(100);
    $("#dog").fadeOut(100);
    }
});


