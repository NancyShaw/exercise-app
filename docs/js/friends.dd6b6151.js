(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["friends"],{"6c40":function(e,a,n){"use strict";n.r(a);var t=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"container"},[n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-one-half"},[n("FindFriends",{on:{search:e.findFriends}})],1),n("div",{staticClass:"column is-one-half"},[n("FriendsList",{attrs:{friends:e.friends}})],1)])])},s=[],i=n("c421"),l=n("d6e2"),r=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("form",{staticClass:"box",on:{submit:function(a){return a.preventDefault(),e.$emit("search")}}},[n("div",{staticClass:"field"},[n("p",[e._v("Find Friends!")]),n("label",{staticClass:"label"},[e._v("Search by name")]),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.searchName,expression:"searchName"}],staticClass:"input",attrs:{type:"text",placeholder:"Red Fraggle"},domProps:{value:e.searchName},on:{input:function(a){a.target.composing||(e.searchName=a.target.value)}}})])]),n("button",{staticClass:"button is-info"},[e._v("Submit")])])},c=[],d={data:function(){return{searchName:""}}},o=d,u=n("2877"),m=Object(u["a"])(o,r,c,!1,null,null,null),h=m.exports,f={data:function(){return{newFriends:[],friends:[]}},mounted:function(){this.friends=Object(l["b"])()},components:{FriendsList:i["a"],FindFriends:h},methods:{findFriends:function(){Object(l["a"])()}}},p=f,g=(n("88a9"),Object(u["a"])(p,t,s,!1,null,null,null));a["default"]=g.exports},"88a9":function(e,a,n){"use strict";n("b2d0")},b2d0:function(e,a,n){},c421:function(e,a,n){"use strict";var t=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("article",{staticClass:"panel is-info"},[n("p",{staticClass:"panel-heading"},[e._v(" Friends ")]),e._l(e.friends,(function(a,t){return n("p",{key:t,staticClass:"panel-block"},[n("span",{staticClass:"panel-icon"},[n("img",{attrs:{src:a.friend.src,alt:a.friend.alt}})]),e._v(" "+e._s(a.friend.handle)+" ")])}))],2)},s=[],i={props:{friends:Array}},l=i,r=n("2877"),c=Object(r["a"])(l,t,s,!1,null,null,null);a["a"]=c.exports},d6e2:function(e,a,n){"use strict";n.d(a,"b",(function(){return i})),n.d(a,"a",(function(){return l}));var t=[{friend:{name:"Ally Alpha",handle:"Alpha",src:"https://bulma.io/images/placeholders/128x128.png",alt:"Placeholder image"}},{friend:{name:"Betty Beta",handle:"Beta",src:"https://bulma.io/images/placeholders/128x128.png",alt:"Placeholder image"}},{friend:{name:"Gary Gamma",handle:"Gamma",src:"https://bulma.io/images/placeholders/128x128.png",alt:"Placeholder image"}},{friend:{name:"Edward Echo",handle:"Echo",src:"https://bulma.io/images/placeholders/128x128.png",alt:"Placeholder image"}}],s=[{friend:{name:"Sally Sigma-Tau",handle:"SigmaTau",src:"https://bulma.io/images/placeholders/128x128.png",alt:"Placeholder image"}},{friend:{name:"Sandy Sigma-Phi",handle:"SigmaPhi",src:"https://bulma.io/images/placeholders/128x128.png",alt:"Placeholder image"}}];function i(){return t}function l(){return s}}}]);
//# sourceMappingURL=friends.dd6b6151.js.map