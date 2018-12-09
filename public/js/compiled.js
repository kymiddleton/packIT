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

    }
    $('.image').on('click', selections);

    $('#gotrip').on('click', function () {

        $('.modal').addClass('hide');
        $('#preCompiled').removeClass('hide');
        
        console.log(weather + packing + destination + travel)
        let clothing = [];
        let footwear = [];
        let personal = [];
        let documents = [];
        let gadgets = [];
        let miscelleneous = [];
            $.ajax({
                url: `/api/item-schema/${weather}/${packing}/${destination}/${travel}`, method: 'GET'
            })
                .then(function (data) {
                    console.log(data)
                    data.map(e => {
                        for (let i = 0; i < data.length; i++) {
                            if (e.data[i].category === 'clothing') {
                                clothing.push(e.data[i].item)
                                // $('.clothing').append(`<li>${e.data[i].item}</li>`)
                            } else if (e.data[i].category === 'footwear') {
                                footwear.push(e.data[i].item)
                                // $('.footwear').append(e.data[i].item)
                            } else if (e.data[i].category === 'personal') {
                                personal.push(e.data[i].item)
                            //    $('.personl').append(e.data[i].item)
                            } else if (e.data[i].category === 'documents') {
                                documents.push(e.data[i].item)
                                // $('.documents').append(e.data[i].item)
                            } else if (e.data[i].category === 'gadgets') {
                                gadgets.push(e.data[i].item)
                                // $('.gadgets').append(e.data[i].item)
                            } else if (e.data[i].category === 'miscelleneous') {
                                miscelleneous.push(e.data[i].item)
                                // $('.miscelleneous').append(e.data[i].item)
                            }
                        
                        }

                    })
            })
            
            
  
    const cancel = function () {
        $('.modal').addClass('hide')
        $('.image').removeClass('hide');
        $('.image').on('click',selections)
        console.log(weather + destination + travel + packing)
    }
    $('#notrip').on('click', cancel);

})
})