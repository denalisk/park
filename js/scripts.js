

$(document).ready(function() {
  $("form.height").submit(function(event){
    event.preventDefault();
    var heightInput = $("#height").val();
    if (heightInput === xsmall) {
      $(".xsmall").parent().parent().removeClass("gray");
      $(".overlay").hide();
    }
    else if (heightInput === short) {


    }
    else if (heightInput === medium) {

    }
    else if (heightInput === tall) {

    }
    else {

    }
  });
});
