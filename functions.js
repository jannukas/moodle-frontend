function replaceFileIcons(name, location) {	
	$(".activityinstance").each(function(index, value){
		var instanceName = $(value).eq(0).text();
		if(instanceName.indexOf(name) !== -1){
			var iconImage = $(this).find("img");
			$(iconImage.first().attr("src",location));
		}
	});
}

function replaceFileIconsByUrl(original, replace) {	
	$(".activityinstance").each(function(index, value){
		var iconImage = $(this).find("img");
		if($(iconImage).attr('src') == original){
			$(this).find("img").css('display','none')
			var icon = $("<i class=\"icon-" + replace + " iconlarge\"/>");;
			$(this).find('.instancename').css('position','absolute');
			$(this).find('.instancename').css('top','25px');
			$(this).prepend(icon);
	}
	});
}

function replaceFileIconsCSS(name, code) {
	$(".activityinstance").each(function(index, value){
		var instanceName = $(value).eq(0).text();
		if(instanceName.indexOf(name) !== -1){
			$(this).find("img").css('display','none')
			var icon = $("<i class=\"icon-" + code + " iconlarge\"/>");;
			$(this).find('.instancename').css('position','absolute');
			$(this).find('.instancename').css('top','25px');
			$(this).prepend(icon);
		}
	});	
}

	function setBackgroundImage(location) {
		$(".row-fluid").css('background-image','url('+ location + ')');
	}

function replaceProgressBar(){
	console.log($(".progressBarProgressTable"));
	var numElements = $(".progressBarCell").size();
	var completedElements = 0;
	console.log(numElements);
		$(".progressBarCell").each(function(index){
			if($(this).css("background-color") == "rgb(115, 168, 57)"){
				completedElements++;
			}
			$(this).css("background-color","transparent");
			// $(this).css("background","url('https://keats.kcl.ac.uk/pluginfile.php/2038040/mod_resource/content/3/hank.png')");
		});
		var percentComplete = (completedElements/numElements)*160 + '%';
		console.log(percentComplete);
		$(".progressBarProgressTable").css("background","url('https://rawgit.com/qwerty1829/moodle-frontend/master/assets/images/progress_bg.png')");
		$(".progressBarProgressTable").css("background-size", "contain");
		$(".progressBarProgressTable").css("background-repeat", "no-repeat");
		$(".progressBarProgressTable").css("position", "relative");
		$(".progressBarProgressTable").css("height", 70);
		$(".progressBarHeader").css('display',"none")
		var bus = $("<img class='completition' src='https://rawgit.com/qwerty1829/moodle-frontend/master/assets/images/progress_bus.png'/>");
		$(".progressBarProgressTable").prepend(bus);
		$(".completition").css("left", 100);
		$(".completition").css("position", "absolute");
		$(".completition").css("width", 40);
		$(".completition").css("top", 30);
		$(".completition").css("margin-left", -70);
		$(".completition").css("text-align", "left");
}

function closeOtherAccordions(context){
	$('ul.topics li.section').each(function(index) {
		if(!($(this).is(context))) {
			$(this).find('.sectionopen').addClass('sectionclosed').removeClass('sectionopen');
			$(this).find('.toggle_open').addClass('toggle_closed').removeClass('toggle_open');
		}
	});
}

function browserType() {
	console.log(head.browser.chrome);
}

function drawLogo(location) {
	var logo = $(".logo").children();
	logo.attr("src", location);
	logo.css("width", 50).css("height", 50);
}

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-83714529-1', 'auto');
ga('send', 'pageview');
