//answer to question 1:
//$("#contact-div");

//answer to question 2:
//$("#card-text");

//answer to question 3:
//$("#card-text").contents().filter(function(){
    //return this.nodeType === 3;
//})​.remove();​

//answer to question 5:
$("#contact-link").on("click", function(e){
  e.preventDefault();
  $("#theHidingForm").show();
  $("#card-text").hide();
  //answer to question 6:
  $("#contact-link").hide();
});

$("#formSubmit").on("click", function(e){
  e.preventDefault();
  $.ajax({
    url:"http://www.fvi-grad.com:4004/fakeform?" + $("form").serialize(),
    success: function(resp,txt,xhr){
      console.log(resp);
      alert(resp)
    },
    method:"post"

  });
});
