(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-826cacde"],{"0ee8":function(e,t,a){(function(e,a){a(t)})(0,(function(e){"use strict";function t(e,t){return t={exports:{}},e(t,t.exports),t.exports}var a={symbol:"$",format:"%s%v",decimal:".",thousand:",",precision:2,grouping:3,stripZeros:!1,fallback:0};function r(e){var t=arguments.length<=1||void 0===arguments[1]?a.decimal:arguments[1],n=arguments.length<=2||void 0===arguments[2]?a.fallback:arguments[2];if(Array.isArray(e))return e.map((function(e){return r(e,t,n)}));if("number"===typeof e)return e;var i=new RegExp("[^0-9-(-)-"+t+"]",["g"]),o=(""+e).replace(i,"").replace(t,".").replace(/\(([-]*\d*[^)]?\d+)\)/g,"-$1").replace(/\((.*)\)/,""),u=(o.match(/-/g)||2).length%2,l=parseFloat(o.replace(/-/g,"")),s=l*(u?-1:1);return isNaN(s)?n:s}function n(e,t){return e=Math.round(Math.abs(e)),isNaN(e)?t:e}function i(e,t){t=n(t,a.precision);var r=Math.pow(10,t);return(Math.round((e+1e-8)*r)/r).toFixed(t)}var o=t((function(e){var t=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function r(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=Object.assign||function(e,n){for(var i,o,u=r(e),l=1;l<arguments.length;l++){for(var s in i=Object(arguments[l]),i)t.call(i,s)&&(u[s]=i[s]);if(Object.getOwnPropertySymbols){o=Object.getOwnPropertySymbols(i);for(var c=0;c<o.length;c++)a.call(i,o[c])&&(u[o[c]]=i[o[c]])}}return u}})),u=o&&"object"===typeof o&&"default"in o?o["default"]:o;function l(e,t){var a=e.split(t),r=a[0],n=a[1].replace(/0+$/,"");return n.length>0?r+t+n:r}function s(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];if(Array.isArray(e))return e.map((function(e){return s(e,t)}));t=u({},a,t);var r=e<0?"-":"",n=parseInt(i(Math.abs(e),t.precision),10)+"",o=n.length>3?n.length%3:0,c=r+(o?n.substr(0,o)+t.thousand:"")+n.substr(o).replace(/(\d{3})(?=\d)/g,"$1"+t.thousand)+(t.precision>0?t.decimal+i(Math.abs(e),t.precision).split(".")[1]:"");return t.stripZeros?l(c,t.decimal):c}var c=t((function(e){var t=String.prototype.valueOf,a=function(e){try{return t.call(e),!0}catch(a){return!1}},r=Object.prototype.toString,n="[object String]",i="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag;e.exports=function(e){return"string"===typeof e||"object"===typeof e&&(i?a(e):r.call(e)===n)}})),p=c&&"object"===typeof c&&"default"in c?c["default"]:c;function m(e){return p(e)&&e.match("%v")?{pos:e,neg:e.replace("-","").replace("%v","-%v"),zero:e}:e}function d(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];if(Array.isArray(e))return e.map((function(e){return d(e,t)}));t=u({},a,t);var r=m(t.format),n=void 0;return n=e>0?r.pos:e<0?r.neg:r.zero,n.replace("%s",t.symbol).replace("%v",s(Math.abs(e),t))}function f(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];if(!e)return[];t=u({},a,t);var n=m(t.format),i=n.pos.indexOf("%s")<n.pos.indexOf("%v"),o=0,l=e.map((function(e){if(Array.isArray(e))return f(e,t);e=r(e,t.decimal);var a=void 0;a=e>0?n.pos:e<0?n.neg:n.zero;var i=a.replace("%s",t.symbol).replace("%v",s(Math.abs(e),t));return i.length>o&&(o=i.length),i}));return l.map((function(e){return p(e)&&e.length<o?i?e.replace(t.symbol,t.symbol+new Array(o-e.length+1).join(" ")):new Array(o-e.length+1).join(" ")+e:e}))}e.settings=a,e.unformat=r,e.toFixed=i,e.formatMoney=d,e.formatNumber=s,e.formatColumn=f,e.format=d,e.parse=r}))},"1d3c":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"centerx"},[a("label",[e._v(e._s(e.label))]),e.readOnly?a("input",{staticClass:"vs-inputx vs-input--input large hasValue",staticStyle:{border:"1px solid rgba(0, 0, 0, 0.2)"},attrs:{type:"text",placeholder:e.label,readonly:""},domProps:{value:e.value},on:{input:function(t){return e.$emit("input",t.target.value)}}}):a("input",{staticClass:"vs-inputx vs-input--input large hasValue",staticStyle:{border:"1px solid rgba(0, 0, 0, 0.2)"},attrs:{type:"text",placeholder:e.label},domProps:{value:e.value},on:{input:function(t){return e.$emit("input",t.target.value)}}})])},n=[],i={props:{label:{type:String,required:!0},value:{type:String},tipo:{type:String,default:"S",required:!1},readOnly:{type:Boolean,default:!1,required:!1}}},o=i,u=a("2877"),l=Object(u["a"])(o,r,n,!1,null,null,null);t["a"]=l.exports},4456:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"centerx"},[a("label",[e._v(e._s(e.label))]),"N"==e.tipo?a("flat-pickr",{staticClass:"vs-inputx vs-input--input large hasValue",staticStyle:{border:"1px solid rgba(0, 0, 0, 0.2)"},attrs:{config:e.configdateTimePicker,placeholder:e.label,label:e.label,disabled:e.disabled},on:{focus:e.onFocusHandler,input:e.updateValue},model:{value:e.ValorFecha,callback:function(t){e.ValorFecha=t},expression:"ValorFecha"}}):e._e(),"FH"==e.tipo?a("flat-pickr",{staticClass:"vs-inputx vs-input--input large hasValue",staticStyle:{border:"1px solid rgba(0, 0, 0, 0.2)"},attrs:{config:e.configdateTimePickerFYH,placeholder:e.label,label:e.label,disabled:e.disabled},on:{focus:e.onFocusHandler,input:e.updateValue},model:{value:e.ValorFecha,callback:function(t){e.ValorFecha=t},expression:"ValorFecha"}}):e._e(),"H"==e.tipo?a("flat-pickr",{staticClass:"vs-inputx vs-input--input large hasValue",staticStyle:{border:"1px solid rgba(0, 0, 0, 0.2)"},attrs:{config:e.configdateTimePickerSoloHora,placeholder:e.label,label:e.label,disabled:e.disabled},on:{focus:e.onFocusHandler,input:e.updateValue},model:{value:e.ValorFecha,callback:function(t){e.ValorFecha=t},expression:"ValorFecha"}}):e._e()],1)},n=[],i=a("c38f"),o=a.n(i),u=(a("2be5"),a("4984")),l={components:{flatPickr:o.a},props:{label:{type:String,required:!0},value:{type:String},tipo:{type:String,default:"N",required:!1},disabled:{type:Boolean,default:!1,required:!1}},mounted:function(){this.ValorFecha=this.value},watch:{value:function(e){this.ValorFecha=e}},data:function(){return{ValorFecha:null,configdateTimePicker:{locale:u["Spanish"],enableTime:!0,dateFormat:"d-m-Y"},configdateTimePickerSoloHora:{locale:u["Spanish"],enableTime:!0,enableSeconds:!0,noCalendar:!0},configdateTimePickerFYH:{locale:u["Spanish"],enableTime:!0,dateFormat:"d-m-Y H:i"}}},methods:{updateValue:function(){this.$emit("input",this.ValorFecha)},onFocusHandler:function(e){this.$emit("focus",e),this.ValorFecha=null}}},s=l,c=a("2877"),p=Object(c["a"])(s,r,n,!1,null,null,null);t["a"]=p.exports},"87f3":function(e,t,a){var r=a("5ca1");r(r.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},9278:function(e,t,a){var r=a("5ca1");r(r.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},e88f:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"centerx"},[a("label",[e._v(e._s(e.label))]),e.readOnly?a("input",{directives:[{name:"model",rawName:"v-model",value:e.amount,expression:"amount"}],ref:"readOnly",staticClass:"vs-inputx vs-input--input large hasValue",staticStyle:{border:"1px solid rgba(0, 0, 0, 0.2)"},attrs:{placeholder:e.label,readonly:""},domProps:{value:e.amount},on:{input:function(t){t.target.composing||(e.amount=t.target.value)}}}):a("input",{directives:[{name:"model",rawName:"v-model",value:e.amount,expression:"amount"}],ref:"numeric",staticClass:"vs-inputx vs-input--input large hasValue",staticStyle:{border:"1px solid rgba(0, 0, 0, 0.2)"},attrs:{placeholder:e.label},domProps:{value:e.amount},on:{blur:e.onBlurHandler,input:[function(t){t.target.composing||(e.amount=t.target.value)},e.onInputHandler],focus:e.onFocusHandler}})])},n=[],i=(a("9278"),a("87f3"),a("c5f6"),a("0ee8")),o=a.n(i),u={name:"VueNumeric",props:{label:{type:String,required:!0},currency:{type:String,default:"",required:!1},max:{type:[Number,String],default:Number.MAX_SAFE_INTEGER||9007199254740991,required:!1},min:{type:[Number,String],default:Number.MIN_SAFE_INTEGER||-9007199254740991,required:!1},minus:{type:Boolean,default:!1,required:!1},emptyValue:{type:[Number,String],default:"",required:!1},precision:{type:[Number,String],default:0,required:!1},separator:{type:String,default:".",required:!1},thousandSeparator:{default:",",required:!1,type:String},decimalSeparator:{default:".",required:!1,type:String},outputType:{required:!1,type:String,default:"Number"},value:{type:Number,default:0,required:!0},readOnly:{type:Boolean,default:!1,required:!1},readOnlyClass:{type:String,default:"",required:!1},currencySymbolPosition:{type:String,default:"prefix",required:!1}},data:function(){return{amount:""}},computed:{amountNumber:function(){return this.unformat(this.amount)},valueNumber:function(){return this.unformat(this.value)},decimalSeparatorSymbol:function(){return"undefined"!==typeof this.decimalSeparator?this.decimalSeparator:","===this.separator?".":","},thousandSeparatorSymbol:function(){return"undefined"!==typeof this.thousandSeparator?this.thousandSeparator:"."===this.separator?".":"space"===this.separator?" ":","},symbolPosition:function(){return this.currency?"suffix"===this.currencySymbolPosition?"%v %s":"%s %v":"%v"}},watch:{valueNumber:function(e){this.$refs.numeric!==document.activeElement&&(this.amount=this.format(e))},separator:function(){this.process(this.valueNumber),this.amount=this.format(this.valueNumber)},currency:function(){this.process(this.valueNumber),this.amount=this.format(this.valueNumber)},precision:function(){this.process(this.valueNumber),this.amount=this.format(this.valueNumber)}},mounted:function(){var e=this;this.label||(this.process(this.valueNumber),this.amount=this.format(this.valueNumber),setTimeout((function(){e.process(e.valueNumber),e.amount=e.format(e.valueNumber)}),500))},methods:{onBlurHandler:function(e){this.$emit("blur",e),this.amount=this.format(this.valueNumber)},onFocusHandler:function(e){this.$emit("focus",e),0===this.valueNumber?this.amount=null:this.amount=o.a.formatMoney(this.valueNumber,{symbol:"",format:"%v",thousand:"",decimal:this.decimalSeparatorSymbol,precision:Number(this.precision)})},onInputHandler:function(){this.process(this.amountNumber)},process:function(e){e>=this.max&&this.update(this.max),e<=this.min&&this.update(this.min),e>this.min&&e<this.max&&this.update(e),!this.minus&&e<0&&(this.min>=0?this.update(this.min):this.update(0))},update:function(e){var t=o.a.toFixed(e,this.precision),a="string"===this.outputType.toLowerCase()?t:Number(t);this.$emit("input",a)},format:function(e){return o.a.formatMoney(e,{symbol:this.currency,format:this.symbolPosition,precision:Number(this.precision),decimal:this.decimalSeparatorSymbol,thousand:this.thousandSeparatorSymbol})},unformat:function(e){var t="string"===typeof e&&""===e?this.emptyValue:e;return o.a.unformat(t,this.decimalSeparatorSymbol)}}},l=u,s=a("2877"),c=Object(s["a"])(l,r,n,!1,null,null,null);t["a"]=c.exports},fb9e:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",{staticClass:"centerx"},[a("label",[e._v(e._s(e.label))]),e._l(e.jsonlista,(function(t,r){return a("li",{key:r,attrs:{type:"button",id:e.name,name:e.name},on:{click:function(a){return e.clicked(t)}}},["C"==e.tipo?a("vs-checkbox",{attrs:{"vs-value":t.value,color:e.color},model:{value:e.amount,callback:function(t){e.amount=t},expression:"amount"}},[e._v(e._s(t.text))]):a("vs-radio",{attrs:{"vs-value":t.value},model:{value:e.amount,callback:function(t){e.amount=t},expression:"amount"}},[e._v(e._s(t.text))])],1)}))],2)},n=[],i={props:{label:{type:String,required:!0},value:{type:String},name:{type:String},tipo:{type:String,default:"C",required:!1},jsonlista:{type:Array,required:!0}},mounted:function(){console.log("Selec con VALOR ",this.value),this.amount=this.value},watch:{value:function(e){console.log("WATCH DEL LISTA",e),this.amount=e}},data:function(){return{color:"success",amount:""}},methods:{clicked:function(e){this.$emit("input",this.amount)},onFocusHandler:function(e){this.$emit("focus",e),this.amount=null}}},o=i,u=a("2877"),l=Object(u["a"])(o,r,n,!1,null,null,null);t["a"]=l.exports}}]);
//# sourceMappingURL=chunk-826cacde.84407ead.js.map