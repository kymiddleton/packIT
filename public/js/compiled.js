// // Generate compiled packing list based on user selection

$(document).ready(function () {
    let weather = '';
    let destination = '';
    let travel = '';
    let packing = '';

    const selections =  function(){
        select = $(this).data('category')
        if (select === 'weather') {
            weather = $(this).attr('value');
            console.log(weather)
        } else if (select === 'destination') {
            destination = $(this).attr('value');
            console.log(destination)
        } else if (select === 'travel'){
            travel = $(this).attr('value');
            console.log(travel)
        } else if (select === 'packing'){
                packing = $(this).attr('value');
                console.log(packing)
        };
if (weather && destination && travel && packing){
    showModal();
}
    }
    $('.image').on('click', selections);
})


$.ajax({ url:`/api/item-schema/items`, method: 'GET', 
data: { weather: 'rain',
        packing: 'diva',
        destination:'city',
        travel:'car'}})

.then(function(data){
    console.log(data)

    

})