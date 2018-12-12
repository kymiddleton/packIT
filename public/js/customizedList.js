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

const deleteItem = function (event) {
    event.preventDefault();
    const id = $(this).data('tripid');
    const category = $(this).data('pieceid');
    const item = $(this).data('piecename')
    console.log(index);
    $.ajax({
        url: `/api/trips-schema/${id}/${category}/${item}`,
        method: "DELETE"
    })
};

const updateItem = function (event) {
    event.preventDefault();
    const id = $(this).data('tripid');
    const category = $(this).data('pieceid');
    const item = $(this).data('piecename')
    console.log(index);
    $.ajax({
        url: `/api/trips-schema/${id}/${category}/${item}`,
        method: "PUT"
    })
};

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

//$('#home').on('click', hideModal, hidePage2)

const checker = function (string) {
    const newstring = parseFloat(string)
    if (String.isString(newstring) && newstring.length > 0) {
        return string;
    }
}


//     return num1 + num2;
//   }
//   const addValue = function(total, newValue) {
//     newValue = parseFloat(newValue);
//     let sum = total + newValue;
//     if(isNaN(sum)){
//       return total;
//     }
//     return sum;
//   }

//   const setText = function(content){
//     $('#total').text(content);
//   }

//   const clickHandler = function (event) {
//     event.preventDefault();
//     let value = $(this).val();
//     total = addValue(total, value);
//     const displayTotal = total.toFixed(2)
//     setText(displayTotal);
//   }

//   $('.btn').on('click', clickHandler);