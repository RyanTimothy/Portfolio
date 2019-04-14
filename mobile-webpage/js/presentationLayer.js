/** presentationLayer.js
 *
 *  Revision History:
 *      Ryan Beausoleil, 2019.04.12: Created
 **/

function generateRestaurantListItemsHTML(restaurants) {
    let listHTML = "";

    if (restaurants.length > 0) {
        for (let i = 0; i < restaurants.length; i++) {

            let restaurant = restaurants[i];

            listHTML +=
                '<li class="restaurant-item" data-rest-id="' + restaurant['restaurantId'] + '" data-favorited="' + restaurant['favorited'] + '" style="cursor: pointer;">' +
                '<div class="restaurant-grid">' +
                '   <div class="restaurant-logo">' +
                '       <img src="' + restaurant['logoFilename'] + '" width="40px" height="40px" />' +
                '   </div>' +
                '   <div class="restaurant-information">' +
                '       <h3>' + restaurant['restaurantName'] + '</h3>' +
                '       <p>' + restaurant['location'] + '</p>' +
                '   </div>' +
                '   <div class="restaurant-fav-heart">' +
                '       <img src="' + restaurant['heartImage'] + '" width="40px" height="40px" class="favorite-heart" />' +
                '   </div>' +
                '</div>' +
                (restaurant['description'] ? '<p><img src="img/cutlery-icon.png" /> ' + restaurant['description'] + '</p>' : '') +
                '</li>';
        }
    }
    else {
        listHTML += '<li data-role="list-divider">No restaurants to display</li>';
    }

    return listHTML;
}

function displayAllRestaurants() {
    getAllRestaurants(function (restaurants) {
        let listviewRestaurants = $("#restaurants-list");
        listviewRestaurants.html(generateRestaurantListItemsHTML(restaurants));
        listviewRestaurants.listview().listview("refresh");
    });
}

function displayFavoritedRestaurants() {
    getFavoritedRestaurants(function (restaurants) {
        let listviewFavorited = $("#favorited-list");
        listviewFavorited.html(generateRestaurantListItemsHTML(restaurants));
        listviewFavorited.listview().listview("refresh");
    });
}

function generateFoodListItemsHTML(foods) {
    let listHTML = "";

    if (foods.length > 0) {
        for (let i = 0; i < foods.length; i++) {

            let food = foods[i];

            listHTML +=
                '<li data-food-id="' + food['foodId'] + '">' +
                '<div class="food-grid">' +
                '   <div class="food-logo">' +
                '       <img src="' + food['logoFilename'] + '" width="80px" height="80px" />' +
                '   </div>' +
                '   <div class="food-information">' +
                '       <h3>' + food['foodName'] + '</h3>' +
                '       <p>' + food['description'] + '</p>' +
                '   </div>' +
                '   <div class="food-adjust-count">' +
                '<a href="#" class="ui-btn ui-shadow ui-corner-all ui-icon-plus ui-btn-icon-notext ui-btn-inline food-count-plus">Plus</a>' +
                '<div class="food-count">0</div>' +
                '<a href="#" class="ui-btn ui-shadow ui-corner-all ui-icon-minus ui-btn-icon-notext ui-btn-inline food-count-minus">Minus</a>' +
                '   </div>' +
                '</div>' +
                '</li>';
        }
    } else {
        listHTML += '<li data-role="list-divider">No food items to display</li>';
    }

    return listHTML;
}

function displayRestaurantFood() {
    let listviewFood = $("#food-list");
    let restaurantId = listviewFood.attr("data-rest-id");

    $("#food-order-error").text("");

    if (restaurantId) {

        getRestaurant(restaurantId, function (restaurant) {
            $("#page-food .banner-myorder h1").text(restaurant['restaurantName']);

            let banner = $("#page-food .banner-myorder");
            banner.css("background", "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0.5) 100%), url(" + restaurant['bannerFilename'] + ") no-repeat center center");
            banner.css("background-size", "100% auto");
        });

        getRestaurantFood(restaurantId, function (foods) {
            listviewFood.html(generateFoodListItemsHTML(foods));
            listviewFood.listview().listview("refresh");
        });

    } else {
        $(location).prop('href', '#page-eating');
    }
}

function generateOrdersHTML(orders) {
    let listHTML = "";

    if (orders.length > 0) {
        for (let i = 0; i < orders.length; i++) {
            let order = orders[i];

            listHTML += '<li data-role="list-divider">' + order['restaurantName'] + ":&nbsp;&nbsp;&nbsp;" + order['orderDate'] + '<span class="ui-li-count">' + order['orderQuantity'] + '</span></li>';

            for (let i = 0; i < order['foods'].length; i++) {

                let food = order['foods'][i];

                listHTML +=
                    '<li data-food-id="' + food['foodId'] + '">' +
                    '<b>' + food['quantity'] + '</b> x ' + food['foodName'] +
                    '</li>';
            }
        }
    } else {
        listHTML += '<li data-role="list-divider">No orders to display</li>';
    }

    return listHTML;
}

function displayOrders() {
    getOrders(function (orders) {
        let listviewOrders = $("#orders-list");
        listviewOrders.html(generateOrdersHTML(orders));
        listviewOrders.listview().listview("refresh");
    });
}