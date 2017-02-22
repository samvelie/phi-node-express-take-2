$(document).ready(function(){
    console.log('jquery sourced');
    $.ajax({
      type: 'GET',
      url: '/fish',
      success: function(response){
        console.log(response);
        for (var i = 0; i < response.length; i++) {
          $('#fishTank').append('<li>' + response[i].name + '</li>');
        }
      }//end success function
    })//end ajax function

    $.ajax({
      type: 'GET',
      url: '/fish/first/name',
      success: function(response){
        console.log(response);
        $('#firstFishy').text(response);
      }//end success function
    })//end ajax function
});//end document ready
