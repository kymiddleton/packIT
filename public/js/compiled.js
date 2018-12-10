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
                    console.log(`this is footwear array before ` + clothing)
                    console.log(data)
                            for (let i = 0; i < data.length; i++) {
                            console.log(data[i].category)
                            let category = data[i].category;
                            category = category.toLowerCase();
                            if (category == 'clothing') {
                                clothing.push(data[i].item)
                                console.log(data[i].item + `this is from clothing`)
                                // $('.clothing').append(`<li>${e.data[i].item}</li>`)
                            } else if (category == 'footwear') {
                                footwear.push(data[i].item)
                                console.log('footwear')
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
                           
                        }
                let itemList = {
                    'clothing' : clothing,
                    'footwear' : footwear,
                    'personal' : personal,
                    'documents' : documents,
                    'gadgets' : gadgets,
                    'miscelleneous' : miscelleneous
                }
                console.log(`this is the jason file ` + JSON.stringify(itemList))
                        console.log(`this is footwear array after ` + clothing)
                            
                        })  .then(function (data) {
                            $('#savedtrips').empty();
                            $.ajax('/api/trips-schema').done(function(itemList) {
                                console.log(itemList);
                                let htmlstr = '';
                                itemList.forEach(e => {
                                    // console.log(e.tripName);
                                    // console.log(e.tripList.clothing);
                                    // htmlstr += `<ul id="tripname">${e.tripName}<i class="fas fa-trash-alt" id="deltrip" data-tripid=${e._id}></i>`
                                   
                                    // htmlstr += `<li class="clothing category">Clothing`
                                    // htmlstr += `<ul class="pieces">`
                                    e.itemList.clothing.forEach(element => {  
                                        console.log(element);           
                                        htmlstr += `<li id="clothing">${element}<i class="fas fa-trash-alt" id="delpiece" data-pieceid=${element.id}></i></li>`             
                                    });           
                                    htmlstr += `<li class="category">Footwear`
                                    htmlstr += `<ul class="pieces">`
                                    e.itemList.footwear.forEach(element =>  {  
                                        console.log(element);   
                                        htmlstr += `<li id="footwear">${element}<i class="fas fa-trash-alt"></i></li>`   
                                    });  
                                    htmlstr += `<li id="addfoot">Add Item</li>`
                                    htmlstr += `<form class="footform">
                                                    <input id=newfoot class="newfoot" name="newfoot" type="text" placeholder="New Item" autocomplete="off"/>
                                                    <button type="submit" id="submitfootwear"></button>
                                                </form>`  
                                    htmlstr += `</ul></li>`   
                                    htmlstr += `<li class="category">Personal Care`
                                    htmlstr += `<ul class="pieces">`
                                    e.itemList.personal.forEach(element =>  {  
                                        console.log(element);   
                                        htmlstr += `<li id="personal">${element}<i class="fas fa-trash-alt"></i></li>`   
                                    });  
                                    htmlstr += `<li id="addperson">Add Item</li>`
                                    htmlstr += `<form class="personform">
                                                    <input id="newperson" class="newperson" name="newperson" type="text" placeholder="New Item" autocomplete="off"/>
                                                    <button type="submit" id="submitperson"></button>
                                                </form>`
                                    htmlstr += `</ul></li>`     
                                    htmlstr += `<li class="category">Documents`
                                    htmlstr += `<ul class="pieces">`
                                    e.itemList.documents.forEach(element =>  {  
                                        console.log(element);   
                                        htmlstr += `<li id="documents">${element}<i class="fas fa-trash-alt"></i></li>`   
                                    }); 
                                    htmlstr += `<li id="adddocument">Add Item</li>`
                                    htmlstr += `<form class="documentform">
                                                    <input id="newdocument" class="newdocument" name="newdocument" type="text" placeholder="New Item" autocomplete="off"/>
                                                    <button type="submit" id="submitdocument"></button>
                                                </form>`   
                                    htmlstr += `</ul></li>` 
                                    htmlstr += `<li class="category">Gadgets`
                                    htmlstr += `<ul class="pieces">`
                                    e.itemList.gadgets.forEach(element =>  {  
                                        console.log(element);   
                                        htmlstr += `<li id="gadgets">${element}<i class="fas fa-trash-alt"></i></li>`   
                                    });   
                                    htmlstr += `<li id="addgadget">Add Item</li>`
                                    htmlstr += `<form class="gadgetform">
                                                    <input id="newgadget" class="newgadget" name="newgadget" type="text" placeholder="New Item" autocomplete="off"/>
                                                    <button type="submit" id="submitgadget"></button>
                                                </form>`   
                                   
                                    htmlstr += `</ul></li>` 
                                    htmlstr += `<li class="category">Miscellaneous`
                                    htmlstr += `<ul class="pieces">`
                                    e.itemList.miscellaneous.forEach(element => {  
                                        console.log(element);   
                                        htmlstr += `<li id="miscellaneous">${element}<i class="fas fa-trash-alt"></i></li>`   
                                    });  
                                    htmlstr +=`</ul>`
                                    
                                });
                                $('#preCompiled').append(htmlstr);
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