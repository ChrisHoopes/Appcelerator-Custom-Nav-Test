Ti.include("header.js");

viewNav.add(buttonBack);

var win = Titanium.UI.currentWindow;

win.add(viewNav);

var labelHeader = Ti.UI.createLabel({
	text: 'WINDOW THREE',
	font: {fontSize:15},
	color: '#000000',
	top: 50,
	height: 'auto',
	width: 320,
	textAlign: 'center'
});
win.add(labelHeader);