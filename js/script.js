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

// variables

var dom = {};
var regex = /./;
var vowel = /\b(a)\b(\s+)?(((<[^>]+>)\s?)+)?(\s+)?([aeiou]|hou)/gim;
var qs = window.location.href.split("?");
var qsmap = {};
if (qs.length > 1) {
	qs = qs[1];
	qs = qs.split("&");
	for (var i = 0; i < qs.length; ++i) {
		var stra = qs[i].split('=');
		qsmap[stra[0]] = stra[1];
	}
}
var gName, gSeed, gid;

// init

function initialise() {

	dom.generate.click(function(){
	    FB.getLoginStatus(function(response) {
			console.log(response.status);
		    if (response.status === 'connected') {
			    update();
    		} else if (response.status == 'not_authorized') {
	    		window.location.reload(false);
				document.getElementById('not_authorized').style.visibility = 'visible';
		    } else {
				//document.getElementById('output').style.visibility = 'hidden'
				window.location.reload(false);
    		}
	    }, true);
	
		
		
	});
	
	regex = generateRegExp();
	update();
}

// update

function update() {

    console.log("update");
	gName = qsmap['name'];
	gid = qsmap['id'];
	if (gName === undefined && gid === undefined) {
		FB.api('/me/friends', function(response) 
		{
			var friends = response.data;
			console.log(friends);
			if (friends) {
				var i = friends.length;
				var randomnumber=Math.floor(Math.random()*i);
				name = friends[randomnumber].name
				name = name.split(" ")[0];
				gid = friends[randomnumber].id;
				var mypfpic = "https://graph.facebook.com/" + gid + "/picture?type=large";
				document.getElementById("pfpic").src = mypfpic;
				output(name);
			}
		});
	} else {
		var mypfpic = "https://graph.facebook.com/" + gid + "/picture?type=large";
		document.getElementById("pfpic").src = mypfpic;
		output(gName);
	}
}

function output(name) {

	var seed = qsmap['seed'];
	if (seed) {
		Math.seedrandom(seed);
		dom.output.html(generateIdea(name));
	} else {
		seed = '';
		for (var i = 0; i < 10; ++i)
			seed += String.fromCharCode((Math.floor(Math.random() * 26)) + 'a'.charCodeAt(0));
		Math.seedrandom(seed);
		dom.output.html(generateIdea(name));
	}
	dom.output.hide();
	dom.output.fadeIn(500);
	
	setGenerateLabel();
	
	gName = name;
	gSeed = seed;
}

// build regex from corpus

function generateRegExp() {

	var str = '';
	var arr = [];
	var tmp = "@(types)";
	
	for (type in corpus) {
		arr.push(type);
	}
	
	var exp = tmp.replace("types", arr.join('|'));
	
	return new RegExp(exp, "ig");
}

// generate idea

function generateIdea(name) {
	
	var type;
	var match;
	var index;
	var intro;
	var output;
	
	var template = templates[(Math.random() * templates.length) | 0];
    console.log(template);
    template = template.replace("@firstname", name);
    console.log(template);
	
	var data = {};
	
	for(var prop in corpus) {
		data[prop] = corpus[prop].concat();
	}
	
	var result = regex.exec(template);
	
	while(result) {
	
		type = result[1];
		match = result[0];
		
		index = (Math.random() * data[type].length) | 0;
		template = template.replace(match, data[type].splice(index, 1)[0]);
		
		regex.lastIndex = 0;
		result = regex.exec(template);
	}
	
	var intro = phrases[(Math.random() * phrases.length) | 0];
	
	output = "<dl>";
	output += "<dt>" + intro + "</dt>";
	output += "<dd>" + template + "</dd>";
	output += "</dl>";
	
	return correctGrammar(output);
}

// correct grammar

function correctGrammar(input) {

	// change 'a' to 'an' when before a vowel (I know this is not not always true!)
	input = input.replace(vowel, "$1n$2$3$6$7");

	return input;
}

// set label

function setGenerateLabel() {

	var label = labels[(Math.random() * labels.length) | 0];
	dom.generate.text(label);
	
}

// ready

$(document).ready(function(){

	dom.output = $("#output");
	dom.generate = $("#generate");
	
	if(corpus) {
		initialise();
	} else {
		console.log("corpus not found");
	}
	
});

function postToFeed() {

	// calling the API ...
	var obj = {
		method: 'feed',
		link: 'http://localhost/WTFENgine?name=' + gName + "&id=" + gid + "&seed=" + gSeed,
		picture: 'http://fbrell.com/f8.jpg',
		name: 'WTFFriends!!',
		caption: 'Ridiculous shit to do with your friends!',
		description: 'Do some stupid shit with your friends!'
	};

	function callback(response) {
		document.getElementById('msg').innerHTML = "Post ID: " + response['post_id'];
	}

	FB.ui(obj, callback);
}
