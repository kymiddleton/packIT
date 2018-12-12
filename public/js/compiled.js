// // Generate compiled packing list based on user selection
$(document).ready(function () {
    
        $(".itemsone").click(function(){
            $(".itemsOne").toggleClass("hideItems");
        });
        $(".itemstwo").click(function(){
            $(".itemsTwo").toggleClass("hideItems");
        });
        $(".itemsthree").click(function(){
            $(".itemsThree").toggleClass("hideItems");
        });
        $(".itemsfour").click(function(){
            $(".itemsFour").toggleClass("hideItems");
        });
        $(".itemsfive").click(function(){
            $(".itemsFive").toggleClass("hideItems");
        });
        $(".itemssix").click(function(){
            $(".itemsSix").toggleClass("hideItems");
        });

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

            $('.image').addClass('hideItems');
            $('.modal').removeClass('hideItems');
            $('#filteredList').addClass('hideItems');
      

        }

    }
    $('.image').on('click', selections);

    $('#gotrip').on('click', function () {

        $('.modal').addClass('hideItems');
        $('.existing').removeClass('hideItems');
      

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
                let miscellaneous = [];

                console.log(data)
                for (let i = 0; i < data.length; i++) {
                    let category = data[i].category;
                    category = category.toLowerCase();
                    if (category == 'clothing') {
                        clothing.push(data[i].item)
                    } else if (category == 'footwear') {
                        footwear.push(data[i].item)
                    } else if (category == 'personal') {
                        personal.push(data[i].item)
                    } else if (category == 'documents') {
                        documents.push(data[i].item)
                    } else if (category == 'gadgets') {
                        gadgets.push(data[i].item)
                    } else if (category == 'miscellaneous') {
                        miscellaneous.push(data[i].item)
                    }
                };
                itemList = {
                    'clothing': clothing,
                    'footwear': footwear,
                    'personal': personal,
                    'documents': documents,
                    'gadgets': gadgets,
                    'miscellaneous': miscellaneous
                };
 
            }).then(function () {
                let tripName = $('#name').val();
                $.ajax({url:'/api/trips-schema', method: 'POST',
                 data: {tripName:tripName, tripList: itemList}}).then(res => console.log(res))
            }).done(function () {
                    // let tripName = $('.name').val();
                    for (let key in itemList) {
                        let categoryValue = itemList[key];
                        
                        if (categoryValue.length > 0) {
                            if (key == 'clothing') {
                                //we only use [0] for testing to see the first value in the array that is returned
                                //We need to create a loop inside of here to get each element in the array
                                // we then will append each element in the array
                                for (let i = 0; i < categoryValue.length; i++) {
                                    $('.clothing').append(`<li class ="itemsOne hideItems"><input type ="checkbox">${categoryValue[i]}</li>`)
                                }
                            } else if (key == 'footwear') {
                                for (let i = 0; i < categoryValue.length; i++) {
                                    $('.footwear').append(`<li class="itemsTwo hideItems"><input type ="checkbox">${categoryValue[i]}</li>`)
                                }
                            } else if (key == 'personal') {
                                for (let i = 0; i < categoryValue.length; i++) {
                                    $('.personal').append(`<li class ="itemsThree hideItems"><input type ="checkbox">${categoryValue[i]}</li>`)
                                
                                }
                            } else if (key == 'documents') {
                                for (let i = 0; i < categoryValue.length; i++) {
                                    $('.documents').append(`<li class = "itemsFour hideItems"><input type ="checkbox">${categoryValue[i]}</li>`)

                                }
                            } else if (key == 'gadgets') {
                                for (let i = 0; i < categoryValue.length; i++) {
                                    $('.gadgets').append(`<li class = "itemsFive hideItems"><input type ="checkbox">${categoryValue[i]}</li>`)
                                }

                            } else if (key == 'miscellaneous') {
                                for (let i = 0; i < categoryValue.length; i++) {
                                    $('.miscellaneous').append(`<li class = "itemsSix hideItems"><input type ="checkbox">${categoryValue[i]}</li>`)
                                }
                        }
                    }
                    };
                });
            });


        const cancel = function () {
            $('.modal').addClass('hideItems');
            $('.image').removeClass('hideItems');
            $('.image').on('click', selections);
        }
   
        $('#notrip').on('click', cancel);


    });
