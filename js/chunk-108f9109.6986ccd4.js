(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-108f9109"],{"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"14c3":function(t,e,n){var r=n("c6b6"),a=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var c=n.call(t,e);if("object"!==typeof c)throw TypeError("RegExp exec method returned something other than an Object or null");return c}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(t,e)}},5319:function(t,e,n){"use strict";var r=n("d784"),a=n("825a"),c=n("7b0b"),o=n("50c4"),i=n("a691"),l=n("1d80"),s=n("8aa5"),u=n("14c3"),f=Math.max,d=Math.min,v=Math.floor,p=/\$([$&'`]|\d\d?|<[^>]*>)/g,x=/\$([$&'`]|\d\d?)/g,h=function(t){return void 0===t?t:String(t)};r("replace",2,(function(t,e,n,r){var g=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,E=r.REPLACE_KEEPS_$0,b=g?"$":"$0";return[function(n,r){var a=l(this),c=void 0==n?void 0:n[t];return void 0!==c?c.call(n,a,r):e.call(String(a),n,r)},function(t,r){if(!g&&E||"string"===typeof r&&-1===r.indexOf(b)){var c=n(e,t,this,r);if(c.done)return c.value}var l=a(t),v=String(this),p="function"===typeof r;p||(r=String(r));var x=l.global;if(x){var _=l.unicode;l.lastIndex=0}var R=[];while(1){var S=u(l,v);if(null===S)break;if(R.push(S),!x)break;var I=String(S[0]);""===I&&(l.lastIndex=s(v,o(l.lastIndex),_))}for(var y="",w=0,m=0;m<R.length;m++){S=R[m];for(var O=String(S[0]),$=f(d(i(S.index),v.length),0),T=[],A=1;A<S.length;A++)T.push(h(S[A]));var N=S.groups;if(p){var P=[O].concat(T,$,v);void 0!==N&&P.push(N);var U=String(r.apply(void 0,P))}else U=C(O,v,$,T,N,r);$>=w&&(y+=v.slice(w,$)+U,w=$+O.length)}return y+v.slice(w)}];function C(t,n,r,a,o,i){var l=r+t.length,s=a.length,u=x;return void 0!==o&&(o=c(o),u=p),e.call(i,u,(function(e,c){var i;switch(c.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,r);case"'":return n.slice(l);case"<":i=o[c.slice(1,-1)];break;default:var u=+c;if(0===u)return e;if(u>s){var f=v(u/10);return 0===f?e:f<=s?void 0===a[f-1]?c.charAt(1):a[f-1]+c.charAt(1):e}i=a[u-1]}return void 0===i?"":i}))}}))},"71a4":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"container--fluid"},[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{"prepend-icon":"mdi-filter",solo:"solo",label:"Search Materil Colors","single-line":"single-line"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._l(t.computedColors,(function(e,r){return n("v-col",{key:r,attrs:{cols:"12",sm:"6",md:"3"}},[n("v-card",{attrs:{color:r,tile:"tile"}},[n("v-card-text",[n("h3",{class:t.getColorClass(r)},[t._v(" "+t._s(r)+" ")])])],1),t._l(e,(function(e,a){return n("v-card",{key:a,class:t.getColorClass(a),attrs:{color:r+" "+t.convertToClass(a),tile:"tile"}},[n("v-card-text",[n("v-row",[n("v-col",{staticClass:"caption",attrs:{cols:"8"}},["shades"!==r?n("span",[t._v(" "+t._s(r)+" ")]):t._e(),"base"!==a?n("span",[t._v(" "+t._s(a.replace(/(.*)(\d)/,"$1-$2"))+" ")]):t._e()]),n("v-col",{staticClass:"text-right",attrs:{cols:"4"}},["transparent"!==e?n("span",[t._v(" "+t._s(e.toUpperCase())+" ")]):t._e()])],1)],1)],1)}))],2)}))],2)],1)},a=[],c=(n("99af"),n("4160"),n("caad"),n("c975"),n("a9e3"),n("9129"),n("b64b"),n("ac1f"),n("5319"),n("841c"),n("159b"),n("c0a4")),o=n.n(c),i=function(t){var e=(t||"").replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();return e},l={name:"Colors",data:function(){return{colors:o.a,search:""}},computed:{computedColors:function(){var t=this,e={},n=this.search.toLowerCase();return Object.keys(this.colors).forEach((function(r){var a=i(r).toLowerCase();a.indexOf(n)>-1&&(e[a]=t.colors[r])})),e}},methods:{convertToClass:function(t){var e=t[t.length-1],n=t.substr(0,t.length-1);return Number.isNaN(parseInt(e,10))?t:"".concat(n,"-").concat(e)},getColorClass:function(t){return["white","transparent","shades"].includes(t)||t.indexOf("lighten")>-1||t.indexOf("accent")>-1?"black--text":"white--text"}}},s=l,u=n("2877"),f=n("6544"),d=n.n(f),v=n("b0af"),p=n("99d9"),x=n("62ad"),h=n("a523"),g=n("0fd9"),E=n("8654"),b=Object(u["a"])(s,r,a,!1,null,null,null);e["default"]=b.exports;d()(b,{VCard:v["a"],VCardText:p["b"],VCol:x["a"],VContainer:h["a"],VRow:g["a"],VTextField:E["a"]})},"841c":function(t,e,n){"use strict";var r=n("d784"),a=n("825a"),c=n("1d80"),o=n("129f"),i=n("14c3");r("search",1,(function(t,e,n){return[function(e){var n=c(this),r=void 0==e?void 0:e[t];return void 0!==r?r.call(e,n):new RegExp(e)[t](String(n))},function(t){var r=n(e,t,this);if(r.done)return r.value;var c=a(t),l=String(this),s=c.lastIndex;o(s,0)||(c.lastIndex=0);var u=i(c,l);return o(c.lastIndex,s)||(c.lastIndex=s),null===u?-1:u.index}]}))},"8aa5":function(t,e,n){"use strict";var r=n("6547").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},9129:function(t,e,n){var r=n("23e7");r({target:"Number",stat:!0},{isNaN:function(t){return t!=t}})},9263:function(t,e,n){"use strict";var r=n("ad6d"),a=n("9f7f"),c=RegExp.prototype.exec,o=String.prototype.replace,i=c,l=function(){var t=/a/,e=/b*/g;return c.call(t,"a"),c.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),s=a.UNSUPPORTED_Y||a.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],f=l||u||s;f&&(i=function(t){var e,n,a,i,f=this,d=s&&f.sticky,v=r.call(f),p=f.source,x=0,h=t;return d&&(v=v.replace("y",""),-1===v.indexOf("g")&&(v+="g"),h=String(t).slice(f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==t[f.lastIndex-1])&&(p="(?: "+p+")",h=" "+h,x++),n=new RegExp("^(?:"+p+")",v)),u&&(n=new RegExp("^"+p+"$(?!\\s)",v)),l&&(e=f.lastIndex),a=c.call(d?n:f,h),d?a?(a.input=a.input.slice(x),a[0]=a[0].slice(x),a.index=f.lastIndex,f.lastIndex+=a[0].length):f.lastIndex=0:l&&a&&(f.lastIndex=f.global?a.index+a[0].length:e),u&&a&&a.length>1&&o.call(a[0],n,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(a[i]=void 0)})),a}),t.exports=i},"9f7f":function(t,e,n){"use strict";var r=n("d039");function a(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=r((function(){var t=a("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=a("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},ac1f:function(t,e,n){"use strict";var r=n("23e7"),a=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},c975:function(t,e,n){"use strict";var r=n("23e7"),a=n("4d64").indexOf,c=n("a640"),o=n("ae40"),i=[].indexOf,l=!!i&&1/[1].indexOf(1,-0)<0,s=c("indexOf"),u=o("indexOf",{ACCESSORS:!0,1:0});r({target:"Array",proto:!0,forced:l||!s||!u},{indexOf:function(t){return l?i.apply(this,arguments)||0:a(this,t,arguments.length>1?arguments[1]:void 0)}})},d784:function(t,e,n){"use strict";n("ac1f");var r=n("6eeb"),a=n("d039"),c=n("b622"),o=n("9263"),i=n("9112"),l=c("species"),s=!a((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),f=c("replace"),d=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),v=!a((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,f){var p=c(t),x=!a((function(){var e={};return e[p]=function(){return 7},7!=""[t](e)})),h=x&&!a((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[l]=function(){return n},n.flags="",n[p]=/./[p]),n.exec=function(){return e=!0,null},n[p](""),!e}));if(!x||!h||"replace"===t&&(!s||!u||d)||"split"===t&&!v){var g=/./[p],E=n(p,""[t],(function(t,e,n,r,a){return e.exec===o?x&&!a?{done:!0,value:g.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),b=E[0],C=E[1];r(String.prototype,t,b),r(RegExp.prototype,p,2==e?function(t,e){return C.call(t,this,e)}:function(t){return C.call(t,this)})}f&&i(RegExp.prototype[p],"sham",!0)}}}]);
//# sourceMappingURL=chunk-108f9109.6986ccd4.js.map