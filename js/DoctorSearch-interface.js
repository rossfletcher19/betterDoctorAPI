import {promise} from "./../js/DoctorSearch.js";

$(document).ready(function() {
  $('#doctorSearchform').submit(function(event) {
    event.preventDefault();
    let name = $('#name').val();
    let symptom = $('#symptom').val();
    let perPage = $('#per-page').val();
    let newSearch = promise(name, symptom, perPage);
    $('#result').empty();
    // debugger;
    newSearch.then(function(response) {
      let body = JSON.parse(response);
      for (let i = 0; i < body.data.length; i++) {
      $('#result').append('<h2>' + body.data[i].profile.first_name +
                          ' ' + body.data[i].profile.last_name + '</h2>' +
                          '<img src=' + body.data[i].profile.image_url + '>' +
                          '<p>' + body.data[i].practices.visit_address + '</p>'
                        );

      if (body.data.length === null) {
         $('#result').append("<p><em> No results found </em></p>" + "<hr>");
       } else {
           console.log("No results found");
       }
    }
    }, function (error) {
      $('.showErrors').text('There was an error: ${error.message}');

  });
});

});
