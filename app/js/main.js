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
			$("#container").mason({
				itemSelector: ".element",
				ratio: 1,
				sizes: [
					[1,1]
				],
				promoted:[
					[1,1, 'l'],
					[2,1, 'xl'],
					[2,2,'xxl']
				],
				columns: [
					[0,480,3],
					[480,780,4],
					[780,1080,5]
				],
				gutter: 3,
				layout: 'fluid',
				filler: {
					itemSelector: '.filler',
					filler_class: 'custom_filler'
				}
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
