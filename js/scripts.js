var fullAddress = function(address) {

var formattedAddress = address.street + "\n" +address.city + " "+ address.state + " " +address.zip;
return formattedAddress;

};

$(document).ready(function(){
  $("#show-contact").hide();
  $('form#new-contact').submit(function(event) {
    event.preventDefault();

    var inputFirstName = $("input#new-first-name").val();
    var inputLastName = $("input#new-last-name").val();
    //var inputAddress = $("input#new-address").val();
    var inputTelephone = $("input#new-telephone").val();
    var inputStreet = $("input#new-street").val();
    var inputCity = $("input#new-city").val();
    var inputState = $("input#new-state").val();
    var inputZip = parseInt($("input#new-zip").val());
    var newContact = { firstName: inputFirstName,
      lastName: inputLastName,
      street: inputStreet,
      city: inputCity,
      state: inputState,
      zip: inputZip,
      telephone: inputTelephone };


    $("ul#contact").append("<li><span class='contact'>" + newContact.firstName + " " + newContact.lastName + "</span> </li>");
    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    //$("input#new-address").val("");
    $("input#new-street").val("");
    $("input#new-city").val("");
    $("input#new-state").val("");
    $("input#new-zip").val("");
    $("input#new-telephone").val("");


    // Append id=contact to the form, and then use a span class =contact to store information for each link

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName + " " + newContact.lastName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $(".address").text(fullAddress(newContact));
      // $(".street").text(newContact.street);
      // $(".city").text(newContact.city);
      // $(".state").text(newContact.state);
      // $(".zip").text(newContact.zip);
      $(".telephone").text(newContact.telephone);
    });
  });
});
