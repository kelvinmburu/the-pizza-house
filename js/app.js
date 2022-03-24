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


function totalPrice() {
    return pizzaSize + crust + toppingFlavor;
}

$(document).ready(function () {
    $('#pizzaMenu').click(function () {
        $('.modal').modal('show');
    })

    $('#add').click(function () {
        $('.table').show();
        pizzaSize = $('#size :selected').text();
        crustChoice = $('#crust :selected').text();
        toppingsChoice = $('#toppings :selected').text();

        let grandPrice = 0;

        if (pizzaSize == 'small') {
            sizePrice = 450;
        } else if (pizzaSize == 'medium') {
            sizePrice = 650;
        } else if (pizzaSize == 'large') {
            sizePrice = 1800;
        }

        if (crustChoice == 'Crispy') {
            crustPrice = 150;
        } else if (crustChoice == 'Stuffed') {
            crustPrice = 200;
        } else if (crustChoice == 'Gluten-free') {
            crustPrice = 250;
        }

        if (toppingsChoice == 'Chicken') {
            toppingsPrice = 150;
        } else if (toppingsChoice == 'Beef') {
            toppingsPrice = 250;
        } else if (toppingsChoice == 'Spicy-Hot') {
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

    $('#add2').click(function () {
        pizzaSize = $('#size :selected').text();
        crustChoice = $('#crust :selected').text();
        toppingsChoice = $('#toppings :selected').text();
        grandtotal = totalPrice + totalPrice;
        console.log(grandPrice);
        // This should alert grand priceToppingsSmall

        if (pizzaSize == 'Small') {
            sizePrice = 450;
        } else if (pizzaSize == 'medium') {
            sizePrice = 650;
        } else if (pizzaSize == 'large') {
            sizePrice = 1800;
        }

        if (crustChoice == 'Crispy') {
            crustPrice = 150;
        } else if (crustChoice == 'Stuffed') {
            crustPrice = 200;
        } else if (crustChoice == 'Gluten-free') {
            crustPrice = 250;
        }

        if (toppingsChoice == 'Chicken') {
            toppingsPrice = 150;
        } else if (toppingsChoice == 'Beef') {
            toppingsPrice = 250;
        } else if (toppingsChoice == 'Spicy-Hot') {
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
    $('.submit').click(function () {
        grandPrice = parseInt(grandPrice + totalPrice);
        console.log(grandPrice);
        $('#checkOut').modal('show');
        $('.modal .total_div').prepend(
            '<p>' + 'TOTAL: ' + totalPrice + '</p>'
        );
    });
    $('#checkOut_yes').click(function () {
        $('.grand_div').show();
        let grandLocation = totalPrice + 200;
        $('.modal .grand_div').prepend(
            '<p>' + 'GRAND TOTAL' + grandLocation + '</p>'
        );
        $('.total_div').hide();
        $('#final_btn').click(function () {
            $('.grand_div').hide();
            $('.final').show();
            let location = $('#locale').val();
            $('.final').append(
                '<p>' + 'Thanks for shopping with us. Your order will be delivered to' + ' ' + location + '</p>'
            );
        });
    });

    //Checkout
    $('#checkOut_no').click(function () {
        $('.total_div').hide();
        $('.grand_div').hide();
        $('.final').show();

        $('.modal .final').append(
            '<p>' + 'Hooray! Your order will be shipped soon.' + '</p>' +
            '<p>' + 'GRAND TOTAL' + totalPrice + '</p>'
        );
    });


});
