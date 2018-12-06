// // Generate compiled packing list based on user selection

$(document).ready(function () {
    let weather = '';
    let destination = '';
    let travel = '';
    let packing = '';

    const selections =  function(){
        category = $(this).data('data-category')
        console.log(category)
        if (category === weather) {
            weather = $(this).id();
            console.log('clicked')
        } else if (category === destination) {
            destination = $(this).id();
        } else if (category === travel){
            travel = $(this).id();
        } else if (category === packing){
                packing = $(this).id();
        }

if (weather && destination && travel && packing){
    showModal();
}
    }
    $('.image').on('click', selections);
})
