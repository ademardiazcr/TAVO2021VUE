(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e3f40d56"],{"228e":function(t,e,n){"use strict";n.d(e,"a",(function(){return C}));var r=n("2f79"),i=n("7b1e"),o=n("d82f");function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t){return h(t)||f(t)||d(t)||l()}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(t,e){if(t){if("string"===typeof t)return b(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(t,e):void 0}}function f(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function h(t){if(Array.isArray(t))return b(t)}function b(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var p,v=function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e;return Object(i["a"])(e)?e.reduce((function(e,n){return[].concat(s(e),[t(n,n)])}),[]):Object(i["e"])(e)?Object(o["e"])(e).reduce((function(n,r){return u(u({},n),{},c({},r,t(e[r],e[r])))}),{}):n},g=v,m=n("992e"),y=n("6c06"),O=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;if(e=Object(i["a"])(e)?e.join("."):e,!e||!Object(i["d"])(t))return n;if(e in t)return t[e];e=String(e).replace(m["a"],".$1");var r=e.split(".").filter(y["a"]);return 0===r.length?n:r.every((function(e){return Object(i["d"])(t)&&e in t&&!Object(i["h"])(t=t[e])}))?t:Object(i["c"])(t)?null:n},S=function(t){var e=Object(o["b"])(null);return function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];var o=JSON.stringify(r);return e[o]=e[o]||t.apply(null,r)}},j=S,P=n("c637");function w(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var _=Object(o["c"])((p={breakpoints:["xs","sm","md","lg","xl"],formControls:{size:void 0}},w(p,P["a"],{dismissLabel:"Close",variant:"info"}),w(p,P["b"],{variant:"secondary",badgeVariant:"primary"}),w(p,P["c"],{variant:"secondary"}),w(p,P["d"],{size:void 0,variant:"secondary"}),w(p,P["e"],{content:"&times;",textVariant:void 0,ariaLabel:"Close"}),w(p,P["f"],{selectedVariant:"primary",todayVariant:void 0,navButtonVariant:"secondary",labelPrevDecade:"Previous decade",labelPrevYear:"Previous year",labelPrevMonth:"Previous month",labelCurrentMonth:"Current month",labelNextMonth:"Next month",labelNextYear:"Next year",labelNextDecade:"Next decade",labelToday:"Today",labelSelected:"Selected date",labelNoDateSelected:"No date selected",labelCalendar:"Calendar",labelNav:"Calendar navigation",labelHelp:"Use cursor keys to navigate calendar dates"}),w(p,P["g"],{subTitleTextVariant:"muted"}),w(p,P["h"],{labelPrev:"Previous Slide",labelNext:"Next Slide",labelGotoSlide:"Goto Slide",labelIndicators:"Select a slide to display"}),w(p,P["j"],{toggleText:"Toggle Dropdown",size:void 0,variant:"secondary",splitVariant:void 0}),w(p,P["k"],{selectedVariant:void 0,todayVariant:void 0,navButtonVariant:void 0,labelPrevDecade:void 0,labelPrevYear:void 0,labelPrevMonth:void 0,labelCurrentMonth:void 0,labelNextMonth:void 0,labelNextYear:void 0,labelNextDecade:void 0,labelToday:void 0,labelSelected:void 0,labelNoDateSelected:void 0,labelCalendar:void 0,labelNav:void 0,labelHelp:void 0,labelTodayButton:"Select today",labelResetButton:"Reset",labelCloseButton:"Close"}),w(p,P["l"],{browseText:"Browse",placeholder:"No file chosen",dropPlaceholder:"Drop files here",noDropPlaceholder:"Not allowed"}),w(p,P["m"],{variant:null,color:null}),w(p,P["o"],{removeLabel:"Remove tag",variant:"secondary"}),w(p,P["p"],{addButtonText:"Add",addButtonVariant:"outline-secondary",duplicateTagText:"Duplicate tag(s)",invalidTagText:"Invalid tag(s)",limitTagsText:"Tag limit reached",placeholder:"Add tag...",tagRemoveLabel:"Remove tag",tagRemovedLabel:"Tag removed",tagVariant:"secondary"}),w(p,P["q"],{textVariant:"muted"}),w(p,P["r"],{labelNoTimeSelected:void 0,labelSelected:void 0,labelHours:void 0,labelMinutes:void 0,labelSeconds:void 0,labelAmpm:void 0,labelAm:void 0,labelPm:void 0,labelDecrement:void 0,labelIncrement:void 0,labelNowButton:"Select now",labelResetButton:"Reset",labelCloseButton:"Close"}),w(p,P["n"],{labelDecrement:"Decrement",labelIncrement:"Increment"}),w(p,P["s"],{blankColor:"transparent"}),w(p,P["t"],{blankColor:"transparent"}),w(p,P["u"],{size:void 0}),w(p,P["v"],{bgVariant:void 0,borderVariant:void 0,textVariant:void 0}),w(p,P["w"],{routerComponentName:void 0}),w(p,P["x"],{variant:void 0}),w(p,P["y"],{titleTag:"h5",size:"md",headerBgVariant:void 0,headerBorderVariant:void 0,headerTextVariant:void 0,headerCloseVariant:void 0,bodyBgVariant:void 0,bodyTextVariant:void 0,footerBgVariant:void 0,footerBorderVariant:void 0,footerTextVariant:void 0,cancelTitle:"Cancel",cancelVariant:"secondary",okTitle:"OK",okVariant:"primary",headerCloseContent:"&times;",headerCloseLabel:"Close"}),w(p,P["z"],{variant:null}),w(p,P["A"],{label:"Toggle navigation"}),w(p,P["B"],{size:void 0}),w(p,P["C"],{size:void 0}),w(p,P["D"],{boundary:"scrollParent",boundaryPadding:5,customClass:void 0,delay:50,variant:void 0}),w(p,P["E"],{variant:void 0}),w(p,P["F"],{variant:void 0}),w(p,P["J"],{variant:void 0}),w(p,P["H"],{animation:"wave"}),w(p,P["I"],{animation:"wave"}),w(p,P["G"],{bgVariant:"light",textVariant:"dark",shadow:!1,width:void 0,tag:"div",backdropVariant:"dark"}),w(p,P["K"],{selectedVariant:"active",headVariant:void 0,footVariant:void 0}),w(p,P["L"],{labelNoTimeSelected:"No time selected",labelSelected:"Selected time",labelHours:"Hours",labelMinutes:"Minutes",labelSeconds:"Seconds",labelAmpm:"AM/PM",labelAm:"AM",labelPm:"PM",labelIncrement:void 0,labelDecrement:void 0}),w(p,P["M"],{toaster:"b-toaster-top-right",autoHideDelay:5e3,variant:void 0,toastClass:void 0,headerClass:void 0,bodyClass:void 0}),w(p,P["N"],{ariaLive:void 0,ariaAtomic:void 0,role:void 0}),w(p,P["O"],{boundary:"scrollParent",boundaryPadding:5,customClass:void 0,delay:50,variant:void 0}),p)),T="$bvConfig",B=r["a"].prototype,x=function(t){return B[T]?B[T].getConfigValue(t):g(O(_,t))},C=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return e?x("".concat(t,".").concat(e)):x(t)||{}},A=function(){return x("breakpoints")},E=j((function(){return A()})),k=function(){return g(E())};j((function(){var t=k();return t[0]="",t}))},2326:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return i}));var r=function(){return Array.from.apply(Array,arguments)},i=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return Array.prototype.concat.apply([],e)}},"2f79":function(t,e,n){"use strict";var r=n("2b0e");n("b42e");e["a"]=r["default"]},"3a58":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return i}));var r=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:NaN,n=parseInt(t,10);return isNaN(n)?e:n},i=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:NaN,n=parseFloat(t);return isNaN(n)?e:n}},"6b77":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return u})),n.d(e,"c",(function(){return c}));var r=n("938d"),i=n("7b1e"),o=function(t){return r["d"]?Object(i["d"])(t)?t:{capture:!!t||!1}:!!(Object(i["d"])(t)?t.capture:t)},a=function(t,e,n,r){t&&t.addEventListener&&t.addEventListener(e,n,o(r))},u=function(t,e,n,r){t&&t.removeEventListener&&t.removeEventListener(e,n,o(r))},c=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.preventDefault,r=void 0===n||n,i=e.propagation,o=void 0===i||i,a=e.immediatePropagation,u=void 0!==a&&a;r&&t.preventDefault(),o&&t.stopPropagation(),u&&t.stopImmediatePropagation()}},"6c06":function(t,e,n){"use strict";var r=function(t){return t};e["a"]=r},"7b1e":function(t,e,n){"use strict";n.d(e,"g",(function(){return O})),n.d(e,"c",(function(){return S})),n.d(e,"h",(function(){return j})),n.d(e,"b",(function(){return P})),n.d(e,"f",(function(){return w})),n.d(e,"a",(function(){return _})),n.d(e,"d",(function(){return T})),n.d(e,"e",(function(){return B}));var r=n("938d");function i(t){return i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&b(t,e)}function u(t){var e=f();return function(){var n,r=p(t);if(e){var i=p(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return c(this,n)}}function c(t,e){return!e||"object"!==i(e)&&"function"!==typeof e?s(t):e}function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function l(t){var e="function"===typeof Map?new Map:void 0;return l=function(t){if(null===t||!h(t))return t;if("function"!==typeof t)throw new TypeError("Super expression must either be null or a function");if("undefined"!==typeof e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return d(t,arguments,p(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),b(n,t)},l(t)}function d(t,e,n){return d=f()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var i=Function.bind.apply(t,r),o=new i;return n&&b(o,n.prototype),o},d.apply(null,arguments)}function f(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function h(t){return-1!==Function.toString.call(t).indexOf("[native code]")}function b(t,e){return b=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},b(t,e)}function p(t){return p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},p(t)}var v=r["h"]?window:{},g=r["h"]?v.Element:function(t){a(n,t);var e=u(n);function n(){return o(this,n),e.apply(this,arguments)}return n}(l(Object));r["h"]&&v.HTMLElement,r["h"]&&v.SVGElement,r["h"]&&v.File;function m(t){return m="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}var y=function(t){return m(t)},O=function(t){return void 0===t},S=function(t){return null===t},j=function(t){return O(t)||S(t)},P=function(t){return"function"===y(t)},w=function(t){return"string"===y(t)},_=function(t){return Array.isArray(t)},T=function(t){return null!==t&&"object"===m(t)},B=function(t){return"[object Object]"===Object.prototype.toString.call(t)}},"8c18":function(t,e,n){"use strict";var r="default",i=n("6c06"),o=n("2326"),a=n("7b1e"),u=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return t=Object(o["a"])(t).filter(i["a"]),t.some((function(t){return e[t]||n[t]}))},c=function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};t=Object(o["a"])(t).filter(i["a"]);for(var c=0;c<t.length&&!e;c++){var s=t[c];e=r[s]||u[s]}return Object(a["b"])(e)?e(n):e};e["a"]={methods:{hasNormalizedSlot:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r;return u(t,this.$scopedSlots,this.$slots)},normalizeSlot:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=c(t,e,this.$scopedSlots,this.$slots);return n?Object(o["a"])(n):n}}}},"90ef":function(t,e,n){"use strict";e["a"]={props:{id:{type:String}},data:function(){return{localId_:null}},computed:{safeId:function(){var t=this.id||this.localId_,e=function(e){return t?(e=String(e||"").replace(/\s+/g,"_"),e?t+"_"+e:t):null};return e}},mounted:function(){var t=this;this.$nextTick((function(){t.localId_="__BVID__".concat(t._uid)}))}}},"938d":function(t,e,n){"use strict";(function(t){n.d(e,"h",(function(){return r})),n.d(e,"b",(function(){return i})),n.d(e,"f",(function(){return a})),n.d(e,"c",(function(){return u})),n.d(e,"i",(function(){return c})),n.d(e,"d",(function(){return l})),n.d(e,"g",(function(){return d})),n.d(e,"e",(function(){return f})),n.d(e,"a",(function(){return b}));var r="undefined"!==typeof window,i="undefined"!==typeof document,o="undefined"!==typeof navigator,a="undefined"!==typeof Promise,u="undefined"!==typeof MutationObserver||"undefined"!==typeof WebKitMutationObserver||"undefined"!==typeof MozMutationObserver,c=r&&i&&o,s=c?window.navigator.userAgent.toLowerCase():"",l=(s.indexOf("jsdom"),/msie|trident/.test(s),function(){var t=!1;if(c)try{var e={get passive(){t=!0}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(n){t=!1}return t}()),d=c&&("ontouchstart"in document.documentElement||navigator.maxTouchPoints>0),f=c&&Boolean(window.PointerEvent||window.MSPointerEvent),h=(c&&"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&window.IntersectionObserverEntry.prototype,function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r="undefined"!==typeof t&&t?Object({NODE_ENV:"production",VUE_APP_API_CHATURL:"http://localhost:5000/apiChat",VUE_APP_API_URL:"http://45.32.133.223:5000/api",VUE_APP_CMS:"http://201.194.194.84:8998/DsoaService2/dsoa/CMSrequest",VUE_APP_DSOA:"http://201.194.194.84:8998/DsoaService2/dsoa/request",VUE_APP_ENCRIPTA:"http://201.194.194.84:8998/DsoaService2/dsoa/encryptCenter",VUE_APP_FECHAHORA_FORMAT:"DD-MM-YYYY:HH24:MI:SS",VUE_APP_FECHA_FORMAT:"DD-MM-YYYY",VUE_APP_RAIZURL:"http://tavocr.com",VUE_APP_RAIZURLCMS:"https://grupodivisoft.com/",VUE_APP_SOCKET_URL:"http://45.32.133.223:5000/",VUE_APP_URLPHP:"http://tavocr.com/dsoaPHP/dsoaPHP/dsoa/",VUE_APP_URLPHPCMS:"https://grupodivisoft.com/dsoaPHP/dsoaPHP/dsoa/",BASE_URL:"/"})||!1:{};return e?r[e]||n:r}),b=function(){return h("BOOTSTRAP_VUE_NO_WARN")||"production"===h("NODE_ENV")}}).call(this,n("f28c"))},"992e":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return a})),n.d(e,"e",(function(){return u})),n.d(e,"f",(function(){return c})),n.d(e,"g",(function(){return s})),n.d(e,"h",(function(){return l})),n.d(e,"i",(function(){return d})),n.d(e,"j",(function(){return f}));var r=/\[(\d+)]/g,i=/(<([^>]+)>)/gi,o=/\B([A-Z])/g,a=/([a-z])([A-Z])/g,u=/[-/\\^$*+?.()|[\]{}]/g,c=/(\s|^)(\w)/g,s=/^\s+/,l=/\s+$/,d=/_/g,f=/-(\w)/g},b42e:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},i={kebab:/-(\w)/g,styleProp:/:(.*)/,styleList:/;(?![^(]*\))/g};function o(t,e){return e?e.toUpperCase():""}function a(t){for(var e,n={},r=0,a=t.split(i.styleList);r<a.length;r++){var u=a[r].split(i.styleProp),c=u[0],s=u[1];(c=c.trim())&&("string"==typeof s&&(s=s.trim()),n[(e=c,e.replace(i.kebab,o))]=s)}return n}function u(){for(var t,e,n={},i=arguments.length;i--;)for(var o=0,u=Object.keys(arguments[i]);o<u.length;o++)switch(t=u[o]){case"class":case"style":case"directives":if(Array.isArray(n[t])||(n[t]=[]),"style"===t){var c=void 0;c=Array.isArray(arguments[i].style)?arguments[i].style:[arguments[i].style];for(var s=0;s<c.length;s++){var l=c[s];"string"==typeof l&&(c[s]=a(l))}arguments[i].style=c}n[t]=n[t].concat(arguments[i][t]);break;case"staticClass":if(!arguments[i][t])break;void 0===n[t]&&(n[t]=""),n[t]&&(n[t]+=" "),n[t]+=arguments[i][t].trim();break;case"on":case"nativeOn":n[t]||(n[t]={});for(var d=0,f=Object.keys(arguments[i][t]||{});d<f.length;d++)e=f[d],n[t][e]?n[t][e]=[].concat(n[t][e],arguments[i][t][e]):n[t][e]=arguments[i][t][e];break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":n[t]||(n[t]={}),n[t]=r({},arguments[i][t],n[t]);break;case"slot":case"key":case"ref":case"tag":case"show":case"keepAlive":default:n[t]||(n[t]=arguments[i][t])}return n}},c637:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return a})),n.d(e,"e",(function(){return u})),n.d(e,"f",(function(){return c})),n.d(e,"g",(function(){return s})),n.d(e,"h",(function(){return l})),n.d(e,"i",(function(){return d})),n.d(e,"j",(function(){return f})),n.d(e,"k",(function(){return h})),n.d(e,"l",(function(){return b})),n.d(e,"m",(function(){return p})),n.d(e,"n",(function(){return v})),n.d(e,"o",(function(){return g})),n.d(e,"p",(function(){return m})),n.d(e,"q",(function(){return y})),n.d(e,"r",(function(){return O})),n.d(e,"s",(function(){return S})),n.d(e,"t",(function(){return j})),n.d(e,"u",(function(){return P})),n.d(e,"v",(function(){return w})),n.d(e,"w",(function(){return _})),n.d(e,"x",(function(){return T})),n.d(e,"y",(function(){return B})),n.d(e,"z",(function(){return x})),n.d(e,"A",(function(){return C})),n.d(e,"B",(function(){return A})),n.d(e,"C",(function(){return E})),n.d(e,"D",(function(){return k})),n.d(e,"E",(function(){return N})),n.d(e,"F",(function(){return D})),n.d(e,"G",(function(){return V})),n.d(e,"H",(function(){return M})),n.d(e,"I",(function(){return I})),n.d(e,"J",(function(){return $})),n.d(e,"K",(function(){return L})),n.d(e,"L",(function(){return H})),n.d(e,"M",(function(){return R})),n.d(e,"N",(function(){return U})),n.d(e,"O",(function(){return F}));var r="BAlert",i="BAvatar",o="BBadge",a="BButton",u="BButtonClose",c="BCalendar",s="BCardSubTitle",l="BCarousel",d="BCarouselSlide",f="BDropdown",h="BFormDatepicker",b="BFormFile",p="BFormRating",v="BFormSpinbutton",g="BFormTag",m="BFormTags",y="BFormText",O="BFormTimepicker",S="BImg",j="BImgLazy",P="BInputGroup",w="BJumbotron",_="BLink",T="BListGroupItem",B="BModal",x="BNavbar",C="BNavbarToggle",A="BPagination",E="BPaginationNav",k="BPopover",N="BProgress",D="BProgressBar",V="BSidebar",M="BSkeleton",I="BSkeletonIcon",$="BSpinner",L="BTable",H="BTime",R="BToast",U="BToaster",F="BTooltip"},d3b4:function(t,e,n){"use strict";n.d(e,"a",(function(){return Z}));var r=n("2f79"),i=n("c637"),o={passive:!0,capture:!1},a=13,u=37,c=39,s=32,l=function(){},d=l,f=n("2326"),h=n("938d"),b=n("7b1e"),p=n("3a58"),v=(n("fa73"),["button","[href]:not(.disabled)","input","select","textarea","[tabindex]","[contenteditable]"].map((function(t){return"".concat(t,":not(:disabled):not([disabled])")})).join(", "),h["h"]?window:{}),g=h["b"]?document:{},m="undefined"!==typeof Element?Element.prototype:{},y=m.matches||m.msMatchesSelector||m.webkitMatchesSelector,O=(m.closest,v.requestAnimationFrame||v.webkitRequestAnimationFrame||v.mozRequestAnimationFrame||v.msRequestAnimationFrame||v.oRequestAnimationFrame||function(t){return setTimeout(t,16)}),S=v.MutationObserver||v.WebKitMutationObserver||v.MozMutationObserver||null,j=function(t){return!(!t||t.nodeType!==Node.ELEMENT_NODE)},P=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=g.activeElement;return e&&!t.some((function(t){return t===e}))?e:null},w=function(t){return j(t)&&t.offsetHeight},_=function(t,e){return Object(f["b"])((j(e)?e:g).querySelectorAll(t))},T=function(t,e){return!!j(t)&&y.call(t,e)},B=function(t,e){e&&j(t)&&t.classList&&t.classList.add(e)},x=function(t,e){e&&j(t)&&t.classList&&t.classList.remove(e)},C=function(t,e,n){e&&j(t)&&t.setAttribute(e,n)},A=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;Object(h["a"])()||console.warn("[BootstrapVue warn]: ".concat(e?"".concat(e," - "):"").concat(t))},E=function(t){return!h["c"]&&(A("".concat(t,": Requires MutationObserver support.")),!0)};function k(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function N(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?k(Object(n),!0).forEach((function(e){D(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function D(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var V=function(t,e,n){if(t=t?t.$el||t:null,!j(t))return null;if(E("observeDom"))return null;var r=new S((function(t){for(var n=!1,r=0;r<t.length&&!n;r++){var i=t[r],o=i.type,a=i.target;("characterData"===o&&a.nodeType===Node.TEXT_NODE||"attributes"===o||"childList"===o&&(i.addedNodes.length>0||i.removedNodes.length>0))&&(n=!0)}n&&e()}));return r.observe(t,N({childList:!0,subtree:!0},n)),r},M=V,I=n("228e"),$=n("6b77"),L=Math.min,H=Math.max,R=Math.abs,U=(Math.ceil,Math.floor),F=(Math.pow,Math.round,n("90ef")),z=n("8c18"),X={next:{dirClass:"carousel-item-left",overlayClass:"carousel-item-next"},prev:{dirClass:"carousel-item-right",overlayClass:"carousel-item-prev"}},G=650,W=500,Y=40,q={TOUCH:"touch",PEN:"pen"},J={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend oTransitionEnd",transition:"transitionend"},K=function(t){for(var e in J)if(!Object(b["g"])(t.style[e]))return J[e];return null},Z=r["a"].extend({name:i["h"],mixins:[F["a"],z["a"]],provide:function(){return{bvCarousel:this}},model:{prop:"value",event:"input"},props:{labelPrev:{type:String,default:function(){return Object(I["a"])(i["h"],"labelPrev")}},labelNext:{type:String,default:function(){return Object(I["a"])(i["h"],"labelNext")}},labelGotoSlide:{type:String,default:function(){return Object(I["a"])(i["h"],"labelGotoSlide")}},labelIndicators:{type:String,default:function(){return Object(I["a"])(i["h"],"labelIndicators")}},interval:{type:Number,default:5e3},indicators:{type:Boolean,default:!1},controls:{type:Boolean,default:!1},noAnimation:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},noWrap:{type:Boolean,default:!1},noTouch:{type:Boolean,default:!1},noHoverPause:{type:Boolean,default:!1},imgWidth:{type:[Number,String]},imgHeight:{type:[Number,String]},background:{type:String},value:{type:Number,default:0}},data:function(){return{index:this.value||0,isSliding:!1,transitionEndEvent:null,slides:[],direction:null,isPaused:!(Object(p["b"])(this.interval,0)>0),touchStartX:0,touchDeltaX:0}},computed:{numSlides:function(){return this.slides.length}},watch:{value:function(t,e){t!==e&&this.setSlide(Object(p["b"])(t,0))},interval:function(t,e){t!==e&&(t?(this.pause(!0),this.start(!1)):this.pause(!1))},isPaused:function(t,e){t!==e&&this.$emit(t?"paused":"unpaused")},index:function(t,e){t===e||this.isSliding||this.doSlide(t,e)}},created:function(){this.$_interval=null,this.$_animationTimeout=null,this.$_touchTimeout=null,this.$_observer=null,this.isPaused=!(Object(p["b"])(this.interval,0)>0)},mounted:function(){this.transitionEndEvent=K(this.$el)||null,this.updateSlides(),this.setObserver(!0)},beforeDestroy:function(){this.clearInterval(),this.clearAnimationTimeout(),this.clearTouchTimeout(),this.setObserver(!1)},methods:{clearInterval:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){clearInterval(this.$_interval),this.$_interval=null})),clearAnimationTimeout:function(){clearTimeout(this.$_animationTimeout),this.$_animationTimeout=null},clearTouchTimeout:function(){clearTimeout(this.$_touchTimeout),this.$_touchTimeout=null},setObserver:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.$_observer&&this.$_observer.disconnect(),this.$_observer=null,t&&(this.$_observer=M(this.$refs.inner,this.updateSlides.bind(this),{subtree:!1,childList:!0,attributes:!0,attributeFilter:["id"]}))},setSlide:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!(h["i"]&&document.visibilityState&&document.hidden)){var r=this.noWrap,i=this.numSlides;t=U(t),0!==i&&(this.isSliding?this.$once("sliding-end",(function(){O((function(){return e.setSlide(t,n)}))})):(this.direction=n,this.index=t>=i?r?i-1:0:t<0?r?0:i-1:t,r&&this.index!==t&&this.index!==this.value&&this.$emit("input",this.index)))}},prev:function(){this.setSlide(this.index-1,"prev")},next:function(){this.setSlide(this.index+1,"next")},pause:function(t){t||(this.isPaused=!0),this.clearInterval()},start:function(t){t||(this.isPaused=!1),this.clearInterval(),this.interval&&this.numSlides>1&&(this.$_interval=setInterval(this.next,H(1e3,this.interval)))},restart:function(){this.$el.contains(P())||this.start()},doSlide:function(t,e){var n=this,r=Boolean(this.interval),i=this.calcDirection(this.direction,e,t),a=i.overlayClass,u=i.dirClass,c=this.slides[e],s=this.slides[t];if(c&&s){if(this.isSliding=!0,r&&this.pause(!1),this.$emit("sliding-start",t),this.$emit("input",this.index),this.noAnimation)B(s,"active"),x(c,"active"),this.isSliding=!1,this.$nextTick((function(){return n.$emit("sliding-end",t)}));else{B(s,a),w(s),B(c,u),B(s,u);var l=!1,d=function e(){if(!l){if(l=!0,n.transitionEndEvent){var r=n.transitionEndEvent.split(/\s+/);r.forEach((function(t){return Object($["a"])(s,t,e,o)}))}n.clearAnimationTimeout(),x(s,u),x(s,a),B(s,"active"),x(c,"active"),x(c,u),x(c,a),C(c,"aria-current","false"),C(s,"aria-current","true"),C(c,"aria-hidden","true"),C(s,"aria-hidden","false"),n.isSliding=!1,n.direction=null,n.$nextTick((function(){return n.$emit("sliding-end",t)}))}};if(this.transitionEndEvent){var f=this.transitionEndEvent.split(/\s+/);f.forEach((function(t){return Object($["b"])(s,t,d,o)}))}this.$_animationTimeout=setTimeout(d,G)}r&&this.start(!1)}},updateSlides:function(){this.pause(!0),this.slides=_(".carousel-item",this.$refs.inner);var t=this.slides.length,e=H(0,L(U(this.index),t-1));this.slides.forEach((function(n,r){var i=r+1;r===e?(B(n,"active"),C(n,"aria-current","true")):(x(n,"active"),C(n,"aria-current","false")),C(n,"aria-posinset",String(i)),C(n,"aria-setsize",String(t))})),this.setSlide(e),this.start(this.isPaused)},calcDirection:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return t?X[t]:n>e?X.next:X.prev},handleClick:function(t,e){var n=t.keyCode;"click"!==t.type&&n!==s&&n!==a||(Object($["c"])(t),e())},handleSwipe:function(){var t=R(this.touchDeltaX);if(!(t<=Y)){var e=t/this.touchDeltaX;this.touchDeltaX=0,e>0?this.prev():e<0&&this.next()}},touchStart:function(t){h["e"]&&q[t.pointerType.toUpperCase()]?this.touchStartX=t.clientX:h["e"]||(this.touchStartX=t.touches[0].clientX)},touchMove:function(t){t.touches&&t.touches.length>1?this.touchDeltaX=0:this.touchDeltaX=t.touches[0].clientX-this.touchStartX},touchEnd:function(t){h["e"]&&q[t.pointerType.toUpperCase()]&&(this.touchDeltaX=t.clientX-this.touchStartX),this.handleSwipe(),this.pause(!1),this.clearTouchTimeout(),this.$_touchTimeout=setTimeout(this.start,W+H(1e3,this.interval))}},render:function(t){var e=this,n=t("div",{ref:"inner",class:["carousel-inner"],attrs:{id:this.safeId("__BV_inner_"),role:"list"}},[this.normalizeSlot()]),r=t();if(this.controls){var i=function(t){e.isSliding?Object($["c"])(t,{propagation:!1}):e.handleClick(t,e.prev)},o=function(t){e.isSliding?Object($["c"])(t,{propagation:!1}):e.handleClick(t,e.next)};r=[t("a",{class:["carousel-control-prev"],attrs:{href:"#",role:"button","aria-controls":this.safeId("__BV_inner_"),"aria-disabled":this.isSliding?"true":null},on:{click:i,keydown:i}},[t("span",{class:["carousel-control-prev-icon"],attrs:{"aria-hidden":"true"}}),t("span",{class:["sr-only"]},[this.labelPrev])]),t("a",{class:["carousel-control-next"],attrs:{href:"#",role:"button","aria-controls":this.safeId("__BV_inner_"),"aria-disabled":this.isSliding?"true":null},on:{click:o,keydown:o}},[t("span",{class:["carousel-control-next-icon"],attrs:{"aria-hidden":"true"}}),t("span",{class:["sr-only"]},[this.labelNext])])]}var a=t("ol",{class:["carousel-indicators"],directives:[{name:"show",rawName:"v-show",value:this.indicators,expression:"indicators"}],attrs:{id:this.safeId("__BV_indicators_"),"aria-hidden":this.indicators?"false":"true","aria-label":this.labelIndicators,"aria-owns":this.safeId("__BV_inner_")}},this.slides.map((function(n,r){return t("li",{key:"slide_".concat(r),class:{active:r===e.index},attrs:{role:"button",id:e.safeId("__BV_indicator_".concat(r+1,"_")),tabindex:e.indicators?"0":"-1","aria-current":r===e.index?"true":"false","aria-label":"".concat(e.labelGotoSlide," ").concat(r+1),"aria-describedby":e.slides[r].id||null,"aria-controls":e.safeId("__BV_inner_")},on:{click:function(t){e.handleClick(t,(function(){e.setSlide(r)}))},keydown:function(t){e.handleClick(t,(function(){e.setSlide(r)}))}}})}))),s={mouseenter:this.noHoverPause?d:this.pause,mouseleave:this.noHoverPause?d:this.restart,focusin:this.pause,focusout:this.restart,keydown:function(t){if(!/input|textarea/i.test(t.target.tagName)){var n=t.keyCode;n!==u&&n!==c||(Object($["c"])(t),e[n===u?"prev":"next"]())}}};return!this.noTouch&&h["g"]&&(h["e"]?(s["&pointerdown"]=this.touchStart,s["&pointerup"]=this.touchEnd):(s["&touchstart"]=this.touchStart,s["&touchmove"]=this.touchMove,s["&touchend"]=this.touchEnd)),t("div",{staticClass:"carousel",class:{slide:!this.noAnimation,"carousel-fade":!this.noAnimation&&this.fade,"pointer-event":!this.noTouch&&h["g"]&&h["e"]},style:{background:this.background},attrs:{role:"region",id:this.safeId(),"aria-busy":this.isSliding?"true":"false"},on:s},[n,r,a])}})},d82f:function(t,e,n){"use strict";n.d(e,"b",(function(){return u})),n.d(e,"e",(function(){return s})),n.d(e,"d",(function(){return l})),n.d(e,"a",(function(){return d})),n.d(e,"c",(function(){return f}));var r=n("7b1e");function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u=function(t,e){return Object.create(t,e)},c=function(t){return Object.freeze(t)},s=function(t){return Object.keys(t)},l=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},d=function(t){return o({},t)},f=function t(e){var n=s(e);return n.forEach((function(n){var i=e[n];e[n]=i&&(Object(r["e"])(i)||Object(r["a"])(i))?t(i):i})),c(e)}},fa73:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"b",(function(){return a}));n("992e");var r=n("7b1e"),i=function(t){return t=Object(r["f"])(t)?t.trim():String(t),t.charAt(0).toLowerCase()+t.slice(1)},o=function(t){return t=Object(r["f"])(t)?t.trim():String(t),t.charAt(0).toUpperCase()+t.slice(1)},a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return Object(r["h"])(t)?"":Object(r["a"])(t)||Object(r["e"])(t)&&t.toString===Object.prototype.toString?JSON.stringify(t,null,e):String(t)}},febd:function(t,e,n){"use strict";n.d(e,"a",(function(){return A}));var r=n("2f79"),i=n("c637"),o=n("938d"),a=n("6b77"),u=(n("992e"),function(t,e){return t?{innerHTML:t}:e?{textContent:e}:{}}),c=n("6c06"),s=n("7b1e"),l=n("d82f"),d=n("fa73"),f=function(t,e){return Object(d["a"])(e.replace(t,""))},h=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:c["a"];return(Object(s["a"])(t)?t.slice():Object(l["e"])(t)).reduce((function(t,r){return t[n(r)]=e[r],t}),{})},b=n("90ef"),p=n("8c18"),v=n("b42e"),g=n("2326"),m=n("228e"),y=n("3a58");function O(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var S='<svg width="%{w}" height="%{h}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %{w} %{h}" preserveAspectRatio="none"><rect width="100%" height="100%" style="fill:%{f};"></rect></svg>',j={src:{type:String},srcset:{type:[String,Array]},sizes:{type:[String,Array]},alt:{type:String,default:null},width:{type:[Number,String]},height:{type:[Number,String]},block:{type:Boolean,default:!1},fluid:{type:Boolean,default:!1},fluidGrow:{type:Boolean,default:!1},rounded:{type:[Boolean,String],default:!1},thumbnail:{type:Boolean,default:!1},left:{type:Boolean,default:!1},right:{type:Boolean,default:!1},center:{type:Boolean,default:!1},blank:{type:Boolean,default:!1},blankColor:{type:String,default:function(){return Object(m["a"])(i["s"],"blankColor")}}},P=function(t,e,n){var r=encodeURIComponent(S.replace("%{w}",Object(d["b"])(t)).replace("%{h}",Object(d["b"])(e)).replace("%{f}",n));return"data:image/svg+xml;charset=UTF-8,".concat(r)},w=r["a"].extend({name:i["s"],functional:!0,props:j,render:function(t,e){var n,r=e.props,i=e.data,o=r.src,a=Object(y["b"])(r.width)||null,u=Object(y["b"])(r.height)||null,l=null,f=r.block,h=Object(g["a"])(r.srcset).filter(c["a"]).join(","),b=Object(g["a"])(r.sizes).filter(c["a"]).join(",");return r.blank&&(!u&&a?u=a:!a&&u&&(a=u),a||u||(a=1,u=1),o=P(a,u,r.blankColor||"transparent"),h=null,b=null),r.left?l="float-left":r.right?l="float-right":r.center&&(l="mx-auto",f=!0),t("img",Object(v["a"])(i,{attrs:{src:o,alt:r.alt,width:a?Object(d["b"])(a):null,height:u?Object(d["b"])(u):null,srcset:h||null,sizes:b||null},class:(n={"img-thumbnail":r.thumbnail,"img-fluid":r.fluid||r.fluidGrow,"w-100":r.fluidGrow,rounded:""===r.rounded||!0===r.rounded},O(n,"rounded-".concat(r.rounded),Object(s["f"])(r.rounded)&&""!==r.rounded),O(n,l,l),O(n,"d-block",f),n)}))}});function _(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function T(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?_(Object(n),!0).forEach((function(e){B(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function B(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var x={imgSrc:{type:String},imgAlt:{type:String},imgWidth:{type:[Number,String]},imgHeight:{type:[Number,String]},imgBlank:{type:Boolean,default:!1},imgBlankColor:{type:String,default:"transparent"}},C=T(T({},x),{},{contentVisibleUp:{type:String},contentTag:{type:String,default:"div"},caption:{type:String},captionHtml:{type:String},captionTag:{type:String,default:"h3"},text:{type:String},textHtml:{type:String},textTag:{type:String,default:"p"},background:{type:String}}),A=r["a"].extend({name:i["i"],mixins:[b["a"],p["a"]],inject:{bvCarousel:{default:function(){return{noTouch:!0}}}},props:C,computed:{contentClasses:function(){return[this.contentVisibleUp?"d-none":"",this.contentVisibleUp?"d-".concat(this.contentVisibleUp,"-block"):""]},computedWidth:function(){return this.imgWidth||this.bvCarousel.imgWidth||null},computedHeight:function(){return this.imgHeight||this.bvCarousel.imgHeight||null}},render:function(t){var e=this.normalizeSlot("img");if(!e&&(this.imgSrc||this.imgBlank)){var n={};!this.bvCarousel.noTouch&&o["g"]&&(n.dragstart=function(t){return Object(a["c"])(t,{propagation:!1})}),e=t(w,{props:T(T({},h(x,this.$props,f.bind(null,"img"))),{},{width:this.computedWidth,height:this.computedHeight,fluidGrow:!0,block:!0}),on:n})}var r=[!(!this.caption&&!this.captionHtml)&&t(this.captionTag,{domProps:u(this.captionHtml,this.caption)}),!(!this.text&&!this.textHtml)&&t(this.textTag,{domProps:u(this.textHtml,this.text)}),this.normalizeSlot()||!1],i=t();return r.some(Boolean)&&(i=t(this.contentTag,{staticClass:"carousel-caption",class:this.contentClasses},r.map((function(e){return e||t()})))),t("div",{staticClass:"carousel-item",style:{background:this.background||this.bvCarousel.background||null},attrs:{id:this.safeId(),role:"listitem"}},[e,i])}})}}]);
//# sourceMappingURL=chunk-e3f40d56.e93ad235.js.map