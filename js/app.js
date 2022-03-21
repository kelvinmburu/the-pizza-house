// Form Validation
(function() {
    'use strict';
    window.addEventListener('load', function() {
      var forms = document.getElementsByClassName('needs-validation');
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();

  // Scroll buttons

var mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Get address and Number of pizzas validation

function getAddress() {
    // Address links are

    name = document.form.validationCustom01.value;

    phonenumber = document.form.phoneNumber.value;

    ptype = document.form.p-type.selectedIndex;
    ptype = document.form.p-type.options[p-type].value;

    toppingFlavor = document.form.toppingFlavor.selectedIndex;
    toppingFlavor = document.form.toppingFlavor.options[toppingFlavor].value;
}