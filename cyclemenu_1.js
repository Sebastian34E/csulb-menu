
const Monday = {'Beachside': {
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

const Tuesday = {
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
const Wednesday = {
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
const Thursday = {"Beachside": {
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
const Friday = {
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
const Saturday = {
    "Beachside": {
        "Brunch": "Chocolate Chip Pancakes M/W/S\nGrilled Ham\nTater Tots \nBroccoli Cheddar Soup M/W/S\nChef Choice ",
        "Dinner": "Broccoli Cheddar Soup M/W/S\nEnchiladas S/W\nLentil Taco\nChef Choice"
    },
    "Hillside": {
        "Brunch": "French Toast Sticks E/M/W\nKielbasa S\nTator Tots\nItalian Wedding  Soup W/S/M\nBroccoli Cheddar Soup M/W/S\nYogurt Parfait Bar\nChef's Choice\nBuild Your Own Crepe",
        "Dinner": "Italian Wedding  Soup W/S/M\nBroccoli Cheddar Soup M/W/S\nChurros W\nBeef and Cheese Enchiladas S/W/M\nPasta Bar W/M\nGardein Fajitas S/W\nMozzarella Sticks W/M"
    }
};
const Sunday = {
    "Beachside": {
        "Brunch": "Cinnamon Rolls S/W\nLittle Smokies \nHash Browns\nChicken and Rice Soup\nChef Choice ",
        "Dinner": "Chicken and Rice Soup\nBeef Lasagna \nVegetable Lasagna \nChef Choice"
    },
    "Parkside": {
        "Brunch": "Waffle Sticks E/M/S/W\nSausage Link\nHash Brown Patty\nBeef Barley Soup W\nPotato Chowder W/M/S\nSmoothie of the Day\nChef's Choice",
        "Dinner": "Beef Barley Soup W\nPotato Chowder W/M/S\nChicken Parmesan Sandwich M/W/S\nBaked Tortellini w/Spinach E/M/W\nSzechuan Tofu and Eggplant S/W"
    }
};


