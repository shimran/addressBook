
$(document).ready(function(){

  $("#show-contact").hide();
  $('form#new-contact').submit(function(event) {
    event.preventDefault();

    var inputFirstName = $("input#new-first-name").val();
    var inputLastName = $("input#new-last-name").val();
    var inputTelephone = $("input#new-telephone").val();
    var newContact = { firstName: inputFirstName,
      lastName: inputLastName,
      addresses: [],
      telephones: []}

      var inputStreet = $("input#new-street").val();
      var inputCity = $("input#new-city").val();
      var inputState = $("input#new-state").val();
      var inputZip = parseInt($("input#new-zip").val());
      var address ={street: inputStreet,
        city: inputCity,
        state: inputState,
        zip: inputZip}
      var formattedAddress = address.street + "\n" + address.city + ", " + address.state + ", " + address.zip;
      newContact.addresses.push(address);

  var inputCell = $("input#new-cell").val();
  var inputWork = $("input#new-work").val();
  var inputLandLine = $("input#new-landline").val();
  var inputEmergency = $("input#emergency").val();


     var telephone = {primary: inputTelephone,
       cell: inputCell,
       work: inputWork,
       landline: inputLandLine,
       emergency: inputEmergency}

       newContact.telephones.push(telephone);

    $("ul#contact").append("<li><span class='contact'>" + newContact.firstName + " " + newContact.lastName + "</span> </li>");



    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
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
      newContact.addresses.forEach(function(address){
      $(".address").text(formattedAddress);
      });
      // $(".street").text(newContact.street);
      // $(".city").text(newContact.city);
      // $(".state").text(newContact.state);
      // $(".zip").text(newContact.zip);
      newContact.telephones.forEach(function(telephone){
      $(".telephone").text(telephone.primary);
      });
    });

    $("#add-phone").click(function() {
      $('#new-phones').append('<div class="form-group">' +
                                '<form id="add-new-phones">' +
                                '<label for="new-cell">Cell</label>'+'<input type="text" class="form-control" id="new-cell">'
                                +'<label for="new-landline">Landline</label>'
                                +'<input type="text" class="form-control" id="new-landline">'
                                +'<label for="new-work">Work</label>'+'<input type="text" class="form-control" id="new-work">'
                                +'<label for="new-emergency">Emergency Contact</label>' +
                                '<input type="text" class="form-control" id="new-emergency">' +
                                '<button type="submit" id="add-new-phones" class="btn">Submit</button>' + '</form>'+
                              '</div>');
    });

    $("#add-new-phones").submit(function(event){
      event.preventDefault();
        $("#show-contact").show();
        $("#show-contact h2").text(newContact.firstName + " " + newContact.lastName);
        $(".first-name").text(newContact.firstName);
        $(".last-name").text(newContact.lastName);
        newContact.addresses.forEach(function(address){
        $(".address").text(formattedAddress);
        $("#new-emergency").text(telephone.emergency)

        });

    });
    $("#add-address").click(function(){
      $('#new-address').append('<div class="form-group">'+'<label for="new-street">Street</label>' +'<input type="text" class="form-control" id="new-street">'
                                +'<label for="new-city">City</label>' + '<input type="text" class="form-control" id="new-city">'
                                +'<label for="new-state">State</label>'+'<input type="text" class="form-control" id="new-state">'
                                +'<label for="new-zip">Zip</label>'+ '<input type="text" class="form-control id=new-zip ">'
                                +'<button type="submit" id="add-new-addresses" class="btn">Submit</button>'+
                                '</div>');
    });
    $("#add-new-addresses").click(function(){
      $(".address").text(formattedAddress);

  });


});
});
