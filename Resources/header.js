var viewNav = Titanium.UI.createView({
	width: 320,
	height: 43,
	top: 0,
	backgroundImage: 'nav_bar.png'
});

var buttonBack = Titanium.UI.createButton({
	title: 'BACK',
	width: 105,
	height: 34,
	top: 5,
	left: 5,
	color: '#FFFFFF',
	backgroundImage: 'button_back.png',
	font: {fontSize:13},
	style: Titanium.UI.iPhone.SystemButtonStyle.PLAIN
});
buttonBack.addEventListener('click',function(e)
{
	win.close({transition:Ti.UI.iPhone.AnimationStyle.CURL_DOWN});
});