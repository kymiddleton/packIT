const selection = {
    weather: ['hot', 'rainy', 'cold'],

    travel: ['plane', 'car', 'transit'],

    destination: ['beach', 'outdoors', 'city'],

    packing: ['minimal', 'typical', 'diva']
} // Customized pre-compiled packing list
toggleImgColor = function (rowName, imageValue) {
    selection[rowName].forEach(type => {
        if (type == imageValue) {
            // $(this).removeClass('gold')
            // $(this).addClass('white')
            $(`#${imageValue}_gold`).hide();
            $(`#${imageValue}_white`).show();
            $(rowName).css("color", "white");
        } else {
            // $(this).removeClass('white')
            // $(this).addClass('gold')
            $(`#${imageValue}_gold`).show();
            $(`#${imageValue}_white`).hide();
            $(rowName).css("color", "rgb(65, 144, 247)");

        }

    })
};

// $('#notrip').on('click', function () {
//     location.reload()
// })

const selection = {
    weather: ['hot', 'rainy', 'cold'],

    travel: ['plane', 'car', 'transit'],

    destination: ['beach', 'outdoors', 'city'],

    packing: ['minimal', 'typical', 'diva']
}