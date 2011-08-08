Ti.include("header.js");

viewNav.add(buttonBack);

var win = Titanium.UI.currentWindow;

win.add(viewNav);

var labelHeader = Ti.UI.createLabel({
	text: 'WINDOW TWO',
	font: {fontSize:15},
	color: '#000000',
	top: 50,
	height: 'auto',
	width: 320,
	textAlign: 'center'
});
win.add(labelHeader);

var btnGo = Titanium.UI.createButton({
	title: 'GO TO WINDOW 3',
	width: 300,
	height: 75,
	top: 100,
	left: 10,
	color: '#FFFFFF',
	backgroundColor: '#000000',
	style: Titanium.UI.iPhone.SystemButtonStyle.PLAIN
});
btnGo.addEventListener('click',function(e)
{
	var win3 = Titanium.UI.createWindow({
		backgroundColor: '#FFFFFF',
		url: 'window_3.js'
	});
	
	win3.open({transition:Ti.UI.iPhone.AnimationStyle.CURL_UP});
});

win.add(btnGo);