(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["profile"],{"2a37":function(t,e,n){"use strict";n("5ccf")},"5ccf":function(t,e,n){},c66d:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-one-half"},[n("ProfileCard",{attrs:{info:t.profileInfo}})],1),n("div",{staticClass:"column is-one-half"},[n("UpdateProfileInfo",{attrs:{newInfo:t.newInfo},on:{update:t.updateProfileInfo}})],1)])])},i=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card"},[n("div",{staticClass:"card-image"},[n("figure",{staticClass:"image is-square"},[n("img",{attrs:{src:t.info.pic,alt:t.info.handle}})])]),n("div",{staticClass:"card-content"},[n("div",{staticClass:"content"},[n("article",{staticClass:"panel is-info"},[n("p",{staticClass:"panel-heading"},[t._v(" Profile Info ")]),n("p",{staticClass:"panel-block"},[t._m(0),t._v(" "+t._s(t.info.nomedeplume)+" ")]),n("p",{staticClass:"panel-block"},[t._m(1),t._v(" "+t._s(t.info.email)+" ")]),n("p",{staticClass:"panel-block"},[t._m(2),t._v(" "+t._s(t.info.handle)+" ")])])])])])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"panel-icon"},[n("i",{staticClass:"fas fa-book",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"panel-icon"},[n("i",{staticClass:"fas fa-book",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"panel-icon"},[n("i",{staticClass:"fas fa-book",attrs:{"aria-hidden":"true"}})])}],l={props:{info:Object}},c=l,r=n("2877"),f=Object(r["a"])(c,s,o,!1,null,null,null),u=f.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("form",{staticClass:"box",on:{submit:function(e){return e.preventDefault(),t.$emit("update")}}},[n("p",[t._v("Edit Profile info*")]),n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[t._v("Change your profile Picture")]),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.newInfo.pic,expression:"newInfo.pic"}],staticClass:"input",attrs:{type:"text",placeholder:"Picture URL"},domProps:{value:t.newInfo.pic},on:{input:function(e){e.target.composing||t.$set(t.newInfo,"pic",e.target.value)}}})])]),t._m(0),t._m(1)])])},d=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"control"},[n("button",{staticClass:"button is-info"},[t._v("Submit")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("br"),t._v(" *At this time only the profile picture may be modified")])}],m={props:{newInfo:Object}},v=m,h=Object(r["a"])(v,p,d,!1,null,null,null),_=h.exports,C={nomedeplume:"Sally",email:"sally@uberwald.com",handle:"ImBatty",pic:"https://bulma.io/images/placeholders/96x96.png"};function b(){return C}function I(t){return C.pic=t.pic,C}var w={data:function(){return{profileInfo:{},newInfo:{}}},mounted:function(){this.profileInfo=b(),console.log(this.profileInfo)},components:{ProfileCard:u,UpdateProfileInfo:_},methods:{updateProfileInfo:function(){I(this.newInfo),console.log(this.newInfo)}},watch:{profileInfo:function(t,e){console.log("profile data changed from "+e.pic+" to "+t.pic),this.profileInfo=b()},deep:!0,immediate:!0}},g=w,P=(n("2a37"),Object(r["a"])(g,a,i,!1,null,null,null));e["default"]=P.exports}}]);
//# sourceMappingURL=profile.2b25a690.js.map