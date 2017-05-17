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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.026},0).wait(1).to({alpha:0.051},0).wait(1).to({alpha:0.077},0).wait(1).to({alpha:0.103},0).wait(1).to({alpha:0.128},0).wait(1).to({alpha:0.154},0).wait(1).to({alpha:0.179},0).wait(1).to({alpha:0.205},0).wait(1).to({alpha:0.231},0).wait(1).to({alpha:0.256},0).wait(1).to({alpha:0.282},0).wait(1).to({alpha:0.308},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.359},0).wait(1).to({alpha:0.385},0).wait(1).to({alpha:0.41},0).wait(1).to({alpha:0.436},0).wait(1).to({alpha:0.462},0).wait(1).to({alpha:0.487},0).wait(1).to({alpha:0.513},0).wait(1).to({alpha:0.538},0).wait(1).to({alpha:0.564},0).wait(1).to({alpha:0.59},0).wait(1).to({alpha:0.615},0).wait(1).to({alpha:0.641},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.692},0).wait(1).to({alpha:0.718},0).wait(1).to({alpha:0.744},0).wait(1).to({alpha:0.769},0).wait(1).to({alpha:0.795},0).wait(1).to({alpha:0.821},0).wait(1).to({alpha:0.846},0).wait(1).to({alpha:0.872},0).wait(1).to({alpha:0.897},0).wait(1).to({alpha:0.923},0).wait(1).to({alpha:0.949},0).wait(1).to({alpha:0.974},0).wait(1).to({alpha:1},0).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(185,268,370,536);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;