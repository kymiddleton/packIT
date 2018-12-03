// Generate compiled packing list based on user selection

$(function () {
    //
    // $('#submit').on('click', newList);

    const packingList = function () {


        $.ajax({ url: `/api/listLog/${weather}/${packing}/${destination}/${travel}`, method: 'GET' })
            .then(function (packingList) {
                let selection = { row1: none, row2: none, row3: none, row4: none }
                // let weather = document.getElemenybyId('.row1).val()
                // let packing = document.getElemenybyId('.row4).val()
                // let destination = document.getElemenybyId('.row3).val()
                // let travel = document.getElemenybyId('.row2).val()
                $('.myGridClass').on('click', function (e) {
                    console.log('clicked')
                    selection[$(e.target).data(row)] = e.target.id
                })
                packingList.filter(e => { $(`#container`).append() })
                console.log(packingList)
            });
    }

    packingList();
    const newList = function (newtodo) {
        $.ajax({ url: `/api/listLog/${weather}/${packing}/${destination}/${travel}`, method: 'POST', data: newtodo })
            .then(function () {

            })

    }
    newList();

})


// It's like says selection[row] = hotday