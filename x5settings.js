(function ( $, x5engine ) {
	var x = x5engine,
		s = x.settings,
		p = s.currentPath,
		b = x.boot;

	s.islocal = true;
	b.push(function () {
		x.setupDateTime();
		x.imAccess.showLogout();
		x.utils.autoHeight();
		x.cart.ui.updateWidget();
		x.imGrid.init();
	});
	b.push(function () {
		x.menu({
			target: '#imMnMn',
			showCurrent: false,
			verticalScroll: false,
			orientation: 'horizontal',
			menuHeight: 34,
			menuWidth: 129,
			submenuHeight: 22,
			submenuWidth: 160,
			opacity: 0.8,
			type: 'singleColumn',
			alignment: 'left',
			effect: 'fade'
		});
	});
	b.push(function () { x.utils.imPreloadImages([p + 'menu/index_h.png',p + 'menu/zapatos_h.png',p + 'menu/ropa-femenina_h.png',p + 'menu/realizar-la-compra_h.png', p + 'res/imLoad.gif', p + 'res/imClose.png']); });

	// ShowBox
	$.extend(s.imShowBox, {
		'effect' : 'fade',
		'shadow' : '',
		'background' : '#000000',
		'borderWidth' : {
			'top': 1,
			'right': 1,
			'bottom': 1,
			'left': 1
		},
		'borderRadius' : '5px 5px 5px 5px',
		'borderColor' : '#000000 #000000 #000000 #000000',
		'textColor' : '#000000',
		'fontFamily' : 'Tahoma',
		'fontStyle' : 'normal',
		'fontWeight' : 'normal',
		'fontSize' : '9pt',
		'textAlignment' : 'left',
		'boxColor' : '#FFFFFF',
		'opacity' : 0.7,
		'radialBg' : true // Works only in Mozilla Firefox and Google Chrome
	});

	// PopUp
	$.extend(s.imPopUp, {
		'effect' : 'fade',
		'width' : 500,
		'shadow' : '',
		'background' : '#000000',
		'borderRadius' : 10,
		'textColor' : '#000000',
		'boxColor' : '#FFFFFF',
		'opacity' : 0.7
	});

	// Tip
	$.extend(s.imTip, {
		'borderRadius' : 1,
		'arrow' : true,
		'position' : 'bottom',
		'effect' : 'none',
		'showTail' : true
	});

	// Captcha
	var codes = s.imCaptcha.offlineCodes;
	codes[0] = { letter: '2', path: 'captcha/imcpa_fgx.gif'};
	codes[1] = { letter: 'D', path: 'captcha/imcpa_3fu.gif'};
	codes[2] = { letter: 'Y', path: 'captcha/imcpa_tkf.gif'};
	codes[3] = { letter: '5', path: 'captcha/imcpa_kyc.gif'};
	codes[4] = { letter: 'E', path: 'captcha/imcpa_g65.gif'};
	codes[5] = { letter: 'D', path: 'captcha/imcpa_3vf.gif'};
	codes[6] = { letter: '5', path: 'captcha/imcpa_a2t.gif'};
	codes[7] = { letter: 'H', path: 'captcha/imcpa_wrv.gif'};
	codes[8] = { letter: 'G', path: 'captcha/imcpa_zea.gif'};
	codes[9] = { letter: 'Y', path: 'captcha/imcpa_pm8.gif'};
	s.loaded = true;
})( _jq, x5engine );