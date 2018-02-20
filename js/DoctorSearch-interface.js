import {promise} from "./../js/DoctorSearch.js";

$(document).ready(function() {
  $('#doctorSearchform').submit(function(event) {
    event.preventDefault();
    let name = $('#name').val();
    let symptom = $('#symptom').val();
    let location = $('#location').val();
    let perPage = $('#per-page').val();
    let newSearch = promise(name, symptom, location, perPage);
    $('#result').empty();
    $('.results').show();
    $('.home').hide();
    // debugger;
    newSearch.then(function(response) {
      let body = JSON.parse(response);
      for (let i = 0; i < body.data.length; i++) {
        $('#result').append(   '<h2>' + body.data[i].profile.first_name +
                              ' ' + body.data[i].profile.last_name + '</h2>' +
                              '<img src=' + body.data[i].profile.image_url + '>' +
                              '<li>' + body.data[i].practices[0].visit_address.street + '</li>' +
                              '<li>' + body.data[i].practices[0].visit_address.city + ', ' + body.data[i].practices[0].visit_address.state + " " + body.data[i].practices[0].visit_address.zip + '</li>' +
                              '<li>' + body.data[i].specialties[0].name + '</li>' +
                              '<li>' + '<b>' + 'Phone # : ' + '</b>' + body.data[i].practices[0].phones[0].number + "</li>"
        );


        if (body.data[i].practices[0].website === undefined) {
          $('#result').append('<li>' + "No website listed" + '</li>');
        } else {
          $('#result').append('<li>' + body.data[i].practices[0].website + '</li>');
        }



      // if (body.data.length === 0) {
      //    $('#result').append("<p><em> No results found </em></p>" + "<hr>");
      //  } else {
      //      console.log("No results found");
      //  }
      }
    }, function (error) {
      $('.showErrors').text('There was an error: ${error.message}');

    });
  });
});
