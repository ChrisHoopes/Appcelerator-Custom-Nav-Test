Ti.include("header.js");

var win = Titanium.UI.createWindow({
	backgroundColor: '#FFFFFF'
});

win.add(viewNav);

var labelHeader = Ti.UI.createLabel({
	text: 'WINDOW ONE',
	font: {fontSize:15},
	color: '#000000',
	top: 50,
	height: 'auto',
	width: 320,
	textAlign: 'center'
});
win.add(labelHeader);

var btnGo = Titanium.UI.createButton({
	title: 'GO TO WINDOW 2',
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
	var win2 = Titanium.UI.createWindow({
		backgroundColor: '#FFFFFF',
		url: 'window_2.js'
	});
	
	win2.open({transition:Ti.UI.iPhone.AnimationStyle.CURL_UP});
});

win.add(btnGo);
win.open();