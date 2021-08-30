var chai = require("chai");
var assert = chai.assert;

var {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  // formatPrice,
  // decreasePrice,
  // createRecipe
} = require("../src/meal-two");

describe("meal-two.js", function() {
  describe("nameMenuItem", function() {
    it("should be a function", function() {
      assert.isFunction(nameMenuItem);
    });

    it("should take in a name and make a delicious name", function () {
      var menuItemName = nameMenuItem("Pizza");
      assert.equal(menuItemName, "Delicious Pizza");
    });

    it("should be able to create many delicious titles", function () {
      var burritoItem = nameMenuItem("Burrito");
      var sushiItem = nameMenuItem("Pizza");
      var tacoItem = nameMenuItem("Taco");

      assert.equal(burritoItem, "Delicious Burrito");
      assert.equal(sushiItem, "Delicious Pizza");
      assert.equal(tacoItem, "Delicious Taco");
    });
  });

  describe("createMenuItem", function() {
    it("should be a function", function () {
      assert.isFunction(createMenuItem);
    });

    it("should create a menu item object", function() {
      var menuItemName = nameMenuItem("French Toast");
      var menuItem = createMenuItem(menuItemName, 10.99, "breakfast");

      assert.equal(menuItem.name, "Delicious French Toast");
      assert.equal(menuItem.price, 10.99);
      assert.equal(menuItem.type, "breakfast");
    });
  });


  describe("addIngredients", function() {
    it("should be a function", function () {
      assert.isFunction(addIngredients);
    });

    it("should be able to add ingredients to an array", function() {
      var ingredients = [];

      addIngredients("cheese", ingredients);

      assert.equal(ingredients.length, 1);
      assert.deepEqual(ingredients, ["cheese"]);
    });

    it("should be able to add ingredients to an array that already contains ingredients", function() {
      var ingredients = [];

      addIngredients("cheese", ingredients);
      addIngredients("peppers", ingredients);
      addIngredients("onion", ingredients);

      assert.equal(ingredients.length, 3);
      assert.deepEqual(ingredients, ["cheese", "peppers", "onion"]);
    });

    it.skip("should only add unique ingredients", function() {
      var ingredients = [];

      addIngredients("cheese", ingredients);
      addIngredients("peppers", ingredients);
      addIngredients("peppers", ingredients);

      assert.equal(ingredients.length, 2);
      assert.deepEqual(ingredients, ["cheese", "peppers"]);
    })
  })
});
