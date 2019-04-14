/** global.js
 *
 *  Revision History:
 *      Ryan Beausoleil, 2019.04.12: Created
 **/

function quantityIncreaseClickHandler() {
    let counter = $(this).siblings(".food-count");
    let number = Number(counter.text());

    if (number < 20) {
        counter.text(number + 1);
    }

    $("#food-order-error").text("");
}

function quantityDecreaseClickHandler() {
    let counter = $(this).siblings(".food-count");
    let number = Number(counter.text());

    if (number > 0) {
        counter.text(number - 1);
    }
}

$(document).ready(function() {
    initDB();
    init();
});


function init() {
    // on page-load
    displayAllRestaurants();

    $(".restaurants-list").on("click", ".restaurant-item", restaurantClickHandler);

    $(".food-list").on("click", ".food-count-plus", quantityIncreaseClickHandler);
    $(".food-list").on("click", ".food-count-minus", quantityDecreaseClickHandler);

    $(".button-food-return").on("click", function () {
        $(location).prop('href', '#page-eating');
    });
    $(".button-food-order").on("click", orderFoodClickHandler);

    // Page: pagebeforeshow
    $("#page-eating").on("pagebeforeshow", displayAllRestaurants);
    $("#page-favorites").on("pagebeforeshow", displayFavoritedRestaurants);
    $("#page-food").on("pagebeforeshow", displayRestaurantFood);
    $("#page-order").on("pagebeforeshow", displayOrders);
}


function initDB()
{
    try
    {
        DB.createDatabase();
        if (db)
        {
            DB.createTables();
        }
        else
        {
            console.error("Error: Cannot create tables: Database does not exist");
        }
    }
    catch (e)
    {
        console.error("Error: (Fatal) Error in initDB(). Cannot proceed");
    }
}