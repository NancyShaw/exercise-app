(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["goals"],{"2dc1":function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"a",(function(){return o})),a.d(t,"c",(function(){return r}));var n=a("2e21"),l=a("f246");function s(){return Object(n["a"])("goals/".concat(l["c"].user.userId))}function o(e){return Object(n["a"])("goals/".concat(l["c"].user.userId),e)}function r(e){return console.log("inside updateDaily! newDaily equals: ".concat(e)),Object(n["a"])("goals/".concat(l["c"].user.userId),e,"PATCH")}},"66d6":function(e,t,a){"use strict";a("f6a0")},a92d:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("CurrentGoals",{attrs:{otherGoals:e.otherGoals,daily:e.daily}}),a("UpdateDailyGoal",{attrs:{newDaily:e.newDaily},on:{update:e.updateDailyGoal}}),a("AddGoal",{attrs:{newGoal:e.newGoal},on:{add:e.addGoal}})],1)},l=[],s=a("1da1"),o=(a("96cf"),a("e082")),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("form",{staticClass:"box",on:{submit:function(t){return t.preventDefault(),e.$emit("add")}}},[a("div",{staticClass:"field"},[a("p",[e._v("Add Goal")]),a("label",{staticClass:"label"},[e._v("Goal")]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newGoal.goal,expression:"newGoal.goal"}],staticClass:"input",attrs:{type:"text",placeholder:"New Goal"},domProps:{value:e.newGoal.goal},on:{input:function(t){t.target.composing||e.$set(e.newGoal,"goal",t.target.value)}}})])]),a("button",{staticClass:"button is-info"},[e._v("Submit")])])},i=[],c={props:{newGoal:Object}},u=c,d=a("2877"),p=Object(d["a"])(u,r,i,!1,null,null,null),f=p.exports,v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("form",{staticClass:"box",on:{submit:function(t){return t.preventDefault(),e.$emit("update")}}},[a("div",{staticClass:"field"},[a("p",[e._v("Update Total Daily Exercise Goal")]),a("label",{staticClass:"label"},[e._v("Total Daily Exercise Goal")]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newDaily.goal,expression:"newDaily.goal"}],staticClass:"input",attrs:{type:"number",placeholder:"45"},domProps:{value:e.newDaily.goal},on:{input:function(t){t.target.composing||e.$set(e.newDaily,"goal",t.target.value)}}})]),a("p",{staticClass:"help"},[e._v("Daily exercise goal in minutes")])]),a("button",{staticClass:"button is-info"},[e._v("Submit")])])},m=[],b={props:{newDaily:Object}},w=b,g=Object(d["a"])(w,v,m,!1,null,null,null),G=g.exports,h=a("2dc1"),y=a("2b0e"),_=y["a"].extend({data:function(){return{newGoal:{},otherGoals:[],daily:{},newDaily:{}}},mounted:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(h["b"])();case 2:a=t.sent,console.log(a),e.daily={goal:a.daily},e.otherGoals=a.otherGoals;case 6:case"end":return t.stop()}}),t)})))()},components:{CurrentGoals:o["a"],AddGoal:f,UpdateDailyGoal:G},methods:{addGoal:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(h["a"])(e.newGoal);case 2:a=t.sent,e.otherGoals.unshift(a),e.newGoal={};case 5:case"end":return t.stop()}}),t)})))()},updateDailyGoal:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(h["c"])(e.newDaily);case 2:a=t.sent,console.log(a),console.log(a.goal),e.daily=a;case 6:case"end":return t.stop()}}),t)})))()}}}),C=_,D=(a("66d6"),Object(d["a"])(C,n,l,!1,null,null,null));t["default"]=D.exports},e082:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("article",{staticClass:"panel is-info"},[a("p",{staticClass:"panel-heading"},[e._v(" Current Goals ")]),a("div",{staticClass:"panel-block"},[e._m(0),e._v(" "+e._s(e.daily.goal)+" ")]),e._l(e.otherGoals,(function(t,n){return a("p",{key:n,staticClass:"panel-block"},[e._m(1,!0),e._v(" "+e._s(t.goal)+" ")])}))],2)])},l=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{staticClass:"icon is-left"},[a("i",{staticClass:"fas fa-book",attrs:{"aria-hidden":"true"}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{staticClass:"panel-icon"},[a("i",{staticClass:"fas fa-book",attrs:{"aria-hidden":"true"}})])}],s={props:{otherGoals:Array,daily:Object}},o=s,r=a("2877"),i=Object(r["a"])(o,n,l,!1,null,null,null);t["a"]=i.exports},f6a0:function(e,t,a){}}]);
//# sourceMappingURL=goals.49c06bb3.js.map