// // Generate compiled packing list based on user selection
$(document).ready(function () {
    let weather = '';
    let packing = '';
    let destination = '';
    let travel = '';
    let itemList = {};
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
            $('#filteredList').addClass('hide');

        }

    }
    $('.image').on('click', selections);

    $('#gotrip').on('click', function () {

        $('.modal').addClass('hide');
        $('#filteredList').removeClass('hide');

        console.log(weather + packing + destination + travel)

        $.ajax({
            url: `/api/item-schema/${weather}/${packing}/${destination}/${travel}`, method: 'GET'
        })
            .then(function (data) {
                let clothing = [];
                let footwear = [];
                let personal = [];
                let documents = [];
                let gadgets = [];
                let miscelleneous = [];
                // console.log(`this is footwear array before ` + clothing)
                console.log(data)
                for (let i = 0; i < data.length; i++) {
                    // console.log(data[i].category)
                    let category = data[i].category;
                    category = category.toLowerCase();
                    if (category == 'clothing') {
                        clothing.push(data[i].item)
                        console.log(data[i].item + `this is from clothing`)
                        // $('.clothing').append(`<li>${e.data[i].item}</li>`)
                    } else if (category == 'footwear') {
                        footwear.push(data[i].item)
                        // console.log('footwear')
                        // $('.footwear').append(`<li>${e.data[i].item}</li>`)
                    } else if (category == 'personal') {
                        personal.push(data[i].item)
                        //    $('.personl').append(e.data[i].item)
                    } else if (category == 'documents') {
                        documents.push(data[i].item)
                        // $('.documents').append(e.data[i].item)
                    } else if (category == 'gadgets') {
                        gadgets.push(data[i].item)
                        // $('.gadgets').append(e.data[i].item)
                    } else if (category == 'miscelleneous') {
                        miscelleneous.push(data[i].item)
                        // $('.miscelleneous').append(e.data[i].item)
                    }

                };
                console.log(`this should contain items : ` + clothing)
                itemList = {
                    'clothing': clothing,
                    'footwear': footwear,
                    'personal': personal,
                    'documents': documents,
                    'gadgets': gadgets,
                    'miscelleneous': miscelleneous
                };
                console.log(`this is the jason file ` + JSON.stringify(itemList))
                console.log(`this is footwear array after ` + clothing)

            }).then(function () {

                $('#preCompiled').empty();
                $.ajax('/api/trips-schema').done(function () {
                    console.log('itemList: ' + JSON.stringify(itemList))
                    for (let key in itemList) {
                        console.log('key: ' + key);
                        //    for (let i= 0; i < itemList[key].length; i ++){
                        let categoryValue = itemList[key];
                        console.log('categoryValue: ' + categoryValue)
                        if (categoryValue.length > 0) {
                            console.log('categoryValue: ' + categoryValue.length)

                            if (key == 'clothing') {
                                //we only use [0] for testing to see the first value in the array that is returned
                                //We need to create a loop inside of here to get each element in the array
                                // we then will append each element in the array
                                for (let i = 0; i < categoryValue.length; i++) {

                                    $('.clothing').append(`<li class ="item">${categoryValue[i]}</li>`)
                                }
                                console.log('clothing: '+categoryValue[0])
                            }
                            else if (key == 'footwear') {
                                for (let i = 0; i < categoryValue.length; i++) {
                                    $('.footwear').append(`<li class="item">${categoryValue[i]}</li>`)
                                    console.log('footwear: '+categoryValue[i])
                                
                                }
                            }
                            else if (key == 'personal') {
                                for (let i = 0; i < categoryValue.length; i++) {
                                    $('.personal').append(`<li class ="item">${categoryValue[i]}</li>`)
                                    console.log('personal: '+categoryValue[i])
                                
                                }
                            } else if (key == 'documents') {
                                for (let i = 0; i < categoryValue.length; i++) {
                                    $('.gadgets').append(`<li class = "item">${categoryValue[i]}</li>`)
                                console.log('gadgets: '+categoryValue[i])

                                }
                            } else if (key == 'documents') {
                                for (let i = 0; i < categoryValue.length; i++) {
                                    $('.miscellaneous').append(`<li class = "item">${categoryValue[i]}</li>`)
                                }
                            }
                        }
                    };
                });
            });


        const cancel = function () {
            $('.modal').addClass('hide');
            $('.image').removeClass('hide');
            $('.image').on('click', selections);
        }
        $('#notrip').on('click', cancel);


    });

});