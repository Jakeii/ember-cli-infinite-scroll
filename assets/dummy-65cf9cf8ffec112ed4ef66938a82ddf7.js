define("dummy/adapters/application",["exports","ember-data"],function(e,t){"use strict";var n=t["default"].RESTAdapter;e["default"]=n.extend({host:"http://staging.vestorly.com",namespace:"api/v2/advisors/infinite-scroll"})}),define("dummy/app",["exports","ember","ember/resolver","ember/load-initializers","dummy/config/environment"],function(e,t,n,r,a){"use strict";var l;t["default"].MODEL_FACTORY_INJECTIONS=!0,l=t["default"].Application.extend({modulePrefix:a["default"].modulePrefix,Resolver:n["default"]}),r["default"](l,a["default"].modulePrefix),e["default"]=l}),define("dummy/components/ember-ic-you",["exports","ember-ic-you/components/ember-ic-you"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/components/infinite-scroll-container",["exports","ember-cli-infinite-scroll/components/infinite-scroll-container"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/components/infinite-scroll",["exports","ember-cli-infinite-scroll/components/infinite-scroll"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/controllers/array",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller}),define("dummy/controllers/object",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller}),define("dummy/controllers/posts",["exports","ember"],function(e,t){"use strict";var n=t["default"].Controller;e["default"]=n.extend({sidebarParams:["group_ids"]})}),define("dummy/initializers/app-version",["exports","dummy/config/environment","ember"],function(e,t,n){"use strict";var r=n["default"].String.classify,a=!1;e["default"]={name:"App Version",initialize:function(e,l){if(!a){var i=r(l.toString());n["default"].libraries.register(i,t["default"].APP.version),a=!0}}}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,n){"use strict";function r(){var e=arguments[1]||arguments[0];if(n["default"].exportApplicationGlobal!==!1){var r,a=n["default"].exportApplicationGlobal;r="string"==typeof a?a:t["default"].String.classify(n["default"].modulePrefix),window[r]||(window[r]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[r]}}))}}e.initialize=r,e["default"]={name:"export-application-global",initialize:r}}),define("dummy/models/post",["exports","ember-data"],function(e,t){"use strict";var n=t["default"].attr,r=t["default"].Model;e["default"]=r.extend({title:n("string"),imageUrl:n("string"),summary:n("string"),body:n("string"),logoUrl:n("string")})}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,n){"use strict";var r=t["default"].Router.extend({location:n["default"].locationType});r.map(function(){this.route("posts")}),e["default"]=r}),define("dummy/routes/application",["exports","ember"],function(e,t){"use strict";var n=t["default"].Route;e["default"]=n.extend({beforeModel:function(){this.transitionTo("posts")}})}),define("dummy/routes/posts",["exports","ember","ember-cli-infinite-scroll/mixins/infinite-scroll-route"],function(e,t,n){"use strict";var r=t["default"].Route;e["default"]=r.extend(n["default"],{limit:4,model:function(){return this.infiniteQuery("post",{group_ids:"54c0452c8a5f04ef080001c1"})}})}),define("dummy/serializers/post",["exports","ember-data"],function(e,t){"use strict";var n=t["default"].ActiveModelSerializer;e["default"]=n.extend({primaryKey:"_id",normalizePayload:function(e){return e.posts=e.reader_posts,e.reader_posts&&delete e.reader_posts,this._super.apply(this,arguments)}})}),define("dummy/templates/application",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.10",loc:{source:null,start:{line:1,column:0},end:{line:18,column:0}},moduleName:"dummy/templates/application.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("nav");e.setAttribute(n,"class","navbar navbar-default");var r=e.createTextNode("\n  ");e.appendChild(n,r);var r=e.createElement("div");e.setAttribute(r,"class","container");var a=e.createTextNode("\n    ");e.appendChild(r,a);var a=e.createElement("div");e.setAttribute(a,"class","navbar-brand");var l=e.createTextNode("Daily News");e.appendChild(a,l),e.appendChild(r,a);var a=e.createTextNode("\n      ");e.appendChild(r,a);var a=e.createElement("div");e.setAttribute(a,"class","ul nav navbar-nav navbar-right");var l=e.createTextNode("\n          ");e.appendChild(a,l);var l=e.createElement("li"),i=e.createTextNode("\n              ");e.appendChild(l,i);var i=e.createElement("a");e.setAttribute(i,"href","https://github.com/Vestorly/ember-cli-infinite-scroll");var o=e.createTextNode("\n                  ember-cli-infinite-scroll on github\n              ");e.appendChild(i,o),e.appendChild(l,i);var i=e.createTextNode("\n\n          ");e.appendChild(l,i),e.appendChild(a,l);var l=e.createTextNode("\n      ");e.appendChild(a,l),e.appendChild(r,a);var a=e.createTextNode("\n  ");e.appendChild(r,a),e.appendChild(n,r);var r=e.createTextNode("\n");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("div");e.setAttribute(n,"class","container");var r=e.createTextNode("\n  ");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode("\n");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(e.childAt(t,[2]),1,1),r},statements:[["content","outlet",["loc",[null,[16,2],[16,12]]]]],locals:[],templates:[]}}())}),define("dummy/templates/components/ember-ic-you",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.10",loc:{source:null,start:{line:1,column:0},end:{line:1,column:9}},moduleName:"dummy/templates/components/ember-ic-you.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),e.insertBoundary(t,null),r},statements:[["content","yield",["loc",[null,[1,0],[1,9]]]]],locals:[],templates:[]}}())}),define("dummy/templates/components/infinite-scroll-container",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){var e=function(){var e=function(){return{meta:{revision:"Ember@1.13.10",loc:{source:null,start:{line:2,column:2},end:{line:13,column:2}},moduleName:"dummy/templates/components/infinite-scroll-container.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("    ");e.appendChild(t,n);var n=e.createElement("h3"),r=e.createTextNode("\n      ");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n    ");e.appendChild(t,n);var n=e.createElement("hr");e.appendChild(t,n);var n=e.createTextNode("\n    ");e.appendChild(t,n);var n=e.createElement("img");e.setAttribute(n,"class","article-image"),e.appendChild(t,n);var n=e.createTextNode("\n    ");e.appendChild(t,n);var n=e.createElement("hr");e.appendChild(t,n);var n=e.createTextNode("\n    ");e.appendChild(t,n);var n=e.createElement("div");e.setAttribute(n,"class","container-body-text");var r=e.createTextNode("\n      ");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n    ");e.appendChild(t,n);var n=e.createElement("hr");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=e.childAt(t,[5]),a=new Array(3);return a[0]=e.createMorphAt(e.childAt(t,[1]),1,1),a[1]=e.createAttrMorph(r,"src"),a[2]=e.createUnsafeMorphAt(e.childAt(t,[9]),1,1),a},statements:[["content","post.title",["loc",[null,[4,6],[4,20]]]],["attribute","src",["get","post.imageUrl",["loc",[null,[7,47],[7,60]]]]],["content","post.body",["loc",[null,[10,6],[10,21]]]]],locals:[],templates:[]}}();return{meta:{revision:"Ember@1.13.10",loc:{source:null,start:{line:1,column:0},end:{line:14,column:0}},moduleName:"dummy/templates/components/infinite-scroll-container.hbs"},arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),e.insertBoundary(t,null),r},statements:[["block","if",[["get","post.imageUrl",["loc",[null,[2,8],[2,21]]]]],[],0,null,["loc",[null,[2,2],[13,9]]]]],locals:["post"],templates:[e]}}();return{meta:{revision:"Ember@1.13.10",loc:{source:null,start:{line:1,column:0},end:{line:15,column:51}},moduleName:"dummy/templates/components/infinite-scroll-container.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");e.appendChild(t,n);var n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(2);return r[0]=e.createMorphAt(t,0,0,n),r[1]=e.createMorphAt(t,1,1,n),e.insertBoundary(t,0),e.insertBoundary(t,null),r},statements:[["block","each",[["get","model",["loc",[null,[1,8],[1,13]]]]],[],0,null,["loc",[null,[1,0],[14,9]]]],["inline","infinite-scroll",[],["scrollContainer",["subexpr","@mut",[["get","scrollContainer",["loc",[null,[15,34],[15,49]]]]],[],[]]],["loc",[null,[15,0],[15,51]]]]],locals:[],templates:[e]}}())}),define("dummy/templates/components/infinite-scroll",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{revision:"Ember@1.13.10",loc:{source:null,start:{line:1,column:0},end:{line:3,column:0}},moduleName:"dummy/templates/components/infinite-scroll.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("  ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(t,1,1,n),r},statements:[["inline","ember-ic-you",[],["crossedTheLine","performInfinite","triggerDistance",["subexpr","@mut",[["get","triggerDistance",["loc",[null,[2,66],[2,81]]]]],[],[]],"scrollContainer",["subexpr","@mut",[["get","scrollContainer",["loc",[null,[2,98],[2,113]]]]],[],[]]],["loc",[null,[2,2],[2,115]]]]],locals:[],templates:[]}}();return{meta:{revision:"Ember@1.13.10",loc:{source:null,start:{line:1,column:0},end:{line:5,column:9}},moduleName:"dummy/templates/components/infinite-scroll.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(2);return r[0]=e.createMorphAt(t,0,0,n),r[1]=e.createMorphAt(t,2,2,n),e.insertBoundary(t,0),e.insertBoundary(t,null),r},statements:[["block","if",[["get","infiniteScrollAvailable",["loc",[null,[1,6],[1,29]]]]],[],0,null,["loc",[null,[1,0],[3,7]]]],["content","yield",["loc",[null,[5,0],[5,9]]]]],locals:[],templates:[e]}}())}),define("dummy/templates/posts",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){var e=function(){var e=function(){return{meta:{revision:"Ember@1.13.10",loc:{source:null,start:{line:4,column:6},end:{line:14,column:6}},moduleName:"dummy/templates/posts.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("        ");e.appendChild(t,n);var n=e.createElement("h2"),r=e.createTextNode("\n          ");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode("\n        ");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n        ");e.appendChild(t,n);var n=e.createElement("img");e.appendChild(t,n);var n=e.createTextNode("\n        ");e.appendChild(t,n);var n=e.createElement("hr");e.appendChild(t,n);var n=e.createTextNode("\n        ");e.appendChild(t,n);var n=e.createElement("img");e.setAttribute(n,"class","article-image"),e.appendChild(t,n);var n=e.createTextNode("\n        ");e.appendChild(t,n);var n=e.createElement("hr");e.appendChild(t,n);var n=e.createTextNode("\n        ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n        ");e.appendChild(t,n);var n=e.createElement("hr");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=e.childAt(t,[3]),a=e.childAt(t,[7]),l=new Array(4);return l[0]=e.createMorphAt(e.childAt(t,[1]),1,1),l[1]=e.createAttrMorph(r,"src"),l[2]=e.createAttrMorph(a,"src"),l[3]=e.createUnsafeMorphAt(t,11,11,n),l},statements:[["content","post.title",["loc",[null,[6,10],[6,24]]]],["attribute","src",["get","post.logoUrl",["loc",[null,[8,29],[8,41]]]]],["attribute","src",["get","post.imageUrl",["loc",[null,[10,51],[10,64]]]]],["content","post.body",["loc",[null,[12,8],[12,23]]]]],locals:[],templates:[]}}();return{meta:{revision:"Ember@1.13.10",loc:{source:null,start:{line:3,column:4},end:{line:15,column:4}},moduleName:"dummy/templates/posts.hbs"},arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),e.insertBoundary(t,null),r},statements:[["block","if",[["get","post.imageUrl",["loc",[null,[4,12],[4,25]]]]],[],0,null,["loc",[null,[4,6],[14,13]]]]],locals:["post"],templates:[e]}}(),t=function(){return{meta:{revision:"Ember@1.13.10",loc:{source:null,start:{line:16,column:4},end:{line:20,column:4}},moduleName:"dummy/templates/posts.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("        ");e.appendChild(t,n);var n=e.createElement("div"),r=e.createTextNode("\n            This is the bitter end.\n        ");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}();return{meta:{revision:"Ember@1.13.10",loc:{source:null,start:{line:1,column:0},end:{line:27,column:39}},moduleName:"dummy/templates/posts.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("div");e.setAttribute(n,"class","row");var r=e.createTextNode("\n  ");e.appendChild(n,r);var r=e.createElement("div");e.setAttribute(r,"class","col-sm-8");var a=e.createTextNode("\n");e.appendChild(r,a);var a=e.createComment("");e.appendChild(r,a);var a=e.createComment("");e.appendChild(r,a);var a=e.createTextNode("  ");e.appendChild(r,a),e.appendChild(n,r);var r=e.createTextNode("\n\n  ");e.appendChild(n,r);var r=e.createElement("div");e.setAttribute(r,"class","col-sm-3 col-sm-offset-1");var a=e.createTextNode("\n    ");e.appendChild(r,a);var a=e.createComment("");e.appendChild(r,a);var a=e.createTextNode("\n  ");e.appendChild(r,a),e.appendChild(n,r);var r=e.createTextNode("\n");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=e.childAt(t,[0]),a=e.childAt(r,[1]),l=new Array(4);return l[0]=e.createMorphAt(a,1,1),l[1]=e.createMorphAt(a,2,2),l[2]=e.createMorphAt(e.childAt(r,[3]),1,1),l[3]=e.createMorphAt(t,2,2,n),e.insertBoundary(t,null),l},statements:[["block","each",[["get","model",["loc",[null,[3,12],[3,17]]]]],[],0,null,["loc",[null,[3,4],[15,13]]]],["block","unless",[["get","hasMoreContent",["loc",[null,[16,14],[16,28]]]]],[],1,null,["loc",[null,[16,4],[20,15]]]],["inline","infinite-scroll-container",[],["infiniteModelName","post","infiniteQueryParams",["subexpr","@mut",[["get","sidebarParams",["loc",[null,[24,77],[24,90]]]]],[],[]],"group_ids","5609ead447c732372b00004e"],["loc",[null,[24,4],[24,129]]]],["inline","infinite-scroll",[],["triggerDistance",200],["loc",[null,[27,0],[27,39]]]]],locals:[],templates:[e,t]}}())}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var n=t+"/config/environment",r=e["default"].$('meta[name="'+n+'"]').attr("content"),a=JSON.parse(unescape(r));return{"default":a}}catch(l){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests?require("dummy/tests/test-helper"):require("dummy/app")["default"].create({name:"ember-cli-infinite-scroll",version:"0.3.0.29d3dc72"});