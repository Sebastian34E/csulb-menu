

const Monday = {
    "Beachside": {
        "Breakfast": "Ham, Egg and Cheese Sandwich on White Bread M/E/S\nKielbasa Sausage S\nCountry Potatoes",
        "Lunch": "Chicken Tortilla Soup E/M/W\nBLT Salad \nChicken Marsala M/W\nGardein Chicken Marsala \nChef Choice \nGyro Sandwich W/M\nSupreme Pizza S/W/M ",
        "Dinner": "Chicken Tortilla Soup E/M/W\nBLT Salad \nPork w/Chile Verde and Nopales \nFried Avocado Tacos W/S\nChef Choice \nBurrito Bowl M\nSupreme Pizza S/W/M "
    },
    "Hillside": {
        "Breakfast": "French Toast E/M/W\nKielbasa S\nHash Browns",
        "Lunch": "Broccoli Cheddar Soup M/W/S\nChicken and Rice Soup\nCitrus Kale Salad\nHamburger Bar W\nSalmon Burger F/W\nPasta alla Norma W\nChef's Choice \nBuild Your Own Grain Bowl \nTeriyaki Pork Stir-Fry S/W",
        "Dinner": "Broccoli Cheddar Soup M/W/S\nChicken and Rice Soup\nCitrus Kale Salad\nBeijing Beef S/W/SF-C\nBBQ Chicken Flatbread W/M\nKung Pao Tofu S\nChef's Choice \nBuild Your Own Grain Bowl \nTeriyaki Pork Stir-Fry S/W"
    },
    "Parkside": {
        "Breakfast": "French Toast E/M/W\nKielbasa S\nHash Browns",
        "Lunch": "Broccoli Cheddar Soup M/W/S\nChicken and Rice Soup\nCitrus Kale Salad\nHamburger Bar W/M\nSalmon Burger F/W\nPasta Alla Norma W\nChef's Choice \nSupreme Pizza S/W/M",
        "Dinner": "Broccoli Cheddar Soup M/W/S\nChicken and Rice Soup                           \nCitrus Kale Salad\nBeijing Beef  S/W/SF-C\nWet Turkey Burrito W/M\nKung Pao Tofu S\nChef's Choice \nSupreme Pizza S/W/M"
    }
};


const Tuesday = {
    "Beachside": {
        "Breakfast": "Breakfast Burrito E/W/M\nBacon\nPotatoes O' Brien\n",
        "Lunch": "Cream of Broccoli Soup M/S/W \nCobb Salad E/M\nFlank Steak w/Onions \nPasta w/Gardein Meat Sauce S/W\nChef Choice \nChicken Shawarma Sandwich W/M \nCaprese Flat Bread Pizza S/W/M\n",
        "Dinner": "Cream of Broccoli Soup M/S/W \nCobb Salad E/M\nSweet and Sour Chicken S/W\nTofu Fried Rice S/W\nChef Choice \nSushi Bowl M/E\nCaprese Flat Bread Pizza S/W/M\n"
    },
    "Hillside": {
        "Breakfast": "Sausage, Egg and Cheese English Muffin Sandwich W/E/M/S\nBacon\nTator Tots\n",
        "Lunch": "Italian Wedding Soup S/W/M\nVegetable Noodle Soup W\nCauliflower Ceviche\nMongolian Chicken Drumstick W/S\nBeef Fajitas \nGardein Meatball Pasta S/W\nChef's Choice \nBuild Your Own Grain Bowl \nLemon Chicken Stir Fry S/W\n",
        "Dinner": "Italian Wedding Soup S/W/M\nVegetable Noodle Soup W\nCauliflower Ceviche\nPasta Alfredo w/Broccoli W/M\nPopcorn Chicken Bowl W/M\nGardein Beef Teriyaki Bowl S/W\nChef's Choice \nBuild Your Own Grain Bowl \nLemon Chicken Stir Fry S/W\n"
    },
    "Parkside": {
        "Breakfast": "Sausage, Egg and Cheese Sandwich on English Muffin W/E/M/S\nBacon\nCottage Fries\n",
        "Lunch": "Miso Soup F/S\nMinestrone Soup W\nCauliflower Ceviche\nMongolian Chicken Drumstick W/S\nBeef Fajitas \nGardein Meatball Sub Sandwich W/S\nChef's Choice \nCarne Asada Pizza S/W/M\n",
        "Dinner": "Miso Soup F/S\nMinestrone Soup W\nCauliflower Ceviche\nPhilly Cheese Steak Sandwich M/W\nPopcorn Chicken Bowl W/M\nGardein Beef Teriyaki Bowl S/W\nChef's Choice \nCarne Asada Pizza S/W/M\n"
    }
};

const Wednesday = {
    'Beachside': {
        'Breakfast': 'Avocado Toast E/W/M\nSpam Hash\nTater Tots\n',
        'Lunch': 'Pork Pozole\nApple Walnut Salad TN\nBaked Chicken w/Lemon Sauce \nGardein Beef Tips w/Sweet and Sour Sauce \nChef Choice \nMeatlover Sandwich W/M\nCarne Asada Pizza S/W/M\n',
        'Dinner': 'Pork Pozole\nApple Walnut Salad TN\nMongolian Beef Stir Fry w/ Vegetables \nThai Chickpea Curry S\nChef Choice \nTaquito Station M/S/W\nCarne Asada Pizza S/W/M\n'
    },
    'Hillside': {
        'Breakfast': 'Hawaiian Breakfast E\nSPAM/Ham \nCountry Potatoes/Rice\n',
        'Lunch': 'Tomato Basil Soup M/W\nBeef and Barley Soup W\nRYO Veggie Sushi \nMeatloaf  W/E\nTandoori Chicken W/M/S\nPotato and Cauliflower Curry                                 \nChef\'s Choice \nBuild Your Own Grain Bowl \nCrispy Orange Beef Stir-Fry S/W/SF-C\n',
        'Dinner': 'Tomato Basil Soup M/W\nBeef and Barley Soup W\nRYO Veggie Sushi\nPasta Bar W/M\nHerb Roasted Turkey\nLentil Taco\nChef\'s Choice \nBuild Your Own Grain Bowl \nCrispy Orange Beef Stir-Fry S/W/SF-C\n'
    },
    'Parkside': {
        'Breakfast': 'Hawaiian Breakfast E\nSPAM\nCountry Potatoes/Rice\n',
        'Lunch': 'Tomato Basil Soup M/W\nVegetable Noodle  Soup W\nRYO Spicy Tuna Sushi F/S/W\nMeatloaf  W/E\nTandoori Chicken W/M/S\nPotato and Cauliflower Curry                                 \nChef\'s Choice \nRoasted Butternut Squash w/Bacon and Caramelized Onion Pizza S/W/M\n',
        'Dinner': 'Tomato Basil Soup M/W\nVegetable Noodle  Soup W\nRYO Spicy Tuna Sushi F/S/W\nPasta Bar W/M                 \nMozzarella Sticks w/Marinara Sauce M/W\nLentil Tacos\nChef\'s Choice \nRoasted Butternut Squash w/Bacon and Caramelized Onion Pizza S/W/M\n'
    }
};

const Thursday = {
    "Beachside": {
        "Breakfast": "Egg Fried Rice S/W\nPork Links\nHash Browns",
        "Lunch": "Italian Ravioli Soup E/M/W\nGreek Salad w/Chicken M\nOrange Chicken W/S\nGardein Broccoli Beef  S/W\nChef Choice \nItalian Sub Sandwich M/W\nBBQ Pizza S/W/M",
        "Dinner": "Italian Ravioli Soup E/M/W\nGreek Salad w/Chicken M\nWing and Things \nGardein Wings S/W\nChef Choice \nAsada Fries S/W\nBBQ Pizza S/W/M"
    },
    "Hillside": {
        "Breakfast": "Blueberry Pancakes M/W/S\nPork Links\nHash Brown Patty",
        "Lunch": "Potato Chowder W/M/S\nChicken Pozole Verde\nChicken Taco Salad M/W/E\nCheese Ravioli w/Creamy Tomato Sauce W/E/M\nBBQ Pork Ribs\nLentil Chili Mac W\nChef's Choice \nBuild Your Own Grain Bowl \nKung Pao Chicken S",
        "Dinner": "Potato Chowder W/M/S\nChicken Pozole Verde\nChicken Taco Salad M/W/E\nTuna Melt Sandwich F/W/E/M/S\nCowboy Beef Flank Steak\nTofu Fried Rice and Vegetables S/W\nChef's Choice \nBuild Your Own Grain Bowl \nKung Pao Chicken S"
    },
    "Parkside": {
        "Breakfast": "Blueberry Pancakes M/W/S\nPork Links\nTater Tots",
        "Lunch": "Potato Chowder W/M/S\nChicken Pozole w/ Tomatillo \nChicken Taco Salad M/W/E\nCheese Ravioli w/ Creamy Tomato Sauce W/E/M\nBBQ Pork Ribs\nGardein Beef Burrito W/S\nChef's Choice \nBuffalo Chicken Pizza S/W/M",
        "Dinner": "Potato Chowder W/M/S\nChicken Pozole w/ Tomatillo\nChicken Taco Salad M/W/E\nTurkey Pesto Flatbread Sandwich M/W/E\nCowboy Beef Flank Steak\nTofu and Vegetables Fried Rice S/W\nChef's Choice \nBuffalo Chicken Pizza S/W/M"
    }
};


const Friday = {
    "Beachside": {
        "Breakfast": "Sausage, Egg and Cheese Sandwich English Muffin W/E/M/S\nTurkey Sausage\nPapas Ala Mexicana\n",
        "Lunch": "Clam Chowder SF / M / W\nBuffalo Chicken Salad M/W/S\nLemon Pepper Tilapia F/W\nTofu and Long Beans Stir Fry S/W\nChef Choice \nFish Sandwich F/W\nCheeseburger Pizza S/W/M\n",
        "Dinner": "Clam Chowder SF / M / W\nBuffalo Chicken Salad M/W/S\nWhite fish w/ Mango Salsa F\nBaked Ziti W\nChef Choice \nCheeseburger Pizza S/W/M\n"
    },
    "Hillside": {
        "Breakfast": "Breakfast Burrito E/W/M\nTurkey Sausage\nSouthwestern Potatoes\n",
        "Lunch": "Minestrone  Soup W\nClam Chowder M/W/SF-C\nArugula Salad M \nStreet Beef Hot Dog W\nFirecracker  Salmon F/S/W      \nSzechuan Tofu and Veggies S/W\nChef's Choice \nBuild Your Own Grain Bowl \nSpicy Beef Stir Fry S/W\n",
        "Dinner": "Minestrone  Soup W\nClam Chowder M/W/SF-C\nArugula Salad M \nLemon Chicken W/S\nShrimp Scampi SF-C/M/W\nPasta w/Gardein Meat Sauce S/W\nChef's Choice \nBuild Your Own Grain Bowl \nSpicy Beef Stir Fry S/W\n"
    },
    "Parkside": {
        "Breakfast": "Egg, Potato and Cheese Breakfast Burrito E/W/M\nTurkey Sausage\nPotatoes O'Brien\n",
        "Lunch": "Italian Wedding Soup S/W/M\nClam Chowder M/W/SF-C\nArugula Salad M \nStreet Beef Hot Dog W\nFirecracker  Salmon F/S/W      \nSzechuan Tofu and  Veggies S/W\nChef's Choice \nCaprese Flatbread Pizza S/W/M\n",
        "Dinner": "Italian Wedding Soup S/W/M\nClam Chowder M/W/SF-C\nArugula Salad M \nLemon Chicken W/S\nShrimp Scampi SF-C/W/M\nPasta w/Gardein Meat Sauce S/W\nChef's Choice \nCaprese Flatbread Pizza S/W/M\n"
    }
};


const Saturday = {
    "Beachside": {
        "Brunch": "Blueberry Pancakes M/W/S\nBacon\nHome Fries \nBaked Potato Soup  M/S/W \nChef Choice \n",
        "Dinner": "Baked Potato Soup M/S/W \nHerb Roasted Chicken \nCrispy Tofu w/Noodles\nChef Choice \n"
    },
    "Hillside": {
        "Brunch": "Waffle Sticks E/M/S/W\nBacon\nTator Tots\nChicken Gumbo E/M/S/W/F\nMiso Soup F/S\nJuice Bar\nChef's Choice \nBuild Your Own Crepe \n",
        "Dinner": "Chicken Gumbo E/M/S/W/F\nMiso Soup F/S\nItalian Pasta Salad W\nSteak Quesadilla M/W\nBuffalo Chicken Tenders W\nChana Masala Chickpeas\nBaked Ziti W/M\n"
    }
};


const Sunday = {
    "Beachside": {
        "Brunch": "French Toast E/M/W\nSausage Links\nHash Brown Patty\nHam and Split Pea Soup\nChef Choice ",
        "Dinner": "Ham and Split Pea Soup\nBeef Enchiladas \nCheese Enchiladas \nChef Choice "
    },
    "Parkside": {
        "Brunch": "French Toast Sticks E/M/W/S\nSausage Links\nHash Brown Patty\nPotato Leek  Soup M/S/W\nAlbondigas Soup \nYogurt Parfait Bar W/M\nChef's Choice ",
        "Dinner": "Potato Leek  Soup M/S/W\nAlbondigas Soup \nIrish Nacho Bar M\nChicken Bacon Alfredo Pasta W/M\nGardein Beef Fajitas S/W"
    }
};
function getMenuData(day, location) {
    const menuData = {
      Monday,
      Tuesday,
      Wednesday,
      Thursday,
      Friday,
      Saturday,
      Sunday
    };
  
    if (menuData[day] && menuData[day][location]) {
      return menuData[day][location];
    } else {
      return "Menu data not found for the specified day and location.";
    }
  }
 
  module.exports = {
    getMenuData
  };