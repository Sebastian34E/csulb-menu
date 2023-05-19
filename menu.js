const today = luxon.DateTime.local();
const day = today.toLocaleString({ weekday: 'long' });
const firstMonday = today.startOf('week');
const formattedDate = firstMonday.toFormat('LLL d');
console.log(day);

//This function needs to be updated with the static information from the csulb menu website
function get_cyclenumber(formattedDate, location) {
  const cycleMenus = {
    'May 15': {"Beachside": "3", "Hillside": "2", "Parkside": "1"},
    'May 22': {"Beachside": "4", "Hillside": "3", "Parkside": "2"},
    'May 29': {"Beachside": "5", "Hillside": "4", "Parkside": "3"},
    'Jun 5': {"Beachside": "1", "Hillside": "5", "Parkside": "4"}
  };
  return cycleMenus[formattedDate][location];
}

var beachside_cycle = get_cyclenumber(formattedDate, "Beachside");
var hillside_cycle = get_cyclenumber(formattedDate, "Hillside");
var parkside_cycle = get_cyclenumber(formattedDate, "Parkside");  

function find_dic(cycleNumber, day, location) {
  //Cycle 1 Menu 
  let menu = null;

  const Monday1 = {'Beachside': {
    "Breakfast": "Pancakes M/W/S\nBacon\nTater Tots",
    "Lunch": "Chicken Noodle Soup W\nBuffalo Chicken Salad M/W/S\nIndian Butter Chicken M\nStuffed Portobello Mushrooms\nChef Choice\nCuban Sandwich W/M\nMeatlover Pizza M/W/S\n",
    "Dinner": "Chicken Noodle Soup W\nBuffalo Chicken Salad M/W/S\nChicken Pot Pie M/W\nMeatless Pasta Bar W/S\nChef Choice\nPho Soup Bar S/W\nMeatlover Pizza M/W/S\n"
  },
    'Hillside': {"Breakfast": "Pancakes M/W/S\nBacon\nHash Browns",
                "Lunch": "Ravioli Italian Soup E/M/W\nChicken Noodle Soup W\nBuffalo Chicken Salad M/W/S\nSpicy Miso Pork Ramen E/F/W/S\nCrispy Taquitos S/W\nStuffed Bell Peppers W\nChef's Choice\nBuild Your Own Grain Bowl\nKung Pao Chicken S\n",
                "Dinner": "Ravioli Italian Soup E/M/W\nChicken Noodle Soup W\nBuffalo Chicken Salad M/W/S\nChicken Tenders W\nTexas Style Pork Ribs\nKung Pao Gardein Chicken S/W\nChef's Choice\nBuild Your Own Grain Bowl\nKung Pao Chicken S\n"
                },
    'Parkside': {
    "Breakfast": "Pancakes M/W/S\nBacon\nCajun Potatoes",
    "Lunch": "Ravioli Italian Soup E/M/W\nChicken Noodle Soup W\nBuffalo Chicken Salad M/W/S/E\nSpicy Miso Pork Ramen E/F/W/S\nRoasted Harissa Chicken\nStuffed Bell Peppers\nChef's Choice\nMeatlover's Pizza M/W/S\n",
    "Dinner": "Chicken Noodle Soup W\nBuffalo Chicken Salad M/W/S\nChicken Pot Pie M/W\nMeatless Pasta Bar W/S\nChef Choice\nPho Soup Bar S/W\nMeatlover Pizza M/W/S\n"
  }
  };
  const Tuesday1 = {
    'Beachside': {
        'Breakfast': 'Egg and Ham Croissant EM/W/S\nKielbasa\nHome Style Potatoes',
        'Lunch': 'Italian Ravioli Soup W/M/E\nKale and Quinoa Salad\nBeef Brisket\nEdamame Fried Rice S/W\nChef Choice\nHamburger Bar W/M\nBBQ Chicken Pizza M/W/S',
        'Dinner': 'Italian Ravioli Soup w/ Vegetable W/M/E\nKale and Quinoa Salad\nSpicy Honey Pork Chops\nRoasted Tomato w/Quinoa and Brown rice\nChef Choice\nBeef Burrito Bowl S/M\nBBQ Chicken Pizza M/W/S'
    },
    'Hillside': {
        'Breakfast': 'Biscuit and Country Gravy M/W/S\nKielbasa S\nCountry Potatoes',
        'Lunch': 'Minestrone Soup W\nPotato and Bacon Soup M/W/S\nKale and Quinoa Salad\nGrilled Thai Chicken\nCarnitas Sopes M\nPasta w/Gardein Meat Sauce S/W\nChef\'s Choice\nBuild Your Own Grain Bowl\nBeef and Vegetables Stir Fry S/W',
        'Dinner': 'Minestrone Soup W\nPotato and Bacon Soup M/W/S\nKale and Quinoa Salad\nMeat Lasagna W/E/M/S\nRoasted Harissa Chicken\nBrown Rice and Quinoa w/Roasted Tomato\nChef\'s Choice\nBuild Your Own Grain Bowl\nBeef and Vegetables Stir Fry S/W'
    },
    'Parkside': {
        'Breakfast': 'Biscuit and Country Gravy M/W/S\nKielbasa S\nHash Browns',
        'Lunch': 'Minestrone Soup W\nCorn Chowder M/S/W\nCaesar Salad M/E/F\nGrilled Thai Chicken\nBreaded Fish Sandwich F/W/M\nBaked Pasta w/ Gardein Meat Sauce S/W\nChef\'s Choice\nBuffalo Chicken Pizza M/W/S',
        'Dinner': 'Minestrone Soup W\nCorn Chowder Soup M/S/W\nCaesar Salad M/E/F\nMeat Lasagna W/E/M/S\nShrimp w/Vegetable Stir-Fry SF-C/S/W\nBrown Rice and Quinoa w/Roasted Tomato\nChef\'s Choice\nBuffalo Chicken Pizza M/W/S'
    }
  };
  const Wednesday1 = {
    "Breakfast": {
        "Beachside": "Huevos Rancheros E/M\nChorizo Patty\nPapas Ala Mexicana",
        "Hillside": "Chorizo and Egg Burrito E/W/S\nTurkey Sausage Links\nTator Tots",
        "Parkside": "Soyrizo Chorizo,Egg, Potato and Cheese Burrito S/E/W/M\nTurkey Sausage Links\nHash Brown Patty"
    },
    "Lunch": {
        "Beachside": "Egg Flower Soup E\nRYO California Sushi F/E/W/S/SF-C\nOrange Chicken W/S\nKung Pao Gardein Chicken S/W\nChef Choice \nBahn Mi Sandwich S/W\nDiablo Pizza M/W/S",
        "Hillside": "Corn Chowder M/S/W\nPork Pozole Rojo\nGreek Salad M\nBaked Ziti W/M\nGrilled Beef Flank Steak w/Chimichurri Sauce\nGardein Orange Chicken S/W\nChef's Choice \nBuild Your Own Grain Bowl\nTeriyaki Chicken Stir Fry S/W",
        "Parkside": "Chicken and Poblano Chile Soup M/W\nPork Pozole\nGreek Salad M\nBaked Ziti W/M\nGrilled Beef Flank Steak w/Chimichurri Sauce\nGardein Orange Chicken S/W\nChef's Choice \nPepperoni and Jalapeño Pizza  M/W/S"
    },
    "Dinner": {
        "Beachside": "Egg Flower Soup E\nRYO California Sushi F/E/W/S/SF-C\nLoco Moco M\nGardein Chicken and Broccoli S/W\nChef Choice \nUdon Noodle Soup Bowl S/W\nDiablo Pizza M/W/S",
        "Hillside": "Corn Chowder Soup M/S/W\nPork Pozole Rojo\nGreek Salad M\nBBQ Chicken Sandwich W\nPork Chile Verde\nGardein Chicken Tenders S/W\nChef's Choice \nBuild Your Own Grain Bowl\nTeriyaki Chicken Stir Fry S/W",
        "Parkside": "Chicken and Poblano Chile Soup M/W\nPork Pozole\nGreek Salad M\nBBQ Chicken Sandwich W\nPork Chile Verde\nGardein Chicken Tenders S/W\nChef's Choice \nPepperoni and Jalapeño Pizza M/W/S"
    }
  };
  const Thursday1 = {"Beachside": {
    "Breakfast": "Biscuit and Country Gravy M/W/S\nSausage Patty\nCountry Potatoes",
    "Lunch": "Miso Soup w/ Mushrooms S/W\nCalifornia Cobb Salad M/E/W\nCajun Chicken\nGardein Fajitas S/W\nChef Choice\nBBQ Pulled Chicken Sandwich W/M\nHawaiian Pizza M/W/S",
    "Dinner": "Miso Soup w/Mushrooms S/W\nCalifornia Cobb Salad M/E/W\nChicken Parmesan M/W/S\nEggplant Parmesan\nChef Choice\nCold Sub Sandwich M/W\nHawaiian Pizza M/W/S"
  },
    "Hillside": {
        "Breakfast": "French Toast E/M/W\nSausage Patty\nHash Brown Patty",
        "Lunch": "Chicken and Rice Soup\nTomato Basil Soup M/W\nRYO California Sushi F/E/W/S/SF-C\nPasta Primavera W\nHamburger Bar W/M\nGardein Beef w/Black Pepper Sauce S/W\nChef's Choice\nBuild Your Own Grain Bowl\nSweet and Spicy Pork S/W",
        "Dinner": "Chicken and Rice Soup\nTomato Basil Soup M/W\nRYO California Sushi F/E/W/S/SF-C\nTeriyaki Chicken W/S\nLoaded Grilled Cheese  Sandwich W/M/S\nVegetable Egg Rolls S/W\nChef's Choice\nBuild Your Own Grain Bowl\nSweet and Spicy Pork S/W"
  },
    "Parkside": {
        "Breakfast": "Sausage, Egg and Cheese Sandwich on English Muffin E/M/W\nSausage Patty\nTater Tots",
        "Lunch": "Chicken and Rice Soup\nTomato Basil Soup M/W\nRYO California Sushi F/E/W/S/SF-C\nHamburger Bar M/W\nRoasted Corn Batter Nugget Bites  W/M\nGardein Beef w/Black Pepper Sauce S/W\nChef's Choice\nPesto Artichoke Pizza M/W/S",
        "Dinner": "Chicken and Rice Soup\nTomato Basil Soup M/W\nRYO California Sushi F/E/W/S/SF-C\nTeriyaki Chicken W/S\nLoaded Grilled Cheese  Sandwich M/W/S\nStuffed Zucchini Boat\nChef's Choice\nPesto Artichoke Pizza M/W/S"
  }
  };
  const Friday1 = {
    'Beachside': {
        'Breakfast': 'Chorizo and Egg Burrito W/E/S\nTurkey Sausage\nHashbrown Patty',
        'Lunch': 'Clam Chowder M/W/SF\nSpicy Cucumber Salad M\nKorean Ribs S/W\nSzechuan Tofu w/Peppers S/W\nChef Choice\nTeriyaki Chicken Sandwich S/W\nVegetable Pizza M/W/S',
        'Dinner': 'Clam Chowder M/W/SF\nSpicy Cucumber Salad M\nFish Tacos\nCheese Ravioli S\nChef Choice\nVegetable Pizza M/W/S'
    },
    'Hillside': {
        'Breakfast': 'Sausage, Egg and Cheese English Muffin Sandwich W/E/M/S\nBacon\nPotatoes O\'Brien',
        'Lunch': 'Clam Chowder M/W/SF-C\nVegetable Noodle Soup W\nApple Walnut Salad TN\nLemon Pepper Salmon F\nMoroccan Chicken w/Vegetables\nEdamame Fried Rice S/W\nChef\'s Choice\nBuild Your Own Grain Bowl\nLemon Shrimp Stir Fry S/W/SF-C',
        'Dinner': 'Clam Chowder M/W/SF-C\nVegetable Noodle Soup W\nApple Walnut Salad TN\nBeef Red Chile Colorado\nFish and Chips F/W/M\nGardein Chicken  and  Broccoli W/S\nChef\'s Choice\nBuild Your Own Grain Bowl\nLemon Shrimp Stir Fry SF-C/S/W'
    },
    'Parkside': {
        'Breakfast': 'French Toast E/M/W\nBacon\nPotatoes O\'Brien',
        'Lunch': 'Clam Chowder M/W/SF-C\n3 Bean Vegetarian Chili\nApple Walnut Salad TN\nLemon Pepper Salmon F\nMoroccan Chicken w/Vegetables\nEdamame Fried Rice S/W\nChef\'s Choice\nVeggie Pizza M/W/S',
        'Dinner': 'Clam Chowder M/W/SF-C\n3 Bean Vegetarian Chili\nApple Walnut Salad TN\nBeef Red Chile Colorado\nFish and Chips F/W/M\nGardein Chicken and Broccoli W/S\nChef\'s Choice\nVeggie Pizza M/W/S'
    }
  };
  const Saturday1 = {
    "Beachside": {
        "Brunch": "Chocolate Chip Pancakes M/W/S\nGrilled Ham\nTater Tots \nBroccoli Cheddar Soup M/W/S\nChef Choice ",
        "Dinner": "Broccoli Cheddar Soup M/W/S\nEnchiladas S/W\nLentil Taco\nChef Choice"
    },
    "Hillside": {
        "Brunch": "French Toast Sticks E/M/W\nKielbasa S\nTator Tots\nItalian Wedding  Soup W/S/M\nBroccoli Cheddar Soup M/W/S\nYogurt Parfait Bar\nChef's Choice\nBuild Your Own Crepe",
        "Dinner": "Italian Wedding  Soup W/S/M\nBroccoli Cheddar Soup M/W/S\nChurros W\nBeef and Cheese Enchiladas S/W/M\nPasta Bar W/M\nGardein Fajitas S/W\nMozzarella Sticks W/M"
    }
  };
  const Sunday1 = {
    "Beachside": {
        "Brunch": "Cinnamon Rolls S/W\nLittle Smokies \nHash Browns\nChicken and Rice Soup\nChef Choice ",
        "Dinner": "Chicken and Rice Soup\nBeef Lasagna \nVegetable Lasagna \nChef Choice"
    },
    "Parkside": {
        "Brunch": "Waffle Sticks E/M/S/W\nSausage Link\nHash Brown Patty\nBeef Barley Soup W\nPotato Chowder W/M/S\nSmoothie of the Day\nChef's Choice",
        "Dinner": "Beef Barley Soup W\nPotato Chowder W/M/S\nChicken Parmesan Sandwich M/W/S\nBaked Tortellini w/Spinach E/M/W\nSzechuan Tofu and Eggplant S/W"
    }
    };
  //Cycle 2 Menu  
  const Monday2 = {
    "Beachside": {
        "Breakfast": "Breakfast Sandwich on Naan Bread E/W/M\nTurkey Sausage\nHome Style Potatoes\n",
        "Lunch": "Ravioli Italian Soup E/M/W\nPasta Salad W/M\nBeef Stroganoff W/M\nVeggie Shepherd's Pie\nChef Choice \nClub Sandwich W/M  \nMexican Pizza M/S/W\n",
        "Dinner": "Ravioli Italian Soup E/M/W\nPasta Salad W/M\nChicken Birria \nGardein Chile Verde S/W\nChef Choice \nAsada Nacho M\nMexican Pizza M/S/W\n"
    },
    "Hillside": {
        "Breakfast": "Pancakes M/W/S\nTurkey Sausage\nSouthwestern Potatoes\n",
        "Lunch": "Chicken Gumbo Soup E/M/S/W/F\nButternut Squash Soup M\nPesto Tortellini Salad M/W/E\nBreaded Chicken Creamy Chipotle Pasta M/W\nBeef Tri Tip w/ Caramelized Onions\nThe Buddha Bowl\nChef's Choice \nBuild Your Own Grain Bowl \nChar Sui Pork Stir Fry S/W\n",
        "Dinner": "Chicken Gumbo Soup E/M/S/W/F\nButternut Squash Soup M\nPesto Tortellini Salad M/W/E\nBeef Taquitos S/W\nButter Chicken M\nCreamy Vegan Cauliflower Mac and Cheese W\nChef' Choice \nBuild Your Own Grain Bowl \nChar Sui Pork Stir Fry S/W\n"
    },
    "Parkside": {
        "Breakfast": "Pancakes M/W/S\nTurkey Sausage\nTater Tots\n",
        "Lunch": "Chicken Gumbo Soup E/M/S/W/F\nMiso Soup F/S\nPesto Tortellini Salad M/W/E\nBreaded Chicken Creamy Chipotle Pasta W/M\nBeef Tri Tip w/ Mustard Sauce W/M\nThe Buddha Bowl\nChef's Choice \nBBQ Chicken Pizza M/W/S\n",
        "Dinner": "Chicken Gumbo Soup E/M/S/W/F\nMiso Soup F/S\nPesto Tortellini Salad M/W/E\nBeef Taquitos S/W\nGrilled Chicken Bowl\nVegan Creamy Mac and Cheese W/S\nChef' Choice \nBBQ Chicken Pizza M/W/S\n"
    }
  };

  const Tuesday2 = {
    "Beachside": {
        "Breakfast": "Bacon Fried Rice S/W\nKielbasa \nHash Brown Patty\n",
        "Lunch": "Chicken Noodle Soup E/W\nPesto Caesar Salad M/W\nFried Chicken/Baked W/S\nCauliflower Mac and Cheese \nChef Choice \nTaco Tuesday \nVegetable Calzone M/S/W\n",
        "Dinner": "Chicken Noodle Soup E/W\nPesto Caesar Salad M/W\nSwedish Meatballs S/W/M\nGardein Fish and Chips \nChef Choice \nBuffalo Chicken Wrap M\nVegetable Calzone M/S/W\n"
    },
    "Hillside": {
        "Breakfast": "Chilaquiles M\nBacon\nHash Browns\n",
        "Lunch": "Broccoli Cheddar Soup M/W/S\nChicken Tortilla Soup S/W\nCobb Salad M/E\nFilipino Pork S/W\nBeef Hot Dog Bar W/M\nVegetable Tangine w/Brown Rice\nChef's Choice \nBuild Your Own Grain Bowl \nMongolian Stir Fry Chicken S/W\n",
        "Dinner": "Broccoli Cheddar Soup M/W/S\nChicken Tortilla Soup S/W\nCobb Salad M/E\nChicken and Black Pepper Sauce S/W\nNacho Bar M\nFried Avocado Tacos W/M/S/E\nChef's Choice \nBuild Your Own Grain Bowl \nMongolian Stir Fry Chicken S/W\n"
    },
    "Parkside": {
        "Breakfast": "Chilaquiles M\nBacon\nHash Browns\n",
        "Lunch": "Chicken Tortilla Soup S/M\nCobb Salad M/E/S\nFilipino Pork S/W\nBeef Hot Dog Bar W/M\nVegetable Tangine w/ Brown Rice\nChef's Choice \nCreamy Garlic Ricotta Flatbread Pizza M/W/S\n",
        "Dinner": "Vegan Tosana Soup                                      \nChicken Tortilla Soup S/M\nCobb Salad M/E/S\nChicken and Black Pepper Sauce S/W\nNacho Bar M\nSpicy Korean Tofu Bowl S/W\nChef's Choice \nCreamy Garlic Ricotta Flatbread Pizza M/W/S\n"
    }
  };
  const Wednesday2 = {
    "Beachside": {
        "Breakfast": "Breakfast Burrito E/W/M\nPork Links\nCountry Potatoes\n",
        "Lunch": "Corn Chowder M/S/W\nPho Salad S/W     \nFlank Steak w/Chimichurri Sauce\nManicotti w/Pesto Kale Sauce W/M \nChef Choice \nOrtega Sandwich W/M\nBuffalo Chicken Pizza M/S/W\n",
        "Dinner": "Corn Chowder M/S/W                                    \nPho Salad S/W\nTandoori Chicken M\nMoroccan Lentil \nChef Choice \nTater Tots Chili Bar M/W\nBuffalo Chicken Pizza M/S/W\n"
    },
    "Hillside": {
        "Breakfast": "Breakfast Burrito E/M/W\nPork Links\nCountry Potatoes\n",
        "Lunch": "Tomato Basil Soup M/W\nChicken Noodle Soup W\nRYO Spicy California Sushi F/E/W/S/SF-C\nOrange Chicken Bowl S/W\nPasta Beef Bolognese W\nTofu w/White Bean Stew S\nChef's Choice \nBuild Your Own Grain Bowl \nBlack Pepper Beef Stir Fry S/W\n",
        "Dinner": "Tomato Basil Soup M/W\nChicken Noodle Soup W\nRYO Spicy California Sushi F/E/W/S/SF-C\nCajun Fish F\nBeef Bulgogi Fries W/S/M\nGardein Beef Fajitas S/W\nChef's Choice \nBuild Your Own Grain Bowl \nBlack Pepper Beef Stir Fry S/W\n"
    },
    "Parkside": {
        "Breakfast": "Egg, Potato and Cheese Breakfast Burrito E/W/M\nPork Links\nSpicy Potatoes\n",
        "Lunch": "Tomato Basil Soup M/W\nChicken Noodle Soup W\nRYO Spicy California Sushi F/E/W/S/SF-C\nOrange Chicken Bowl W/S\nPasta Beef Bolognese W\nTofu w/White Bean Stew S\nChef's Choice \nTaco Pizza M/W/S\n",
        "Dinner": "Tomato Basil Soup M/W\nChicken Noodle Soup W\nRYO Spicy California Sushi F/E/W/S/SF-C\nCajun Fish F\nBeef Bulgogi Fries W/S/M\nBlack Bean Enchilada Casserole S\nChef's Choice \nTaco Pizza M/W/S\n"
    }
  };
  const Thursday2 = {
    "Beachside": {
        "Breakfast": "Egg, Spinach and Cheese on a  Croissant E/M/W/S\nLittle Smokies\nHash Browns",
        "Lunch": "Potato and Bacon Soup M/W/S\nSpicy Korean Salad F/W/S\nChicken Bacon Alfredo Pasta M/W   \nGardein Meatball Pasta S/W\nChef Choice \nGrilled Ham and Cheese Sandwich W/M \nPastrami Pizza M/S/W",
        "Dinner": "Potato and Bacon Soup M/W/S\nSpicy Korean Salad F/W/S\nTeriyaki Chicken S/W\nGardein Beef Teriyaki S/W\nChef Choice \nAsada Burrito M/W/S\nPastrami Pizza M/S/W"
    },
    "Hillside": {
        "Breakfast": "Biscuit and Country Gravy M/W/S\nTurkey Bacon\nHash Brown Patty",
        "Lunch": "Potato Leek Soup M/W/S\nCaldo de Res\nBrown Rice and Quinoa Kale Salad\nBBQ Pulled Pork Sandwich W                              \nFried Chicken w/Mashed Potatoes W/M\nGardein Chicken Stir Fry S/W\nChef's Choice \nBuild Your Own Grain Bowl \nSweet and Sour Chicken Stir Fry W/S",
        "Dinner": "Potato Leek Soup M/W/S\nCaldo de Res \nBrown Rice and Quinoa Kale Salad\nMac and Cheese M/W/S\nChipotle Chicken Bowl\nVegetable Barley Stew W\nChef's Choice \nBuild Your Own Grain Bowl \nSweet and Sour Chicken Stir Fry W/S"
    },
    "Parkside": {
        "Breakfast": "French Toast E/M/W                                     \nTurkey Bacon\nTator Tots",
        "Lunch": "Broccoli Cheddar Soup M/W/S\nCaldo de Res \nBrown Rice and Quinoa Kale Salad\nBBQ Pulled Pork Sandwich W\nBeef and Potato Quesadilla W/M\nGardein Chicken Stir Fry S/W\nChef's Choice\nRanch Chicken Bacon Pizza W/M/S",
        "Dinner": "Broccoli Cheddar Soup M/W/S\nCaldo de Res \nBrown Rice and Quinoa Kale Salad\nMac and Cheese M/W/S\nBeef Pho S/W/F\nGardein Beef and Onions S/W\nChef's Choice \nRanch Chicken Bacon Pizza W/M/S"
    }
  };

  const Friday2 = {
    "Beachside": {
        "Breakfast": "Chilaquiles Verdes M\nGrilled Breakfast Steak\nPapas Ala Mexicana",
        "Lunch": "Clam Chowder M/SF-C/W\nSpanish Potato Salad E/M\nWhite Fish w/Roasted Bell Pepper Sauce F/M\nEdamame Fried Rice S/W\nChef Choice \nCrispy Onion Burger W/M\nBLT Pizza M/S/W",
        "Dinner": "Clam Chowder M/SF-C/W\nSpanish Potato Salad E/M\nShrimp Pasta SF/M\nRoasted Tofu and Edamame S/W\nChef Choice \nBLT Pizza M/S/W"
    },
    "Hillside": {
        "Breakfast": "Ham, Egg and Cheese on Croissant Sandwich E/W/M/S\nLil Smokies\nPotatoes O'Brien",
        "Lunch": "Minestrone  Soup W\nClam Chowder M/W/SF-C\nElote in a Cup E/M\nFish Tacos F/E\nChicken Shawarma Bowl M\nThai Curry Tofu S\nChef's Choice \nBuild Your Own Grain Bowl \nBeef and Broccoli Stir-Fry S/W",
        "Dinner": "Minestrone  Soup W\nClam Chowder M/W/SF-C\nElote in a Cup E/M\nWings and Things W\nSalmon Florentine F/M/W\nAsian Noodles w/ Vegetables W/S\nChef's Choice \nBuild Your Own Grain Bowl \nBeef and Broccoli Stir-Fry S/W"
    },
    "Parkside": {
        "Breakfast": "Egg, Ham and Cheese Sandwich on Croissant E/W/M/S\nLil Smokies\nPotatoes O'Brien",
        "Lunch": "Moroccan Lentil Soup\nClam Chowder M/W/SF-C\nCaprese Salad M\nFish Tacos F/E\nChicken Shawarma Bowl M\nThai Curry Tofu S\nChef's Choice \nHawaiian Pizza M/W/S",
        "Dinner": "Moroccan Lentil Soup\nClam Chowder M/W/SF-C\nCaprese Salad M\nWings and Things W\nSalmon Florentine F/M/W\nAsian Noodles w/Vegetables and Tofu W/S\nChef's Choice \nHawaiian Pizza M/W/S"
    }
  };

  const Saturday2 = {
    "Beachside": {
        "Brunch": "French Toast E/W/M\nGrilled Ham \nTater Tots\nTomato Basil Soup M/W\nChef Choice ",
        "Dinner": "Tomato Basil Soup M/W\nChicken Fried Steak W/S/M \nCheese Ravioli E/M/W\nChef Choice "
    },
    "Hillside": {
        "Brunch": "Pancakes M/W/S\nBacon\nTator Tots\nVegetarian Chili W\nMiso Soup F/S          \nSmoothie Bar\nChef's  Choice\nBuild Your Own Crepe",
        "Dinner": "Vegetarian Chili W\nMiso Soup F/S\nChips and Salsa Bar\nChicken Barbacoa Taco\nShrimp Pesto Pasta SF-C/W/M\nGardein Enchilada Scolopine S/W\nStuffed Pasta Shells M/W/E"
    }
  };
  const Sunday2 = {
    "Beachside": {
        "Brunch": "Chocolate Chip Pancakes M/W/S\nSausage Patty\nHash Brown Patty\nBeef Barley Soup W\nChef Choice ",
        "Dinner": "Beef Barley Soup W\nLemongrass Chicken W/S\nCurry Chickpea Vegetables TN\nChef Choice "
    },
    "Parkside": {
        "Brunch": "Chocolate Chip Pancakes M/W/S\nSausage Patty\nHash Brown Patty\nBeef and Rice Soup \nVegetable Noodle Soup W\nFresh Juice of the Day\nChef's  Choice ",
        "Dinner": "Beef and Rice Soup \nVegetable Noodle Soup W\nSweet and Spicy Pork S/W\nPaprika Chicken Drumstick\nRatatouille\n"
    }
  };
  //Cycle 3 Menu
  const Monday3 = {
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
  const Tuesday3 = {
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
  const Wednesday3 = {
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
  const Thursday3 = {
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
  const Friday3 = {
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
  const Saturday3 = {
    "Beachside": {
        "Brunch": "Blueberry Pancakes M/W/S\nBacon\nHome Fries \nBaked Potato Soup  M/S/W \nChef Choice \n",
        "Dinner": "Baked Potato Soup M/S/W \nHerb Roasted Chicken \nCrispy Tofu w/Noodles\nChef Choice \n"
    },
    "Hillside": {
        "Brunch": "Waffle Sticks E/M/S/W\nBacon\nTator Tots\nChicken Gumbo E/M/S/W/F\nMiso Soup F/S\nJuice Bar\nChef's Choice \nBuild Your Own Crepe \n",
        "Dinner": "Chicken Gumbo E/M/S/W/F\nMiso Soup F/S\nItalian Pasta Salad W\nSteak Quesadilla M/W\nBuffalo Chicken Tenders W\nChana Masala Chickpeas\nBaked Ziti W/M\n"
    }
  };
  const Sunday3 = {
    "Beachside": {
        "Brunch": "French Toast E/M/W\nSausage Links\nHash Brown Patty\nHam and Split Pea Soup\nChef Choice ",
        "Dinner": "Ham and Split Pea Soup\nBeef Enchiladas \nCheese Enchiladas \nChef Choice "
    },
    "Parkside": {
        "Brunch": "French Toast Sticks E/M/W/S\nSausage Links\nHash Brown Patty\nPotato Leek  Soup M/S/W\nAlbondigas Soup \nYogurt Parfait Bar W/M\nChef's Choice ",
        "Dinner": "Potato Leek  Soup M/S/W\nAlbondigas Soup \nIrish Nacho Bar M\nChicken Bacon Alfredo Pasta W/M\nGardein Beef Fajitas S/W"
    }
  };
  //Cycle 4 Menu
  const Monday4 = {
    "Beachside": {
        "Breakfast": "Chilaquiles Verdes M\nGrilled Breakfast Steak\nTater Tots",
        "Lunch": "Chicken Polenta w/ Spinach Soup\nMandarin Spinach Salad S/W\nChicken Shawarma W/M/E\nMeatless Shawarma S/W\nChef Choice \nStreet Dog Bar M/S \nCheeseBurger Pizza S/W/M",
        "Dinner": "Chicken Polenta w/ Spinach Soup\nMandarin Spinach Salad S/W\nMeatloaf  W/E\nLentil Meatloaf \nChef Choice \nChili Cheese Tater Tots \nCheeseBurger Pizza S/W/M"
    },
    "Hillside": {
        "Breakfast": "Chocolate Chip Pancakes M/W/S\nSausage Patty\nCountry Potatoes",
        "Lunch": "Moroccan Lentil Stew\nChicken Noodle Soup W/E\nMandarin Spinach Salad S/W\nPesto  Alfredo Tortellini M/W/E\nChicken Fajitas\nVegan Cauliflower Tacos\nChef's Choice \nBuild Your Own Grain Bowl \nMongolian Stir Fry Chicken S/W",
        "Dinner": "Moroccan Lentil Stew\nChicken Noodle Soup W/E\nMandarin Spinach Salad S/W\nKahlua Pork Bowl\nPasta w/Turkey Meat Sauce W\nThai Chickpea Curry S\nChef's Choice \nBuild Your Own Grain Bowl \nMongolian Stir Fry Chicken S/W"
    },
    "Parkside": {
        "Breakfast": "Chocolate Chip Pancakes M/W/S\nSausage Patty\nTater Tots",
        "Lunch": "Ravioli Italian Soup E/M/W\nChicken Noodle Soup W\nMandarin Spinach Salad W/S\nPesto  Alfredo Tortellini M/W/E\nChicken Fajitas\nVegan Cauliflower Tacos\nChef's Choice \nSausage and Mushroom Pizza S/W/M",
        "Dinner": "Ravioli Italian Soup E/M/W\nChicken Noodle Soup W\nMandarin Spinach Salad W/S\nKahlua Pork Bowl S/W\nPasta w/Turkey Meat Sauce W\nThai Chickpea Curry         \nChef's Choice \nSausage and Mushroom Pizza S/W/M"
    }
  };
  const Tuesday4 = {
    "Beachside": {
        "Breakfast": "Chocolate Chip Pancakes M/W/S\nSausage Patty \nHash Browns\n",
        "Lunch": "Turkish Lentil Soup\nKorean Potato Salad \nBeef Flank Steak w/Chimichurri Sauce   \nPesto Alfredo Tortellini M/W/E\nChef Choice \nCarnitas Torta M/W\nShrimp and Bacon Pizza S/W/M/SF\n",
        "Dinner": "Turkish Lentil Soup\nKorean Potato Salad M\nKorean Ribs S/W\nVegan Cauliflower Taco                    \nChef Choice \nAsada Fries M/E\nShrimp and Bacon Pizza S/W/M/SF\n"
    },
    "Hillside": {
        "Breakfast": "Chilaquiles M\nPork Links\nHash Browns\n",
        "Lunch": "Corn Chowder M/S/W                                    \nChicken Tortilla Soup W/S\nBBQ Chicken Salad M\nChicken Shawarma W/M/E\nPork Udon W/F/E/S\nEdamame Fried Rice S/W\nChef's Choice \nBuild Your Own Grain Bowl \nBeef and Vegetables Stir Fry S/W\n",
        "Dinner": "Corn Chowder M/S/W                                    \nChicken Tortilla Soup W/S\nBBQ Chicken Salad M\nKimchi Fried Rice w/Beef S/W/F/SF-C\nItalian Sausage Sub W\nSweet Potato Patties E/M/W\nChef's Choice \nBuild Your Own Grain Bowl \nBeef and Vegetables Stir Fry S/W\n"
    },
    "Parkside": {
        "Breakfast": "Chilaquiles M\nPork Links\nHash Browns \n",
        "Lunch": "Vegan Toscana Soup\nChicken Tortilla Soup M/S\nBBQ Chicken Salad M/E/S\nTuna Melt Sandwich F/E/M/W\nPork Udon W/F/S/E \nEdamame Fried Rice S/W\nChef's Choice \nHawaiian Pizza S/W/M\n",
        "Dinner": "Vegan Toscana Soup\nChicken Tortilla Soup M/S\nBBQ Chicken Salad M/E/S\nKimchi Fried Rice w/Beef S/W/F\nItalian Sausage Sub Sandwich W/M\nGardein Chicken Alfredo Pasta S/W\nChef's Choice \nHawaiian Pizza S/W/M\n"
    }
  };
  const Wednesday4 = {
    "Beachside": {
        "Breakfast": "French Toast E/M\nTurkey Sausage\nCountry Potatoes\n",
        "Lunch": "Caldo de Res \nLemon Basil Pasta Salad M/W\nYucatan Chicken \nEdamame Fried Rice S/W\nChef Choice \nChicken Kabobs   \nChicken Fajita Empanadas S/W/M\n",
        "Dinner": "Caldo de Res \nLemon Basil Pasta Salad M/W\nTeriyaki Chicken S/W\nGardein Teriyaki Beef \nChef Choice \nIrish Nachos M\nChicken Fajita Empanadas S/W/M\n"
    },
    "Hillside": {
        "Breakfast": "French Toast E/M/W\nTurkey Sausage\nTator Tots\n",
        "Lunch": "Cream of Broccoli  Soup M/W/S\nAlbondigas Soup\nLemon Basil Pasta Salad M/W\nHamburgers W\nCrispy Chicken Japanese Curry Bowl W/S\nVegetable Strudel W\nChef's Choice \nBuild Your Own Grain Bowl \nSweet and Sour Pork Stir-Fry S/W\n",
        "Dinner": "Cream of Broccoli  Soup M/W/S\nAlbondigas Soup\nLemon Basil Pasta Salad M/W\nTeriyaki Chicken S/W\nCrispy Fish Po Boy Sandwich F/W\nTeriyaki Tofu S/W\nChef's Choice \nBuild Your Own Grain Bowl \nSweet and Sour Pork Stir-Fry S/W\n"
    },
    "Parkside": {
        "Breakfast": "Pancakes E/M/W\nTurkey Sausage\nCountry Potatoes\n",
        "Lunch": "Broccoli Cheddar Soup M/W/S\nMoroccan Lentil Soup\nThe Wedge Salad M\nBeef Sliders W\nJapanese Curry Bowl W/S/M\nVegetable Strudel W\nChef's Choice \nChicken Fajita Empanada S/W/M\n",
        "Dinner": "Broccoli Cheddar Soup M/W/S\nMoroccan Lentil Soup\nThe Wedge Salad M\nTeriyaki Chicken S/W\nCrispy Fish Po Boy Sandwich M/F/W/E\nTeriyaki Tofu S/W\nChef's Choice \nChicken Fajita Empanada S/W/M\n"
    }
  };
  const Thursday4 = {
    "Beachside": {
        "Breakfast": "Bacon Fried Rice S/W\nLil Smokies\nPotatoes O' Brien\n",
        "Lunch": "Cream of Potato Soup M/S/W \nFried Chicken Salad M/W/S\nShrimp Alfredo Pasta SF/M/E/W\nVegetable Strudel W\nChef Choice \nBeef/Chicken Sliders M/W\nCarne Asada Pizza  M/W/S\n",
        "Dinner": "Cream of Potato Soup M/S/W \nFried Chicken Salad M/W/S\nHerb Chicken \nPasta w/Gardein Sauce\nChef Choice \nCarnita Bowl \nCarne Asada Pizza M/W/S\n"
    },
    "Hillside": {
        "Breakfast": "Breakfast Quesadilla E/W/M\nLil Smokies \nHash Brown Patty\n",
        "Lunch": "Vegetable Noodle Soup W\nTomato Basil Soup M/W\nIsraeli Couscous on Arugula W\nPasta Arrabiata W\nLoaded Grilled Cheese Sandwich W/M\nGardein Beef w/Black Pepper Sauce  S/W\nChef's Choice \nBuild Your Own Grain Bowl \nSpicy Chicken Stir-Fry S/W\n",
        "Dinner": "Vegetable Noodle Soup W\nTomato Basil Soup M/W\nIsraeli Couscous on Arugula W\nTaco Bar M/W\nBeef Flank Steak w/Chimichurri Sauce \nGardein Chicken Fajitas S/W\nChef's Choice \nBuild Your Own Grain Bowl \nSpicy Chicken Stir-Fry S/W\n"
    },
    "Parkside": {
        "Breakfast": "Turkey, Egg and Cheese Breakfast Sandwich on Naan Bread E/W/M/S\nLil Smokies \nTater Tots\n",
        "Lunch": "Vegetable Noodle Soup W\nTomato Basil Soup M/W\nBacon Ranch Potato Salad M/E/S\nPasta Arrabiata W\nBeef Flank Steak w/Chimichurri Sauce\nGardein Beef w/Black Pepper Sauce S/W\nChef's Choice \nCheeseburger Pizza S/W/M\n",
        "Dinner": "Vegetable Noodle Soup W\nTomato Basil Soup M/W\nBacon Ranch Potato Salad M/E/S\nTaco Bar\nNacho Bar M/W\nGardein Chicken Fajitas S/W\nChef's Choice \nCheeseburger Pizza S/W/M\n"
    }
  };
  const Friday4 = {
    "Beachside": {
        "Breakfast": "Eggs Benedict E/M/W\nBacon\nHome Style Potatoes\n",
        "Lunch": "Clam Chowder SF/M/W\nBBQ Chicken Salad M/E\nCreamy Tuscan Salmon F/M\nEnchiladas Suizas M/W\nChef Choice \nGrilled Ham and Cheese Sandwich W/M \nHawaiian Pizza M/W/S\n",
        "Dinner": "Clam Chowder SF/M/W\nBBQ Chicken Salad M/W\nBeef and Broccoli S\nTahini Curry Tofu S/W\nChef Choice \nHawaiian Pizza M/W/S\n"
    },
    "Hillside": {
        "Breakfast": "Ham, Egg and Cheese English Muffin Sandwich E/W/M/S\nBacon\nHome Style Potatoes \n",
        "Lunch": "Clam Chowder M/W/SF-C\nRavioli Italian Soup E/M/W\nTuna Rotini Pasta Salad E/W/F\nYucatan Chicken Grain Bowl\nShrimp Alfredo SF-C/M/E/W\nPineapple Thai Fried Rice w/Gardein Chicken TN/S/W\nChef's Choice \nBuild Your Own Grain Bowl \nLemon Shrimp Stir Fry SF-C/S/W\n",
        "Dinner": "Clam Chowder M/W/SF-C\nRavioli Italian Soup E/M/W\nTuna Rotini Pasta Salad E/W/F\nOrange Chicken S/W\nLemon Pepper Tilapia F\nGardein Orange Chicken S/W\nChef's Choice \nBuild Your Own Grain Bowl \nLemon Shrimp Stir Fry SF-C/S/W\n"
    },
    "Parkside": {
        "Breakfast": "Ham, Egg and Cheese Sandwich on English Muffin E/M/W/S\nBacon\nHash Browns\n",
        "Lunch": "Clam Chowder M/W/SF-C\nVegetarian Chili W\nFried Chicken Salad M/W/S/E\nYucatan Chicken Grain Bowl\nShrimp Alfredo M/W/SF-C\nBlack Bean Enchilada Casserole S\nChef's Choice \nVeggie Pizza S/W/M\n",
        "Dinner": "Clam Chowder M/W/SF-C\nVegetarian Chili W\nFried Chicken Salad M/W/S/E\nOrange Chicken W/S\nLemon Pepper Tilapia F\nGardein Orange Chicken W/S\nChef's Choice \nVeggie Pizza S/W/M\n"
    }
  };
  const Saturday4 = {
    "Beachside": {
        "Brunch": "Pancakes M/W/S\nTurkey Bacon \nTater Tots\nCream of Broccoli Soup M/S/W\nChef Choice \n",
        "Dinner": "Cream of Broccoli Soup M/S/W\nBaked Turkey \nHealthy Barley Bowl \nChef Choice \n"
    },
    "Hillside": {
        "Brunch": "Pancakes M/W/S\nTurkey Bacon \nTator Tots\nVegetable Rice Soup\nBeef and Barley Soup W\nYogurt Parfait Bar\nChef's Choice\nBuild Your Own Crepe\n",
        "Dinner": "Vegetable Rice Soup\nBeef and Barley Soup W\nFried Chicken Salad M/W/S\nIrish Nacho Bar M\nSpicy Ranch Chicken Sandwich W/S/E/M\nVegetable and Tofu Fried Rice S/W\nMac and Cheese Bites W/M\n"
    }
  };
  const Sunday4 = {
    "Beachside": {
        "Brunch": "French Toast E/M/W\nSausage Link\nHash Brown Patty\nChicken Gumbo Soup E/F/M/S/W\nChef Choice ",
        "Dinner": "Chicken Gumbo Soup E/F/M/S/W \nBeef Taquitos\nGardein Beef Fajitas \nChef Choice "
    },
    "Parkside": {
        "Brunch": "French Toast E/M/W\nSausage Link\nHash Brown Patty\nVegetable Rice Soup\nBeef and Barley Soup W\nSmoothie of the Day\nChef's Choice ",
        "Dinner": "Vegetable Rice Soup\nBeef and Barley Soup W\nChicken Quesadilla M/W\nMeatballs w/ Pasta S/M/W\nVegan Gardein Chicken Tenders S/W"
    }
  };
  //Cycle 5 Menu
  const Monday5 = {
    "Beachside": {
        "Breakfast": "Egg Sandwich on English Muffin M/W/S\nKielbasa Sausage S\nHome Potato",
        "Lunch": "Chicken Pozole \nTuna Rotini Salad F/W/E\nOrange Chicken \nVegetables w/Lo Mein Noodles\nChef Choice \nPhilly Cheese Steak Sandwich \nMexican Pizza M/S/W",
        "Dinner": "Chicken Pozole \nTuna Rotini Salad F/W/E\nChicken/Shrimp Fajita\nChile Relleno M/W/E/S\nChef Choice \nCrispy Chicken Bacon Ranch Sandwich E/M\nMexican Pizza M/S/W"
    },
    "Hillside": {
        "Breakfast": "Conffeti Pancakes M/W/S\nKielbasa S\nTator Tots",
        "Lunch": "Pork Pozole Rojo\nBroccoli Cheddar Soup M/W/S\nChicken Taco Salad M/W/E\nCreamy Tomato Cheese Ravioli W/M/E\nChicken Tenders W\nVegan Lasagna S\nChef's Choice \nBuild Your Own Grain Bowl \nBlack Pepper Beef Stir Fry S/W",
        "Dinner": "Pork Pozole Rojo\nBroccoli Cheddar Soup M/W/S\nChicken Taco Salad M/W/E\nPasta w/Alfredo Sauce W/M\nHamburger Bar W\nTahini Chickpea Bowl W\nChef's Choice \nBuild Your Own Grain Bowl \nBlack Pepper Beef Stir Fry S/W"
    },
    "Parkside": {
        "Breakfast": "Conffeti Pancakes M/W/S\nKielbasa S\nCajun Potatoes",
        "Lunch": "Pork Pozole \nBroccoli Cheddar Soup M/W/S\nItalian Sub Sandwich W/M/E\nCheese Ravioli w/ Cream Tomato Sauce  M/W/E\nChicken Tenders W\nVegan Lasagna S\nChef's Choice \nTaco Pizza M/S/W",
        "Dinner": "Pork Pozole \nBroccoli Cheddar Soup M/W/S\nItalian Sub Sandwich W/M/E\nHamburger Bar W/M\nBattered Cheese Curd Bites M/W/E\nTahini Chickpea Bowl W\nChef's Choice \nTaco Pizza M/S/W"
    }
  };
  const Tuesday5 = {
    "Beachside": {
        "Breakfast": "French Toast E/M\nBacon\nHash Browns\n",
        "Lunch": "Potato Chowder M/S/W \nSpinach Salad \nKorean Ground Beef Bowl S/W\nCauliflower Steak w/Chimichurri Sauce\nChef Choice \nReuben Sandwich \nVegetable Calzone M/S/W\n",
        "Dinner": "Potato Chowder M/S/W \nSpinach Salad \nRoasted Pork Loin w/Caramelized Onions \nGardein Scallopini S/W\nChef Choice \nNacho Bar M/E\nVegetable Calzone M/S/W\n"
    },
    "Hillside": {
        "Breakfast": "French Toast E/M/W\nBacon\nHash Browns\n",
        "Lunch": "Tomato Basil Soup M/W                   \nItalian Wedding Soup S/W/M\nKale Salad M\nCarnitas Bowl\nThai Chicken Drunken Noodles W/S\nGardein Chicken Tenders S/W\nChef's Choice \nBuild Your Own Grain Bowl \nKung Pao Chicken Stir-Fry S/W\n",
        "Dinner": "Tomato Basil Soup M/W                   \nItalian Wedding   Soup S/W/M\nKale Salad M\nBeef Fajitas\nTurkey Pesto Flatbread M/W/E\nGardein Enchilada Scaloppine S/W\nChef's Choice \nBuild Your Own Grain Bowl \nKung Pao Chicken Stir-Fry S/W\n"
    },
    "Parkside": {
        "Breakfast": "Soyrizo Chorizo, Egg, Potato and Cheese Breakfast Burrito E/M/W/S\nBacon\nHash Browns\n",
        "Lunch": "Miso Soup F/S\nItalian Wedding Soup S/W/M\nKale and Quinoa Salad\nKahlua Pork Bowl S/W\nThai Chicken Drunken Noodles W/S\nVegan Cold Cut Submarine Sandwich W/S\nChef's Choice \nBBQ Chicken Pizza M/S/W\n",
        "Dinner": "Miso Soup F/S\nItalian Wedding   Soup S/W/M\nKale and Quinoa Salad\nPasta w/Alfredo Sauce W/M\nBeef and Broccoli Stir Fry S/W                          \nGardein Enchilada Scaloppine S/W\nChef's Choice \nBBQ Chicken Pizza M/S/W\n"
    }
  };
  const Wednesday5 = {
    "Beachside": {
        "Breakfast": "Breakfast Burrito E/W/M\nTurkey Sausage\nPapas Ala Mexicana",
        "Lunch": "Chicken Noodle Soup W\nChicken Taco Salad M/W/E\nCilantro Chicken Stew W\nVegetable Pad Thai S/W\nChef Choice \nFalafel Sandwich  \nBuffalo Chicken Pizza M/S/W",
        "Dinner": "Chicken Noodle Soup W\nChicken Taco Salad M/W/E\nPasta Bar W/M \nCrispy Tofu Bowl S/W\nChef Choice \nBahn Mi Beef Sandwich W/S/E\nBuffalo Chicken Pizza M/S/W"
    },
    "Hillside": {
        "Breakfast": "Breakfast Burrito E/W/M\nTurkey Sausage\nHome Style Potatoes",
        "Lunch": "Butternut Squash Soup M\nChicken Noodle Soup W\nItalian Pasta Salad W\nCorn Dogs W/M/E\nMongolian Beef Bowl S/W\nMushroom Stroganoff W\nChef's Choice \nBuild Your Own Grain Bowl \nSweet and Sour Chicken Stir Fry S/W",
        "Dinner": "Butternut Squash Soup M\nChicken Noodle Soup W\nItalian Pasta Salad W\nBBQ Chicken\nBaked Cheese Manicotti M/W\nThai Curry Tofu S\nChef's Choice \nBuild Your Own Grain Bowl \nSweet and Sour Chicken Stir Fry S/W"
    },
    "Parkside": {
        "Breakfast": "French Toast E/M/W\nTurkey Sausage\nHash Brown Patty",
        "Lunch": "Potato and Bacon Soup M/S/W\nChicken Noodle Soup W\nSpinach Salad TN\nCorn Dogs W/M/E\nMongolian Beef Bowl S/W\nMushroom Stroganoff w/Pasta\nChef's Choice \nCreamy Garlic Ricotta Flatbread Pizza M/S/W",
        "Dinner": "Potato and Bacon Soup M/S/W\nChicken Noodle Soup W\nSpinach Salad TN\nBBQ Chicken\nBaked Cheese Manicotti W/M/E\nThai Curry Tofu S\nChef's Choice \nCreamy Garlic Ricotta Flatbread Pizza M/S/W"
    }
  };
  const Thursday5 = {
    "Beachside": {
        "Breakfast": "Waffle Sticks E/M/S/W\nSausage Patty\nTator Tots",
        "Lunch": "Tomato Basil Soup M/W\nCaldo de Res  \nTuna Rotini Salad F/W/E\nMeatball Sub Sandwich W/M/S\nChicken Tacos\nGardein Orange Chicken S/W\nChef's Choice \nIslander Bacon Pizza M/W/S",
        "Dinner": "Italian Ravioli Soup M/E/S\nChicken Caesar Salad M/E/W\nBeef Bourguignon W\nCrispy Brussel Sprouts Fried Rice S/W   \nChef Choice \nBurrito Bowl M\nPastrami Pizza M/S/W"
    },
    "Hillside": {
        "Breakfast": "Waffle Sticks E/M/S/W\nSausage Patty\nHash Brown Patty",
        "Lunch": "Cream of Asparagus Soup M/S/W  \nCaldo de Res  \nApple and Spinach Salad M\nMeatball Sub Sandwich W/M\nChicken Tacos\nGardein Orange Chicken S/W\nChef's Choice \nBuild Your Own Grain Bowl \nChar Sui Pork Stir Fry S/W",
        "Dinner": "Cream of Asparagus Soup M/S/W\nCaldo de Res  \nApple and Spinach Salad M\nBanh Mi Chicken Sandwich S/W\nBeef Lomo Saltado S/W\nPasta w/Vegan Meatballs S/W\nChef's Choice \nBuild Your Own Grain Bowl \nChar Sui Pork Stir Fry S/W"
    },
    "Parkside": {
        "Breakfast": "Waffle Sticks E/M/S/W\nSausage Patty\nTator Tots",
        "Lunch": "Tomato Basil Soup M/W\nCaldo de Res  \nTuna Rotini Salad F/W/E\nMeatball Sub Sandwich W/M/S\nChicken Tacos\nGardein Orange Chicken S/W\nChef's Choice \nIslander Bacon Pizza M/W/S",
        "Dinner": "Tomato Basil Soup M/W\nCaldo de Res  \nTuna Rotini Salad F/W/E\nBanh Mi Chicken Sandwich W/S\nBeef Lomo Saltado S/W\nPasta w/Vegan Meatballs S/W\nChef's Choice \nIslander Bacon Pizza M/W/S"
    }
  };
  const Friday5 = {
    "Beachside": {
        "Breakfast": "Eggs Benedict E/M/W\nBacon\nHome Style Potatoes\n",
        "Lunch": "Clam Chowder SF/M/W\nBBQ Chicken Salad M/E\nCreamy Tuscan Salmon F/M\nEnchiladas Suizas M/W\nChef Choice \nGrilled Ham and Cheese Sandwich W/M \nHawaiian Pizza M/W/S\n",
        "Dinner": "Clam Chowder SF/M/W\nBBQ Chicken Salad M/W\nBeef and Broccoli S\nTahini Curry Tofu S/W\nChef Choice \nHawaiian Pizza M/W/S\n"
    },
    "Hillside": {
        "Breakfast": "Ham, Egg and Cheese English Muffin Sandwich E/W/M/S\nBacon\nHome Style Potatoes \n",
        "Lunch": "Clam Chowder M/W/SF-C\nRavioli Italian Soup E/M/W\nTuna Rotini Pasta Salad E/W/F\nYucatan Chicken Grain Bowl\nShrimp Alfredo SF-C/M/E/W\nPineapple Thai Fried Rice w/Gardein Chicken TN/S/W\nChef's Choice \nBuild Your Own Grain Bowl \nLemon Shrimp Stir Fry SF-C/S/W\n",
        "Dinner": "Clam Chowder M/W/SF-C\nRavioli Italian Soup E/M/W\nTuna Rotini Pasta Salad E/W/F\nOrange Chicken S/W\nLemon Pepper Tilapia F\nGardein Orange Chicken S/W\nChef's Choice \nBuild Your Own Grain Bowl \nLemon Shrimp Stir Fry SF-C/S/W\n"
    },
    "Parkside": {
        "Breakfast": "Ham, Egg and Cheese Sandwich on English Muffin E/M/W/S\nBacon\nHash Browns\n",
        "Lunch": "Clam Chowder M/W/SF-C\nVegetarian Chili W\nFried Chicken Salad M/W/S/E\nYucatan Chicken Grain Bowl\nShrimp Alfredo M/W/SF-C\nBlack Bean Enchilada Casserole S\nChef's Choice \nVeggie Pizza S/W/M\n",
        "Dinner": "Clam Chowder M/W/SF-C\nVegetarian Chili W\nFried Chicken Salad M/W/S/E\nOrange Chicken W/S\nLemon Pepper Tilapia F\nGardein Orange Chicken W/S\nChef's Choice \nVeggie Pizza S/W/M\n"
    }
  };
  const Saturday5 = {
    "Beachside": {
        "Brunch": "Blueberry Pancakes M/W/S\nLil Smokies\nPotatoes O' Brien\nButernut Squash Soup M\nChef Choice ",
        "Dinner": "Buternut Squash Soup M\nBeef Enchilada W/M\nCheese Enchilada W/M \nChef Choice "
    },
    "Hillside": {
        "Brunch": "Blueberry Pancakes M/W/S\nLil Smokies\nTater Tots \nVegetable Noodle Soup W\nChicken Tortilla Soup S/W\nSmoothie Bar\nChef's Choice\nBuild Your Own Crepe",
        "Dinner": "Vegetable Noodle Soup W\nChicken Tortilla Soup S/W\nElote in a Cup E/M\nShrimp Fried Rice S/W/SF-C\nPeruvian Chicken \nSweet Potato and Cauliflower Stew\nSpaghetti and Meatballs W"
    }
  };
  const Sunday5 = {
    "Beachside": {
        "Brunch": "French Toast Sticks M/W/S\nSausage Links\nHash Brown Patty\nEnchilada Soup M/S\nChef Choice ",
        "Dinner": "Enchilada Soup M/S\nChicken Alfredo Bacon Pasta M/W\nCheese Ravioli W/M/E\nChef Choice"
    },
    "Parkside": {
        "Brunch": "French Toast Sticks E/M/W/S\nSausage Links\nHash Brown Patty\nBeef and Rice Soup\nPotato Leek Soup M/S/W\nFresh Juice of the Day\nChef's Choice",
        "Dinner": "Beef and Rice Soup\nPotato Leek Soup M/S/W\nPlum Sauce Chicken W/S\nPasta w/Marinara Sauce W\nThe Buddha Bowl"
    }
  };
  if (cycleNumber === '1') {
    if(day === 'Monday') {
      menu = Monday1;
    }
    else if(day === 'Tuesday') {
      menu = Tuesday1;
    }
    else if(day === 'Wednesday') {
      menu = Wednesday1;
    }
    else if(day === 'Thursday') {
      menu = Thursday1;
    }
    else if(day === 'Friday') {
      menu = Friday1;
    }
    else if(day === 'Saturday') {
      menu = Saturday1;
    }
    else if(day === 'Sunday') {
      menu = Sunday1;
    }
  }
  if (cycleNumber === '2') {
    if(day === 'Monday') {
      menu = Monday2;
    }
    if(day === 'Tuesday') {
      menu = Tuesday2;
    }
    if(day === 'Wednesday') {
      menu = Wednesday2;
    }
    if(day === 'Thursday') {
      menu = Thursday2;
    }
    if(day === 'Friday') {
      menu = Friday2;
    }
    if(day === 'Saturday') {
      menu = Saturday2;
    }
    if(day === 'Sunday') {
      menu = Sunday2;
    }
  }
  if (cycleNumber === '3') {
    if(day === 'Monday') {
      menu = Monday3;
    }
    if(day === 'Tuesday') {
      menu = Tuesday3;
    }
    if(day === 'Wednesday') {
      menu = Wednesday3;
    }
    if(day === 'Thursday') {
      menu = Thursday3;
    }
    if(day === 'Friday') {
      menu = Friday3;
    }
    if(day === 'Saturday') {
      menu = Saturday3;
    }
    if(day === 'Sunday') {
      menu = Sunday3;
    }
  }
  if (cycleNumber === '4') {
    if(day === 'Monday') {
      menu = Monday4;
    }
    if(day === 'Tuesday') {
      menu = Tuesday4;
    }
    if(day === 'Wednesday') {
      menu = Wednesday4;
    }
    if(day === 'Thursday') {
      menu = Thursday4;
    }
    if(day === 'Friday') {
      menu = Friday4;
    }
    if(day === 'Saturday') {
      menu = Saturday4;
    }
    if(day === 'Sunday') {
      menu = Sunday4;
    }
  }
  if (cycleNumber === '5') {
    if(day === 'Monday') {
      menu = Monday5;
    }
    if(day === 'Tuesday') {
      menu = Tuesday5;
    }
    if(day === 'Wednesday') {
      menu = Wednesday5;
    }
    if(day === 'Thursday') {
      menu = Thursday5;
    }
    if(day === 'Friday') {
      menu = Friday5;
    }
    if(day === 'Saturday') {
      menu = Saturday5;
    }
    if(day === 'Sunday') {
      menu = Sunday5;
    }
  }
  return menu[location];
}

//To remove the \n character and "" to be replaced with actual new line and to know which menu system to display
function display(cycle, day, location) {
  var menu;
  //If a regular weekday
  if (day!== "Saturday" && day!== "Sunday") {
    menu = find_dic(cycle, day, location); 
    const B_menuContent = menu["Breakfast"];
    const L_menuContent = menu["Lunch"];
    const D_menuContent = menu["Dinner"];
    const formatted_B= B_menuContent.replace(/\\n/g, '\n').replace(/"/g, '');
    const formatted_L= L_menuContent.replace(/\\n/g, '\n').replace(/"/g, '');
    const formatted_D= D_menuContent.replace(/\\n/g, '\n').replace(/"/g, '');
    return [formatted_B, formatted_L,formatted_D];
  }
  //If Hillside on Saturday
  else if (day === "Saturday" && location === "Hillside") {
    menu = find_dic(cycle, day, location);
    const B_menuContent = menu["Brunch"];
    const D_menuContent = menu["Dinner"];
    const formatted_B= B_menuContent.replace(/\\n/g, '\n').replace(/"/g, '');
    const formatted_D= D_menuContent.replace(/\\n/g, '\n').replace(/"/g, '');
    return [formatted_B, formatted_D];
  }
  //If Parkside on Sunday
  else if(day === "Sunday" && location === "Parkside"){
    menu = find_dic(cycle, day, location);
    const B_menuContent = menu["Brunch"];
    const D_menuContent = menu["Dinner"];
    const formatted_B= B_menuContent.replace(/\\n/g, '\n').replace(/"/g, '');
    const formatted_D= D_menuContent.replace(/\\n/g, '\n').replace(/"/g, '');
    return [formatted_B, formatted_D];

  }
  //For Beachside on weekend 
  else if ((day === "Saturday" || day ==="Sunday") && location === "Beachside") {
    menu = find_dic(cycle, day, location);
    const B_menuContent = menu["Brunch"];
    const D_menuContent = menu["Dinner"];
    const formatted_B = B_menuContent.replace(/\\n/g, '\n').replace(/"/g, '');
    const formatted_D = D_menuContent.replace(/\\n/g, '\n').replace(/"/g, '');
    return [formatted_B, formatted_D];
  }else{
    //Error Case: Should never be triggered 
    return["Closed", "Closed"]    
  }
}
function to_write(B_menu, H_menu, P_menu, day) {
  if (day === "Saturday") {
    //Beachside
    var formatted_Beachside_B_menuContent = B_menu[0];
    var formatted_Beachside_D_menuContent = B_menu[1];

    document.getElementById('beachside_menu_brunch').innerText = formatted_Beachside_B_menuContent;
    document.getElementById('beachside_menu_dinner').innerText = formatted_Beachside_B_menuContent;
    
    //Hillside
    var formatted_Hillside_B_menuContent = H_menu[0];
    var formatted_Hillside_D_menuContent = H_menu[1];
    document.getElementById('hillside_menu_brunch').innerText = formatted_Hillside_B_menuContent;
    document.getElementById('hillside_menu_dinner').innerText = formatted_Hillside_D_menuContent;
  }else if(day === "Sunday") {
    //Beachside
    var formatted_Beachside_B_menuContent = B_menu[0];
    var formatted_Beachside_D_menuContent = B_menu[1];

    document.getElementById('beachside_menu_brunch').innerText = formatted_Beachside_B_menuContent;
    document.getElementById('beachside_menu_dinner').innerText = formatted_Beachside_B_menuContent;
    //Parkside
    var formatted_Parkside_B_menuContent = P_menu[0];
    var formatted_Parkside_D_menuContent = P_menu[1];

    document.getElementById('parkside_menu_brunch').innerText = formatted_Parkside_B_menuContent;
    document.getElementById('parkside_menu_dinner').innerText = formatted_Parkside_D_menuContent;
  }else {
    //Beachside//
    var formatted_Beachside_B_menuContent = B_menu[0];
    var formatted_Beachside_L_menuContent = B_menu[1];
    var formatted_Beachside_D_menuContent = B_menu[2];
    document.getElementById('beachside_menu_breakfast').innerText = formatted_Beachside_B_menuContent;
    document.getElementById('beachside_menu_lunch').innerText = formatted_Beachside_L_menuContent;
    document.getElementById('beachside_menu_dinner').innerText = formatted_Beachside_D_menuContent;
    
    //Hillside//
    var formatted_Hillside_B_menuContent = H_menu[0];
    var formatted_Hillside_L_menuContent = H_menu[1];
    var formatted_Hillside_D_menuContent = H_menu[2];

    document.getElementById('hillside_menu_breakfast').innerText = formatted_Hillside_B_menuContent;
    document.getElementById('hillside_menu_lunch').innerText = formatted_Hillside_L_menuContent;
    document.getElementById('hillside_menu_dinner').innerText = formatted_Hillside_D_menuContent;

    //Parkside//
    var formatted_Parkside_B_menuContent = P_menu[0];
    var formatted_Parkside_L_menuContent = P_menu[1];
    var formatted_Parkside_D_menuContent = P_menu[2];

    document.getElementById('parkside_menu_breakfast').innerText = formatted_Parkside_B_menuContent;
    document.getElementById('parkside_menu_lunch').innerText = formatted_Parkside_L_menuContent;
    document.getElementById('parkside_menu_dinner').innerText = formatted_Parkside_D_menuContent;
  }
}



var beachside_menu = display(beachside_cycle, day, "Beachside");
var hillside_menu = display(hillside_cycle, day, "Hillside");
var parkside_menu = display(parkside_cycle, day, "Parkside");

//Does the Heavy lifting and sends all the menu information to Html
to_write(beachside_menu, hillside_menu, parkside_menu, day);








