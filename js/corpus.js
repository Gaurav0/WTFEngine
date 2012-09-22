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
	"Go @activities with @firstname at @places. Then @verbs until it is @adjective.",
    "@verbs and @activities at @places with @firstname. It would be @adjective." 
];

var phrases = [
	"It's a fucking beautiful day! Why not",
	"No need to be fucking bored out of your mind. You could",
	"Miss fucking your ex? Then why not just",
	"Feeling fucking down? Pick yourself up and",
	"Not the fucking life of the party. Forget it and"
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
corpus.activities	 = ["Play Board Games","Watch Jersey Shore","Surf","Table Tennis","Wrestle","Ski","Read 50 Shades of Grey","Skateboard","Chase Skirts","Set off Fireworks","Watch Twilight","Skinny Dipping","Scuba Diving","Punch a Tree","Take Nude Photos","Sky Dive","Streaking","Break Windows","Watch Porn"];
corpus.places		 = ["The Park","School","The Library","The Sidewalk","The Highway","The Bus","Prison","The Swimming Pool","The Beach","The Strip Club","Work","The Deli","The Supermarket","The Bookstore","The Bar","The Mall","Home"];
corpus.verbs		 = ["Clean","Grow","Destroy","Shout","Sing","Dance","Get High","Fuck","Drink","Fight","Drive","Grind","Shake your ass","Slit throats","Run","Sweat","Throw Shit","Vomit"];
corpus.adjective	 = ["Scary","Evil","Awesome","Wild","Crazy","Hilarious","Cruel","Fucked up","Silly","Shitty","Attractive","Huge"];
