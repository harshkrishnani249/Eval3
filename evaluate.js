$(document).ready(function () {
  $("#myform").validate({
    errorClass: "error fail-alert",
    validClass: "valid success-alert",
    rules: {
      fname: {
        required: true,
        minlength: 3,
        lettersonly: true,
      },
      lname: {
        required: true,
        minlength: 3,
        lettersonly: true,
      },
      age: {
        required: true,
        number: true,
        min: 18
      },
      email: {
        required: true,
        email: true
      }

    },

    messages: {
      fname: {
        minlength: "Name should be at least 3 characters"
      },
      age: {
        required: "Please enter your age",
        number: "Please enter your age as a numerical value",
        min: "You must be at least 18 years old"
      },
      email: {
        email: "The email should be in the format: abc@domain.tld"
      }
    }
  });
});

jQuery.validator.addMethod("lettersonly", function (value, element) {
  return this.optional(element) || /^[a-z]+$/i.test(value);
}, "Letters only please");

$(function () {
  $("#agree").click(function () {
    if ($(this).is(":checked")) {
      $(".checkboxes").removeAttr("disabled");
      $(".checkboxes").focus();
    } else {
      $(".checkboxes").attr("disabled", "disabled");
    }
  });
});

$(function () {
  $("#harsh").click(function () {
    if ($(this).is(":checked")) {
      $("#raj").removeAttr("disabled");
      $("#raj").focus();
    } else {
      $("#raj").attr("disabled", "disabled");
    }
  });
});
$(function () {
  $("#terms").click(function () {
    if ($(this).is(":checked")) {
      $("#title").removeAttr("disabled");
      $("#title").focus();
    } else {
      $("#title").attr("disabled", "disabled");
    }
  });
});

$(function () {
  $("#tue").click(function () {
    if ($(this).is(":checked")) {
      $("#tuetry").removeAttr("disabled");
      $("#tuetry").focus();
    } else {
      $("#tuetry").attr("disabled", "disabled");
    }
  });
});

$(function () {
  $("#wed").click(function () {
    if ($(this).is(":checked")) {
      $("#wedtry").removeAttr("disabled");
      $("#wedtry").focus();
    } else {
      $("#wedtry").attr("disabled", "disabled");
    }
  });
});

$(function () {
  $("#thurs").click(function () {
    if ($(this).is(":checked")) {
      $("#thurstry").removeAttr("disabled");
      $("#thurstry").focus();
    } else {
      $("#thurstry").attr("disabled", "disabled");
    }
  });
});

$(function () {
  $("#fri").click(function () {
    if ($(this).is(":checked")) {
      $("#fritry").removeAttr("disabled");
      $("#fritry").focus();
    } else {
      $("#fritry").attr("disabled", "disabled");
    }
  });
});

$(function () {
  $("#sat").click(function () {
    if ($(this).is(":checked")) {
      $("#sattry").removeAttr("disabled");
      $("#sattry").focus();
    } else {
      $("#sattry").attr("disabled", "disabled");
    }
  });
});
function passvalue() {
  var firstname = document.getElementById("fname").value;
  var lastname = document.getElementById("lname").value;
  var email = document.getElementById("email").value;
  var age = document.getElementById("age").value;
  var maincheck = document.getElementById("agree").value;
  var mon = document.getElementById("harsh").value;
  var tue = document.getElementById("tue").value;
  var wed = document.getElementById("wed").value;
  var thur = document.getElementById("thurs").value;
  var fri = document.getElementById("fri").value;
  var sat = document.getElementById("sat").value;
  var sun = document.getElementById("terms").value;
  var mondropdown = document.getElementById("raj").value;
  var tueddropdown = document.getElementById("tuetry").value;
  var weddropdown = document.getElementById("wedtry").value;
  var thurdropdown = document.getElementById("thurstry").value;
  var fridropdown = document.getElementById("fritry").value;
  var satdropdown = document.getElementById("sattry").value;
  var sundropdown = document.getElementById("title").value;

  localStorage.setItem("firstName", firstname);
  localStorage.setItem("lastName", lastname);
  localStorage.setItem("emaill", email);
  localStorage.setItem("agee", age);

  localStorage.setItem("custommond", mondropdown);
  localStorage.setItem("customtues", tueddropdown);
  localStorage.setItem("customwednes", weddropdown);
  localStorage.setItem("customthurs", thurdropdown);
  localStorage.setItem("customfrid", fridropdown);
  localStorage.setItem("customsatur", satdropdown);
  localStorage.setItem("customsund", sundropdown);

  localStorage.setItem("maincheckbox", maincheck);

  localStorage.setItem("mond", mon);
  localStorage.setItem("tues", tue);
  localStorage.setItem("wednes", wed);
  localStorage.setItem("thurs", thur);
  localStorage.setItem("frid", fri);
  localStorage.setItem("satur", sat);
  localStorage.setItem("sund", sun);
}
