const expect = require('chai').expect;
const inputItem = require('./public/app.js').inputItem;

describe('inputItem', function () {
    it('should be a string of characters', function () {
        expect(inputItem('Nikes')).to.equal(true);
    });

    it('should have an entry', function () {
        expect(inputItem('')).to.equal(false);
    });

    it('should take in an array of strings', function () {
        expect(inputItem(['shirt', 'pants'])).to.equal(true);
    });

    it("should return false if the entry is less that 4 characters long", function () {
        expect(inputItem(a)).to.equal(false);
    });
    it("should return the input regardless of the message", function () {
        expect(inputItem('wqwera')).to.equal(true);
    });
    it("should stringify a numerical input", function () {
        expect(inputItem(123).to.equal('123'));
    });
});

describe('increment', function () {

    beforeEach(function () {
        count = 0;
    });

    it('should increment the counter on click', function () {

        $('#custom-btn').trigger('click');
        expect($('#count').text()).to.equal('1');
    });


    it('should increment the counter twice on 2 click', function () {

        $('#custom-btn').trigger('click');
        $('#custom-btn').trigger('click');
        expect($('#count').text()).to.equal('2');
    });

});

describe('decrement', function () {

    beforeEach(function () {
        count = 0;
    });

    it('should increment the counter on click', function () {

        $('#custom-btn').trigger('click');
        expect($('#count').text()).to.equal('-1');
    });


    it('should increment the counter twice on 2 click', function () {

        $('#custom-btn').trigger('click');
        $('#custom-btn').trigger('click');
        expect($('#count').text()).to.equal('-2');
    });

});

// -------------------------------------------------

//shows modal container
const showModal = function (e) {
    e.preventDefault();
    $('.modal-container').show();
}
//hides modal container
const hideModal = function (e) {
    e.preventDefault();
    $('.modal-container').hide();
}

const showPage2 = function (e) {
    e.preventDefault();
    $('.pagetwo').show();
}

const hidePage2 = function (e) {
    e.preventDefault();
    $('.pagetwo').hide();
}
$('gotrip').on('click', hideModal)
$('gotrip').on('click', showPage2)
$('notrip').on('click', hideModal)


//saves value of the textarea when button is pressed, and hides modal container
const saveTrip = function (e) {
    e.preventDefault();
    const inputTrip = $('#triplocation').val();
    $('#triplocation').val('')
    hideModal(e);
    const tripData = {
        tripName: inputTrip,
        tripList: [],
    }
    $.post('/api/trip', tripData)
        .then(function (data) {
            render(data)
        })

}

$('.main-feed').on('click', '#delete', function () {
    const id = $(this).data('id')
    $.ajax({
            method: 'delete',
            url: `/api/Trip/${id}`

        })
        .then(getTrip());
})
//targets Trip button on homepage to show modal window when pressed
$('#newTrip').on('click', showModal);
//closes modal window when x button is pressed on that window
$('.close-modal').on('click', hideModal);
//closes modal window when Trip is made
$('#Trippost').on('click', saveTrip);


//get route, that pulls the Trip data from database, and renders it to the page as individual Trips. Creates a timeline of Trips by looping through all the Trips in database.
const getTrip = function () {
    $('.center-feed').empty()
    $.get('/api/Trip')
        .then(function (serverData) {
            for (let i = 0; i < serverData.length; i++) {
                render(serverData[i]);
            }
        })
}
getTrip();


$(".image").on("click", function () {
    $(this).css("background-color", "gold");
});
// let count = 0

// const counter = function () {
//     count = count + 1;
//     return count;
// }
// const hideform = function () {
//     if (count === 4) {
//         $('#form').hide();
//         $('#modal').show();
//     }
// }
// $('.weather').on('click', counter)
// $('.travel').on('click', counter)
// $('.destination').on('click', counter)
// $('.expense').on('click', counter)