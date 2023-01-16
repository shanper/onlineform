


//https://www.digitalocean.com/community/tutorials/submitting-ajax-forms-with-jquery
$(document).ready(function () {
    $("#show-modal-button").click((event)=>{
        //clear form
        $("#name").val("");
        $("#email").val("");
        $("#device").val("1");
        $("#country").val("1");
    });

  $("form").submit(function (event) {
    var formData = {
      name: $("#name").val(),
      email: $("#email").val(),
      device: $("#device").val(),
      country: $("#country").val()
    };

    $.ajax({
      type: "POST",
      url: "http://jutu.ml/process.php",
      data: formData,
      dataType: "json",
      encode: true,
    }).done(function (data) {
      console.log(data);

      if (!data.success) {
      alert(data.errors);
        if (data.errors.name) {
          $("#name-group").addClass("has-error");
          $("#name-group").append(
            '<div class="help-block">' + data.errors.name + "</div>"
          );
        }

        if (data.errors.email) {
          $("#email-group").addClass("has-error");
          $("#email-group").append(
            '<div class="help-block">' + data.errors.email + "</div>"
          );
        }

        if (data.errors.device) {
          $("#superhero-group").addClass("has-error");
          $("#superhero-group").append(
            '<div class="help-block">' + data.errors.device + "</div>"
          );
        }

        if (data.errors.country) {
          $("#email-group").addClass("has-error");
          $("#email-group").append(
            '<div class="help-block">' + data.errors.country + "</div>"
          );
        }
      } else {
          if(data.message=="Success"){
            $("form").html(
                `<div class="alert alert-success">
                    <h3>
                        Thank You For Joining Us.
                    </h3>
                    <h4>
                        We will contact you soon.
                    </h4>
                </div>
                `
            );
            $("#show-modal-button").hide();
            setTimeout(function() {
                $("#close-modal").click();
            }, 3000);
            
          }

      }
    });

    event.preventDefault();
  });
});


