// Form Validation
(function () {
    'use strict';
    window.addEventListener('load', function () {
        var forms = document.getElementsByClassName('needs-validation');
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
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
window.onscroll = function () {
    scrollFunction()
};

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

let pizzaOrder = [];

function myPizzaOrder() {
    this.pizzaSize = pizzaSize;
    this.crust = crust;
    this.toppingFlavor = toppingFlavor;

    this.pizzaPrice = pizzaPrice;
}

priceToppingsSmall = {
    "small": 400,
    "crispy": 100,
    "stuffed": 200,
    "glutenfree": 300,
    "chicken": 100,
    "beef": 100,
    "chevon": 100,
    "peppers": 100,
    "onions": 50,
    "olives": 150,
    "pineapples": 100,
}

priceToppingsLarge = {
    "large": 800,
    "crispy": 200,
    "stuffed": 300,
    "glutenfree": 400,
    "chicken": 200,
    "beef": 200,
    "chevon": 200,
    "peppers": 200,
    "onions": 150,
    "olives": 250,
    "pineapples": 200,
  }
  priceToppingsMedium = {
    "medium" :600,
    "crispy": 150,
    "stuffed": 250,
    "glutenfree": 350,
    "chicken": 150,
    "beef": 150,
    "chevon": 150,
    "peppers": 150,
    "onions": 100,
    "olives": 200,
    "pineapples": 150,
  }


var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})
