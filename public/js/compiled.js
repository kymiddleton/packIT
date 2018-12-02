// Generate compiled packing list based on user selection

$(function () {


    const packingList = function () {
        // let weather =
        // let packing =
        // let destination = 
        // let travel =
            $.ajax({ url: `/api/listLog/${weather}/${packing}/${destination}/${travel}`, method: 'GET' })
                .then(function (packingList) {
                //restrict selection to 4 icons/buttons
                    $(".selection").change(function() {
                        let button = $(this).next("button");
                        if (this.value == "4") {
                          button.prop("disabled", false);
                        } else {
                          button.prop("disabled", true)
                        } 
                      });
                    packingList.filter(e => { $(`#container`).append() })
                    console.log(packingList)
                });
    }

    packingList();
    const newList = function (newtodo) {
        $.ajax({ url: `/api/listLog/${weather}/${packing}/${destination}/${travel}`, method: 'POST', data: newtodo })
            .then(function () {
                let newList = $('input').val();
                $('#container').append($())
            })


        $('#container')
    }    
    $('#submit').on('click', function () {
      
    })
    newList();
})

