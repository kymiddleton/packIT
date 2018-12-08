// Login

const myTrips = function () {
    $.ajax('/api/trips-schema').done(function(tripList) {
        console.log(tripList);
        let htmlstr = '';
        tripList.forEach(e => {
            console.log(e.tripName);
            console.log(e.tripList.clothing);
            htmlstr += `<ul id="tripname">${e.tripName}<i class="fas fa-trash-alt" id="deltrip" data-tripid=${e._id}></i>`
           
            htmlstr += `<li class="clothing category">Clothing</li>`
            htmlstr += `<ul>`
            e.tripList.clothing.forEach(element => {  
                console.log(element);           
                htmlstr += `<li class="pieces"><h5 id="clothing">${element}</h5><i class="fas fa-trash-alt" id="delpiece" data-pieceid=${element.id}></i></li>`             
            });  
            htmlstr += `</ul>`             
            htmlstr += `<li class="category">Footwear</li>`
            htmlstr += `<ul>`
            e.tripList.footwear.forEach(element =>  {  
                console.log(element);   
                htmlstr += `<li class="pieces"><h5 id="footwear">${element}</h5><i class="fas fa-trash-alt"></i></li>`   
            });    
            htmlstr += `</ul>`   
            htmlstr += `<li><h3 class="category">Personal Care</h3></li>`
            htmlstr += `<ul>`
            e.tripList.personal.forEach(element =>  {  
                console.log(element);   
                htmlstr += `<li class="pieces"><h5 id="personal">${element}</h5><i class="fas fa-trash-alt"></i></li>`   
            });  
            htmlstr += `</ul>`     
            htmlstr += `<li><h3 class="category">Documents</h3></li>`
            htmlstr += `<ul>`
            e.tripList.documents.forEach(element =>  {  
                console.log(element);   
                htmlstr += `<li class="pieces"><h5 id="documents">${element}</h5><i class="fas fa-trash-alt"></i></li>`   
            });    
            htmlstr += `</ul>` 
            htmlstr += `<li><h3 class="category">Gadgets</h3></li>`
            htmlstr += `<ul>`
            e.tripList.gadgets.forEach(element =>  {  
                console.log(element);   
                htmlstr += `<li class="pieces"><h5 id="gadgets">${element}</h5><i class="fas fa-trash-alt"></i></li>`   
            });   
            htmlstr += `</ul>` 
            htmlstr += `<li><h3 class="category">Miscellaneous</h3></li>`
            htmlstr += `<ul>`
            e.tripList.miscellaneous.forEach(element => {  
                console.log(element);   
                htmlstr += `<li class="pieces"><h5 id="miscellaneous">${element}</h5><i class="fas fa-trash-alt"></i></li>`   
            });  
            htmlstr +=`</ul>`
            htmlstr +=`</ul>`
            
        });
        $('#savedtrips').html(htmlstr);
        
    });
};
// $('button').on('click', myTrips);


function handleCategory(event) {
    var target = $(event.target);
    console.log(target);
    if (target.is('#tripname')) {
    target.children('.category').toggle();
    }
}
$('#savedtrips').click(handleCategory).find('.category').hide();

// const togglesCategory = function () {
//     $('.category').toggleClass('show');
// };
// $('#savedtrips').on('click','#tripname', togglesCategory);

// const togglesPieces = function () {
//     $('.pieces').toggleClass('show');
// };
// $('#savedtrips').on('click','#tripname', togglesPieces);


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