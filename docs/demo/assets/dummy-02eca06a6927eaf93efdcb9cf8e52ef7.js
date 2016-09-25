"use strict";define("dummy/app",["exports","ember","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,t,n,a,r){var l=void 0;t.default.MODEL_FACTORY_INJECTIONS=!0,l=t.default.Application.extend({modulePrefix:r.default.modulePrefix,podModulePrefix:r.default.podModulePrefix,Resolver:n.default}),(0,a.default)(l,r.default.modulePrefix),e.default=l}),define("dummy/components/app-version",["exports","ember-cli-app-version/components/app-version","dummy/config/environment"],function(e,t,n){var a=n.default.APP.name,r=n.default.APP.version;e.default=t.default.extend({version:r,name:a})}),define("dummy/components/labeled-radio-button",["exports","ember-radio-button/components/labeled-radio-button"],function(e,t){e.default=t.default}),define("dummy/components/radio-button-input",["exports","ember-radio-button/components/radio-button-input"],function(e,t){e.default=t.default}),define("dummy/components/radio-button",["exports","ember-radio-button/components/radio-button"],function(e,t){e.default=t.default}),define("dummy/components/spin-button",["exports","ember-spin-button2/components/spin-button"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/controllers/index",["exports","ember"],function(e,t){function n(){var e=this.get("selectedColorForSpinButton"),t=this.get("selectedAnimation"),n=this.get("classNamesForSpinButton");return e&&(e='  data-color="'+e+'"'),n&&(n='  class="'+n+'"'),t&&(t='  buttonStyle="'+t+'"'),['  action=(action "myCustomAction")',e,n,t]}var a=t.default.String.w;e.default=t.default.Controller.extend({booleanControllerVarForSpinner:!1,buttonStyles:a("expand-left expand-right expand-up expand-down contract contract-overlay zoom-in zoom-out slide-left slide-right slide-up slide-down"),buttonColors:a("green red blue mint purple"),buttonClassNames:"btn btn-primary",buttonLabel:"Submit",colorPreference:"css-class",selectedAnimation:"expand-left",selectedColor:"green",templateCodeNonPromise:t.default.computed("selectedColorForSpinButton","selectedAnimation","timeout","inFlight","classNames","buttonLabel",function(){var e=this.get("timeout"),t=this.get("buttonLabel"),a=n.call(this),r=["{{#spin-button","  inFlight=booleanControllerVarForSpinner","  defaultTimeout="+e].concat(a).concat(["}}","  "+t,"{{/spin-button}}"]);return r.filter(function(e){return e}).join("\n")}),templateCodeWithPromise:t.default.computed("selectedColorForSpinButton","selectedAnimation","timeout","inFlight","classNames","buttonLabel",function(){var e=this.get("buttonLabel"),t=n.call(this),a=["{{#spin-button"].concat(t).concat(["}}","  "+e,"{{/spin-button}}"]);return a.filter(function(e){return e}).join("\n")}),timeout:2e3,isTimeoutEnabled:t.default.computed("timeout",function(){var e=0|this.get("timeout");return e>4}),selectedColorForSpinButton:t.default.computed("selectedColor","colorPreference",function(){var e=this.get("colorPreference");return"built-in"===e?this.get("selectedColor"):""}),classNamesForSpinButton:t.default.computed("buttonClassNames","colorPreference",function(){var e=this.get("colorPreference");return"css-class"===e?this.get("buttonClassNames"):""}),actions:{createWithPromise:function(){var e=this;return new t.default.RSVP.Promise(function(t){setTimeout(t,e.get("timeout"))})},createWithoutPromise:function(){}}})}),define("dummy/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){e.default=t.default}),define("dummy/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){e.default=t.default}),define("dummy/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy/config/environment"],function(e,t,n){e.default={name:"App Version",initialize:(0,t.default)(n.default.APP.name,n.default.APP.version)}}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/data-adapter",["exports","ember"],function(e,t){e.default={name:"data-adapter",before:"store",initialize:t.default.K}}),define("dummy/initializers/ember-data",["exports","ember-data/setup-container","ember-data/-private/core"],function(e,t,n){e.default={name:"ember-data",initialize:t.default}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,n){function a(){var e=arguments[1]||arguments[0];if(n.default.exportApplicationGlobal!==!1){var a,r=n.default.exportApplicationGlobal;a="string"==typeof r?r:t.default.String.classify(n.default.modulePrefix),window[a]||(window[a]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[a]}}))}}e.initialize=a,e.default={name:"export-application-global",initialize:a}}),define("dummy/initializers/injectStore",["exports","ember"],function(e,t){e.default={name:"injectStore",before:"store",initialize:t.default.K}}),define("dummy/initializers/store",["exports","ember"],function(e,t){e.default={name:"store",after:"ember-data",initialize:t.default.K}}),define("dummy/initializers/transforms",["exports","ember"],function(e,t){e.default={name:"transforms",before:"store",initialize:t.default.K}}),define("dummy/instance-initializers/ember-data",["exports","ember-data/-private/instance-initializers/initialize-store-service"],function(e,t){e.default={name:"ember-data",initialize:t.default}}),define("dummy/resolver",["exports","ember-resolver"],function(e,t){e.default=t.default}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,n){var a=t.default.Router.extend({location:n.default.locationType});a.map(function(){}),e.default=a}),define("dummy/routes/application",["exports","ember"],function(e,t){e.default=t.default.Route.extend({})}),define("dummy/routes/index",["exports","ember"],function(e,t){e.default=t.default.Route.extend({})}),define("dummy/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/templates/application",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["wrong-type"]},revision:"Ember@2.4.6",loc:{source:null,start:{line:1,column:0},end:{line:2,column:0}},moduleName:"dummy/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),a},statements:[["content","outlet",["loc",[null,[1,0],[1,10]]]]],locals:[],templates:[]}}())}),define("dummy/templates/components/labeled-radio-button",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["wrong-type","multiple-nodes"]},revision:"Ember@2.4.6",loc:{source:null,start:{line:1,column:0},end:{line:12,column:0}},moduleName:"dummy/templates/components/labeled-radio-button.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(2);return a[0]=e.createMorphAt(t,0,0,n),a[1]=e.createMorphAt(t,2,2,n),e.insertBoundary(t,0),a},statements:[["inline","radio-button",[],["radioClass",["subexpr","@mut",[["get","radioClass",["loc",[null,[2,15],[2,25]]]]],[],[]],"radioId",["subexpr","@mut",[["get","radioId",["loc",[null,[3,12],[3,19]]]]],[],[]],"changed","innerRadioChanged","disabled",["subexpr","@mut",[["get","disabled",["loc",[null,[5,13],[5,21]]]]],[],[]],"groupValue",["subexpr","@mut",[["get","groupValue",["loc",[null,[6,15],[6,25]]]]],[],[]],"name",["subexpr","@mut",[["get","name",["loc",[null,[7,9],[7,13]]]]],[],[]],"required",["subexpr","@mut",[["get","required",["loc",[null,[8,13],[8,21]]]]],[],[]],"value",["subexpr","@mut",[["get","value",["loc",[null,[9,10],[9,15]]]]],[],[]]],["loc",[null,[1,0],[9,17]]]],["content","yield",["loc",[null,[11,0],[11,9]]]]],locals:[],templates:[]}}())}),define("dummy/templates/components/radio-button",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){var e=function(){return{meta:{fragmentReason:{name:"triple-curlies"},revision:"Ember@2.4.6",loc:{source:null,start:{line:1,column:0},end:{line:15,column:0}},moduleName:"dummy/templates/components/radio-button.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("  ");e.appendChild(t,n);var n=e.createElement("label"),a=e.createTextNode("\n    ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n\n    ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[1]),r=new Array(4);return r[0]=e.createAttrMorph(a,"class"),r[1]=e.createAttrMorph(a,"for"),r[2]=e.createMorphAt(a,1,1),r[3]=e.createMorphAt(a,3,3),r},statements:[["attribute","class",["concat",["ember-radio-button ",["subexpr","if",[["get","checked",["loc",[null,[2,40],[2,47]]]],"checked"],[],["loc",[null,[2,35],[2,59]]]]," ",["get","joinedClassNames",["loc",[null,[2,62],[2,78]]]]]]],["attribute","for",["get","radioId",["loc",[null,[2,88],[2,95]]]]],["inline","radio-button-input",[],["class",["subexpr","@mut",[["get","radioClass",["loc",[null,[4,14],[4,24]]]]],[],[]],"id",["subexpr","@mut",[["get","radioId",["loc",[null,[5,11],[5,18]]]]],[],[]],"disabled",["subexpr","@mut",[["get","disabled",["loc",[null,[6,17],[6,25]]]]],[],[]],"name",["subexpr","@mut",[["get","name",["loc",[null,[7,13],[7,17]]]]],[],[]],"required",["subexpr","@mut",[["get","required",["loc",[null,[8,17],[8,25]]]]],[],[]],"groupValue",["subexpr","@mut",[["get","groupValue",["loc",[null,[9,19],[9,29]]]]],[],[]],"value",["subexpr","@mut",[["get","value",["loc",[null,[10,14],[10,19]]]]],[],[]],"changed","changed"],["loc",[null,[3,4],[11,27]]]],["content","yield",["loc",[null,[13,4],[13,13]]]]],locals:[],templates:[]}}(),t=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.4.6",loc:{source:null,start:{line:15,column:0},end:{line:25,column:0}},moduleName:"dummy/templates/components/radio-button.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("  ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,1,1,n),a},statements:[["inline","radio-button-input",[],["class",["subexpr","@mut",[["get","radioClass",["loc",[null,[17,12],[17,22]]]]],[],[]],"id",["subexpr","@mut",[["get","radioId",["loc",[null,[18,9],[18,16]]]]],[],[]],"disabled",["subexpr","@mut",[["get","disabled",["loc",[null,[19,15],[19,23]]]]],[],[]],"name",["subexpr","@mut",[["get","name",["loc",[null,[20,11],[20,15]]]]],[],[]],"required",["subexpr","@mut",[["get","required",["loc",[null,[21,15],[21,23]]]]],[],[]],"groupValue",["subexpr","@mut",[["get","groupValue",["loc",[null,[22,17],[22,27]]]]],[],[]],"value",["subexpr","@mut",[["get","value",["loc",[null,[23,12],[23,17]]]]],[],[]],"changed","changed"],["loc",[null,[16,2],[24,25]]]]],locals:[],templates:[]}}();return{meta:{fragmentReason:{name:"missing-wrapper",problems:["wrong-type"]},revision:"Ember@2.4.6",loc:{source:null,start:{line:1,column:0},end:{line:26,column:0}},moduleName:"dummy/templates/components/radio-button.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),e.insertBoundary(t,null),a},statements:[["block","if",[["get","hasBlock",["loc",[null,[1,6],[1,14]]]]],[],0,1,["loc",[null,[1,0],[25,7]]]]],locals:[],templates:[e,t]}}())}),define("dummy/templates/index",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){var e=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.4.6",loc:{source:null,start:{line:17,column:10},end:{line:19,column:10}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("            ");e.appendChild(t,n);var n=e.createElement("option"),a=e.createComment("");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[1]),r=new Array(2);return r[0]=e.createAttrMorph(a,"value"),r[1]=e.createMorphAt(a,0,0),r},statements:[["attribute","value",["get","color",["loc",[null,[18,28],[18,33]]]]],["content","color",["loc",[null,[18,36],[18,45]]]]],locals:["color"],templates:[]}}(),t=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.4.6",loc:{source:null,start:{line:35,column:8},end:{line:38,column:8}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("          ");e.appendChild(t,n);var n=e.createElement("div"),a=e.createElement("label");e.setAttribute(a,"class","group-item");var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("\n            ");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r),e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[1,0]),r=new Array(2);return r[0]=e.createMorphAt(a,0,0),r[1]=e.createMorphAt(a,2,2),r},statements:[["inline","radio-button",[],["value",["subexpr","@mut",[["get","style",["loc",[null,[36,62],[36,67]]]]],[],[]],"groupValue",["subexpr","@mut",[["get","selectedAnimation",["loc",[null,[36,79],[36,96]]]]],[],[]]],["loc",[null,[36,41],[36,98]]]],["content","style",["loc",[null,[37,12],[37,21]]]]],locals:["style"],templates:[]}}(),n=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.4.6",loc:{source:null,start:{line:54,column:12},end:{line:61,column:12}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("              ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,1,1,n),a},statements:[["content","buttonLabel",["loc",[null,[60,14],[60,29]]]]],locals:[],templates:[]}}(),a=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.4.6",loc:{source:null,start:{line:85,column:12},end:{line:94,column:12}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("              ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,1,1,n),a},statements:[["content","buttonLabel",["loc",[null,[93,14],[93,29]]]]],locals:[],templates:[]}}(),r=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.4.6",loc:{source:null,start:{line:99,column:12},end:{line:101,column:12}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("              The button will revert the ");e.appendChild(t,n);var n=e.createElement("code"),a=e.createTextNode("booleanControllerVarForSpinner");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode(" after ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("ms.\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,3,3,n),a},statements:[["content","timeout",["loc",[null,[100,91],[100,102]]]]],locals:[],templates:[]}}(),l=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.4.6",loc:{source:null,start:{line:101,column:12},end:{line:103,column:12}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("              Uncheck the in-Flight checkbox to stop spinner.\n");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}();return{meta:{fragmentReason:{name:"triple-curlies"},revision:"Ember@2.4.6",loc:{source:null,start:{line:1,column:0},end:{line:147,column:0}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("div");e.setAttribute(n,"class","container");var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("h2");e.setAttribute(a,"id","title");var r=e.createTextNode("Demo of ember-spin-button2 Addon");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n\n  ");e.appendChild(n,a);var a=e.createElement("div");e.setAttribute(a,"class","controls-container");var r=e.createTextNode("\n    ");e.appendChild(a,r);var r=e.createElement("h3"),l=e.createTextNode("Button Color");e.appendChild(r,l),e.appendChild(a,r);var r=e.createTextNode("\n    ");e.appendChild(a,r);var r=e.createElement("div");e.setAttribute(r,"class","control-group");var l=e.createTextNode("\n\n      ");e.appendChild(r,l);var l=e.createElement("div");e.setAttribute(l,"class","col-xs-12");var o=e.createTextNode("\n        ");e.appendChild(l,o);var o=e.createElement("label"),d=e.createTextNode("\n          ");e.appendChild(o,d);var d=e.createComment("");e.appendChild(o,d);var d=e.createTextNode("Use a built-in color\n        ");e.appendChild(o,d),e.appendChild(l,o);var o=e.createTextNode(" \n\n        ");e.appendChild(l,o);var o=e.createElement("select"),d=e.createTextNode("\n");e.appendChild(o,d);var d=e.createComment("");e.appendChild(o,d);var d=e.createTextNode("        ");e.appendChild(o,d),e.appendChild(l,o);var o=e.createTextNode("\n      ");e.appendChild(l,o),e.appendChild(r,l);var l=e.createTextNode("\n\n      ");e.appendChild(r,l);var l=e.createElement("div");e.setAttribute(l,"class","col-xs-12");var o=e.createTextNode("\n        ");e.appendChild(l,o);var o=e.createElement("label"),d=e.createTextNode("\n          ");e.appendChild(o,d);var d=e.createComment("");e.appendChild(o,d);var d=e.createTextNode("Use custom class (e.g. bootstrap class)\n        ");e.appendChild(o,d),e.appendChild(l,o);var o=e.createTextNode(" \n        ");e.appendChild(l,o);var o=e.createComment("");e.appendChild(l,o);var o=e.createTextNode("\n      ");e.appendChild(l,o),e.appendChild(r,l);var l=e.createTextNode("\n\n    ");e.appendChild(r,l),e.appendChild(a,r);var r=e.createTextNode("\n\n    ");e.appendChild(a,r);var r=e.createElement("h3"),l=e.createTextNode("Animation style");e.appendChild(r,l),e.appendChild(a,r);var r=e.createTextNode("\n    ");e.appendChild(a,r);var r=e.createElement("div");e.setAttribute(r,"class","control-group");var l=e.createTextNode("\n      ");e.appendChild(r,l);var l=e.createElement("div");e.setAttribute(l,"class","col-xs-12");var o=e.createTextNode("\n");e.appendChild(l,o);var o=e.createComment("");e.appendChild(l,o);var o=e.createTextNode("      ");e.appendChild(l,o),e.appendChild(r,l);var l=e.createTextNode("\n    ");e.appendChild(r,l),e.appendChild(a,r);var r=e.createTextNode("\n\n\n    ");e.appendChild(a,r);var r=e.createElement("div");e.setAttribute(r,"class","tabs");var l=e.createTextNode("\n\n      ");e.appendChild(r,l);var l=e.createElement("div");e.setAttribute(l,"class","tab");var o=e.createTextNode("\n        ");e.appendChild(l,o);var o=e.createElement("input");e.setAttribute(o,"type","radio"),e.setAttribute(o,"id","tab-1"),e.setAttribute(o,"name","tab-group-1"),e.setAttribute(o,"checked",""),e.appendChild(l,o);var o=e.createTextNode("\n\n        ");e.appendChild(l,o);var o=e.createElement("div");e.setAttribute(o,"class","tab-content");var d=e.createTextNode("\n\n          ");e.appendChild(o,d);var d=e.createElement("p"),i=e.createTextNode("If the return value of action is a Promise, the button will change its state based on  that Promise's\n            state.");e.appendChild(d,i),e.appendChild(o,d);var d=e.createElement("br");e.appendChild(o,d);var d=e.createTextNode("\n\n          ");e.appendChild(o,d);var d=e.createElement("div");e.setAttribute(d,"class","demo-container");var i=e.createTextNode("\n");e.appendChild(d,i);var i=e.createComment("");e.appendChild(d,i);var i=e.createTextNode("          ");e.appendChild(d,i),e.appendChild(o,d);var d=e.createTextNode("\n\n          ");e.appendChild(o,d);var d=e.createElement("div");e.setAttribute(d,"class","controls-container");var i=e.createTextNode("\n\n            ");e.appendChild(d,i);var i=e.createElement("h3"),c=e.createTextNode("Template Code");e.appendChild(i,c),e.appendChild(d,i);var i=e.createTextNode("\n            ");e.appendChild(d,i);var i=e.createElement("div");e.setAttribute(i,"class","control-group");var c=e.createTextNode("\n              ");e.appendChild(i,c);var c=e.createElement("textarea");e.setAttribute(c,"rows","7"),e.setAttribute(c,"cols","60");var u=e.createComment("");e.appendChild(c,u),e.appendChild(i,c);var c=e.createTextNode("\n            ");e.appendChild(i,c),e.appendChild(d,i);var i=e.createTextNode("\n\n          ");e.appendChild(d,i),e.appendChild(o,d);var d=e.createTextNode("\n\n        ");e.appendChild(o,d),e.appendChild(l,o);var o=e.createTextNode(" ");e.appendChild(l,o);var o=e.createComment(" ./tab-content ");e.appendChild(l,o);var o=e.createTextNode("\n        ");e.appendChild(l,o);var o=e.createElement("label");e.setAttribute(o,"for","tab-1"),e.setAttribute(o,"class","tab-label");var d=e.createTextNode("Using Promise");e.appendChild(o,d),e.appendChild(l,o);var o=e.createTextNode("\n      ");e.appendChild(l,o),e.appendChild(r,l);var l=e.createTextNode("\n\n      ");e.appendChild(r,l);var l=e.createElement("div");e.setAttribute(l,"class","tab");var o=e.createTextNode("\n        ");e.appendChild(l,o);var o=e.createElement("input");e.setAttribute(o,"type","radio"),e.setAttribute(o,"id","tab-2"),e.setAttribute(o,"name","tab-group-1"),e.appendChild(l,o);var o=e.createTextNode("\n        ");e.appendChild(l,o);var o=e.createElement("div");e.setAttribute(o,"class","tab-content");var d=e.createTextNode("\n\n          ");e.appendChild(o,d);var d=e.createElement("p"),i=e.createTextNode("If the return value of action is not a Promise, The button will update state based on ");e.appendChild(d,i);var i=e.createElement("code"),c=e.createTextNode("inFligh");e.appendChild(i,c),e.appendChild(d,i);var i=e.createTextNode("\n            attribute. It can also be configured to revert to default state after ");e.appendChild(d,i);var i=e.createElement("code"),c=e.createTextNode("timeout");e.appendChild(i,c),e.appendChild(d,i);var i=e.createTextNode(" ms.");e.appendChild(d,i),e.appendChild(o,d);var d=e.createTextNode("\n\n          ");e.appendChild(o,d);var d=e.createElement("div");e.setAttribute(d,"class","demo-container");var i=e.createTextNode("\n");e.appendChild(d,i);var i=e.createComment("");e.appendChild(d,i);var i=e.createTextNode("\n          ");e.appendChild(d,i),e.appendChild(o,d);var d=e.createTextNode("\n\n          ");e.appendChild(o,d);var d=e.createElement("p"),i=e.createTextNode("\n");e.appendChild(d,i);var i=e.createComment("");e.appendChild(d,i);var i=e.createTextNode("          ");e.appendChild(d,i),e.appendChild(o,d);var d=e.createTextNode("\n\n          ");e.appendChild(o,d);var d=e.createElement("h3"),i=e.createTextNode("Timeout");e.appendChild(d,i),e.appendChild(o,d);var d=e.createTextNode("\n          ");e.appendChild(o,d);var d=e.createElement("div");e.setAttribute(d,"class","control-group");var i=e.createTextNode("\n            ");e.appendChild(d,i);var i=e.createElement("label");e.setAttribute(i,"for","button-timeout-range");var c=e.createComment("");e.appendChild(i,c);var c=e.createTextNode("ms");e.appendChild(i,c),e.appendChild(d,i);var i=e.createTextNode("\n            ");e.appendChild(d,i);var i=e.createComment("");e.appendChild(d,i);var i=e.createTextNode("\n          ");e.appendChild(d,i),e.appendChild(o,d);var d=e.createTextNode("\n\n          ");e.appendChild(o,d);var d=e.createElement("p"),i=e.createElement("label"),c=e.createComment("");e.appendChild(i,c);var c=e.createTextNode(" In-Flight");e.appendChild(i,c),e.appendChild(d,i),e.appendChild(o,d);var d=e.createTextNode("\n\n          ");e.appendChild(o,d);var d=e.createElement("div");e.setAttribute(d,"class","controls-container");var i=e.createTextNode("\n\n            ");e.appendChild(d,i);var i=e.createElement("h3"),c=e.createTextNode("Template Code");e.appendChild(i,c),e.appendChild(d,i);var i=e.createTextNode("\n            ");e.appendChild(d,i);var i=e.createElement("div");e.setAttribute(i,"class","control-group");var c=e.createTextNode("\n              ");e.appendChild(i,c);var c=e.createElement("textarea");e.setAttribute(c,"rows","9"),e.setAttribute(c,"cols","60");var u=e.createComment("");e.appendChild(c,u),e.appendChild(i,c);var c=e.createTextNode("\n            ");e.appendChild(i,c),e.appendChild(d,i);var i=e.createTextNode("\n\n          ");e.appendChild(d,i),e.appendChild(o,d);var d=e.createTextNode("\n\n\n        ");e.appendChild(o,d),e.appendChild(l,o);var o=e.createTextNode(" ");e.appendChild(l,o);var o=e.createComment(" ./tab-content ");e.appendChild(l,o);var o=e.createTextNode("\n        ");e.appendChild(l,o);var o=e.createElement("label");e.setAttribute(o,"for","tab-2"),e.setAttribute(o,"class","tab-label");var d=e.createTextNode("Without Promise");e.appendChild(o,d),e.appendChild(l,o);var o=e.createTextNode("\n      ");e.appendChild(l,o),e.appendChild(r,l);var l=e.createTextNode("\n\n    ");e.appendChild(r,l),e.appendChild(a,r);var r=e.createTextNode("\n\n\n  ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n\n\n  ");e.appendChild(n,a);var a=e.createElement("a");e.setAttribute(a,"class","install-btn"),e.setAttribute(a,"href","https://github.com/kashiif/ember-spin-button2"),e.setAttribute(a,"title","Go to ember-spin-button2's github project");var r=e.createTextNode("\n    ");e.appendChild(a,r),e.setNamespace("http://www.w3.org/2000/svg");var r=e.createElement("svg");e.setAttribute(r,"aria-hidden","true"),e.setAttribute(r,"class","octicon octicon-mark-github"),e.setAttribute(r,"height","20"),e.setAttribute(r,"version","1.1"),e.setAttribute(r,"viewBox","0 0 16 16"),e.setAttribute(r,"width","20");var l=e.createTextNode("\n      ");e.appendChild(r,l);var l=e.createElement("path");e.setAttribute(l,"d","M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z");var o=e.createTextNode("\n      ");e.appendChild(l,o),e.appendChild(r,l);var l=e.createTextNode("\n    ");e.appendChild(r,l),e.appendChild(a,r);var r=e.createTextNode("\n  ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n\n  ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[0]),r=e.childAt(a,[3]),l=e.childAt(r,[3]),o=e.childAt(l,[1]),d=e.childAt(o,[3]),i=e.childAt(l,[3]),c=e.childAt(r,[9]);this.cachedFragment&&e.repairClonedNode(e.childAt(c,[1,1]),[],!0);var u=e.childAt(c,[1,3]),p=e.childAt(c,[3,3]),s=e.childAt(p,[5]),m=e.childAt(p,[9]),h=new Array(18);return h[0]=e.createMorphAt(e.childAt(o,[1]),1,1),h[1]=e.createAttrMorph(d,"disabled"),h[2]=e.createAttrMorph(d,"onchange"),h[3]=e.createAttrMorph(d,"value"),h[4]=e.createMorphAt(d,1,1),h[5]=e.createMorphAt(e.childAt(i,[1]),1,1),h[6]=e.createMorphAt(i,3,3),h[7]=e.createMorphAt(e.childAt(r,[7,1]),1,1),h[8]=e.createMorphAt(e.childAt(u,[4]),1,1),h[9]=e.createMorphAt(e.childAt(u,[6,3,1]),0,0),h[10]=e.createMorphAt(e.childAt(p,[3]),1,1),h[11]=e.createAttrMorph(s,"class"),h[12]=e.createMorphAt(s,1,1),h[13]=e.createMorphAt(e.childAt(m,[1]),0,0),h[14]=e.createMorphAt(m,3,3),h[15]=e.createMorphAt(e.childAt(p,[11,0]),0,0),h[16]=e.createMorphAt(e.childAt(p,[13,3,1]),0,0),h[17]=e.createMorphAt(a,7,7),h},statements:[["inline","radio-button",[],["value","built-in","groupValue",["subexpr","@mut",[["get","colorPreference",["loc",[null,[10,53],[10,68]]]]],[],[]]],["loc",[null,[10,10],[10,70]]]],["attribute","disabled",["subexpr","if",[["get","selectedColorForSpinButton",["loc",[null,[14,30],[14,56]]]],!1,!0],[],["loc",[null,[14,25],[14,69]]]]],["attribute","onchange",["subexpr","action",[["subexpr","mut",[["get","selectedColor",["loc",[null,[15,40],[15,53]]]]],[],["loc",[null,[15,35],[15,54]]]]],["value","target.value"],["loc",[null,[15,26],[15,77]]]]],["attribute","value",["get","selectedColor",["loc",[null,[16,24],[16,37]]]]],["block","each",[["get","buttonColors",["loc",[null,[17,18],[17,30]]]]],[],0,null,["loc",[null,[17,10],[19,19]]]],["inline","radio-button",[],["value","css-class","groupValue",["subexpr","@mut",[["get","colorPreference",["loc",[null,[25,54],[25,69]]]]],[],[]]],["loc",[null,[25,10],[25,71]]]],["inline","input",[],["value",["subexpr","@mut",[["get","buttonClassNames",["loc",[null,[27,22],[27,38]]]]],[],[]],"disabled",["subexpr","if",[["get","selectedColorForSpinButton",["loc",[null,[27,52],[27,78]]]],!0,!1],[],["loc",[null,[27,48],[27,90]]]]],["loc",[null,[27,8],[27,92]]]],["block","each",[["get","buttonStyles",["loc",[null,[35,16],[35,28]]]]],[],1,null,["loc",[null,[35,8],[38,17]]]],["block","spin-button",[],["class",["subexpr","@mut",[["get","classNamesForSpinButton",["loc",[null,[55,20],[55,43]]]]],[],[]],"data-color",["subexpr","@mut",[["get","selectedColorForSpinButton",["loc",[null,[56,25],[56,51]]]]],[],[]],"action",["subexpr","action",["createWithPromise"],[],["loc",[null,[57,21],[57,49]]]],"buttonStyle",["subexpr","@mut",[["get","selectedAnimation",["loc",[null,[58,26],[58,43]]]]],[],[]]],2,null,["loc",[null,[54,12],[61,28]]]],["content","templateCodeWithPromise",["loc",[null,[68,39],[68,66]]]],["block","spin-button",[],["class",["subexpr","@mut",[["get","classNamesForSpinButton",["loc",[null,[86,20],[86,43]]]]],[],[]],"data-color",["subexpr","@mut",[["get","selectedColorForSpinButton",["loc",[null,[87,25],[87,51]]]]],[],[]],"inFlight",["subexpr","@mut",[["get","booleanControllerVarForSpinner",["loc",[null,[88,23],[88,53]]]]],[],[]],"action",["subexpr","action",["createWithoutPromise"],[],["loc",[null,[89,21],[89,52]]]],"defaultTimeout",["subexpr","@mut",[["get","timeout",["loc",[null,[90,29],[90,36]]]]],[],[]],"buttonStyle",["subexpr","@mut",[["get","selectedAnimation",["loc",[null,[91,26],[91,43]]]]],[],[]]],3,null,["loc",[null,[85,12],[94,28]]]],["attribute","class",["concat",[["subexpr","if",[["get","booleanControllerVarForSpinner",["loc",[null,[98,25],[98,55]]]],"","transparent"],[],["loc",[null,[98,20],[98,74]]]]]]],["block","if",[["get","isTimeoutEnabled",["loc",[null,[99,18],[99,34]]]]],[],4,5,["loc",[null,[99,12],[103,19]]]],["content","timeout",["loc",[null,[108,46],[108,57]]]],["inline","input",[],["id","button-timeout-range","type","range","max","60000","step","500","value",["subexpr","@mut",[["get","timeout",["loc",[null,[109,88],[109,95]]]]],[],[]]],["loc",[null,[109,12],[109,97]]]],["inline","input",[],["type","checkbox","checked",["subexpr","@mut",[["get","booleanControllerVarForSpinner",["loc",[null,[112,52],[112,82]]]]],[],[]]],["loc",[null,[112,20],[112,84]]]],["content","templateCodeNonPromise",["loc",[null,[118,39],[118,65]]]],["content","outlet",["loc",[null,[145,2],[145,12]]]]],
locals:[],templates:[e,t,n,a,r,l]}}())}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var n=t+"/config/environment",a=e.default.$('meta[name="'+n+'"]').attr("content"),r=JSON.parse(unescape(a));return{default:r}}catch(e){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests||require("dummy/app").default.create({name:"ember-spin-button2",version:"0.1.1+78de0726"});