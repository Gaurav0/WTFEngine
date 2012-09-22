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
	"Go @activities with @firstname at @places";
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
corpus.activities	 = ["Play Games","Watch TV","Play Sports","Read Books"];
corpus.places		 = ["The Park","The School","The Library","The Sidewalk"];
