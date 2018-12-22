// Customized pre-compiled packing list

//lets user select all but only takes each rows first selected value
$(".image").on("click", function (event) {
    let imageName = $(this).attr("class");
    // console.log(imageName)
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

$('#notrip').on('click', function () {
    location.reload()
})


//this will allow user to only select one on each row
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

const deleteItem = function (buttonevent) {
    event.preventDefault();
    const id = $(this).closest('.clothing.category').siblings('#deltrip').data('tripid');
    const category = $(buttonevent.target).data('pieceid');
const item = $(buttonevent.target).data('piecename')
    console.log('category',category);
    console.log('item', item)
    $.ajax({
        url: `/api/trips-schema/${id}/${category}/${item}`,
        method: "DELETE"
    })
    .then(function(){
        myTrips()
        $('body').toggleClass('.pieces');
        $('body').toggleClass('.delpieces');

    })
};
$('.box.one').on('click', '.delpiece', deleteItem) 

// const updateItem = function (event) {
//     //event.preventDefault();\
//     console.log(event)
//     const id =  $(buttonevent.target).data('tripid');
//     console.log(`The trip id: ${id}`)
//     const category = $(buttonevent.target).data('pieceid');
//     console.log(`The piece id: ${category}`)
//     const item = $(this).data('piecename')
//     console.log(`The piecename : ${item}`)

    //console.log(item);
    // $.ajax({
    //     url: `/api/trips-schema/${id}/${category}/${item}`,
    //     method: "PUT"
    // })


$('#savedtrips').on('click', function (buttonevent) {
    buttonevent.preventDefault();
    const item = $(buttonevent.target).prev('input').val()
const id = $(buttonevent.target).data('tripid')
console.log(id)
const category = $(buttonevent.target).data('pieceid')
    if ( $(buttonevent.target).data('tripid')) {
 $.ajax({
        url: `/api/trips-schema/${id}/${category}/${item}`,
        method: "PUT"
    }).then(data => {console.log(data)})
 }

});

const showPage2 = function (e) {
    e.preventDefault();
    $('#preCompiled').show();
}

const hidePage2 = function (e) {
    e.preventDefault();
    $('#preCompiled').hide();
}

const showModal = function (e) {
    e.preventDefault();
    $('.modal-container').show();
}

const hideModal = function (e) {
    e.preventDefault();
    $('.modal-container').hide();
}

const checker = function (string) {
    const newstring = parseFloat(string)
    if (String.isString(newstring) && newstring.length > 0) {
        return string;
    }
}