(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 370,
	height: 536,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/udea.png", id:"udea"}
	]
};



lib.ssMetadata = [];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.udea = function() {
	this.initialize(img.udea);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,370,536);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.udea();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,370,536);


// stage content:
(lib.museoanimado = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.setTransform(185,268,1,1,0,0,0,185,268);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:9.2,alpha:0.026},0).wait(1).to({rotation:18.5,y:268.1,alpha:0.051},0).wait(1).to({rotation:27.7,y:268,alpha:0.077},0).wait(1).to({rotation:36.9,y:268.1,alpha:0.103},0).wait(1).to({rotation:46.2,y:268,alpha:0.128},0).wait(1).to({rotation:55.4,y:268.1,alpha:0.154},0).wait(1).to({rotation:64.6,alpha:0.179},0).wait(1).to({rotation:73.8,y:268,alpha:0.205},0).wait(1).to({rotation:83.1,alpha:0.231},0).wait(1).to({rotation:92.3,alpha:0.256},0).wait(1).to({rotation:101.5,alpha:0.282},0).wait(1).to({rotation:110.8,alpha:0.308},0).wait(1).to({rotation:120,alpha:0.333},0).wait(1).to({rotation:129.2,alpha:0.359},0).wait(1).to({rotation:138.5,alpha:0.385},0).wait(1).to({rotation:147.7,alpha:0.41},0).wait(1).to({rotation:156.9,alpha:0.436},0).wait(1).to({rotation:166.2,alpha:0.462},0).wait(1).to({rotation:175.4,alpha:0.487},0).wait(1).to({rotation:184.6,alpha:0.513},0).wait(1).to({rotation:193.8,alpha:0.538},0).wait(1).to({rotation:203.1,alpha:0.564},0).wait(1).to({rotation:212.3,alpha:0.59},0).wait(1).to({rotation:221.5,alpha:0.615},0).wait(1).to({rotation:230.8,alpha:0.641},0).wait(1).to({rotation:240,alpha:0.667},0).wait(1).to({rotation:249.2,alpha:0.692},0).wait(1).to({rotation:258.5,x:185.1,alpha:0.718},0).wait(1).to({rotation:267.7,alpha:0.744},0).wait(1).to({rotation:276.9,alpha:0.769},0).wait(1).to({rotation:286.2,x:185,alpha:0.795},0).wait(1).to({rotation:295.4,alpha:0.821},0).wait(1).to({rotation:304.6,alpha:0.846},0).wait(1).to({rotation:313.8,x:185.1,alpha:0.872},0).wait(1).to({rotation:323.1,alpha:0.897},0).wait(1).to({rotation:332.3,x:185,alpha:0.923},0).wait(1).to({rotation:341.5,x:185.1,alpha:0.949},0).wait(1).to({rotation:350.8,alpha:0.974},0).wait(1).to({rotation:360,x:185,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(185,268,370,536);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;