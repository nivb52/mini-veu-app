(function(e){function t(t){for(var n,a,c=t[0],o=t[1],u=t[2],h=0,l=[];h<c.length;h++)a=c[h],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&l.push(i[a][0]),i[a]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);p&&p(t);while(l.length)l.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,a=1;a<r.length;a++){var c=r[a];0!==i[c]&&(n=!1)}n&&(s.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},a={app:0},i={app:0},s=[];function c(e){return o.p+"js/"+({}[e]||e)+"."+{"chunk-1838ef70":"94e79dee","chunk-2d22d746":"21c148fc","chunk-7d093cec":"873f0e61"}[e]+".js"}function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(e){var t=[],r={"chunk-1838ef70":1,"chunk-7d093cec":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-1838ef70":"4a468d2b","chunk-2d22d746":"31d6cfe0","chunk-7d093cec":"ef533f0d"}[e]+".css",i=o.p+n,s=document.getElementsByTagName("link"),c=0;c<s.length;c++){var u=s[c],h=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(h===n||h===i))return t()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){u=l[c],h=u.getAttribute("data-href");if(h===n||h===i)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||i,s=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete a[e],p.parentNode.removeChild(p),r(s)},p.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){a[e]=0})));var n=i[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise((function(t,r){n=i[e]=[t,r]}));t.push(n[2]=s);var u,h=document.createElement("script");h.charset="utf-8",h.timeout=120,o.nc&&h.setAttribute("nonce",o.nc),h.src=c(e);var l=new Error;u=function(t){h.onerror=h.onload=null,clearTimeout(p);var r=i[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",l.name="ChunkLoadError",l.type=n,l.request=a,r[1](l)}i[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:h})}),12e4);h.onerror=h.onload=u,document.head.appendChild(h)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/weather-vue-app/",o.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],h=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var p=h;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0b7e":function(e,t,r){"use strict";var n=r("61c8"),a=r.n(n);a.a},"0ecb":function(e,t,r){"use strict";r("96cf");var n=r("3b8d");function a(e){var t=new Date(e).getUTCDay();return["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"][t]}function i(e){return s.apply(this,arguments)}function s(){return s=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r,n=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=n.length>1&&void 0!==n[1]?n[1]:"favorites",sessionStorage.setItem(r,JSON.stringify(t));case 2:case"end":return e.stop()}}),e)}))),s.apply(this,arguments)}function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"favorites";return JSON.parse(sessionStorage.getItem(e))||null}t["a"]={dayNameFromUTC:a,setSession:i,getSession:c}},"1bb4":function(e,t,r){"use strict";var n=r("f00a"),a=r.n(n);a.a},2217:function(e,t,r){e.exports=r.p+"img/my_loc-24px.6f5e5b42.svg"},2944:function(e,t,r){"use strict";var n=r("7f7e"),a=r.n(n);a.a},"30ca":function(e){e.exports=JSON.parse('{"a":"POBTS6eynpG6R13KFWreS4AWW8vTtPrh"}')},"4f55":function(e,t,r){},"544e":function(e,t,r){"use strict";var n=r("b2aa"),a=r.n(n);a.a},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("AppNav"),r("transition",{attrs:{name:"router-anim","enter-active-class":"animated"}},[r("router-view")],1)],1)},i=[],s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"nav"},[e._m(0),r("ul",{staticClass:"flex navigation"},[r("li",[r("router-link",{attrs:{to:"/"}},[e._v("Home")])],1),r("li",[r("router-link",{attrs:{to:"/favorites"}},[e._v("favorites")])],1)])])},c=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"logo"},[r("img",{staticClass:"logo-img",attrs:{src:"img/logo.png",alt:"logo",srcset:""}})])}],o={},u=o,h=(r("ec76"),r("2877")),l=Object(h["a"])(u,s,c,!1,null,null,null),p=l.exports,f={name:"App",components:{AppNav:p}},d=f,m=(r("5c0b"),Object(h["a"])(d,a,i,!1,null,null,null)),y=m.exports,v=r("8c4f"),g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main-container"},[n("div",{staticClass:"bg-image",style:{backgroundImage:"url("+e.getBgImg+")"}}),n("div",{staticClass:"flex centered"},[n("Autocomplete",{attrs:{items:e.autocompleteItems},on:{onSearch:e.onSearch,onPickCity:e.onPickCity}})],1),n("div",{staticClass:"flex centered preference"},[n("button",{on:{click:e.getMyLoc}},[n("img",{attrs:{src:r("2217"),alt:"get weather to your location"}})]),e.isFahrenheit?n("button",{on:{click:function(t){return e.changeIsFahrenheit(!1)}}},[e._v("\n   °F\n  ")]):n("button",{on:{click:function(t){return e.changeIsFahrenheit(!0)}}},[e._v("\n   °C\n  ")])]),n("div",{staticClass:"weather-container"},[n("CurrentWeather",{style:{backgroundImage:"url("+e.getBgImg+")"},attrs:{city:e.city,isFahrenheit:e.isFahrenheit,weatherData:e.weatherData}}),n("day-forecast-list",{attrs:{city:e.city,forecastData:e.forecastData,isFahrenheit:e.isFahrenheit}})],1)])},w=[],k=r("7618"),b=(r("96cf"),r("3b8d")),C=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"other-days flex centered"},[e.forecastData?e._l(e.dailyForecasts,(function(t){return r("DayForecast",{key:t.Date,attrs:{forecast:t,isFahrenheit:e.isFahrenheit}})})):r("div",{staticClass:"flex centered is-black"},[e._v("Loading ...")])],2)},x=[],_=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"forecastday"},[r("img",{staticClass:"weather-icon",attrs:{alt:"weather-icon",src:e.iconImg}}),r("div",{staticClass:"day"},[e._v(e._s(e.dayName))]),r("div",{staticClass:"temp-container"},[r("span",{staticClass:"temp"},[e._v(e._s(e._f("fixed")(e.maxTemp))+"-"+e._s(e._f("fixed")(e.minTemp)))]),r("span",{staticClass:"degree"},[e._v("  "+e._s(e.getTempUnit))])])])},F=[],O=(r("f576"),r("0ecb")),D=r("f190"),S={name:"DayForecast",props:{forecast:{type:Object,required:!0,default:function(){}},isFahrenheit:{type:Boolean,required:!1,default:JSON.parse(D["b"])}},computed:{dayName:function(){var e=this.forecast.Date;return O["a"].dayNameFromUTC(e)},maxTemp:function(){var e=this.forecast.Temperature.Maximum.Value;return this.isFahrenheit?e:5*(e-32)/9},minTemp:function(){var e=this.forecast.Temperature.Minimum.Value;return this.isFahrenheit?e:5*(e-32)/9},getTempUnit:function(){return this.isFahrenheit?" °F":" °C"},iconImg:function(){var e=""+this.forecast.Day.Icon,t=e.padStart(2,"0");return"https://developer.accuweather.com/sites/default/files/".concat(t,"-s.png")}},filters:{fixed:function(e){return e?e.toFixed(0):""}}},T=S,R=(r("dbe8"),Object(h["a"])(T,_,F,!1,null,"2fac3404",null)),j=R.exports,L={name:"DayForecastList",components:{DayForecast:j},props:{forecastData:{type:Object,required:!0,default:function(){}},city:{type:Object,required:!1},isFahrenheit:{type:Boolean,required:!1,default:JSON.parse(D["b"])}},computed:{dailyForecasts:function(){return this.forecastData["DailyForecasts"]}},watch:{city:function(e){return e}}},N=L,$=(r("0b7e"),Object(h["a"])(N,C,x,!1,null,"5e62d154",null)),W=$.exports,A=r("76d0"),P=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"autocomplete search__container"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.term,expression:"term"}],staticClass:"search__input",attrs:{type:"text"},domProps:{value:e.term},on:{keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:e.onArrowDown(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"right",39,t.key,["Right","ArrowRight"])?null:"button"in t&&2!==t.button?null:e.onArrowDown(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:e.onArrowUp(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"left",37,t.key,["Left","ArrowLeft"])?null:"button"in t&&0!==t.button?null:e.onArrowUp(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onEnter(t)}],input:function(t){t.target.composing||(e.term=t.target.value)}}}),r("ul",{directives:[{name:"show",rawName:"v-show",value:e.isShowingResults,expression:"isShowingResults"}],staticClass:"autocomplete-results",attrs:{id:"autocomplete-results"}},[e.isLoading?r("li",{staticClass:"loading"},[e._v("Loading results...")]):e._l(e.results,(function(t,n){return r("li",{key:n,staticClass:"autocomplete-result",class:{"is-active":n===e.arrowCounter},on:{click:function(r){return e.clickedResult(t)}}},[e._v(e._s(t.LocalizedName))])}))],2)])},E=[],I=(r("a481"),r("386d"),r("f7fe")),K=r.n(I),U={name:"Autocomplete",props:{items:{type:Array,required:!1,default:function(){return[]}},isFromLocal:{type:Boolean,required:!1,default:!1}},data:function(){return{isLoading:!1,results:[],term:"",isShowingResults:!1,arrowCounter:0}},watch:{items:function(e,t){this.results=e,this.isLoading=!1},term:function(e){if(e){var t=/[^A-Za-z ]/gi,r=e.search(t);-1!==r?(this.createToast("english only","is-info"),this.term=e.replace(t,"")):this.onChangeDebounce()}}},methods:{onChange:function(){this.$emit("onSearch",this.term),this.isLoading=!0,this.isShowingResults=!0,this.results=this.items,this.isLoading=!1},onPickedResult:function(e){this.$emit("onPickCity",e),this.isShowingResults=!1},onEnter:function(){var e=this.results[this.arrowCounter];this.arrowCounter=-1,this.onPickedResult(e)},clickedResult:function(e){e&&this.onPickedResult(e)},onArrowDown:function(){this.arrowCounter<this.results.length&&(this.arrowCounter=this.arrowCounter+1)},onArrowUp:function(){this.arrowCounter>0&&(this.arrowCounter=this.arrowCounter-1)},handleClickOutside:function(e){this.$el.contains(e.target)||(this.isShowingResults=!1,this.arrowCounter=-1)}},mounted:function(){this.onChangeDebounce=K()(this.onChange.bind(this),350),document.addEventListener("click",this.handleClickOutside)},destroyed:function(){document.removeEventListener("click",this.handleClickOutside)}},q=U,z=(r("2944"),Object(h["a"])(q,P,E,!1,null,null,null)),B=z.exports,J=r("bc3a"),M=r.n(J),H={get:function(e,t,r){return V(e,t,"GET",null,r)}};function V(e,t){return G.apply(this,arguments)}function G(){return G=Object(b["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,i,s,c=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=c.length>2&&void 0!==c[2]?c[2]:"get",a=c.length>3&&void 0!==c[3]?c[3]:null,i=c.length>4&&void 0!==c[4]?c[4]:null,e.prev=3,e.next=6,M()({config:{headers:{"Accept-Encoding":"gzip"}},url:"".concat(t).concat(r),method:n,data:a,params:i});case 6:return s=e.sent,e.abrupt("return",s.data);case 10:throw e.prev=10,e.t0=e["catch"](3),e.t0;case 13:case"end":return e.stop()}}),e,null,[[3,10]])}))),G.apply(this,arguments)}var Z=r("30ca"),Q={currentConditions:re,forecasts5Days:ae,autocomplete:se,getLanLonWeather:oe},X="https://dataservice.accuweather.com/",Y="v1",ee=Z["a"],te=D["a"].Key;function re(){return ne.apply(this,arguments)}function ne(){return ne=Object(b["a"])(regeneratorRuntime.mark((function e(){var t,r,n,a=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=a.length>0&&void 0!==a[0]?a[0]:te,le(t)){e.next=3;break}throw error("invalide key");case 3:return e.prev=3,r="currentconditions/".concat(Y,"/").concat(t,"?apikey=").concat(ee),e.next=7,H.get(X,r);case 7:return n=e.sent,e.abrupt("return",n);case 11:e.prev=11,e.t0=e["catch"](3),he(e.t0);case 14:case"end":return e.stop()}}),e,null,[[3,11]])}))),ne.apply(this,arguments)}function ae(){return ie.apply(this,arguments)}function ie(){return ie=Object(b["a"])(regeneratorRuntime.mark((function e(){var t,r,n,a=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=a.length>0&&void 0!==a[0]?a[0]:te,le(t)){e.next=3;break}throw error("invalide key");case 3:return e.prev=3,r="forecasts/".concat(Y,"/daily/5day/").concat(t,"?apikey=").concat(ee),e.next=7,H.get(X,r);case 7:return n=e.sent,e.abrupt("return",n);case 11:e.prev=11,e.t0=e["catch"](3),he(e.t0);case 14:case"end":return e.stop()}}),e,null,[[3,11]])}))),ie.apply(this,arguments)}function se(e){return ce.apply(this,arguments)}function ce(){return ce=Object(b["a"])(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,r="locations/".concat(Y,"/cities/autocomplete?apikey=").concat(ee,"&q=").concat(t),e.next=6,H.get(X,r);case 6:return n=e.sent,e.abrupt("return",n);case 10:e.prev=10,e.t0=e["catch"](2),he(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])}))),ce.apply(this,arguments)}function oe(e,t){return ue.apply(this,arguments)}function ue(){return ue=Object(b["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t&&r){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,n="locations/".concat(Y,"/cities/geoposition/search"),a={apikey:ee,q:t+","+r},e.next=7,H.get(X,n,a);case 7:return i=e.sent,e.abrupt("return",i);case 11:e.prev=11,e.t0=e["catch"](2),he(e.t0);case 14:case"end":return e.stop()}}),e,null,[[2,11]])}))),ue.apply(this,arguments)}function he(e){throw e}function le(e){if("number"!==typeof e||"string"!==typeof e)return!0}r("3022");var pe={name:"home",components:{DayForecastList:W,CurrentWeather:A["a"],Autocomplete:B},data:function(){return{autocompleteItems:[],isFahrenheit:this.$store.getters.tempUnitToShow}},created:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=this.$store.getters.currentCity,Object(k["a"])(this.$route.params.city)===String&&"undefined"!==this.$route.params.city&&(t.LocalizedName=this.$route.params.city,t.Key=this.$route.params.id),e.prev=2,e.next=5,this.$store.dispatch({type:"loadForecast",pickedCity:t});case 5:return e.next=7,this.$store.dispatch({type:"loadWeather",pickedCity:t});case 7:e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](2),this.createToast();case 12:case"end":return e.stop()}}),e,this,[[2,9]])})));function t(){return e.apply(this,arguments)}return t}(),computed:{forecastData:function(){return this.$store.getters.currentForecastToShow},weatherData:function(){return this.$store.getters.currentWeatherToShow},getBgImg:function(){return"bgimg/sunny.jpg"},city:function(){if(Object(k["a"])(this.$route.params.city)===String){var e={LocalizedName:this.$route.params.city,Key:this.$route.params.id};return e}return this.$store.getters.currentCity}},methods:{getMyLoc:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(navigator.geolocation)try{navigator.geolocation.getCurrentPosition((function(e){Q.getLanLonWeather(e.coords.latitude,e.coords.longitude).then(function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(r){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={},e.next=3,r["LocalizedName"];case 3:return n["LocalizedName"]=e.sent,e.next=6,r["Key"];case 6:return n["Key"]=e.sent,e.next=9,r.Key;case 9:n.Key=e.sent,t.onPickCity(n);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}))}catch(r){this.createToast()}else this.createToast("Geolocation is not supported by this browser.");case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),onSearch:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t&&!this.cityKey){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,Q.autocomplete(t);case 4:r=e.sent,this.autocompleteItems=r.map((function(e){var t={};return t["LocalizedName"]=e["LocalizedName"],t["Key"]=e["Key"],t}));case 6:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),onPickCity:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return r=t.LocalizedName,n=t.Key,e.prev=3,e.next=6,this.$store.dispatch({type:"changeCurrCity",pickedCity:t});case 6:this.$store.dispatch({type:"loadForecast",pickedCity:t}),this.$store.dispatch({type:"loadWeather",pickedCity:t}),this.$router.push("/city/key=".concat(n,"&city=").concat(r)),e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](3),this.createToast();case 14:case"end":return e.stop()}}),e,this,[[3,11]])})));function t(t){return e.apply(this,arguments)}return t}(),changeIsFahrenheit:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.isFahrenheit=!this.isFahrenheit,this.$store.dispatch({type:"changeTempUnit",isFahrenheit:t});case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}},fe=pe,de=(r("1bb4"),Object(h["a"])(fe,g,w,!1,null,"68f26de1",null)),me=de.exports;n["a"].use(v["a"]);var ye=new v["a"]({routes:[{path:"/",name:"home",component:me},{path:"/favorites",name:"favorites",component:function(){return r.e("chunk-7d093cec").then(r.bind(null,"48d5"))}},{path:"/about",name:"about",component:function(){return r.e("chunk-2d22d746").then(r.bind(null,"f820"))}},{path:"/city/key=:id?&city=:city?",name:"city",component:me},{path:"*",name:"page-not-found",component:function(){return r.e("chunk-1838ef70").then(r.bind(null,"12e3"))}}]}),ve=(r("20d6"),r("2f62"));n["a"].use(ve["a"]);var ge=new ve["a"].Store({state:{currentWeather:[],forecastWeather:{},favorites:O["a"].getSession()||[],currCity:D["a"],isFahrenheit:JSON.parse(D["b"])},mutations:{setTempUnit:function(e,t){e.isFahrenheit=t.isFahrenheit},setCurrCity:function(e,t){e.currCity=t.pickedCity},setCurrWeather:function(e,t){e.currentWeather=t.currentWeather},setForcastWeather:function(e,t){e.forecastWeather=t.forecastWeather},setFavorites:function(e){var t=e.favorites;t=O["a"].setSession(t)},addFavorites:function(e,t){var r=e.favorites,n=t.clickedCity;r.push(n)},removeFavorites:function(e,t){var r=e.favorites,n=t.clickedCity,a=n["Key"],i=r.findIndex((function(e){return e.Key===a}));r.splice(i,1)}},actions:{loadWeather:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,a=r.pickedCity,n({type:"setCurrCity",pickedCity:a}),e.prev=3,i=a?a["Key"]:"",e.next=7,Q.currentConditions(i);case 7:s=e.sent,n({type:"setCurrWeather",currentWeather:s}),e.next=14;break;case 11:throw e.prev=11,e.t0=e["catch"](3),e.t0;case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));function t(t,r){return e.apply(this,arguments)}return t}(),loadForecast:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,a=r.pickedCity,i=a?a["Key"]:"",e.prev=3,e.next=6,Q.forecasts5Days(i);case 6:s=e.sent,n({type:"setForcastWeather",forecastWeather:s}),e.next=13;break;case 10:throw e.prev=10,e.t0=e["catch"](3),e.t0;case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));function t(t,r){return e.apply(this,arguments)}return t}(),changeTempUnit:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(t,r){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t.commit,a=r.isFahrenheit,n({type:"setTempUnit",isFahrenheit:a});case 3:case"end":return e.stop()}}),e)})));function t(t,r){return e.apply(this,arguments)}return t}(),changeCurrCity:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(t,r){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t.commit,a=r.pickedCity,n({type:"setCurrCity",pickedCity:a});case 3:case"end":return e.stop()}}),e)})));function t(t,r){return e.apply(this,arguments)}return t}(),likeCity:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(t,r){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t.commit,a=r.clickedCity,n({type:"addFavorites",clickedCity:a});case 3:case"end":return e.stop()}}),e)})));function t(t,r){return e.apply(this,arguments)}return t}(),unlikeCity:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(t,r){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t.commit,a=r.clickedCity,n({type:"removeFavorites",clickedCity:a});case 3:case"end":return e.stop()}}),e)})));function t(t,r){return e.apply(this,arguments)}return t}(),loadFavorites:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(t,r){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t.commit,a=r.favorites,n({type:"setFavorites"},a);case 3:case"end":return e.stop()}}),e)})));function t(t,r){return e.apply(this,arguments)}return t}()},getters:{tempUnitToShow:function(e){var t=e.isFahrenheit;return t},currentCity:function(e){var t=e.currCity;return t},currentWeatherToShow:function(e){var t=e.currentWeather;return t},currentForecastToShow:function(e){var t=e.forecastWeather;return t},myFavorites:function(e){var t=e.favorites;return t}}}),we=r("9483");Object(we["a"])("".concat("/weather-vue-app/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var ke=r("aced");r("5abe");n["a"].config.productionTip=!1,n["a"].use(ke["a"]),n["a"].mixin({methods:{createToast:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Something went wrong",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"is-warning";ke["a"].open({position:"is-top",type:t,message:e})}}}),new n["a"]({router:ye,store:ge,render:function(e){return e(y)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";var n=r("e332"),a=r.n(n);a.a},"61c8":function(e,t,r){},"76d0":function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"weather-box is-white"},[n("div",{staticClass:"like"},[!e.isShowLike&&e.city?n("img",{staticClass:"like-it-symbole",attrs:{src:r("aa18"),alt:"you don't like this city yet"},on:{click:e.likeClicked}}):e._e(),e.isShowLike&&e.city?n("img",{staticClass:"like-it-symbole",attrs:{src:r("d1b4"),alt:"favorite city"},on:{click:e.likeClicked}}):e._e()]),n("div",{staticClass:"city-box"},[n("h1",{staticClass:"is-white is-black-bcg-transperent"},[e._v(e._s(e.cityName))])]),e.weatherData[0]?n("div",[n("div",{staticClass:"row"},[n("div",{staticClass:"weather"},[n("img",{staticClass:"weather-icon",attrs:{alt:"weather-icon",src:e.getWeatherIcon}})]),e.isFahrenheit?n("span",{staticClass:"degree"},[e._v(e._s(e.fTemperature))]):n("span",{staticClass:"degree"},[e._v(e._s(e.cTemperature))])]),n("div",{staticClass:"row"},[n("div",{staticClass:"text-temp"},[e._v(e._s(e.weatherText))])]),n("div",{staticClass:"row"},[n("span",{staticClass:"rain"},[e._v(e._s(e.hasPrecipitation))])]),n("span",{staticClass:"day-time"},[e._v(e._s(e.isDayTime))])]):n("div",{staticClass:"flex centered is-white"},[e._v("Loading ...")])])},a=[],i=(r("f576"),r("7618")),s=(r("c5f6"),r("f190")),c=r("0ecb"),o={name:"currentWeather",props:{weatherData:{type:Array,required:!0,default:function(){return[]}},city:{type:[Object,String],required:!0},isFahrenheit:{type:Boolean,required:!1,default:JSON.parse(s["b"])},cityKey:{type:[String,Number],required:!1}},mounted:function(){this.checkLike()},data:function(){return{like:!1}},computed:{isShowLike:function(){return this.checkLike(),this.like},cityName:function(){return this.city?"object"===Object(i["a"])(this.city)?this.city["LocalizedName"]:this.city:""},cTemperature:function(){return this.weatherData[0]&&this.weatherData[0].Temperature?this.weatherData[0].Temperature.Metric.Value+" °C":""},fTemperature:function(){return this.weatherData[0]&&this.weatherData[0].Temperature?this.weatherData[0].Temperature.Imperial.Value+" °F":""},weatherText:function(){return this.weatherData[0]?this.weatherData[0].WeatherText:""},isDayTime:function(){return this.weatherData[0]&&this.weatherData[0].IsDayTime?this.weatherData[0].IsDayTime?"day time":"night time":""},hasPrecipitation:function(){return this.weatherData[0]&&this.weatherData[0].HasPrecipitation?this.weatherData[0].HasPrecipitation?"precipitation expected":"no precipitation expected":""},getWeatherIcon:function(){if(!this.weatherData[0]||!this.weatherData[0].WeatherIcon)return"img/1px.jpg";var e=""+this.weatherData[0].WeatherIcon,t=e.padStart(2,"0");return"https://developer.accuweather.com/sites/default/files/".concat(t,"-s.png")}},methods:{updateWeather:function(){var e=this.cityKey?{Key:cityKey}:this.city;this.$store.dispatch({type:"loadWeather",pickedCity:e})},checkLike:function(){var e=this.cityKey||this.city["Key"],t=this.$store.getters.myFavorites,r=t.filter((function(t){return t.Key===e}));1===r.length?this.like=!0:0===r.length&&(this.like=!1)},likeClicked:function(){this.checkLike();var e=this.city;this.like=!this.like,e.weatherData=this.weatherData,this.like?this.$store.dispatch({type:"likeCity",clickedCity:e}):this.$store.dispatch({type:"unlikeCity",clickedCity:e}),c["a"].setSession(this.$store.getters.myFavorites)}},watch:{city:function(e){return e},weatherData:function(e){return e}}},u=o,h=(r("544e"),r("2877")),l=Object(h["a"])(u,n,a,!1,null,"8ff1841a",null);t["a"]=l.exports},"7f7e":function(e,t,r){},aa18:function(e,t,r){e.exports=r.p+"img/heart-multiple-outline.b1d8966b.svg"},b2aa:function(e,t,r){},d1b4:function(e,t,r){e.exports=r.p+"img/heart-multiple.f8019d77.svg"},dbe8:function(e,t,r){"use strict";var n=r("4f55"),a=r.n(n);a.a},e332:function(e,t,r){},e3f3:function(e,t,r){},ec76:function(e,t,r){"use strict";var n=r("e3f3"),a=r.n(n);a.a},f00a:function(e,t,r){},f190:function(e){e.exports=JSON.parse('{"a":{"LocalizedName":"Tel - Aviv","Key":"215854"},"b":"true"}')}});
//# sourceMappingURL=app.36fecc02.js.map