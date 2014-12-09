Handlebars.registerPartial("header", Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<header id=\"topHead\" class=\"navbar navbar-fixed-top\" role=\"navigation\">\n	<div class=\"container\">\n		<div class=\"navbar-header\">\n			<button class=\"navbar-toggle pull-left\" type=\"button\" id=\"bars\" data-transition=\"extra-pop\">\n				<span class=\"sr-only\">Toggle navigation</span>\n				<i class=\"fa fa-bars custom\"></i>\n			</button>\n			<div class=\"options-right\" type=\"button\">\n				<!-- Mobile -->\n				<div class=\"mobile\">\n					<a data-toggle=\"dropdown\" href=\"#\" id=\"social\"><i class=\"fa fa-ellipsis-v custom\"></i></a>\n					<ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"dLabel\">\n						<!-- /Perfil ó Editar perfil -->\n						<li><a href=\"\">Empezar de nuevo</a></li>\n						<li><a href=\"\">Configuración</a></li>\n						<li><a href=\"\">Ayuda</a></li>\n					</ul>\n				</div>\n			</div>\n			<div class=\"navbar-center\">\n				Proyecto Base\n				<span>Fringilla teydea</span>\n			</div>\n		</div>\n	</div>\n	<div class=\"shadow\"></div>\n</header>\n";
},"useData":true}));

Handlebars.registerPartial("menu", Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div id=\"site-menu\">\n	<ul class=\"nav navbar-nav\">\n		<li class=\"sub\">\n			<a href=\"#\" class=\"button\">Menu 1</a>\n			<ul class=\"subnav animated\">\n				<li><a href=\"#\">Enlace 1.1</a></li>\n				<li><a href=\"#\">Enlace 1.2</a></li>\n			</ul>\n		</li>\n		<li class=\"sub\">\n			<a href=\"#\" class=\"button\">Menu 2</a>\n			<ul class=\"subnav animated\">\n				<li><a href=\"#\">Enlace 2.1</a></li>\n				<li><a href=\"#\">Enlace 2.2</a></li>\n			</ul>\n		</li>\n	</ul>\n</div>\n";
  },"useData":true}));

this["JST"] = this["JST"] || {};

this["JST"]["app/templates/home.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = this.invokePartial(partials.header, '', 'header', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  stack1 = this.invokePartial(partials.menu, '', 'menu', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer + "<div id=\"site-canvas\">\n	<div id=\"main\" data-role=\"main\">\n        <div class=\"container\">\n    		<div class=\"top-wrapper clearfix\">\n    			<table border=\"0\" style=\"border-collapse:collapse;border:0px solid #FFCC00;width:170px\" cellpadding=\"3\" cellspacing=\"3\">\n    				<tr><td>Reino:</td><td>Animalia</td></tr>\n    				<tr><td>División:</td><td>Chordata</td></tr>\n    				<tr><td>Superclase:</td><td>Osteichthyes</td></tr>\n    				<tr><td>Clase:</td><td>Actinopterygii</td></tr>\n    				<tr><td>Orden:</td><td>Perciformes</td></tr>\n    				<tr><td>Familia:</td><td>Scaridae</td></tr>\n    				<tr><td>Género:</td><td>Sparisoma</td></tr>\n    			</table>\n        	</div>\n        </div>\n	</div>\n</div>\n";
},"usePartial":true,"useData":true});



this["JST"]["app/templates/layout.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"layout\">\n	<div id=\"container\">\n		<div class='element xxl' style='background-color: red'><div class='cover'>11</div></div>\n		<div class='element xl' style='background-color: blue'><div class='cover'>21</div></div>\n		<div class='element xl' style='background-color: green'><div class='cover'>22</div></div>\n		<div class='element l' style='background-color: yellow'><div class='cover'>12</div></div>\n		<div class='element l' style='background-color: gray'><div class='cover'>12</div></div>\n		<div class='element xxl' style='background-color: pink'><div class='cover'>11</div></div>\n	</div>\n</div>\n";
  },"useData":true});