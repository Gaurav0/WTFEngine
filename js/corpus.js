/*
 * WTF Engine
 * https://github.com/soulwire/WTFEngine
 *
 * Copyright 2011, Justin Windle
 * http://blog.soulwire.co.uk/
 * Code Licensed under the MIT licence.
 * https://github.com/soulwire/WTFEngine/blob/master/MIT-LICENSE.txt
 *
 * Concept based on WTFSIMFD
 * http://whatthefuckshouldimakefordinner.com/
 * by Zach Golden
 * http://www.zachgolden.com/
 *
 */
 
var templates = [
	"Go @activities with @firstname at @places. Then @verbs until you're @adjective.",
    "@verbs and @activities at @places with @firstname. It would be fucking @adjective.",
    "@activities with @firstname at @places. If it is @adjective, then @verbs a bunch of @objects.",
	"@verbs on @adjective shit with @firstname at @places.",
	"Go to @places and take @adjective @objects to @firstname's house.",
	"Buy @objects and take them to @places with @firstname.",
	"Spend some @adjective time with @firstname at @places.",
	
];

var phrases = [
	"It's a fucking beautiful day! Why not",
	"No need to be bored out of your fucking mind. You could",
	"Don't just fucking sit there",
	"Feeling down? Pick your sorry self up and",
	"Not the life of the party? Fucking forget it and",
    "Forget all your fucking problems. Relax and"
];

var labels = [
	"My friend would never fucking do that!",
	"Why do you think I'm that fucking crazy?",
	"But I don't fucking like my friend that way!",
	"What a fucking stupid idea!",
	"Fuck! That doesn't even make sense!"
];

/*
	Auto Generated from test - Sheet1.csv
*/

corpus = {};

corpus.firstname	 = ["Qiang","Gaurav","Peter","John"];
corpus.activities	 = ["Play Board Games","Watch Jersey Shore","Surf","Table Tennis","Wrestle","Ski","Read 50 Shades of Grey","Skateboard","Chase Skirts","Set off Fireworks","Watch Twilight","Skinny Dip","Scuba Dive","Punch a Tree","Take Nude Photos","Sky Dive","Streaking","Break Windows","Watch Porn"];
corpus.places		 = ["The Park","School","The Library","The Sidewalk","The Highway","The Bus","Prisons","The Swimming Pool","The Beach","The Strip Club","Work","The Deli","The Supermarket","The Bookstore","The Bar","The Mall","Home","The Bathroom","The Bed","Your Parent's Bathroom"];
corpus.verbs		 = ["Clean","Grow","Destroy","Shout","Sing","Dance","Get High","Fuck","Drink","Fight","Drive","Grind","Shake your ass","Slit throats","Run","Sweat","Throw Shit","Vomit"];
corpus.adjective	 = ["Scary","Evil","Awesome","Wild","Crazy","Hilarious","Cruel","Fucked up","Silly","Shitty","Attractive","Huge","Heavenly","Mindless","Graceful","Agonizing","Cynical","Dashing","Earsplitting"];
corpus.objects		 = ["Skateboards","Chairs","Computers","Books","Boots","Dresses","Skirts","Togas","Spears","Swords","Knives","Flamethowers","AK-47s","Pistols","Flowers","Puppies","Cats","Chemicals","Drugs"];
