(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["activitydetails"],{"13d5":function(t,i,e){"use strict";var n=e("23e7"),a=e("d58f").left,r=e("a640"),s=e("2d00"),c=e("605d"),o=r("reduce"),u=!c&&s>79&&s<83;n({target:"Array",proto:!0,forced:!o||u},{reduce:function(t){return a(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},5899:function(t,i){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,i,e){var n=e("1d80"),a=e("5899"),r="["+a+"]",s=RegExp("^"+r+r+"*"),c=RegExp(r+r+"*$"),o=function(t){return function(i){var e=String(n(i));return 1&t&&(e=e.replace(s,"")),2&t&&(e=e.replace(c,"")),e}};t.exports={start:o(1),end:o(2),trim:o(3)}},7156:function(t,i,e){var n=e("861d"),a=e("d2bb");t.exports=function(t,i,e){var r,s;return a&&"function"==typeof(r=i.constructor)&&r!==e&&n(s=r.prototype)&&s!==e.prototype&&a(t,s),t}},7609:function(t,i,e){"use strict";e.r(i);var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("section",{staticClass:"section"},[e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-one-half"},[e("AddActivity",{attrs:{newActivity:t.newActivity},on:{add:t.addActivity}})],1),e("div",{staticClass:"column is-one-half"},[e("ActivitySummary",{attrs:{activities:t.activities,total:t.total}})],1)])])},a=[],r=(e("13d5"),e("a3f2")),s=e("d262"),c=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("form",{staticClass:"box",on:{submit:function(i){return i.preventDefault(),t.$emit("add")}}},[e("p",[t._v("Record Daily Exercise")]),e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v("Type of Exercise")]),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.newActivity.activity,expression:"newActivity.activity"}],staticClass:"input",attrs:{type:"text",placeholder:"Curling"},domProps:{value:t.newActivity.activity},on:{input:function(i){i.target.composing||t.$set(t.newActivity,"activity",i.target.value)}}})])]),e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v("Number of Minutes Spent")]),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.newActivity.timeMins,expression:"newActivity.timeMins"}],staticClass:"input",attrs:{type:"number",placeholder:"45"},domProps:{value:t.newActivity.timeMins},on:{input:function(i){i.target.composing||t.$set(t.newActivity,"timeMins",i.target.value)}}})])]),e("button",{staticClass:"button is-info"},[t._v("Submit")])])},o=[],u={props:{newActivity:Object}},l=u,f=e("2877"),v=Object(f["a"])(l,c,o,!1,null,null,null),d=v.exports,p=e("2b0e"),m=p["a"].extend({data:function(){return{newActivity:{},activities:[]}},mounted:function(){this.activities=Object(r["b"])()},components:{ActivitySummary:s["a"],AddActivity:d},methods:{addActivity:function(){Object(r["a"])(this.newActivity)}},computed:{total:function(){return this.activities.reduce((function(t,i){return t+ +i.timeMins}),0)}}}),y=m,b=Object(f["a"])(y,n,a,!1,null,null,null);i["default"]=b.exports},a3f2:function(t,i,e){"use strict";e.d(i,"b",(function(){return a})),e.d(i,"a",(function(){return r}));var n=[{activity:"running",timeMins:30},{activity:"climbing",timeMins:120},{activity:"dance",timeMins:45}];function a(){return n}function r(t){n.unshift(t)}},a640:function(t,i,e){"use strict";var n=e("d039");t.exports=function(t,i){var e=[][t];return!!e&&n((function(){e.call(null,i||function(){throw 1},1)}))}},a9e3:function(t,i,e){"use strict";var n=e("83ab"),a=e("da84"),r=e("94ca"),s=e("6eeb"),c=e("5135"),o=e("c6b6"),u=e("7156"),l=e("c04e"),f=e("d039"),v=e("7c73"),d=e("241c").f,p=e("06cf").f,m=e("9bf2").f,y=e("58a8").trim,b="Number",h=a[b],A=h.prototype,_=o(v(A))==b,g=function(t){var i,e,n,a,r,s,c,o,u=l(t,!1);if("string"==typeof u&&u.length>2)if(u=y(u),i=u.charCodeAt(0),43===i||45===i){if(e=u.charCodeAt(2),88===e||120===e)return NaN}else if(48===i){switch(u.charCodeAt(1)){case 66:case 98:n=2,a=49;break;case 79:case 111:n=8,a=55;break;default:return+u}for(r=u.slice(2),s=r.length,c=0;c<s;c++)if(o=r.charCodeAt(c),o<48||o>a)return NaN;return parseInt(r,n)}return+u};if(r(b,!h(" 0o1")||!h("0b1")||h("+0x1"))){for(var w,C=function(t){var i=arguments.length<1?0:t,e=this;return e instanceof C&&(_?f((function(){A.valueOf.call(e)})):o(e)!=b)?u(new h(g(i)),e,C):g(i)},N=n?d(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),E=0;N.length>E;E++)c(h,w=N[E])&&!c(C,w)&&m(C,w,p(h,w));C.prototype=A,A.constructor=C,s(a,b,C)}},d262:function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"container"},[e("article",{staticClass:"panel is-info"},[e("p",{staticClass:"panel-heading"},[t._v(" Activity Summary ")]),e("div",{staticClass:"panel-block"},[t._m(0),t._v(" "+t._s(t.total)+" ")]),t._l(t.activities,(function(i,n){return e("p",{key:n,staticClass:"panel-block"},[t._m(1,!0),t._v(" "+t._s(i.activity)+" ")])}))],2)])},a=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("span",{staticClass:"icon is-left"},[e("i",{staticClass:"fas fa-book",attrs:{"aria-hidden":"true"}})])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("span",{staticClass:"panel-icon"},[e("i",{staticClass:"fas fa-book",attrs:{"aria-hidden":"true"}})])}],r=(e("a9e3"),{props:{activities:Array,total:Number}}),s=r,c=e("2877"),o=Object(c["a"])(s,n,a,!1,null,null,null);i["a"]=o.exports},d58f:function(t,i,e){var n=e("1c0b"),a=e("7b0b"),r=e("44ad"),s=e("50c4"),c=function(t){return function(i,e,c,o){n(e);var u=a(i),l=r(u),f=s(u.length),v=t?f-1:0,d=t?-1:1;if(c<2)while(1){if(v in l){o=l[v],v+=d;break}if(v+=d,t?v<0:f<=v)throw TypeError("Reduce of empty array with no initial value")}for(;t?v>=0:f>v;v+=d)v in l&&(o=e(o,l[v],v,u));return o}};t.exports={left:c(!1),right:c(!0)}}}]);
//# sourceMappingURL=activitydetails.8bc6ab1d.js.map