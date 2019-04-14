/** databaseLayer.js
 *
 *  Revision History:
 *      Ryan Beausoleil, 2019.04.12: Created
 **/

const table = {
    restaurantType: {
        select: function (options, callback) {
            function txFunction(tx) {
                let sql =
                    "SELECT * FROM restaurantType " +
                    "WHERE restaurantTypeId=?;";
                tx.executeSql(sql, options, callback, errorHandler);
            }

            function successTransaction() {
                console.info("Select transaction successful");
            }

            db.transaction(txFunction, errorHandler, successTransaction);
        }
    },

    restaurant: {

        updateFavorited: function (options, callback) {
            function txFunction(tx) {
                var sql =
                    "UPDATE restaurant " +
                    "SET favorited=? " +
                    "WHERE restaurantId=?;";
                tx.executeSql(sql, options, callback, errorHandler);
            }

            function successTransaction() {
                console.info("Update transaction successful");
            }

            db.transaction(txFunction, errorHandler, successTransaction);
        },

        select: function (options, callback) {
            function txFunction(tx) {
                let sql =
                    "SELECT * FROM restaurant " +
                    "WHERE restaurantId=?;";
                tx.executeSql(sql, options, callback, errorHandler);
            }

            function successTransaction() {
                console.info("SelectAll transaction successful");
            }

            db.transaction(txFunction, errorHandler, successTransaction);
        },

        selectAllJoinRestaurantType: function (options, callback) {
            function txFunction(tx) {
                let sql =
                    "SELECT restaurantId, restaurantName, location, logoFilename, description, favorited " +
                    "FROM restaurant " +
                    "JOIN restaurantType USING (restaurantTypeId) " +
                    "ORDER BY restaurantName;";
                tx.executeSql(sql, options, callback, errorHandler);
            }

            function successTransaction() {
                console.info("SelectAll transaction successful");
            }

            db.transaction(txFunction, errorHandler, successTransaction);
        },

        selectAllFavoritesJoinRestaurantType: function (options, callback) {
            function txFunction(tx) {
                let sql =
                    "SELECT restaurantId, restaurantName, location, logoFilename, description, favorited " +
                    "FROM restaurant " +
                    "JOIN restaurantType USING (restaurantTypeId) " +
                    "WHERE favorited = 1 " +
                    "ORDER BY restaurantName;";
                tx.executeSql(sql, options, callback, errorHandler);
            }

            function successTransaction() {
                console.info("SelectAll transaction successful");
            }

            db.transaction(txFunction, errorHandler, successTransaction);
        }
    },

    food: {
        selectAllByRestaurantId: function (options, callback) {
            function txFunction(tx) {
                let sql =
                    "SELECT * FROM food " +
                    "WHERE restaurantId=? " +
                    "ORDER BY foodName;";
                tx.executeSql(sql, options, callback, errorHandler);
            }

            function successTransaction() {
                console.info("Select transaction successful");
            }

            db.transaction(txFunction, errorHandler, successTransaction);
        }
    },

    orders: {
        insert: function (options, callback) {
            function txFunction(tx) {
                let sql =
                    "INSERT INTO orders(restaurantId, orderDate) " +
                    "VALUES(?,?);";
                tx.executeSql(sql, options, callback, errorHandler);
            }

            function successTransaction() {
                console.info("Insert transaction successful");
            }

            db.transaction(txFunction, errorHandler, successTransaction);
        }
    },

    orderfood: {
        insert: function (options, callback) {
            function txFunction(tx) {
                let sql =
                    "INSERT INTO orderfood(orderId, foodId, quantity) " +
                    "VALUES(?,?,?);";
                tx.executeSql(sql, options, callback, errorHandler);
            }

            function successTransaction() {
                console.info("Insert transaction successful");
            }

            db.transaction(txFunction, errorHandler, successTransaction);
        },

        selectAllJoinOrderJoinFoodJoinRestaurant: function (options, callback) {
            function txFunction(tx) {
                let sql =
                    "SELECT orderId, o.restaurantId, restaurantName, orderDate, foodId, foodName, quantity FROM orderfood " +
                    "JOIN orders AS o USING (orderId) " +
                    "JOIN food USING (foodId) " +
                    "JOIN restaurant USING (restaurantId)" +
                    "ORDER BY orderDate DESC;";
                tx.executeSql(sql, options, callback, errorHandler);
            }

            function successTransaction() {
                console.info("Select transaction successful");
            }

            db.transaction(txFunction, errorHandler, successTransaction);
        }
    }
};