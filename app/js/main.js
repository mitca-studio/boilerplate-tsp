/* ========================================================================= */
/* VARIABLES =============================================================== */
/* ========================================================================= */

var checkedBoxes = 0,
	round = [],
	results = [],
	tour;

/* ========================================================================= */
/* HELPERS ================================================================= */
/* ========================================================================= */

Handlebars.registerHelper('getCategory', function (id) {
	return _.findWhere(categories, {_id: id});
});

Handlebars.registerHelper('getItem', function (id) {
	return _.findWhere(items, {_id: id});
});

Handlebars.registerHelper('equals', function(a,b){
	return a == b;
});

trimInput = function(value) {
	return value.replace(/^\s*|\s*$/g, '');
};

/* ========================================================================= */
/* FUNCTIONS =============================================================== */
/* ========================================================================= */

var siteHandler = {
	/**
	 * Carga un template con los datos que recibe como parámetro.
	 *
	 * @param  {String}  name    	- Nombre del fichero .hbs donde se encuentra el template
	 * @param  {String}  where   	- Selector CSS donde vamos a insertar el template
	 * @param  {Object}	 context	- Objeto con los datos que va a utilizar el template
	 * @param  {Boolean} append  	- Si es true inserta el template al final de un contenedor para no borrar su contenido
	 */
	loadTemplate: function(name, where, context, append) {
		var location = where || '#' + name,
			data = context,
			template = JST['app/templates/' + name + '.hbs'],
			html = template(data);

		if (append)
			$(location).append(html);
		else
			document.querySelector(location).innerHTML = html;
	},
	/**
	 * Establece los eventos de la app
	 */
	setEvents: {
		/*realmente hay que usar toggle
			$('#site-menu .nav li a').click(function() {
			$('#site-wrapper').toggleClass('show-nav');
		});*/
		initGrid: function(){
			/*var temp = "<div class='brick' style='width:{width}px; height: {height}px; background-color: {color}'><div class='cover'>Demo fit zone</div></div>";
			var colour = [
				"rgb(142, 68, 173)",
				"rgb(243, 156, 18)",
				"rgb(211, 84, 0)",
				"rgb(0, 106, 63)",
				"rgb(41, 128, 185)",
				"rgb(192, 57, 43)",
				"rgb(135, 0, 0)",
				"rgb(39, 174, 96)"
			];
			var w = 1, h = 1, html = '', color = '', limitItem = 28;
			for (var i = 0; i < limitItem; ++i) {
				h = 1 + 3 * Math.random() << 0;
				w = 1 + 3 * Math.random() << 0;
				color = colour[colour.length * Math.random() << 0];
				html += temp.replace(/\{height\}/g, h*150).replace(/\{width\}/g, w*150).replace("{color}", color);
			}
			$("#freewall").html(html);

			$(function() {
				var wall = new freewall("#freewall");
				wall.reset({
					selector: '.brick',
					animate: false,
					cellW: 150,
					cellH: 150,
					delay: 30,
					onResize: function() {
						wall.refresh($(window).width() - 30, $(window).height() - 30);
					}
				});
				// caculator width and height for IE7;
				wall.fitZone($(window).width() - 30 , $(window).height() - 30);
			});*/
			/*var msnry = new Masonry( container, {
			  // options
			  columnWidth: 160,
			  itemSelector: '.element'
			});*/
			$("#container").mason({
				itemSelector: ".element",
				ratio: 1.1,
				sizes: [
					[1,1],
					[1,2],
					[2,2]
				],
				promoted:[
					[1,1, 'l'],
					[1,2, 'xl'],
					[2,2,'xxl']
				],
				gutter: 3,
				layout: 'fluid'
			});
		},
		activeMenu: function(e){
			$('#bars').click(function() {
				$('#mainWrapper').toggleClass('show-nav');
			});

			$('.sub').click(function(e){
				//reset nav
				$('.nav li ul').removeClass('expanded fadeInDown');
				$('.sub').removeClass('expanded');

				var $subnav = $(e.currentTarget).find('.subnav');
				$subnav.addClass('expanded fadeInDown');
				$(e.currentTarget).toggleClass('expanded');

				$subnav.find('a').click(function(){
					//hide and close menu
					$subnav.removeClass('fadeInDown').addClass('fadeOutUp');
					$subnav.on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
						$(this).removeClass('expanded fadeOutUp fadeInDown');
						$('.sub').removeClass('expanded');
						$subnav.off('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
					});
					$('#mainWrapper').toggleClass('show-nav');
				});
			});
		}
	},
	init: function() {
		//this.loadTemplate('home', '#mainWrapper');
		//siteHandler.setEvents.activeMenu();

		this.loadTemplate('layout', '#mainWrapper');
		siteHandler.setEvents.initGrid();
	}
};

siteHandler.init();
