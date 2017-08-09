$(document).ready(function() {
  $(".clickable").click(function() {
    $(this.children).toggle();
  })
  $("form#contact1").submit(function(event) {
    event.preventDefault();
    var name1 = $("#name1").val();
    var address1 = $("#address1").val();
    var phone1 = parseInt($("#phone1").val());
    var dob1 = $("#dob1").val();
    $("#contact1Display").text(name1);
    $("#contact1DisplayAlt").text(name1);
    $("#address1Display").text(address1);
    $("#phone1Display").text(phone1);
    $("#dob1Display").text(dob1);
  });



  $("form#contact2").submit(function(event) {
    event.preventDefault();
    var name2 = $("#name2").val();
    var address2 = $("#address2").val();
    var phone2 = parseInt($("#phone2").val());
    var dob2 = $("#dob2").val();
    $("#contact2Display").text(name2);
    $("#contact2DisplayAlt").text(name2);
    $("#address2Display").text(address2);
    $("#phone2Display").text(phone2);
    $("#dob2Display").text(dob2);

  });


  $("form#contact3").submit(function(event) {
    event.preventDefault();
    var name3 = $("#name3").val();
    var address3 = $("#address3").val();
    var phone3 = parseInt($("#phone3").val());
    var dob3 = $("#dob3").val();
    $("#contact3Display").text(name3);
    $("#contact3DisplayAlt").text(name3);
    $("#address3Display").text(address3);
    $("#phone3Display").text(phone3);
    $("#dob3Display").text(dob3);
    //$("p").toggle();

  });


});
