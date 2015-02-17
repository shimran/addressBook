$(document).ready(function(){
  $('form#new-contact').submit(function(event) {
    event.preventDefault();

    var inputFirstName = $("input#new-first-name").val();
    var inputLastName = $("input#new-last-name").val();
    var inputAddress = $("input#new-address").val();
    var inputTelephone = $("input#new-telephone").val();
    var newContact = { firstName: inputFirstName,
      lastName: inputLastName,
      address: inputAddress,
      telephone: inputTelephone };


    $("ul#contact").append("<li><span class='contact'>" + newContact.firstName + " " + newContact.lastName + "</span> </li>");
    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-address").val("");
    $("input#new-telephone").val("");

    // Append id=contact to the form, and then use a span class =contact to store information for each link

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName + " " + newContact.lastName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $(".address").text(newContact.address);
      $(".telephone").text(newContact.telephone);
    });
  });
});
