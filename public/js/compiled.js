// // Generate compiled packing list based on user selection

$(document).ready(function () {
    let weather = '';
    let packing = '';
    let destination = '';
    let travel = '';
    

    const selections = function () {
        select = $(this).data('category')
        if (select === 'weather') {
            weather = $(this).attr('value');
            console.log(weather)
        } else if (select === 'packing') {
            packing = $(this).attr('value');
            console.log(packing)
        } else if (select === 'destination') {
            destination = $(this).attr('value');
            console.log(destination)
        } else if (select === 'travel') {
            travel = $(this).attr('value');
            console.log(travel)
        };
        if (weather && destination && travel && packing) {

            $('.image').addClass('hide');
            $('.modal').removeClass('hide');
        }
        // const cancel = function () {
        //     $('.modal').addClass('hide')
        //     $('.image').removeClass('hide');
        //     $('.image').on('click',selections)
        // }
        // $('#notrip').on('click', cancel);

    }
    $('.image').on('click', selections);


    $('#gotrip').on('click', function () {
        // console.log('clicked trip')
        // console.log(weather + packing + destination + travel)
        $.ajax({
            url: `/api/item-schema/${weather}/${packing}/${destination}/${travel}`, method: 'GET'
        })
            .then(function (data) {
                $()
                console.log(data)
                data.map(e => {
                    for (let i = 0; i < e.data.length; i++) { 
                        console.log(e.data.item)
                     }
                    // for (let i = 0; i < e.data.length; i++) { 
                    //     if (e.data[i].category === 'clothing') {
                    //         $('.clothing').append($(`<li><<input class="checkbox" type="checkbox"/>${e.data[i].item}</li>`))
                    //     } else if (e.data[i].category === 'footwear') {
                    //         $('.footwear').append($(`<li><<input class="checkbox" type="checkbox"/>${e.data[i].item}</li>`))
                    //     } else if (e.data[i].category === 'personal') {
                    //         $('.personal').append(`<li><<input class="checkbox" type="checkbox"/>${e.data[i].item}</li>`)
                    //     } else if (e.data[i].category === 'documents') {
                    //         $('.documents').append(`<li><<input class="checkbox" type="checkbox"/>${e.data[i].item}</li>`)
                    //     } else if (e.data[i].category === 'gadgets') {
                    //         $('.gadgets').append(`<li><<input class="checkbox" type="checkbox"/>${e.data[i].item}</li>`)
                    //     } else if (e.data[i].category === 'miscelleneous') {
                    //         $('.miscelleneous').append(`<li><<input class="checkbox" type="checkbox"/>${e.data[i].item}</li>`)
                    //     }
                    // }
                })

            })

    })
    const cancel = function () {
        $('.modal').addClass('hide')
        $('.image').removeClass('hide');
        $('.image').on('click',reselect)
    }
    $('#notrip').on('click', cancel);


})
