// Login

const myTrips = function () {
    $('#savedtrips').empty();
    $.ajax('/api/trips-schema').done(function(tripList) {
        console.log(tripList);
        let htmlstr = '';
        tripList.forEach(e => {
            console.log(e.tripName);
            console.log(e.tripList.clothing);
            htmlstr += `<ul id="tripname">${e.tripName}<i class="fas fa-trash-alt" id="deltrip" data-tripid=${e._id}></i>`
           
            htmlstr += `<li class="clothing category">Clothing`
            htmlstr += `<ul class="pieces">`
            e.tripList.clothing.forEach(element => {  
                console.log(element);           
                htmlstr += `<li id="clothing">${element}<i class="fas fa-trash-alt" id="delpiece" data-pieceid=${element.id}></i></li>`             
            });  
            htmlstr += `<li id="addcloth">Add Item</li>`
            htmlstr += `<form class="clothform">
                            <input id="newcloth" class="newcloth" name="newcloth" type="text" placeholder="New Item" autocomplete="off"/>
                            <button type="submit" id="submitclothing"></button>
                        </form>`
            htmlstr += `</ul></li>`             
            htmlstr += `<li class="category">Footwear`
            htmlstr += `<ul class="pieces">`
            e.tripList.footwear.forEach(element =>  {  
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
            e.tripList.personal.forEach(element =>  {  
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
            e.tripList.documents.forEach(element =>  {  
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
            e.tripList.gadgets.forEach(element =>  {  
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
            e.tripList.miscellaneous.forEach(element => {  
                console.log(element);   
                htmlstr += `<li id="miscellaneous">${element}<i class="fas fa-trash-alt"></i></li>`   
            });  
            htmlstr += `<li id="addmisc">Add Item</li>`
            htmlstr += `<form class="miscform">
                            <input id="newmisc" class="newmisc" name="newmisc" type="text" placeholder="New Item" autocomplete="off"/>
                            <button type="submit" id="submitmisc"></button>
                        </form>` 
            htmlstr +=`</ul></li>`
            htmlstr +=`</ul>`
            
        });
        $('#savedtrips').append(htmlstr);
        
    });
};
//$('#showtrips').on('click', myTrips);


function handleCategory(event) {
    var target = $(event.target);
    console.log(target);
    if (target.is('#tripname')) {
    target.children('.category').toggle();
    }
}
$('#savedtrips').click(handleCategory).find('.category').hide();


function handlePieces(event) {
    var target = $(event.target);
    console.log(target);
    if (target.is('.category')) {
    target.children('.pieces').toggle();
    }
};
$('#savedtrips').click(handlePieces).find('.pieces').hide();


const showAddCloth = function () {
    console.log('click')
    $('.newcloth').toggleClass('show');
};
$('#savedtrips').on('click', '#addcloth', showAddCloth);

const showAddFoot = function () {
    console.log('click')
    $('.newfoot').toggleClass('show');
};
$('#savedtrips').on('click', '#addfoot', showAddFoot);

const showAddPerson = function () {
    console.log('click')
    $('.newperson').toggleClass('show');
};
$('#savedtrips').on('click', '#addperson', showAddPerson);

const showAddDoc = function () {
    console.log('click')
    $('.newdocument').toggleClass('show');
};
$('#savedtrips').on('click', '#adddocument', showAddDoc);

const showAddGad = function () {
    console.log('click')
    $('.newgadget').toggleClass('show');
};
$('#savedtrips').on('click', '#addgadget', showAddGad);

const showAddMisc = function () {
    console.log('click')
    $('.newmisc').toggleClass('show');
};
$('#savedtrips').on('click', '#addmisc', showAddMisc);

function removeHome() {
   
    $('.container').addClass('hide');
    $('#savedtrips').removeClass('hide');
    myTrips();
};
$('#showtrips').on('click', removeHome);

function addHome() {
    $('.container').removeClass('hide');
    $('#savedtrips').addClass('hide');
};
$('.fa-home').on('click', addHome);





$('#savedtrips').on('click','#deltrip', function(event) {
    event.preventDefault();
    const index = $(this).data('tripid');
    console.log(index);
    $.ajax({ url: `/api/trips-schema/${index}`, method: "DELETE"})
    .then(function(data) {
        $('#savedtrips').empty();
        myTrips();
    });
});

$('#savedtrips').on('click','#delpiece', function(event) {
    event.preventDefault();
    const index = $(this).data('pieceid');
    console.log(index);
    $.ajax({ url: `/api/trips-schema/${index}`, method: "DELETE"})
    .then(function(data) {
        $('#savedtrips').empty();
        myTrips();
    });
});