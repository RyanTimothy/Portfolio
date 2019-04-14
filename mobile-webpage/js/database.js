/** database.js
 *
 *  Revision History:
 *      Ryan Beausoleil, 2019.04.12: Created
 **/

var db;

function errorHandler(tx, error)
{
    console.error("SQL error: " + tx + " (" + error.code + "): " + error.message);
}

const DB = {

    // Whenever we create a function onside an object we follow this approach: "functionName: functionBody() {}"
    createDatabase: function ()
    {
        let shortName = "EasyEating";
        let version = "1.0";
        let displayName = "EasyEating";
        let dbSize = 2 * 1024 * 1024; // this is a 2 MB estimated size

        function dbCreate()
        {
            console.info("Success: Database created successfully");
        }

        // openDatabase() creates a DB if it doesn't exist, or open it if it exists
        db = openDatabase(shortName, version, displayName, dbSize, dbCreate);
    },
    createTables: function ()
    {
        function txFunction(tx)
        {
            function successCreate()
            {
                console.info("Table created successfully");
            }

            function callback() {
                console.info("Record updated successfully");
            }

            function successDrop()
            {
                console.info("Table dropped successfully");
            }

            let sql;

            // drop table: "restaurantType"
            sql = "DROP TABLE IF EXISTS restaurantType;";
            tx.executeSql(sql, [], successDrop, errorHandler);

            // create table: "restaurantType"
            sql =
                "CREATE TABLE restaurantType( " +
                "restaurantTypeId INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "description VARCHAR(20) NOT NULL);"
            tx.executeSql(sql, [], successCreate, errorHandler);

            // insert values into table: "restaurantType"
            sql = "INSERT INTO restaurantType(description) VALUES(?);";
            tx.executeSql(sql, ["American, Fast Food"], callback, errorHandler);
            tx.executeSql(sql, ["Canadian, Fast Food"], callback, errorHandler);
            tx.executeSql(sql, ["American, Pizza Products"], callback, errorHandler);
            tx.executeSql(sql, ["Canadian, Chicken Products"], callback, errorHandler);
            tx.executeSql(sql, ["American, Subway Sandwiches"], callback, errorHandler);

            // drop table: "restaurant"
            sql = "DROP TABLE IF EXISTS restaurant;";
            tx.executeSql(sql, [], successDrop, errorHandler);

            // create table: "restaurant"
            sql =
                "CREATE TABLE IF NOT EXISTS restaurant( " +
                "restaurantId INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "restaurantTypeId INTEGER NOT NULL," +
                "restaurantName VARCHAR(30) NOT NULL," +
                "location VARCHAR(30) NOT NULL," +
                "logoFilename VARCHAR(30) NOT NULL," +
                "bannerFilename VARCHAR(30) NOT NULL," +
                "favorited BIT NOT NULL DEFAULT 0," +
                "FOREIGN KEY(restaurantTypeId) REFERENCES restaurantType(restaurantTypeId));";
            tx.executeSql(sql, [], successCreate, errorHandler);

            // burger king img reference: http://www.burgerking.com
            // swiss chalet img reference: https://grandeprairie.bigbrothersbigsisters.ca/swiss-chalet-logo/
            // pizza hut img reference: https://logos.fandom.com/wiki/Pizza_Hut
            // subway img reference: http://www.triangletowncenter.com/store/subway

            // burger king banner reference: http://www.burgerking.com
            // pizza hut banner reference: https://pizzahutsg.s3-ap-southeast-1.amazonaws.com/static/dinein/PH_Dinein_banner_20180919.jpg
            // subway banner reference: https://www.foodnavigator-usa.com/Article/2014/02/05/Azodicarbonamide-controversy-Subway-removing-dough-conditioner
            // swiss chalet banner reference: https://www.swisschalet.com/images/menu-images/_0000_C_QuarterChickenDinner_v2.jpg

            // insert values into table: "restaurantType"
            sql = "INSERT INTO restaurant(restaurantTypeId, restaurantName, location, logoFilename, bannerFilename) " +
                "VALUES(?,?,?,?,?);";
            tx.executeSql(sql, [1, "Burger King", "Waterloo", "img/burger-king-logo.png", "img/burger-king-banner.png"], callback, errorHandler);
            tx.executeSql(sql, [4, "Swiss Chalet", "Waterloo", "img/swisschalet-logo.png", "img/swisschalet-banner.png"], callback, errorHandler);
            tx.executeSql(sql, [3, "Pizza Hut", "Waterloo", "img/pizza-hut-logo.png", "img/pizza-hut-banner.png"], callback, errorHandler);
            tx.executeSql(sql, [5, "Subway", "Waterloo", "img/subway-logo.png", "img/subway-banner.png"], callback, errorHandler);

            // drop table: "food"
            sql = "DROP TABLE IF EXISTS food;";
            tx.executeSql(sql, [], successDrop, errorHandler);

            // create table: "food"
            sql =
                "CREATE TABLE IF NOT EXISTS food( " +
                "foodId INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "restaurantId INTEGER NOT NULL," +
                "foodName VARCHAR(30) NOT NULL," +
                "description VARCHAR(30) NOT NULL," +
                "logoFilename VARCHAR(30) NOT NULL," +
                "FOREIGN KEY(restaurantId) REFERENCES restaurant(restaurantId));";
            tx.executeSql(sql, [], successCreate, errorHandler);

            // insert values into table: "food"
            sql = "INSERT INTO food(restaurantId, foodName, description, logoFilename) " +
                "VALUES(?,?,?,?);";
            tx.executeSql(sql, [1,
                "French Fries",
                "Thick cut French Fries are golden on the outside and fluffy on the inside.",
                "img/burger-king-french-fries.png"], callback, errorHandler); // img source: https://burgerking.ca/menu-item/french-fries
            tx.executeSql(sql, [1,
                "Whopper Sandwich",
                "Beef topped with juicy tomatoes, fresh cut lettuce, creamy mayonnaise, crunchy pickles, and sliced white onions on a toasted sesame seed bun.",
                "img/burger-king-whopper.png"], callback, errorHandler); // img source: https://burgerking.ca/menu-item/whopper-sandwich
            tx.executeSql(sql, [1,
                "Coca-Cola",
                "Perfect with any meal, enjoy the genuine taste of Coca-Cola",
                "img/burger-king-coca-cola.png"], callback, errorHandler); // img source: https://burgerking.ca/menu/beverages
            tx.executeSql(sql, [2,
                "Quarter Chicken Dinner",
                "Fresh (never frozen) slow-roasted Rotisserie Chicken with signature Chalet dipping sauce, bread roll and choice of side.",
                "img/swisschalet-chicken.png"], callback, errorHandler); // img source; https://www.swisschalet.com/images/menu-images/RelatedItems_237x157_0002_C_QuarterChicken.png
            tx.executeSql(sql, [2,
                "Full Rack BBQ Side Ribs",
                "Fall-off the bone, grilled smokey BBQ sauce glazed ribs, served with creamy coleslaw, bread roll and choice of side.",
                "img/swisschalet-ribs.png"], callback, errorHandler); // img source: https://www.swisschalet.com/images/menu-images/SC_MenuHomePage_164x106_Ribs_v2.png
            tx.executeSql(sql, [3,
                "Pan Pizza",
                "Pan pizza, baked in pan with a crispy edge; stuffed crust pizza, with the outermost edge wrapped around a cylinder of mozzarella cheese.",
                "img/pizza-hut-pizza.png"], callback, errorHandler); // img source: https://www.customercaremc.com/connecting-the-dots-blog/customer-experience/whitepaper-delivering-psychic-pizza/
            tx.executeSql(sql, [3,
                "Pepsi-Cola",
                "Perfect with any meal, enjoy the refreshing taste of Pepsi-Cola.",
                "img/pizza-hut-pepsi.png"], callback, errorHandler); // img source: https://dumielauxepices.net/wallpaper-3130648
            tx.executeSql(sql, [3,
                "Garlic Bread",
                "Topped with garlic and olive oil, buttered and layered with cheesy mozzarella.",
                "img/pizza-hut-garlic-bread.png"], callback, errorHandler); // img source: https://www.indiamart.com/samridhi-foods/
            tx.executeSql(sql, [4,
                "Cold Cut Combo",
                "Delicious deli meats, topped with crisp vegetables and served on freshly baked bread.",
                "img/subway-sub.png"], callback, errorHandler); // img source: http://pluspng.com/img-png/subway-png-find-related-places-4500.jpg
            tx.executeSql(sql, [4,
                "Panini Chicken and Bacon",
                "Layers of Rotisserie-Style chicken with sweet & smoky seasoning and maple wood smoked bacon drizzled with smoky honey mustard on freshly-prepared ciabatta bread.",
                "img/subway-panini.png"], callback, errorHandler); // img source: https://www.subway.com/ns/images/menu/CAN/ENG/Panini%20Sweet%20Smokey%20Bacon_234X140_72_RGB.jpg
            tx.executeSql(sql, [4,
                "Smoked Bacon, Egg & Cheese",
                "Crispy Maple wood smoked bacon, egg and melty cheese on fresh toasted flatbread.",
                "img/subway-breakfast.png"], callback, errorHandler); // img source: https://www.subway.com/ns/images/menu/CAN/ENG/menu-category-brkfst-baceggchs.jpg

            // drop table: "orders"
            sql = "DROP TABLE IF EXISTS orders;";
            tx.executeSql(sql, [], successDrop, errorHandler);

            // create table: "orders"
            sql =
                "CREATE TABLE orders( " +
                "orderId INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "restaurantId INTEGER NOT NULL," +
                "orderDate DATE NOT NULL," +
                "FOREIGN KEY(restaurantId) REFERENCES restaurant(restaurantId));";
            tx.executeSql(sql, [], successCreate, errorHandler);


            // drop table: "orderfood"
            sql = "DROP TABLE IF EXISTS orderfood;";
            tx.executeSql(sql, [], successDrop, errorHandler);

            // create table: "orderfood"
            sql =
                "CREATE TABLE orderfood( " +
                "orderId INTEGER NOT NULL," +
                "foodId INTEGER NOT NULL," +
                "quantity INTEGER NOT NULL," +
                "FOREIGN KEY(orderId) REFERENCES orders(orderId)," +
                "FOREIGN KEY(foodId) REFERENCES food(foodId));";
            tx.executeSql(sql, [], successCreate, errorHandler);
        }

        function successTransaction()
        {
            console.info("Create table transaction successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    }
};