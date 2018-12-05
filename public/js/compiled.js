// // Generate compiled packing list based on user selection

$(document).ready(function () {
    let weather = '';
    let destination = '';
    let travel = '';
    let packing = '';

    const selections =  function(){
        select = $(this).data('category')
        console.log(select)
        if (select === weather) {
            weather = $(this).attr('id');
            console.log(weather)
        } else if (select === destination) {
            destination = $(this).id();
        } else if (select === travel){
            travel = $(this).id();
        } else if (select === packing){
                packing = $(this).id();
        };

if (weather && destination && travel && packing){
    showModal();
}
    }
    $('.image').on('click', selections);
})

$.ajax({ url:`/api/item-schema/${weather}/${travel}/${destination}/${packing}`, method: 'GET', data: data})
console.log(weather)
.then(function(data){
let clothing = [];
let footWare = [];
let personal = [];
let documents = [];
let gadgets = [];
let miscellaneous = [];


     $('.container').html(content);

})