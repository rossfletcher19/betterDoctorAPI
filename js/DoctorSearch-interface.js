import {promise} from "./../js/DoctorSearch.js";

$(document).ready(function() {
  $('#doctorSearchform').submit(function(event) {
    event.preventDefault();
    let name = $('#name').val();
    let symptom = $('#symptom').val();
    let perPage = $('#per-page').val();
    let newSearch = promise(name, symptom, perPage);
    $('#result').empty();

    newSearch.then(function(response) {
      let body = JSON.parse(response);
      for (let i = 0; i < body.data.practices.length; i++) {
      $('#result').append("<h2>" + body.data.practices[i].name + "</h2>" +
                          "<br>" +
                          "<p>" + "<b>" + "Street Address:" + "</b>" + body.data.visit_address[i].street + "</p>" +
                          "<p>" + "<b>" + "City/State:" + "</b>" + body.data.visit_address[i].city + "," + body.data.visit_address[i].state + "</p>" +
                          "<p>" + "<b>" + "Phone:" + "</b>" + body.data.phones[i].number + "</p>" +
                          "<p>" + "<b>" + "Accepting New Patients:" + "</b>" + body.data.practices[i].accepts_new_patients + "</p>" +
                        );
      if (body.data.practices.length === null) {
         $('#result').append("<p><em> No results found </em></p>" + "<hr>");
       } else {
           console.log(No results found);
       }
    }
    }, function (error) {
      $('.showErrors').text('There was an error: ${error.message}');


  });
});

});
