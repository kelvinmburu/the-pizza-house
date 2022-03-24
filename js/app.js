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


function myPizzaOrder(pizzaSize, crust, toppingFlavor, pizzaPrice) {
    this.pizzaSize = pizzaSize;
    this.crust = crust;
    this.toppingFlavor = toppingFlavor;

    this.pizzaPrice = pizzaPrice;
}


function totalPrice () {
    return pizzaSize + crust + toppingFlavor;
}

$(document).ready(function() {
    $('#pizzaMenu').click(function() {
        $('.modal').modal('show');
    })

    $('#add').click(function() {
        $('.table').show();
        pizzaSize = $('#size :selected').text();
        crustChoice = $('#crust :selected').text();
        toppingsChoice = $('#toppings :selected').text();

        let grandPrice = 0;

        if(pizzaSize == 'small') {
            sizePrice = 450;
        }else if(pizzaSize == 'medium') {
            sizePrice = 650;
        }else if(pizzaSize == 'large') {
            sizePrice = 1800;
        }

        if(crustChoice == 'Crispy') {
            crustPrice = 150;
        } else if(crustChoice == 'Stuffed') {
            crustPrice = 200;
        }else if(crustChoice == 'Gluten-free') {
            crustPrice = 250;
        }

        if(toppingsChoice == 'Chicken') {
            toppingsPrice = 150;
        }else if(toppingsChoice == 'Beef'){
            toppingsPrice = 250;
        }else if(toppingsChoice == 'Spicy-Hot') {
            toppingsPrice = 350;
        }

        let totalPrice = toal(sizePrice, crustPrice, toppingsPrice);


        $('#pizza_table').append(
            '<tr>' +
            '<td>' + pizzaSize + ' ' + sizePrice + '</td>' +
            '<td>' + crustChoice + '' + crustPrice + '</td>' +
            '<td>' + toppingsChoice + ' ' + toppingsPrice + '</td>' +
            '<td>' + totalPrice + '</td>' +
            '</tr>'
        )
    });

    $('#add').hide();
    $('#add2').show();
    $('.submit').show();

    $('#add2').click(function(){
        pizzaSize = $('#size :selected').text();
        crustChoice = $('#crust :selected').text();
        toppingsChoice = $('#toppings :selected').text();
        grandtotal = totalPrice + totalPrice;
        console.log(grandPrice);
        // This should alert grand priceToppingsSmall

        if(pizzaSize == 'Small') {
            sizePrice = 450;
        }else if(pizzaSize == 'medium') {
            sizePrice = 650;
        }else if(pizzaSize == 'large') {
            sizePrice = 1800;
        }

        if(crustChoice == 'Crispy') {
            crustPrice = 150;
        } else if(crustChoice == 'Stuffed') {
            crustPrice = 200;
        }else if(crustChoice == 'Gluten-free') {
            crustPrice = 250;
        }

        if(toppingsChoice == 'Chicken') {
            toppingsPrice = 150;
        }else if(toppingsChoice == 'Beef'){
            toppingsPrice = 250;
        }else if(toppingsChoice == 'Spicy-Hot') {
            toppingsPrice = 350;
        }

        let totalPrice = toal(sizePrice, crustPrice, toppingsPrice);


        $('#pizza_table').append(
            '<tr>' +
            '<td>' + pizzaSize + ' ' + sizePrice + '</td>' +
            '<td>' + crustChoice + '' + crustPrice + '</td>' +
            '<td>' + toppingsChoice + ' ' + toppingsPrice + '</td>' +
            '<td>' + totalPrice + '</td>' +
            '</tr>'
        );

    });
    $('.submit').click(function() {
        grandPrice = parseInt(grandPrice + totalPrice);
        console.log(grandPrice);
        $('#checkOut').modal('show');
        $('.modal .total_div').prepend(
            '<p>' + 'TOTAL: ' + totalPrice + '</p>'
        );
    });
    $('#checkOut_yes').click(function(){
        $('.grand_div').show();
        let grandLocation = totalPrice + 200;
        $('.modal .grand_div').prepend(
            '<p>' + 'GRAND TOTAL' + grandLocation + '</p>'
        );
        
    })

})

// priceToppingsSmall = {
//     "small": 400,
//     "crispy": 100,
//     "stuffed": 200,
//     "glutenfree": 300,
//     "chicken": 100,
//     "beef": 100,
//     "chevon": 100,
//     "peppers": 100,
//     "onions": 50,
//     "olives": 150,
//     "pineapples": 100,
// }

// priceToppingsLarge = {
//     "large": 800,
//     "crispy": 200,
//     "stuffed": 300,
//     "glutenfree": 400,
//     "chicken": 200,
//     "beef": 200,
//     "chevon": 200,
//     "peppers": 200,
//     "onions": 150,
//     "olives": 250,
//     "pineapples": 200,
//   }
//   priceToppingsMedium = {
//     "medium" :600,
//     "crispy": 150,
//     "stuffed": 250,
//     "glutenfree": 350,
//     "chicken": 150,
//     "beef": 150,
//     "chevon": 150,
//     "peppers": 150,
//     "onions": 100,
//     "olives": 200,
//     "pineapples": 150,
//   }




