// Getting pizza order function


class pizzaOrder {
    constructor(size, crust, toppingFlavor, totalPrice) {
        this.size = size;
        this.crust = crust;
        this.toppingFlavor = toppingFlavor;
    }
}

// class total {
//     constructor(size, crust, toppingFlavor) {
//         return size + crust + toppingFlavor;
//     }
// }

function total (size, crust, toppingFlavor) {
    return size + crust + toppingFlavor;
}



$(document).ready(function () {
    $('#pizzaMenu').click(function () {
        $('.modal').modal('show');
    })

    $('#add').click(function () {
        $('table').show();
        pizzaSize = $('#size :selected').text();
        crustChoice = $('#crust :selected').text();
        toppingsChoice = $('#toppingFlavor :selected').text();

        var grandPrice = 0;

        if (pizzaSize == 'Small') {
            sizePrice = 450;
        } else if (pizzaSize == 'Medium') {
            sizePrice = 650;
        } else if (pizzaSize == 'Large') {
            sizePrice = 1800;
        }

        if (crustChoice == 'Crispy') {
            crustPrice = 550;
        } else if (crustChoice == 'Stuffed') {
            crustPrice = 300;
        } else if (crustChoice == 'Gluten-free') {
            crustPrice = 450;
        }

        if (toppingsChoice == 'Chicken') {
            toppingsPrice = 280;
        } else if (toppingsChoice == 'Beef') {
            toppingsPrice = 350;
        } else if (toppingsChoice == 'Spicy-Hot') {
            toppingsPrice = 450;
        }

        var totalPrice = total(sizePrice, crustPrice, toppingsPrice);


        $('#pizza_table').append(
            '<tr>' +
                '<td>' + pizzaSize + ' ' + sizePrice + '</td>' +
                '<td>' + crustChoice + ' ' + crustPrice + '</td>' +
                '<td>' + toppingsChoice + ' ' + toppingsPrice + '</td>' +
                '<td>' + totalPrice + '</td>' +
            '</tr>'
        );

        $('#add').hide();
        $('#add2').show();
        $('.submit').show();

        $('#add2').click(function () {
            pizzaSize = $('#size :selected').text();
            crustChoice = $('#crust :selected').text();
            toppingsChoice = $('#toppingFlavor :selected').text();
            grandPrice = totalPrice + totalPrice;
            console.log(grandPrice);
            // This should alert grand price

            if (pizzaSize == 'Small') {
                sizePrice = 450;
            } else if (pizzaSize == 'Medium') {
                sizePrice = 650;
            } else if (pizzaSize == 'Large') {
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

            var totalPrice = total(sizePrice, crustPrice, toppingsPrice);

            $('#pizza_table').append(
                '<tr>' +
                    '<td>' + pizzaSize + ' ' + sizePrice + '</td>' +
                    '<td>' + crustChoice + ' ' + crustPrice + '</td>' +
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
            var grandLocation = totalPrice + 200;
            $('.modal .grand_div').prepend(
                '<p>' + 'GRAND TOTAL: ' + grandLocation + '</p>'
            );
            $('.total_div').hide();
            $('#final_btn').click(function () {
                $('.grand_div').hide();
                $('.final').show();
                var location = $('#locale').val();
                $('.final').append(
                    '<p>' + 'Thank you for shopping with Pizza House. Your order will be delivered to' + ' ' + location + '</p>'
                );
            });
        });

        //Checkout
        $('#checkOut_no').click(function () {
            $('.total_div').hide();
            $('.grand_div').hide();
            $('.final').show();

            $('.modal .final').append(
                '<p>' + 'Please try placing your order again.' + '</p>' +
                '<p>' + 'GRAND TOTAL' + totalPrice + '</p>'
            );
        });

    });
});
