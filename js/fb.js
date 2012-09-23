
      // Load the SDK Asynchronously
      /*
      (function(d){
         var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
         if (d.getElementById(id)) {return;}
         js = d.createElement('script'); js.id = id; js.async = true;
         js.src = "//connect.facebook.net/en_US/all.js";
         ref.parentNode.insertBefore(js, ref);
       }(document));
       */

      // Init the SDK upon load
      window.fbAsyncInit = function() {
        FB.init({
          appId      : '217228638339225', // App ID
          channelUrl : '//'+window.location.hostname+'/channel', // Path to your Channel File
          status     : true, // check login status
          cookie     : true, // enable cookies to allow the server to access the session
          xfbml      : true  // parse XFBML
        });

        // listen for and handle auth.statusChange events
        FB.Event.subscribe('auth.statusChange', function(response) {
          if (response.authResponse) {
            // user has auth'd your app and is logged into Facebook
            FB.api('/me', function(me){
              if (me.name) {
				console.log('yeah logged in');
				console.log(me);
				console.log(response.authResponse);
                document.getElementsByClassName('fb-login-button')[0].style.display = 'none';
                document.getElementsByClassName('hide-when-logged-in')[0].style.display = 'none';
                document.getElementsByTagName('article')[0].style.display = 'block';
                document.getElementById("output").style.display = 'block';
                if(corpus) {
                    initialise();
                }
              }
            });
          } else {
          }
		  
        });
		

		
        // respond to clicks on the login and logout links
        window.addEventListener('load', function(){
            FB.getLoginStatus(function(response) {
                if (response.status == 'connected') {
                    document.getElementsByTagName('article')[0].style.display = 'block';
                    document.getElementsByClassName('fb-login-button')[0].style.display = 'none';
                    document.getElementsByClassName('hide-when-logged-in')[0].style.display = 'none';
                } else if (response.status == 'not_authorized') {
                    document.getElementById('not_authorized').style.display = 'block';
                    document.getElementsByClassName('fb-login-button')[0].style.display = 'block';
                    document.getElementsByClassName('hide-when-logged-in')[0].style.display = 'block';
                } else {
                    document.getElementsByClassName('fb-login-button')[0].style.display = 'block';
                    document.getElementsByClassName('hide-when-logged-in')[0].style.display = 'block';
                }
            });
        });
        
        document.getElementsByClassName('fb-login-button')[0].addEventListener('click', function() {
            FB.login();
        });
		
		
      } 
