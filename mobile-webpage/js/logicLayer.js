/** logicLayer.js
 *
 *  Revision History:
 *      Ryan Beausoleil, 2019.04.12: Created
 **/

const heartOutline = "img/heart-outline.png";
const heartFilled = "img/heart-filled.png";

function restaurantClickHandler(event) {

    let clickedElement = $(event.target);

    let li = clickedElement.closest("li");
    let restaurantId = li.attr("data-rest-id");

    // clicked heart
    if (clickedElement.hasClass('favorite-heart')) {
        let favorited = li.attr("data-favorited") == 0 ? 1 : 0;

        table.restaurant.updateFavorited([favorited, restaurantId], function (tx, results) {
            li.attr("data-favorited", favorited);

            clickedElement.attr('src', favorited == 0 ? heartOutline : heartFilled);
        });
    } else { // clicked outside heart
        $("#food-list").attr("data-rest-id", restaurantId);

        $(location).prop('href', '#page-food');
    }

}

function logicRestaurants(rows) {
    let restaurants = [];

    // iterate through rows
    for (let i = 0; i < rows.length; i++) {

        let row = rows[i];

        restaurants.push({
            restaurantId: row['restaurantId'],
            restaurantName: row['restaurantName'],
            logoFilename: row['logoFilename'],
            location: row['location'],
            description: row['description'],
            favorited: row['favorited'],
            heartImage: (row['favorited'] == 1 ? heartFilled : heartOutline)
        });
    }

    return restaurants;
}

function logicOrders(rows) {

    function padStart(number, length) {

        var str = '' + number;
        while (str.length < length) {
            str = '0' + str;
        }

        return str;

    }

    let orders = [];

    let orderId = null;
    let order;

    for (let i = 0; i < rows.length; i++) {
        let row = rows[i];

        if (orderId !== row['orderId']) {
            if (i != 0 && order) {
                orders.push(order);
            }

            let date = new Date(row['orderDate']);

            let dateString =
                date.getFullYear()+"-"+padStart(date.getMonth(), 2)+"-"+padStart(date.getDate(), 2)+
                " @ "+padStart(date.getHours(), 2)+":"+padStart(date.getMinutes(), 2)+":"+padStart(date.getSeconds(), 2);

            order = {
                orderId: row['orderId'],
                restaurantId: row['restaurantId'],
                restaurantName: row['restaurantName'],
                orderDate: dateString,
                orderQuantity: 0,
                foods: []
            };
        }

        orderId = row['orderId'];

        order['orderQuantity'] += row['quantity'];

        order['foods'].push({
            foodId: row['foodId'],
            foodName: row['foodName'],
            quantity: row['quantity']
        });
    }

    if (order) {
        orders.push(order);
    }

    return orders;
}

function getRestaurant(restaurantId, callback) {
    table.restaurant.select([restaurantId], function (tx, results) {
        callback(results.rows[0]);
    });
}

function getAllRestaurants(callback) {
    table.restaurant.selectAllJoinRestaurantType([], function (tx, results) {
        callback(logicRestaurants(results.rows));
    });
}

function getFavoritedRestaurants(callback) {
    table.restaurant.selectAllFavoritesJoinRestaurantType([], function (tx, results) {
        callback(logicRestaurants(results.rows));
    });
}

function getOrders(callback) {
    table.orderfood.selectAllJoinOrderJoinFoodJoinRestaurant([], function (tx, results) {
        callback(logicOrders(results.rows));
    });
}

function getRestaurantFood(restaurantId, callback) {
    table.food.selectAllByRestaurantId([restaurantId], function (tx, results) {
        callback(results.rows);
    });
}


function orderFoodClickHandler() {
    let restaurantId = $("#food-list").attr("data-rest-id");

    let foods = $("#food-list li");

    let totalCount = 0;
    for (let i = 0; i < foods.length; i++) {
        totalCount += Number($(foods[i]).find(".food-count").text());
    }

    if (totalCount > 0) {
        table.orders.insert([restaurantId, new Date()], function (tx, results) {

            let orderId = results.insertId;

            for (let i = 0; i < foods.length; i++) {
                let quantity = Number($(foods[i]).find(".food-count").text());

                if (quantity > 0) {
                    let foodId = foods[i].getAttribute("data-food-id");

                    table.orderfood.insert([orderId, foodId, quantity]);
                }
            }

            $(location).prop('href', '#page-order');
        });
    } else {
        $("#food-order-error").text("Must select quantities")
    }
}