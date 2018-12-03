// // Generate compiled packing list based on user selection

$(function () {
//     // $('#submit').on('click', newList);

    const packingList = function () {
        $.ajax({ url: `/api/listLog/${weather}/${packing}/${destination}/${travel}`, method: 'GET' })
//             .then(function (packingList) {
//                 let selection = { row1: none, row2: none, row3: none, row4: none }
//                 $('.myGridClass').on('click', function (e) {
//           
//                     selection[$(e.target).data(row)] = e.target.id
//                 })
//                 console.log(packingList)
//             });
    }

    packingList();
//     const newList = function () {
//         $.ajax({ url: `/api/listLog/${weather}/${packing}/${destination}/${travel}`, method: 'POST', data: newtodo })
//             .then(function () {

//             })

//     }
//     newList();

})


