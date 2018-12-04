// Login

const myTrips = function () {
    $.ajax('/myTrips').done(function(tripList) {
        console.log(tripList);
        let htmlstr = '';
        tripList.forEach(e => {
            console.log(e.tripName);
            console.log(e.tripList.clothing);
            htmlstr += `<h2 id="tripname">${e.tripName}</h2>`
            htmlstr += `<h3 class="clothes">Clothing</h3>`
            e.tripList.clothing.forEach(element => {  
                console.log(element);           
                htmlstr += `<h5 id="clothing">${element}</h5>`             
            });                  
            htmlstr += `<h3 class="category">Footwear</h3>`
            e.tripList.footwear.forEach(element =>  {  
                console.log(element);   
                htmlstr += `<h5 id="footwear">${element}</h5>`   
            });     
            htmlstr += `<h3 class="category">Personal Care</h3>`
            e.tripList.personal.forEach(element =>  {  
                console.log(element);   
                htmlstr += `<h5 id="personal">${element}</h5>`   
            });     
            htmlstr += `<h3 class="category">Documents</h3>`
            e.tripList.documents.forEach(function(element) {  
                console.log(element);   
                htmlstr += `<h5 id="documents">${element}</h5>`   
            });    
            htmlstr += `<h3 class="category">Gadgets</h3>`
            e.tripList.gadgets.forEach(function(element) {  
                console.log(element);   
                htmlstr += `<h5 id="gadgets">${element}</h5>`   
            });   
            htmlstr += `<h3 class="category">Miscellaneous</h3>`
            e.tripList.miscellaneous.forEach(function(element) {  
                console.log(element);   
                htmlstr += `<h5 id="miscellaneous">${element}</h5>`   
            });  
          
       
    });
        $('#savedtrips').html(htmlstr);
        
      });
};
$('button').on('click', myTrips);