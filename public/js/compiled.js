// // Generate compiled packing list based on user selection
const showModal = function (e) {
    e.preventDefault();
    $('.modal-container').show();
}
//hides modal container
const hideModal = function () {
    // e.preventDefault();
    $('.modal-container').hide();
}

$(document).ready(function () {
    let weather = '';
    let destination = '';
    let travel = '';
    let packing = '';

    const selections = function () {
        select = $(this).data('category')
        if (select === 'weather') {
            weather = $(this).attr('value');
            console.log(weather)
        } else if (select === 'destination') {
            destination = $(this).attr('value');
            console.log(destination)
        } else if (select === 'travel') {
            travel = $(this).attr('value');
            console.log(travel)
        } else if (select === 'packing') {
            packing = $(this).attr('value');
            console.log(packing)
        };
        if (weather && destination && travel && packing) {
            //shows modal container
            showModal();
        }
    }
    $('.image').on('click', selections);

    $('#notrip').on('click', hideModal)

    $('#gotrip').on('click', function () {
        console.log(weather + packing + destination + travel)
        $.ajax({
                url: `/api/item-schema/${weather}/${packing}/${destination}/${travel}`,
                method: 'GET'
            })
            .then(function (data) {
                console.log(data)
                data.map(e => {
                    for (let i = 0; i < data.length; i++) {
                        if (e.data[i].category === 'clothing') {
                            $('.clothing').append($(`<li><<input class="checkbox" type="checkbox"/>${e.data[i].item}</li>`))
                        } else if (e.data[i].category === 'footwear') {
                            $('.footwear').append($(`<li><<input class="checkbox" type="checkbox"/>${e.data[i].item}</li>`))
                        } else if (e.data[i].category === 'personal') {
                            $('.personal').append(`<li><<input class="checkbox" type="checkbox"/>${e.data[i].item}</li>`)
                        } else if (e.data[i].category === 'documents') {
                            $('.documents').append(`<li><<input class="checkbox" type="checkbox"/>${e.data[i].item}</li>`)
                        } else if (e.data[i].category === 'gadgets') {
                            $('.gadgets').append(`<li><<input class="checkbox" type="checkbox"/>${e.data[i].item}</li>`)
                        } else if (e.data[i].category === 'miscelleneous') {
                            $('.miscelleneous').append(`<li><<input class="checkbox" type="checkbox"/>${e.data[i].item}</li>`)
                        }
                    }
                })

            })
        hideModal();
    })

})