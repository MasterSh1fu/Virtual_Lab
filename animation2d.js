(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.device = function() {
	this.initialize(img.device);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1044,571);


(lib.button9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		playSound("Высоковольтныйблок");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#454545").ss(1,1,1).p("AroqLIXRAAIAAUXI3RAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC3366").s().p("AroKMIAA0XIXRAAIAAUXg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.5,-66.1,151.1,132.3);


(lib.button8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		playSound("Низковольтныйблок");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#454545").ss(1,1,1).p("AwCnPMAgFAAAIAAOfMggFAAA");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC3366").s().p("AwCHPIAAueMAgFAAAIAAOeg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103.7,-47.3,207.5,94.7);


(lib.button7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		playSound("Пересчетноеустройство");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#454545").ss(1,1,1).p("AuFrWIcLAAIAAWtI8LAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC3366").s().p("AuFLWIAA2rIcLAAIAAWrg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.1,-73.6,182.4,147.3);


(lib.button6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		playSound("Осциллограф");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#454545").ss(1,1,1).p("AxUkZMAipAAAIAAIzMgipAAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC3366").s().p("AxUEaIAAozMAipAAAIAAIzg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-111.8,-29.1,223.8,58.4);


(lib.button5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		playSound("Дискриминатор");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#454545").ss(1,1,1).p("AyGkyMAkNAAAIAAJlMgkNAAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC3366").s().p("AyGEzIAAplMAkNAAAIAAJlg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116.8,-31.7,233.8,63.4);


(lib.button4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		playSound("Счетчик");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#454545").ss(1,1,1).p("AkfkfII/AAIAAI/Io/AAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC3366").s().p("AkfEgIAAo/II/AAIAAI/g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.8,-29.8,59.6,59.6);


(lib.button3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		playSound("Умножитель");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#454545").ss(1,1,1).p("AkfkfII/AAIAAI/Io/AAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC3366").s().p("AkfEgIAAo/II/AAIAAI/g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.8,-29.8,59.6,59.6);


(lib.button2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		playSound("Сцинтиллятор");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#454545").ss(1,1,1).p("AlClCIKFAAIAAKFIqFAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC3366").s().p("AlBFCIAAqDIKDAAIAAKDg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.2,-33.2,66.5,66.5);


(lib.button1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		playSound("Источник");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#454545").ss(1,1,1).p("Ak4k4IJxAAIAAJxIpxAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC3366").s().p("Ak4E5IAApxIJxAAIAAJxg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.3,-32.3,64.6,64.6);


// stage content:
(lib.animation2d = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.device();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.92,1.051);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.button9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(712.4,106.1);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.instance_2 = new lib.button8();
	this.instance_2.parent = this;
	this.instance_2.setTransform(449,87.3);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 1);

	this.instance_3 = new lib.button7();
	this.instance_3.parent = this;
	this.instance_3.setTransform(256.1,113.6);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 1);

	this.instance_4 = new lib.button6();
	this.instance_4.parent = this;
	this.instance_4.setTransform(383.7,429);
	new cjs.ButtonHelper(this.instance_4, 0, 1, 1);

	this.instance_5 = new lib.button5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(378.7,281.2);
	new cjs.ButtonHelper(this.instance_5, 0, 1, 1);

	this.instance_6 = new lib.button4();
	this.instance_6.parent = this;
	this.instance_6.setTransform(846.8,147.8);
	new cjs.ButtonHelper(this.instance_6, 0, 1, 1);

	this.instance_7 = new lib.button3();
	this.instance_7.parent = this;
	this.instance_7.setTransform(841.7,221.7);
	new cjs.ButtonHelper(this.instance_7, 0, 1, 1);

	this.instance_8 = new lib.button2();
	this.instance_8.parent = this;
	this.instance_8.setTransform(843.3,291.5);
	new cjs.ButtonHelper(this.instance_8, 0, 1, 1);

	this.instance_9 = new lib.button1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(849.3,385.8);
	new cjs.ButtonHelper(this.instance_9, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(480,300,960,600);
// library properties:
lib.properties = {
	width: 960,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/device.png", id:"device"},
		{src:"sounds/Высоковольтныйблок_.mp3", id:"Высоковольтныйблок"},
		{src:"sounds/Дискриминатор_.mp3", id:"Дискриминатор"},
		{src:"sounds/Источник_.mp3", id:"Источник"},
		{src:"sounds/Низковольтныйблок_.mp3", id:"Низковольтныйблок"},
		{src:"sounds/Осциллограф_.mp3", id:"Осциллограф"},
		{src:"sounds/Пересчетноеустройство_.mp3", id:"Пересчетноеустройство"},
		{src:"sounds/Сцинтиллятор_.mp3", id:"Сцинтиллятор"},
		{src:"sounds/Счетчик_.mp3", id:"Счетчик"},
		{src:"sounds/Умножитель_.mp3", id:"Умножитель"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;