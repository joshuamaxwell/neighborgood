Ember.TEMPLATES.account=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f="";return b.buffer.push("\n  <h3>You have successfully logged in!</h3>\n  <p>Welcome, "),d={},e={},b.buffer.push(p(c._triageMustache.call(a,"user.name",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push(" "),d={},e={},b.buffer.push(p(c._triageMustache.call(a,"user.email",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push("</p>\n"),f}function g(a,b){b.buffer.push("\n  <h3>Welcome! This is the perfect place for you to log-in or register.</h3>\n  <p>Please enter your email address and password or login through Facebook or Twitter</p>\n")}function h(a,b){var d,e,f="";return b.buffer.push('\n  <div class="alert">There was an error during login. Try again.</div>\n  <div class="alert">Message: '),d={},e={},b.buffer.push(p(c._triageMustache.call(a,"loginError",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push("</div>\n"),f}function i(a,b){b.buffer.push('\n  <div class="alert alert-info">The request seems to be taking more time than usual, please wait.</div>\n')}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var j,k,l,m,n,o="",p=this.escapeExpression,q=this,r=c.helperMissing;return e.buffer.push("\n\n\n<h1>My Account</h1>\n"),l={},m={},j=c["if"].call(b,"user",{hash:{},inverse:q.program(3,g,e),fn:q.program(1,f,e),contexts:[b],types:["ID"],hashContexts:m,hashTypes:l,data:e}),(j||0===j)&&e.buffer.push(j),e.buffer.push("\n\n"),l={},m={},j=c["if"].call(b,"loginFailed",{hash:{},inverse:q.noop,fn:q.program(5,h,e),contexts:[b],types:["ID"],hashContexts:m,hashTypes:l,data:e}),(j||0===j)&&e.buffer.push(j),e.buffer.push('\n\n<form class="form-horizontal">\n\n  <div class="control-group">\n    <span class="control-label">\n      <label>Email</label>\n    </span>\n\n    <span class="controls">\n      '),m={value:b,type:b,placeholder:b},l={value:"ID",type:"STRING",placeholder:"STRING"},n={hash:{value:"email",type:"text",placeholder:"Email"},contexts:[],types:[],hashContexts:m,hashTypes:l,data:e},e.buffer.push(p((j=c.input||b.input,j?j.call(b,n):r.call(b,"input",n)))),e.buffer.push("\n    </span>\n  </div> "),e.buffer.push('\n\n  <div class="control-group">\n    <span class="control-label">\n      <label>Password</label>\n    </span>\n\n    <span class="controls">\n      '),m={value:b,type:b,placeholder:b},l={value:"ID",type:"STRING",placeholder:"STRING"},n={hash:{value:"password",type:"password",placeholder:"Password"},contexts:[],types:[],hashContexts:m,hashTypes:l,data:e},e.buffer.push(p((j=c.input||b.input,j?j.call(b,n):r.call(b,"input",n)))),e.buffer.push("\n    </span>\n  </div> "),e.buffer.push("\n\n  <button "),l={},m={},e.buffer.push(p(c.action.call(b,"login",{hash:{},contexts:[b],types:["STRING"],hashContexts:m,hashTypes:l,data:e}))),e.buffer.push(' class="btn cta-color-btn" '),m={disabled:b},l={disabled:"STRING"},n={hash:{disabled:"isProcessing"},contexts:[],types:[],hashContexts:m,hashTypes:l,data:e},e.buffer.push(p((j=c["bind-attr"]||b["bind-attr"],j?j.call(b,n):r.call(b,"bind-attr",n)))),e.buffer.push(">Log in</button>\n  <button "),l={},m={},e.buffer.push(p(c.action.call(b,"register",{hash:{},contexts:[b],types:["STRING"],hashContexts:m,hashTypes:l,data:e}))),e.buffer.push(' class="btn cta-color-btn" '),m={disabled:b},l={disabled:"STRING"},n={hash:{disabled:"isProcessing"},contexts:[],types:[],hashContexts:m,hashTypes:l,data:e},e.buffer.push(p((j=c["bind-attr"]||b["bind-attr"],j?j.call(b,n):r.call(b,"bind-attr",n)))),e.buffer.push(">Sign up</button>\n\n</form>\n  \n<div>\n  <button "),l={},m={},e.buffer.push(p(c.action.call(b,"loginFacebook",{hash:{},contexts:[b],types:["STRING"],hashContexts:m,hashTypes:l,data:e}))),e.buffer.push(' class="btn cta-color-btn" '),m={disabled:b},l={disabled:"STRING"},n={hash:{disabled:"isProcessing"},contexts:[],types:[],hashContexts:m,hashTypes:l,data:e},e.buffer.push(p((j=c["bind-attr"]||b["bind-attr"],j?j.call(b,n):r.call(b,"bind-attr",n)))),e.buffer.push(">Log in with Facebook</button>\n  <button "),l={},m={},e.buffer.push(p(c.action.call(b,"loginTwitter",{hash:{},contexts:[b],types:["STRING"],hashContexts:m,hashTypes:l,data:e}))),e.buffer.push(' class="btn cta-color-btn" '),m={disabled:b},l={disabled:"STRING"},n={hash:{disabled:"isProcessing"},contexts:[],types:[],hashContexts:m,hashTypes:l,data:e},e.buffer.push(p((j=c["bind-attr"]||b["bind-attr"],j?j.call(b,n):r.call(b,"bind-attr",n)))),e.buffer.push(">Log in with Twitter</button>\n</div>\n\n<button "),l={},m={},e.buffer.push(p(c.action.call(b,"logout",{hash:{},contexts:[b],types:["STRING"],hashContexts:m,hashTypes:l,data:e}))),e.buffer.push(' class="btn cta-color-btn" '),m={disabled:b},l={disabled:"STRING"},n={hash:{disabled:"isProcessing"},contexts:[],types:[],hashContexts:m,hashTypes:l,data:e},e.buffer.push(p((j=c["bind-attr"]||b["bind-attr"],j?j.call(b,n):r.call(b,"bind-attr",n)))),e.buffer.push(">Logout</button>\n\n\n"),l={},m={},k=c["if"].call(b,"isSlowConnection",{hash:{},inverse:q.noop,fn:q.program(7,i,e),contexts:[b],types:["ID"],hashContexts:m,hashTypes:l,data:e}),(k||0===k)&&e.buffer.push(k),o}),Ember.TEMPLATES.application=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){b.buffer.push("Home")}function g(a,b){b.buffer.push("Account")}function h(a,b){b.buffer.push("Profile")}function i(a,b){b.buffer.push("Style Guide")}function j(a,b){b.buffer.push("Search Results")}function k(a,b){b.buffer.push("My Homes")}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var l,m,n,o,p,q="",r=this.escapeExpression,s=this,t=c.helperMissing;return e.buffer.push('<div class="app">\n    '),e.buffer.push('\n    <nav class="navigation-bar">\n        <div class="text-center">\n           <a class="open-menu nav-icon" href="#drawer"><span class="glyphicon glyphicon-th-list"></span></a>\n           <input class="input-standard" placeholder="Find a home">\n           <a href="#" class="nav-icon home-icon"><span class="glyphicon glyphicon-home"></span></a>\n           <a href="#" class="nav-icon filter-icon"><span class="glyphicon glyphicon-filter"></span></a>\n        </div>\n    </nav>\n    <div class="spacer"></div>\n   '),n={},o={},e.buffer.push(r(c._triageMustache.call(b,"outlet",{hash:{},contexts:[b],types:["ID"],hashContexts:o,hashTypes:n,data:e}))),e.buffer.push("\n</div>\n\n"),e.buffer.push('\n<nav id="drawer">\n   <ul class="list">\n      <li>'),n={},o={},p={hash:{},inverse:s.noop,fn:s.program(1,f,e),contexts:[b],types:["STRING"],hashContexts:o,hashTypes:n,data:e},l=c["link-to"]||b["link-to"],m=l?l.call(b,"index",p):t.call(b,"link-to","index",p),(m||0===m)&&e.buffer.push(m),e.buffer.push("</li>\n      <li>"),n={},o={},p={hash:{},inverse:s.noop,fn:s.program(3,g,e),contexts:[b],types:["STRING"],hashContexts:o,hashTypes:n,data:e},l=c["link-to"]||b["link-to"],m=l?l.call(b,"account",p):t.call(b,"link-to","account",p),(m||0===m)&&e.buffer.push(m),e.buffer.push("</li>\n      <li>"),n={},o={},p={hash:{},inverse:s.noop,fn:s.program(5,h,e),contexts:[b],types:["STRING"],hashContexts:o,hashTypes:n,data:e},l=c["link-to"]||b["link-to"],m=l?l.call(b,"profile",p):t.call(b,"link-to","profile",p),(m||0===m)&&e.buffer.push(m),e.buffer.push("</li>\n      <li>"),n={},o={},p={hash:{},inverse:s.noop,fn:s.program(7,i,e),contexts:[b],types:["STRING"],hashContexts:o,hashTypes:n,data:e},l=c["link-to"]||b["link-to"],m=l?l.call(b,"style-guide",p):t.call(b,"link-to","style-guide",p),(m||0===m)&&e.buffer.push(m),e.buffer.push("</li>\n      <li>"),n={},o={},p={hash:{},inverse:s.noop,fn:s.program(9,j,e),contexts:[b],types:["STRING"],hashContexts:o,hashTypes:n,data:e},l=c["link-to"]||b["link-to"],m=l?l.call(b,"properties",p):t.call(b,"link-to","properties",p),(m||0===m)&&e.buffer.push(m),e.buffer.push("</li>\n      <li>"),n={},o={},p={hash:{},inverse:s.noop,fn:s.program(11,k,e),contexts:[b],types:["STRING"],hashContexts:o,hashTypes:n,data:e},l=c["link-to"]||b["link-to"],m=l?l.call(b,"myhomes",p):t.call(b,"link-to","myhomes",p),(m||0===m)&&e.buffer.push(m),e.buffer.push("</li>\n   </ul>\n</nav>"),q}),Ember.TEMPLATES.index=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var f="";return e.buffer.push('<div class="well">\n  '),e.buffer.push("\n    Welcome to the NeighborGood.\n</div>\n"),f}),Ember.TEMPLATES.myhomes=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f,h,i,j="";return b.buffer.push("\n  "),f={},h={},i={hash:{},inverse:m.noop,fn:m.program(2,g,b),contexts:[a,a],types:["STRING","ID"],hashContexts:h,hashTypes:f,data:b},d=c["link-to"]||a["link-to"],e=d?d.call(a,"property","",i):n.call(a,"link-to","property","",i),(e||0===e)&&b.buffer.push(e),b.buffer.push("\n"),j}function g(a,b){var d,e,f="";return b.buffer.push("\n    <li>"),d={},e={},b.buffer.push(l(c._triageMustache.call(a,"address",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push("</li>\n  "),f}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var h,i,j,k="",l=this.escapeExpression,m=this,n=c.helperMissing;return e.buffer.push("<h1>My Homes</h1>\n<ul>\n"),i={},j={},h=c.each.call(b,{hash:{},inverse:m.noop,fn:m.program(1,f,e),contexts:[],types:[],hashContexts:j,hashTypes:i,data:e}),(h||0===h)&&e.buffer.push(h),e.buffer.push("\n</ul>"),k}),Ember.TEMPLATES.profile=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f="";return b.buffer.push('\n<div class="well"> Welcome, '),d={},e={},b.buffer.push(k(c._triageMustache.call(a,"name",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push("</div>\n"),f}function g(a,b){b.buffer.push('\n<div class="well"> You are not logged in </div>\n')}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var h,i,j,k=this.escapeExpression,l=this;i={},j={},h=c["if"].call(b,"App.auth",{hash:{},inverse:l.program(3,g,e),fn:l.program(1,f,e),contexts:[b],types:["ID"],hashContexts:j,hashTypes:i,data:e}),e.buffer.push(h||0===h?h:"")}),Ember.TEMPLATES.properties=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f,h,i,j="";return b.buffer.push("\n						  "),f={},h={},i={hash:{},inverse:n.noop,fn:n.program(2,g,b),contexts:[a,a],types:["STRING","ID"],hashContexts:h,hashTypes:f,data:b},d=c["link-to"]||a["link-to"],e=d?d.call(a,"property","",i):o.call(a,"link-to","property","",i),(e||0===e)&&b.buffer.push(e),b.buffer.push("\n					  "),j}function g(a,b){var d,e,f="";return b.buffer.push('\n						  	<li class="property list-group-item row" '),d={},e={},b.buffer.push(m(c.action.call(a,"saveProperty","",{hash:{},contexts:[a,a],types:["STRING","ID"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push(">\n						  		<p>"),d={},e={},b.buffer.push(m(c._triageMustache.call(a,"address",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push("</p>\n						  		<h4>$"),d={},e={},b.buffer.push(m(c._triageMustache.call(a,"price",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push('</h4>\n						  		<div>\n						  			<div class="col-md-4 col-sm-4 col-xs-4 home-info">\n							  			<h5>Bedrooms: '),d={},e={},b.buffer.push(m(c._triageMustache.call(a,"bedrooms",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push('</h5>\n						  			</div>\n						  			<div class="col-md-4 col-sm-4 col-xs-4 home-info">\n							  			<h5>Bathrooms: '),d={},e={},b.buffer.push(m(c._triageMustache.call(a,"bathrooms",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push("</h5>\n						  			</div>\n						  		</div>\n						  	</li>\n						  "),f}function h(a,b){b.buffer.push("\n					  <li class='list-group-item property'>looks like there are no homes in your query :(</li>\n					  ")}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var i,j,k,l="",m=this.escapeExpression,n=this,o=c.helperMissing;return e.buffer.push('<div class="scss-map-canvas">\n	<div id="map-canvas" style="height: 300px;" class="google-map"></div>\n</div>\n\n<div class="col-md-12">\n	<div class="row list-box">\n		<div class="pagebar">\n			<h1>Results for Greenville, SC</h1>\n		</div>\n		<div class="container">\n			<div class="col-md-12">\n				'),e.buffer.push('\n				<div class="col-md-8 col-sm-8 col-md-offset-2 col-sm-offset-2">\n					<ul = class"list-group">\n					  '),j={},k={},i=c.each.call(b,{hash:{},inverse:n.program(4,h,e),fn:n.program(1,f,e),contexts:[],types:[],hashContexts:k,hashTypes:j,data:e}),(i||0===i)&&e.buffer.push(i),e.buffer.push("\n					</ul>\n				</div>\n\n			"),e.buffer.push("\n			</div>\n		</div>\n	</div>\n</div>"),l}),Ember.TEMPLATES.property=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f,g,h="";return b.buffer.push("\n  <div>\n    <img "),e={src:a},f={src:"ID"},g={hash:{src:"images.thumbnail.url"},contexts:[],types:[],hashContexts:e,hashTypes:f,data:b},b.buffer.push(l((d=c["bind-attr"]||a["bind-attr"],d?d.call(a,g):k.call(a,"bind-attr",g)))),b.buffer.push(' alt="Instagram Photo">\n  </div>\n'),h}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var g,h,i,j="",k=c.helperMissing,l=this.escapeExpression,m=this;return e.buffer.push("<h1>Detail Page</h1>\n<ul>\n  <li>address: "),h={},i={},e.buffer.push(l(c._triageMustache.call(b,"address",{hash:{},contexts:[b],types:["ID"],hashContexts:i,hashTypes:h,data:e}))),e.buffer.push("</li>\n  <li>price: "),h={},i={},e.buffer.push(l(c._triageMustache.call(b,"price",{hash:{},contexts:[b],types:["ID"],hashContexts:i,hashTypes:h,data:e}))),e.buffer.push("</li>\n  <li>bedrooms: "),h={},i={},e.buffer.push(l(c._triageMustache.call(b,"bedrooms",{hash:{},contexts:[b],types:["ID"],hashContexts:i,hashTypes:h,data:e}))),e.buffer.push("</li>\n  <li>bathrooms: "),h={},i={},e.buffer.push(l(c._triageMustache.call(b,"bathrooms",{hash:{},contexts:[b],types:["ID"],hashContexts:i,hashTypes:h,data:e}))),e.buffer.push("</li>\n  <li>squarefeet: "),h={},i={},e.buffer.push(l(c._triageMustache.call(b,"squarefeet",{hash:{},contexts:[b],types:["ID"],hashContexts:i,hashTypes:h,data:e}))),e.buffer.push("</li>\n  <li>yearBuilt: "),h={},i={},e.buffer.push(l(c._triageMustache.call(b,"yearBuilt",{hash:{},contexts:[b],types:["ID"],hashContexts:i,hashTypes:h,data:e}))),e.buffer.push("</li>\n</ul>\n<p>description: "),h={},i={},e.buffer.push(l(c._triageMustache.call(b,"description",{hash:{},contexts:[b],types:["ID"],hashContexts:i,hashTypes:h,data:e}))),e.buffer.push("</p>\n"),e.buffer.push("\n"),h={},i={},g=c.each.call(b,"instagramPhotos",{hash:{},inverse:m.noop,fn:m.program(1,f,e),contexts:[b],types:["ID"],hashContexts:i,hashTypes:h,data:e}),(g||0===g)&&e.buffer.push(g),j}),Ember.TEMPLATES["style-guide-copy"]=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{},e.buffer.push('<div class="well">\n    Welcome to Yeoman and Ember.js!\n</div>')}),Ember.TEMPLATES["style-guide"]=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var f="";return e.buffer.push('<div class="header .sig-color">\n  <div class="container">\n    <span class="logo-style">NeighborGood</span> <h2>Styleguide</h2>\n    <p>The goal of <a href="#"><span class="font2">NeighborGood</span></a> is to help would be home buyers discover the next most important item on their list: the neighborhood. As such, it was important that as we crafted this program we created a sense of warmth &amp; discovery. It was important to allow the neighborhood\'s information to tell it\'s own story. The goal of the design was to keep from getting in the way of that.</p>\n    <span class="glyphicon glyphicon-home pull-right"></span>\n    <span class="glyphicon glyphicon-home pull-right"></span>\n    <span class="glyphicon glyphicon-home pull-right"></span>\n  '),e.buffer.push('\n  </div>\n</div>\n<div class="container">\n		<div class="row col-md-3 col-sm-3 col-xs-12 pull-left nav-style-guide">\n			<ul>\n				<li><a href="#">Colors</a></li>\n				<li><a href="#">Typography</a></li>\n				<li><a href="#">Logo</a></li>\n				<li><a href="#">Buttons</a></li>\n				<li><a href="#">Links</a></li>\n				<li><a href="#">Inputs</a></li>\n				<li><a href="#">Images</a></li>\n			</ul>\n		</div>\n    <div class="row col-md-9 col-sm-9 col-xs-12 pull-right">\n         <div>\n         		<section><h1>Colors</h1>\n         		<div class="divider"></div>\n         		<div class="row">\n         			<div class="style-element col-md-3 col-sm-3 col-xs-5">\n		         		<div class="color-element link-element primary-color">\n		         			<a href="#">Link</a>\n		         			<p>Non-link</p>\n		         		</div>\n		         		<div class="description">\n			         		<h5>.primary-color</h5>\n			         		<h5>#f7f7f7</h5>\n		         		</div>\n\n         			</div>\n	         		<div class="style-element col-md-3 col-sm-3 col-xs-5">\n	         			<div class="color-element link-element secondary-color">\n		         			<a href="#">Link</a>\n		         			<p>Non-link</p>\n		         		</div>\n		         		<div class="description">\n			         		<h5>.secondary-Color</h5>\n				         	<h5>#AEB2B8</h5>\n		         		</div>\n	         		</div>\n	         		<div class="style-element col-md-3 col-sm-3 col-xs-5">\n	         			<div class="color-element link-element tertiary-color">\n	         				<a href="#">Link</a>\n		         			<p>Non-link</p>\n	         			</div>\n		         		<div class="description">\n				         	<h5>.tertiary-color</h5>\n				         	<h5>#6A6C77</h5>\n	         			</div>\n	         		</div>\n	         		<div class="style-element col-md-3 col-sm-3 col-xs-5">\n	         			<div class="color-element link-element sig-color">\n		         			<a href="#">Link</a>\n		         			<p>Non-link</p>\n		         		</div>\n		         		<div class="description">\n				         	<h5>.sig-color</h5>\n				         	<h5>rgb(242, 51, 22)</h5>\n	         			</div>\n	         		</div>\n	         		<div class="style-element col-md-3 col-sm-3 col-xs-5">\n	         			<div class="color-element link-element accent-color">\n		         			<a href="#">Link</a>\n		         			<p>Non-link</p>\n		         		</div>\n		         		<div class="description">\n				         	<h5>.accent-color</h5>\n				         	<h5>#E48070</h5>\n		         		</div>\n	         		</div>\n	         		<div class="style-element col-md-3 col-sm-3 col-xs-5">\n	         			<div class="color-element link-element cta-color">\n		         			<a href="#">Link</a>\n		         			<p>Non-link</p>\n		         		</div>\n		         		<div class="description">\n				         	<h5>.cta-color</h5>\n				         	<h5>#16F2F2</h5>\n		         		</div>\n	         		</div>\n	         		<div class="style-element col-md-3 col-sm-3 col-xs-5">\n	         			<div class="color-element link-element cta2-color">\n		         			<a href="#">Link</a>\n		         			<p>Non-link</p>\n		         		</div>\n		         		<div class="description">\n				         	<h5>.cta2-color</h5>\n				         	<h5>#46BDBD</h5>\n		         		</div>\n	         		</div>\n         		</div>\n         		</section>\n				    <h1>Typography</h1>\n				    <div class="divider"></div>\n				    <h1>h1. Mister Rogers</h1>\n				    <h2>h2. Leave It To Beaver</h2>\n				    <h3>h3. Sesame Street</h3>\n				    <h4>h4. The Flinstones</h4>\n				    <h5>h5. Father Knows Best</h5>\n				    <p>p. Biodiesel Tumblr sartorial Echo Park chambray Tonx, literally street art mlkshk pork belly. Plaid DIY Marfa Helvetica. Hoodie YOLO swag master cleanse paleo. Forage twee kitsch keffiyeh roof party synth. High Life salvia normcore, squid try-hard quinoa narwhal fashion axe Godard you probably haven\'t heard of them letterpress bicycle rights. Master cleanse drinking vinegar 3 wolf moon jean shorts Godard, authentic actually disrupt small batch distillery. American Apparel tofu letterpress bespoke church-key kitsch.</p>\n\n				    <div class="row list-box">\n					    <div class="col-md-6">\n					    	<h3>Unordered List</h3>\n					    	<ul class="list-group">\n					    		<li class="list-group-item">The Munsters</li>\n					    		<li class="list-group-item">The Adams</li>\n					    		<li class="list-group-item">The Cleavers</li>\n					    	</ul>\n					    </div>\n					    <div class="col-md-6">\n					    	<h3>Ordered List</h3>\n					    	<ol class="list-group">\n					    		<li>The Munsters</li>\n					    		<li>The Adams</li>\n					    		<li>The Cleavers</li>\n					    	</ol>\n					    </div>\n			    	</div>\n\n            <h1>Styling for logo</h1>\n            <div class="divider"></div>\n            <div class="logo-styles">\n                <span class="font2">NeighborGood</span></br>\n                <span class="font4">NeighborGood</span></br>\n            </div>\n            <h1>Buttons</h1>\n            <div class="divider">\n            </div>\n            <div class="row">\n	            <div class="col-md-6 col-sm-6 col-xs-6">\n	            	<button type="button"class="btn-lg cta-color-btn col-md-3 btn-block">Push Me</button>\n	            </div>\n	            <div class="col-md-6 col-sm-6 col-xs-6">\n	            	<button type="button"class="active-btn btn-lg btn-block">Active</button>\n	            </div>\n            </div>\n            <h1>Inputs</h1>\n            <div class="divider"></div>\n            <input class="style-element input-lg" value="Regular Input">\n            <input class="style-element input-lg input-error" value="Error status">\n            <h1>Photos</h1>\n            <h3>Expanded View</h3>\n            <div>\n	            <div class="divider"></div>\n	            <div class="style-element col-md-6 col-sm-6">\n	            	<div class="photo-wrapper">\n		            	<img src="../images/houseA1.png">\n	            	</div>\n		          </div>\n		          <div class="style-element col-md-6 col-sm-6">\n	            	<div class="photo-wrapper">\n		            	<img src="../images/houseA2.png">\n	            	</div>\n		          </div>\n	          </div>\n	          <h3>Miniview</h3>\n	          <div>\n	            <div class="divider"></div>\n	            <div class="style-element col-md-3 col-sm-3 col-xs-3">\n	            	<div class="photo-wrapper">\n		            	<img src="../images/houseA3.png">\n	            	</div>\n		          </div>\n		          <div class="style-element col-md-3 col-sm-3 col-xs-3">\n	            	<div class="photo-wrapper">\n		            	<img src="../images/houseA4.png">\n	            	</div>\n		          </div>\n		          <div class="style-element col-md-3 col-sm-3 col-xs-3">\n	            	<div class="photo-wrapper">\n		            	<img src="../images/houseA5.png">\n	            	</div>\n	            </div>\n		          <div class="style-element col-md-3 col-sm-3 col-xs-3">\n	            	<div class="photo-wrapper">\n		            	<img src="../images/houseA6.png">\n	            	</div>\n	            </div>\n	          </div>\n        </div>\n    </div> \n</div>\n'),f});