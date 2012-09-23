<!DOCTYPE html>

<html lang="en">
	
	<head>
		<title>What The Fuck Friends</title>
		
		<meta name="description" content="Bored? Ideas on what you can do with one of your friends." />
	
		<link rel="shortcut icon" href="img/favicon.png"/>
		<link rel="apple-touch-icon" href="img/custom_icon.png"/>
		
		<link rel="stylesheet" href="css/style.css" />
		
		<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.5/jquery.min.js"></script>
		<script>!window.jQuery && document.write(unescape('%3Cscript src="js/lib/jquery-1.5.js"%3E%3C/script%3E'))</script>
        <script src="https://connect.facebook.net/en_US/all.js"></script>
		<script src="js/seedrandom.js"></script>
		<script src="js/fb.js"></script>
		<script src="js/corpus.js"></script>
		<script src="js/script.js"></script>
		
		
		<script type="text/javascript">

		  var _gaq = _gaq || [];
		  _gaq.push(['_setAccount', 'UA-323020-24']);
		  _gaq.push(['_trackPageview']);
		
		  (function() {
		    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
		  })();
		</script>
		
	</head>
	
	<body>
		<div id="fb-root"></div>
		<div id="wrapper">
		
			<header>
				<h1>What the Fuck Friends</h1>
			</header>
            
            <div class="hide-when-logged-in">
                <img src="img/stick-out-tongue-face-small.png">
                <p>Fucking Bored? Ideas on what you can do with one of your friends.</p>
            </div>
            
            <div class="fb-login-button">Login with Facebook</div>
       		     
            <div id="not_authorized">
                You did not authorize the app.
            </div>
			
			
			
			<article>
    
				<div id="output">
					<noscript>
						<dl>
							<dt>What the fuck! You don't even have JavaScript enabled!</dt>
							<dd>You need to enable it to see all the fucking cool shit on this website...</dd>
						</dl>
					</noscript>
				</div>
                <p><img id="pfpic"></p>
				<a id="generate" href="#" title="Hit me again!"></a>
			</article>
			
			<aside>
				<ul id="share">
					<li id="share-facebook"><iframe src="//www.facebook.com/plugins/like.php?href=http%3A%2F%2Fwtffriends.herokuapp.com&amp;send=false&amp;layout=button_count&amp;width=100&amp;show_faces=true&amp;action=like&amp;colorscheme=light&amp;font&amp;height=21&amp;appId=7032994364" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:90px; height:21px;" allowTransparency="true"></iframe></li>
					<li id="share-twitter"><a href="http://twitter.com/share" class="twitter-share-button" data-url="http://wtffriends.herokuapp.com" data-count="horizontal" data-via="soulwire">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script></li>
					<li><a class="fb-login-button" autologoutlink="true">Logout</a>
				</ul>
			</aside>
			
			<footer>
				<div id="about">If you make it, make sure you make it <a href="http://www.opensource.org/" target="blank">Open Source</a></div>
				<div id="credit">Built with <a href="https://github.com/soulwire/WTFEngine" title="An HTML / CSS / JavaScript template for creating wtffriends.heroku.com style web sites" target="_blank">WTF Engine</a> by <a href="http://blog.soulwire.co.uk/" title="Made by Justin Windle @soulwire">Justin</a></div>
				<div>Inspired by <a href="http://whatthefuckshouldimakefordinner.com/" target="_blank">WTFSIMFD</a></div>
			</footer>
		
		</div>
		
		<div id="post"><a href="#" onclick="postToFeed(); return false;"><img src="img/share_facebook.gif"></a></div>
		<div id='msg'></div>
		
	</body>
	
</html>
