/* Author: Fancy - jlarri */
(function($){	
$(document).ready(function() {
	var header = $('#header');
	var headerPrime = $('header .primary-nav');
	var headerSec = $('header .secondary-nav'); // var subNav = $('#header header nav.secondary-nav');
	var headSecLink = headerSec.find('a');
	var headHeight = header.height();
	var subHeight = headerSec.height();
	var main = $('#main');
	var mainContent = $('#content');
	var newheadHeight = headHeight - 40;
	var deviceAgent = navigator.userAgent.toLowerCase();
	var agentID = deviceAgent.match(/(iphone|ipod|ipad)/);

  // main.css({marginTop: headHeight + 20});

  headSecLink.click(function(){
      var theName = $(this).attr('href').replace( /http:...*\// , '' );
      var    anchor = '.'+ theName +'';
      var myParent = $(this).parent('li');
      var projectItem = $(anchor).offset().top - newheadHeight;
      headerSec.find('.current_page_item').removeClass('current_page_item');
      $(this).parent('li').addClass('current_page_item');
  
    if (agentID) {
  
      } else {
        header.animate({marginTop:'-65px'}, 'slow');
        headerPrime.hover(function(){
            header.stop().animate({marginTop:'0'}, 'slow');
        }, function(){
            header.stop().animate({marginTop:'-65px'}, 'slow');
        });
      }

  	
      $('html, body').animate({scrollTop: projectItem}, 1500, function() {
          location.hash = theName;
      });
  return false;
  });

  $(window).ready(function() {
  	var woHash = location.hash.replace( /^#/, '' );
  	var hash = location.hash;
    
  	if (hash == '') {

  	} else {
  		var	makeClass = $('.'+ woHash +'');
  		var classItem = makeClass.offset().top - headHeight - 25;
  		var howHeight = makeClass.offset().top;
  		
			$('html, body').animate({scrollTop: classItem}, 1500 );
  	}
  });			
// Making the ImageGalleries!
	function runGallery() { 
		var masterMedia = $(document.body).find('.media-tag-list');
		var mediaGallery = masterMedia.parent('ul');
		
		mediaGallery.addClass('media-gallery display');		
		var mediaGG = $('.media-gallery');

		$.each(mediaGallery, function(){
			var $this = $(this);
			var mediaMom = $this.parent();
			var mediaDad = $this.closest('.project').attr('class').replace( /project/ , '' );
			var media = $this.find('.media-tag-list');
			var mediaImgs = media.find('img');
			var length = mediaImgs.length;
// Building the Nav for each Gallery
      mediaMom.append('<nav class="media"><ul class="display"></ul></nav>');

			var galleryNav = mediaMom.find('nav.media ul');
			for(i=0; i< length; i++) { galleryNav.append('<li class="media-item"><a href="#'+ mediaDad +'-'+ i +'">'+ mediaDad +'-'+ i +'</a></li>') };
      // for(i=0; i< length; i++) { galleryNav.append('<li class="media-item"><a href="about.html"></a></li>') };
			var navItems = galleryNav.find('li');
// Showing the first items when page loads
			media.eq(0).show();
			navItems.eq(0).addClass('current');
  			
			$.each(mediaImgs, function() { 
  			var mediaSrc = $(this).attr('data-src');
        $(this).attr('src', mediaSrc);        
		  });
		  
		  $(window).load(function (){ 
		   mediaImgs.removeClass('loadingIMG'); 
	    });
// Making the Gallery Nav work
            // navItems.click(function(){
            //     var clickedItem = $(this).index();
            //     var thisMedia = $this.children().eq(clickedItem);
            //         
            //     media.hide();
            //     navItems.removeClass('current');
            //     thisMedia.css('opacity', 0.2).show().fadeTo(500, 1.0);
            //     $(this).addClass('current');
            //     return false;            
            // });
// Making Image click advance
			media.click(function(){
				var clickedItem = $(this).index();
				var nextItem = clickedItem + 1;
		
				if(nextItem > length - 1){
					nextItem = 0;
				}
				var thisMedia = $this.children().eq(nextItem);
		
				media.hide();
				navItems.removeClass('current');
				thisMedia.css('opacity', 0.2).show().fadeTo(500, 1.0);
				navItems.eq(nextItem).addClass('current');
				return false;			
			});
		});
	}
	runGallery();

    // getTwitters('twatter', { 
    //     id: 'okayjeffrey', 
    //     count: 1, 
    //     enableLinks: true, 
    //     ignoreReplies: true, 
    //     clearContents: true,
    //     template: '%text% <a href="http://twitter.com/%user_screen_name%" target="_blank" class="twitter bg-img">twitter</a>'
    // });
});	
})(this.jQuery);