$(document).ready(function(){
   $("form").submit(function(event){
    event.preventDefault()
    var user1Inputty = $("#userInputty").val()
    console.log(user1Inputty)
    $("#user").append('<li>' + user1Inputty + '</li>');
    $("#userInputty").val("");
    })
     $("#user").click(function(event) {
       var itemToRemove = event.target;
       console.log(itemToRemove);
       $(itemToRemove).remove();
     });

})
