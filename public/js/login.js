// Login
/*
*  myTrips Will loop through all trips and render all saved trips to the savedtrips section
*  when clicking suitcase but only the trip name will display.  
*  
*  
*/

const myTrips = function () {
    $('#savedtrips').empty();
    $('#savedtrips').append(`<div id="tripheader">My Trips</div>`);
    $.ajax('/api/trips-schema').done(function (tripList) {
        console.log(tripList);
        let htmlstr = '';
        tripList.forEach(e => {
            console.log(e.tripName);
            console.log(e.tripList.clothing);
            let item;
            let group;
            htmlstr += `<ul id="tripname">${e.tripName}<i class="fas fa-trash-alt" id="deltrip" data-tripnameid=${e.tripName} data-tripid=${e._id}></i>`

            htmlstr += `<li class="clothing category">Clothing`
            htmlstr += `<ul class="pieces">`
            e.tripList.clothing.forEach(element => {  
                console.log(Object.keys(e.tripList));
                categories = (Object.keys(e.tripList));
                item = element
                group = categories[0]
                console.log(categories[0]);
                console.log(element);
                htmlstr += `<li id="clothing" class="onepiece">${element}<i class="fas fa-trash-alt delpiece" data-piecename=${element} data-pieceid=${categories[0]}></i></li>`
            });
            htmlstr += `<li class="addpiece onepiece">Add Item`
            htmlstr += `<form class="newpiece">
                            <input id="newcloth" name="newcloth" class="inpiece" type="text" placeholder="New Item" autocomplete="off"/>
                            <button type="submit" data-pieceid=${group} data-tripid=${e._id} class="submitclothing"> Add This Item </button>
                        </form></li>`
            htmlstr += `</ul></li>`
            htmlstr += `<li class="category">Footwear`
            htmlstr += `<ul class="pieces">`
            e.tripList.footwear.forEach(element => {
                console.log(element);
                console.log(categories[1]);
                htmlstr += `<li id="footwear" class="onepiece">${element}<i class="fas fa-trash-alt"></i></li>`
            });
            htmlstr += `<li class="addpiece onepiece">Add Item`
            htmlstr += `<form class="newpiece">
                        <input id="newfoot"  name="newfoot" class="inpiece" type="text" placeholder="New Item" autocomplete="off"/>
                        <button type="submit" id="submitfootwear"></button>
                        </form></li>`  
            htmlstr += `</ul></li>`   
            htmlstr += `<li class="category">Personal Care`
            htmlstr += `<ul class="pieces">`
            e.tripList.personal.forEach(element => {
                console.log(element);
                htmlstr += `<li id="personal" class="onepiece">${element}<i class="fas fa-trash-alt"></i></li>`
            });
            htmlstr += `<li class="addpiece onepiece">Add Item`
            htmlstr += `<form class="newpiece">
                        <input id="newperson" name="newperson" class="inpiece" type="text" placeholder="New Item" autocomplete="off"/>
                        <button type="submit" id="submitperson"></button>
                        </form></li>`
            htmlstr += `</ul></li>`
            htmlstr += `<li class="category">Documents`
            htmlstr += `<ul class="pieces">`
            e.tripList.documents.forEach(element => {
                console.log(element);
                htmlstr += `<li id="documents" class="onepiece">${element}<i class="fas fa-trash-alt"></i></li>`
            });
            htmlstr += `<li class="addpiece onepiece">Add Item`
            htmlstr += `<form class="newpiece">
                        <input id="newdocument" name="newdocument" class="inpiece" type="text" placeholder="New Item" autocomplete="off"/>
                        <button type="submit" id="submitdocument"></button>
                        </form></li>`   
            htmlstr += `</ul></li>` 
            htmlstr += `<li class="category">Gadgets`
            htmlstr += `<ul class="pieces">`
            e.tripList.gadgets.forEach(element => {
                console.log(element);
                htmlstr += `<li id="gadgets" class="onepiece">${element}<i class="fas fa-trash-alt"></i></li>`
            });
            htmlstr += `<li class="addpiece onepiece" >Add Item`
            htmlstr += `<form class="newpiece">
                        <input id="newgadget" name="newgadget" class="inpiece" type="text" placeholder="New Item" autocomplete="off"/>
                        <button type="submit" id="submitgadget"></button>
                        </form></li>`             
            htmlstr += `</ul></li>` 
            htmlstr += `<li class="category">Miscellaneous`
            htmlstr += `<ul class="pieces">`
            e.tripList.miscellaneous.forEach(element => {
                console.log(element);
                htmlstr += `<li id="miscellaneous" class="onepiece">${element}<i class="fas fa-trash-alt"></i></li>`
            });
            htmlstr += `<li class="addpiece onepiece">Add Item`
            htmlstr += `<form class="newpiece">
                        <input id="newmisc" name="newmisc" class="inpiece" type="text" placeholder="New Item" autocomplete="off"/>
                        <button type="submit" id="submitmisc"></button>
                        </form></li>` 
            htmlstr +=`</ul></li>`
            htmlstr +=`</ul>`
            
        });
        $('#savedtrips').append(htmlstr);

    });
};


/*
*   handle functions provide a toggle feature to each trip name to display categories, items, and add new item
*  
*/

function handleCategory(event) {
    event.preventDefault()
    var target = $(event.target);
    // console.log(target);
    if (target.is('#tripname')) {
        target.children('.category').toggle();
    }
}
$('#savedtrips').click(handleCategory).find('.category').hide();


function handlePieces(event) {
    event.preventDefault()
    var target = $(event.target);
    // console.log(target);
    if (target.is('.category')) {
        target.children('.pieces').toggle();
    }
};
$('#savedtrips').click(handlePieces).find('.pieces').hide();

function handleNewPiece(event) {
    event.preventDefault()
    var target = $(event.target);
    // console.log(target);
    if (target.is('.addpiece')) {
        target.children('.newpiece').toggle();
    }
};
$('#savedtrips').click(handleNewPiece).find('.newitem').hide();


function removeHome(e) {
e.preventDefault()
    $('.container').addClass('hide');
    $('#savedtrips').removeClass('hide');
    $('.existing').addClass('hide');
    $('.modal').addClass('hide');
    myTrips();
};
$('#showtrips').on('click', removeHome);

function addHome() {
    //we need to refresh in order for Juliana's content does not take over the icons with categories or modal box
    location.reload()
    $('.container').removeClass('hide');
    $('#savedtrips').addClass('hide');
    $('.existing').addClass('hide');
    $('.modal').addClass('hide');
    $('.image').removeClass('hideItems');
};
$('.fa-home').on('click', addHome);

/*
*  function to delete a trip from the list
*/

$('#savedtrips').on('click', '#deltrip', function (event) {
    event.preventDefault();
    const index = $(this).data('tripnameid');
    console.log(index);
    $.ajax({
            url: `/api/trips-schema/${index}`,
            method: "DELETE"
        })
        .then(function (data) {
            $('#savedtrips').empty();
            myTrips();
        });
});

