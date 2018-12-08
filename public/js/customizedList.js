// Customized pre-compiled packing list
$(".image").on("click", function (event) {
    let imageName = $(this).attr("class");
    console.log(imageName)
    if (imageName.split(" ")[2] == "gold") {
        $(this).removeClass('gold')
        $(this).addClass('white')
        $(`#${imageName.split(" ")[1]}_gold`).hide();
        $(`#${imageName.split(" ")[1]}_white`).show();
        $(this).css("color", "white");
    } else {
        $(this).removeClass('white')
        $(this).addClass('gold')
        $(`#${imageName.split(" ")[1]}_gold`).show();
        $(`#${imageName.split(" ")[1]}_white`).hide();
        $(this).css("color", "rgb(65, 144, 247)");

    }
});